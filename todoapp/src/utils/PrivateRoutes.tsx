import { Navigate, Outlet } from "react-router-dom";

type PrivateRouterProps = {
    user: any
}

const PrivateRoutes = ({ user }: PrivateRouterProps) => {
    return <>
        {user.isAuthenticated ? <Outlet /> : <Navigate to="/signin" />}
    </>;
}

export default PrivateRoutes;
