import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from './../../App';

function PrivateRoute({ children, ...rest }) {
  const [userInfo, setUserInfo] = useContext(UserContext);

  return (
    <div>
      <Route
        {...rest}
        render={({ location }) =>
          userInfo.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    </div>
  );
}

export default PrivateRoute;