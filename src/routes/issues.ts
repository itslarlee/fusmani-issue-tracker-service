import express from 'express';
import { createIssue, listIssues, getIssue, updateIssueStatus, deleteIssue } from '../controllers/issueController';

const issuesRouter = express.Router();

issuesRouter.post('/', createIssue);
issuesRouter.get('/', listIssues);
issuesRouter.get('/:id', getIssue);
issuesRouter.patch('/:id', updateIssueStatus);
issuesRouter.delete('/:id', deleteIssue);

export default issuesRouter;
