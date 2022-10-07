import { gql } from "@apollo/client";

export const FETCH_TASKS_QUERY = gql`
    query Tasks {
        tasks {
        _id
        title
        description
        }
    }
`;