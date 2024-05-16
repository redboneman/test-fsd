export type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
  meta: {
    createdAt: string;
    views: number;
  }
}
