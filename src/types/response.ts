export interface StandardResponse<T> {
    data: T | null;
    message: string;
    status: number;
  }
  