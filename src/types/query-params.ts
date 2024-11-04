export type Status = 'Open' | 'In Progress' | 'Resolved';

export type Priority = 'Low' | 'Medium' | 'High';

export interface IssueParams {
  id: string;
}

export interface CreateIssueBody {
  title: string;
  description: string;
  status: Status;
  priority: Priority;
}

export interface UpdateIssueBody {
  title: string;
  description: string;
  status: Status;
  priority: Priority;
}
