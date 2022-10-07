import { gql } from "@apollo/client";

export const ADD_TASK_BOARD = gql`
	mutation Mutation($title: String!, $description: String) {
		addTaskBoard(title: $title, description: $description) {
			_id
			title
			description
			tasks
		}
	}
`;
