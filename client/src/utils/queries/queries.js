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
