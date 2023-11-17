import React, { FC, Suspense, lazy } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import MyForm from "./MyForm";
import Dashboard from "./Dashboard";
import Auth from "./Auth";

const About = lazy(() => import("./About"));

const App: FC = () => {
  return (
    <div>
      <Link to="/">Dashboard</Link>
      <br />
      <Link to="/about">About</Link>
      <br />
      <Link to="/myform">MyForm</Link>
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
    </div>
  );
};
export default App;
