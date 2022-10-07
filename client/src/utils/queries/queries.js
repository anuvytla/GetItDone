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

export const FETCH_USERS_QUERY = gql`
	query Users {
		users {
			_id
			username
			email
		}
	}
`;
