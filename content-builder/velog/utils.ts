export const chunkText = (text: string, maxLength = 2000) => {
  const chunks: string[] = [];

  for (let i = 0; i < text.length; i += maxLength) {
    chunks.push(text.slice(i, i + maxLength));
  }

  return chunks;
};
