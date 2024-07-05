import { Link } from "react-router-dom";
import { routes } from "../../routes";
import RegisterForm from "../../components/RegisterForm";
import { apiURLs } from "../../services/apiURLs";

const RegisterStoreOwnerPage = () => {
    return (
        <RegisterForm apiUrl={apiURLs.registerStoreOwner} title="Register as Store Owner">
            <Link to={routes.login}
                className="mt-3 text-sky-600
                hover:underline">Have an account? Login</Link>

            <Link to={routes.registerCustomer}
                className="mt-3 text-sky-600
                hover:underline">Want to rate a store? Register</Link>
        </RegisterForm>
    );
}

export default RegisterStoreOwnerPage;