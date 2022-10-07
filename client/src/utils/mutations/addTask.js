import { gql } from "@apollo/client";

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
