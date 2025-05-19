export const getCodeBlocksJson = async (id: string) => {
  if (!id) return new Error(`id is not found.  id: ${id}`);
  try {
    const response = await fetch(`/code-blocks/${id}.json`);
    const data = response.json();
    return data;
  } catch (error) {
    console.log("🚨 getCodeBlocksJson error: ", error);
    return null;
  }
};

export const getMdxFile = async (id: string) => {
  if (!id) return new Error(`id is not found.  id: ${id}`);
  console.log(id);
  try {
    const response = await fetch(`/mdx/${id}.mdx`);
    const data = response.json();

    return data;
  } catch (error) {
    console.log("🚨 getMdxFile error: ", error);
    return null;
  }
};
