import { gql } from "@apollo/client";

export const UPDATE_TASK_STATUS = gql`
	mutation updateTaskStatus($_id: ID!, $status: String!) {
		updateTaskStatus(_id: $_id, status: $status) {
			_id
			title
			status
		}
	}
`;

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

export const ADD_TASK = gql`
	mutation AddTask(
		$title: String!
		$boardId: String!
		$description: String
		$userId: String
	) {
		addTask(
			title: $title
			boardId: $boardId
			description: $description
			userId: $userId
		) {
			title
			description
			userId
			boardId
		}
	}
`;
