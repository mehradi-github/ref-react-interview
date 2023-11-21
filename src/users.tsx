import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser as addUserAction } from "./userSlice";
import { ReduxState } from "./store";

const Users: FC = () => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const users = useSelector((state: ReduxState) => state.users.data);
  const addUser = () => {
    dispatch(addUserAction(username));
  };
  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <button onClick={addUser}>Add</button>
      <ul>
        {users.map((user, i) => (
          <li key={i}>{user}</li>
        ))}
      </ul>
    </div>
  );
};
export default Users;
