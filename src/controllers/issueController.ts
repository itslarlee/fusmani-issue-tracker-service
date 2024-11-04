// controllers/issueController.ts
import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { IssueParams, CreateIssueBody, UpdateIssueBody } from '../types/query-params';
import { Issue } from '../models/issue';
import { sendResponse } from '../utils/responseHelper';

// Dummy data for now
let issues: Issue[] = [];

export const createIssue = (req: Request<{}, {}, CreateIssueBody>, res: Response) => {
  const newIssue: Issue = {
    id: uuidv4(),
    title: req.body.title,
    description: req.body.description,
    status: req.body.status,
    priority: req.body.priority,
    createdDate: new Date(),
    updatedDate: new Date(),
  };
  issues.push(newIssue);
  sendResponse(res, 201, 'Issue created successfully', newIssue);
};

export const listIssues = (req: Request, res: Response) => {
  sendResponse(res, 200, 'Issues retrieved successfully', issues);
};

export const getIssue = (req: Request<IssueParams>, res: Response) => {
  const { id } = req.params;
  const issue = issues.find((issue) => issue.id === id);
  if (!issue) {
    sendResponse(res, 404, 'Issue not found', null);
  } else {
    sendResponse(res, 200, 'Issue retrieved successfully', issue);
  }
};

export const updateIssueStatus = (req: Request<IssueParams, {}, UpdateIssueBody>, res: Response) => {
  const { id } = req.params;
  const issue = issues.find((issue) => issue.id === id);
  if (!issue) {
    sendResponse<Issue>(res, 404, 'Issue not found', null);
  } else {
    issue.status = req.body.status;
    issue.updatedDate = new Date();
    sendResponse(res, 200, 'Issue status updated successfully', issue);
  }
};

// Delete an issue
export const deleteIssue = (req: Request<IssueParams>, res: Response) => {
  const { id } = req.params;
  issues = issues.filter((issue) => issue.id !== id);
  sendResponse(res, 204, 'Issue deleted successfully', null);
};
