import { FC, Fragment, PropsWithChildren, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Auth: FC<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate();
  const [token, setToken] = useState();

  useEffect(() => {
    if (token === undefined) navigate("/");
  }, []);

  return <Fragment>{children}</Fragment>;
};
export default Auth;
