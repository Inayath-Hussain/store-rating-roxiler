import { FormEventHandler, useState } from "react";
import { loginService } from "../services/login";
import { Link } from "react-router-dom";
import { routes } from "../routes";

// interface Iprops {
//     service: () => 
// }

const LoginPage = () => {

    const [formValues, setFormValues] = useState({
        email: "",
        password: ""
    });

    const [formErrors, setFormErrors] = useState({
        email: "",
        password: ""
    });



    const handleChange = (key: keyof typeof formValues, value: string) => setFormValues(prev => ({ ...prev, [key]: value }))


    const handleSubmit: FormEventHandler = async (e) => {
        e.preventDefault();

        // loginService
    }

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center bg-slate-200">
            <form onSubmit={handleSubmit} className="flex flex-col">

                <h1 className="text-center text-2xl mb-7">Login</h1>

                <label htmlFor="email" className="">
                    Enter Email
                </label>
                <input type="email" id="email" required
                    placeholder="Email"
                    className="py-2 px-5 outline-0 border-[1px] border-black rounded-lg"
                    value={formValues.email}
                    onChange={e => handleChange("email", e.target.value)} />



                <label htmlFor="password" className="mt-7">
                    Enter Password
                </label>
                <input type="password" id="password" required min={8} max={16}
                    placeholder="Password"
                    className="py-2 px-5 outline-0 border-[1px] border-black rounded-lg"
                    value={formValues.password}
                    onChange={e => handleChange("password", e.target.value)} />


                <button type="submit"
                    className="border-[1px] border-black rounded-2xl px-6 py-3 cursor-pointer mt-8 mb-3">
                    Submit
                </button>
            </form>


            <Link to={routes.registerCustomer}
                className="mt-3 text-sky-600
                hover:underline">Don't have an account? Register</Link>
            <Link to={routes.registerStoreOwner}
                className="mt-3 text-sky-600
                hover:underline">Want to register a store? Create an account</Link>
        </div>
    );
}

export default LoginPage;