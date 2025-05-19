const { Client } = require("@notionhq/client");
const { NotionToMarkdown } = require("notion-to-md");
const { NOTION_TOKKEN, NOTION_DATABASE_ID } = require("../const");
const path = require("path");
const fs = require("fs");

const notion = new Client({
  auth: NOTION_TOKKEN,
});
const n2m = new NotionToMarkdown({ notionClient: notion });

const CONTENT_PATH = path.join(process.cwd(), "/public/mdx");

async function main() {
  try {
    const response = await notion.databases.query({
      database_id: NOTION_DATABASE_ID,
      filter: {
        property: "upload",
        select: {
          equals: "Published",
        },
      },
    });

    for (const page of response.results) {
      await processPage(page);
    }

    console.log("Content sync completed!");
  } catch (error) {
    console.log("Content sync error!: ", error);
    process.exit(1);
  }
}

async function processPage(page) {
  const mdblocks = await n2m.pageToMarkdown(page.id);
  const { parent: mdString } = await n2m.toMarkdownString(mdblocks);

  const mdxResult = await serialize(mdString || "", {
    mdxOptions: {
      remarkPlugins: [remarkGfm, remarkBreaks],
      rehypePlugins: [
        rehypeSlug,
        rehypeAutolinkHeadings,
        [rehypePrettyCode, { theme: "github-light" }],
      ],
    },
  });

  const filePath = path.join(CONTENT_PATH, `${page.id}.mdx`);

  const exist = fs.existsSync(filePath);
  if (exist) return;

  fs.writeFileSync(filePath, mdxResult);
  console.log("Created " + filePath);
}

main().catch((error) => console.log(error));
