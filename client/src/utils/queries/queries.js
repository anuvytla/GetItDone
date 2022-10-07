import { gql } from "@apollo/client";

export const QUERY_TASKS_IN_BOARD = gql`
	query TasksById($boardId: ID!) {
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

export const FETCH_USERS_QUERY = gql`
	query Users {
		users {
			_id
			username
			email
		}
	}
`;
