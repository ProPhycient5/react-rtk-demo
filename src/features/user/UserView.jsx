import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./userSlice";

export const UserView = () => {
  const users = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  // console.log("users", users);
  return (
    <div>
      <h2>List of users</h2>
      {users.loading && <div>Loading...</div>}
      {!users.loading && users.error && <div>Error: {users.error}</div>}
      {!users.loading &&
        users.user.length > 0 &&
        users.user.map((user) => <div key={user.id}>{user.name}</div>)}
    </div>
  );
};
