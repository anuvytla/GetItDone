import { gql } from "@apollo/client";

export const QUERY_TASKS_IN_BOARD = gql`
	query TasksById($boardId: String!) {
		tasksById(boardId: $boardId) {
			title
			description
			status
			_id
		}
	}
`;


export const QUERY_TASKBOARDS_IN_PROJECT = gql`
  query TaskBoardsByProject($projectId: ID!) {
    taskBoardsByProject(projectId: $projectId) {
      _id
      title
      description
    }
  }
`;
