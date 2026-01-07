import { Link,useRouteError, useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    const navigate = useNavigate()

    return (
        <div>
            <h2>Something went wrong</h2>
            <p>{error?.statusText || error?.message}</p>
            <Link to='/'>Home</Link>
        </div>
    );
};

export default ErrorPage;
