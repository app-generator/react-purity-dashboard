import React from "react";
import { useAuth } from './auth-context/auth.context';
import { useHistory, Outlet } from 'react-router-dom';
import SweetAlert from "react-bootstrap-sweetalert";
import { Route } from "react-router-dom";

export const ProtectedRoute = ({ ...rest }) => {
  const history = useHistory();
  let { user } = useAuth();
    return (<>
      {(!user || !user.token || user.token === "") ? (
        <SweetAlert
          title="You must be signed in!"
          onCancel={() => history.psuh("/auth/signin")}
          onConfirm={() => history.push("/auth/signin")}
          confirmBtnCssClass={"px-5"}
        />
      ) : (
        <Route {...rest} />
      )}
  </>);
};
