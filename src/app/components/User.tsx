"use client";

import { useQuery } from "@apollo/client";
import { gql } from "../../../apollo/__generated__/client";

const ALL_USERS = gql(`query ALL_USERS {
  users {
    name
  }
}`);

export const User = () => {
  const { data, loading, error } = useQuery(ALL_USERS);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {error && <div>{error.message}</div>}
      <ul>
        {data && data.users.map((user, idx) => <li key={idx}>{user.name}</li>)}
      </ul>
    </div>
  );
};
