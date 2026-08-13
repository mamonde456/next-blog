export const wrapTag = (
  tag: string,
  content: string,
  attrs?: Record<string, string>
) => {
  const attribute = attrs
    ? " " +
      Object.entries(attrs)
        .map((key, value) => `${key}=${value}`)
        .join(" ")
    : "";

  return `<div data-block-type="${tag}"${attribute}>\n${content}\n</div>`;
};
