import { gql } from '@apollo/client';

export const QUERY_TASKS_IN_BOARD = gql`
  query tasksInBoard($boardId: ID!) {
    tasks(boardId: $boardId) {
      _id
      title
      description
      status
    }
  }
`;