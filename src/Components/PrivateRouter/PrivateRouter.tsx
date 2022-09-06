import { Navigate } from "react-router-dom";
import { RouteProps } from "react-router-dom";

type PrivateRouteProps = RouteProps & {
  authorizationStatus: boolean;
  children: JSX.Element;
};

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { authorizationStatus, children } = props;

  return authorizationStatus ? (
    children
  ) : (
    <Navigate to={'/'} />
  );
}

export { PrivateRoute }
