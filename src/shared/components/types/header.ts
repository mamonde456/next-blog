export type CategoryId = "all" | "tech" | "retrospect" | "daily";
export interface Category {
  id: string;
  label: string;
  emoji: string;
}
