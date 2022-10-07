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