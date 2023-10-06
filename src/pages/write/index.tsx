import { FormEvent, useState } from "react";

export default function Write() {
  const [data, setData] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    savePost(title, data);
  };
  async function savePost(title: string, data: string) {
    const response = await fetch("/api/test", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content: data }),
    });

    if (!response.ok) {
      throw new Error("Server error");
    }

    return await response.json();
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>title</label>
      <input
        type="text"
        name="title"
        required
        onChange={(e) => setTitle(e.currentTarget.value)}
      ></input>
      <label>content</label>
      <textarea
        name="text"
        onChange={(e) => setData(e.currentTarget.value)}
      ></textarea>
      <input type="button" value="임시저장"></input>
      <input type="submit" value="업로드"></input>
    </form>
  );
}
