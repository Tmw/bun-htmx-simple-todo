export interface Todo {
  id: number;
  title: string;
  createdAt: Date;
  completedAt: Date | undefined;
}
