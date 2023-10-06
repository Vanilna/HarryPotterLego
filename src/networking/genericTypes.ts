export type PaginatedResponse<T> = {
  count: number;
  next: string;
  previous: string;
  results: T;
};
