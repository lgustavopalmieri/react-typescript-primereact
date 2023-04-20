import { useLocation, Navigate, Outlet } from "react-router-dom";

interface IRequireAuthProps {}

const RequireAuth: React.FunctionComponent<IRequireAuthProps> = (props) => {
  const token = null; // useAppSelector(selectCurrentToken)

  const location = useLocation();

  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
