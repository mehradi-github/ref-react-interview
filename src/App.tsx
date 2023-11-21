import React, { FC, Suspense, lazy, useReducer } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import MyForm from "./MyForm";
import Dashboard from "./Dashboard";
import Auth from "./Auth";
import Signup from "./Signup";
import Users from "./users";

const About = lazy(() => import("./About"));

const App: FC = () => {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  return (
    <div>
      <Link to="/">Dashboard</Link>
      <br />
      <Link to="/about">About</Link>
      <br />
      <Link to="/myform">MyForm</Link>
      <br />
      <Link to="/singup">SignUp</Link>
      <br />
      <Link to="/users">Users</Link>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route
            path="/myform"
            element={
              <Auth>
                <MyForm />
              </Auth>
            }
          />
          <Route path="/singup" element={<Signup />} />
          <Route path="/users" element={<Users />} />
          <Route
            path="/about"
            element={
              <Suspense fallback={<div>Loading ...</div>}>
                <About />
              </Suspense>
            }
          />
        </Route>
        <Route path="*" element={<div>404</div>} />
      </Routes>
      <button onClick={() => forceUpdate()}>Force update</button>
    </div>
  );
};
export default App;
