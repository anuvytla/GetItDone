import { gql } from '@apollo/client';

export const UPDATE_TASK_STATUS = gql`
  mutation updateTaskStatus($_id: ID!, $status: String!) {
    updateTaskStatus(_id: $_id, status: $status) {
      _id
      title
      status
    }
  }
`;

export const UPDATE_TASK = gql`
  mutation updateTask($_id: ID!, $boardId: ID!) {
    updateTask(_id: $_id, boardId: $boardId) {
      _id
      boardId
    }
  }
`;