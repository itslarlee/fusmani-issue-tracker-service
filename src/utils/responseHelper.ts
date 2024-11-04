import { Response } from 'express';
import { StandardResponse } from '../types/response';

export const sendResponse = <T>(res: Response, status: number, message: string, data: T | null = null) => {
  const response: StandardResponse<T> = {
    data,
    message,
    status,
  };
  return res.status(status).json(response);
};
