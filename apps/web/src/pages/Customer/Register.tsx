import { Link } from "react-router-dom";
import { routes } from "../../routes";
import RegisterForm from "../../components/RegisterForm";
import { apiURLs } from "../../services/apiURLs";

const RegisterCustomerPage = () => {
    return (
        <RegisterForm apiUrl={apiURLs.registerCustomer} title="Register as Customer">
            <Link to={routes.login}
                className="mt-3 text-sky-600
                hover:underline">Have an account? Login</Link>

            <Link to={routes.registerStoreOwner}
                className="mt-3 text-sky-600
                hover:underline">Want to register a store? Register</Link>
        </RegisterForm>
    );
}

export default RegisterCustomerPage;