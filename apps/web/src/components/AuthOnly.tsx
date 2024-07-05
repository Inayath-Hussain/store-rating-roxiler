import { authTokenContext } from "../context/authTokens";
import { routes } from "../routes";
import { PropsWithChildren, useContext } from "react";
import { Navigate } from "react-router-dom";

const AuthOnlyRoute: React.FC<PropsWithChildren> = ({ children }) => {

    const { accessToken, refreshToken } = useContext(authTokenContext);

    if (!accessToken && !refreshToken) return (
        <Navigate to={routes.login} />
    )

    return (
        children
    );
}

export default AuthOnlyRoute;