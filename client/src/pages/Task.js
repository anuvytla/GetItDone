import React from 'react';
import { useQuery } from '@apollo/client';

import { FETCH_TASKS_QUERY } from "../utils/queries/fetchAllTasks";



const Task = () => {
  // TODO: Add code to query for thought data using `useQuery()` and return the `loading` and `data` properties to use.

  const thoughts = data?.thoughts || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ThoughtList
              thoughts={thoughts}
              title="Some Feed for Thought(s)..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Task;