import { FormEventHandler, PropsWithChildren, useState } from "react";
import { Link } from "react-router-dom";
import { routes } from "../routes";


interface Iprops {
    apiUrl: string
    title: string
}


const RegisterForm: React.FC<PropsWithChildren<Iprops>> = ({ apiUrl, title, children }) => {

    const [formValues, setFormValues] = useState({
        name: "",
        address: "",
        email: "",
        password: "",
    })


    const [formErrors, setFormErrors] = useState({
        name: "",
        address: "",
        email: "",
        password: "",
    })


    const handleChange = (key: keyof typeof formValues, value: string) => setFormValues(prev => ({ ...prev, [key]: value }))


    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();


    }

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center bg-slate-200">
            <form onSubmit={handleSubmit} className="flex flex-col">


                <h1 className="text-center text-2xl mb-7">{title}</h1>

                <label htmlFor="name" className="">
                    Enter Name
                </label>
                <input type="text" id="name" required min={20} max={60}
                    placeholder="Name"
                    className="py-2 px-5 outline-0 border-[1px] border-black rounded-lg"
                    value={formValues.name}
                    onChange={e => handleChange("name", e.target.value)} />


                <label htmlFor="address" className="mt-7">
                    Enter Address
                </label>
                <textarea id="address" required maxLength={400}
                    placeholder="Address"
                    className="py-2 px-5 outline-0 border-[1px] border-black rounded-lg"
                    value={formValues.address}
                    onChange={e => handleChange("address", e.target.value)} />


                <label htmlFor="email" className="mt-7">
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
                    className="border-[1px] border-black rounded-2xl px-6 py-3 cursor-pointer mt-8 mb-3">Submit</button>
            </form>

            {children}
        </div>
    );
}

export default RegisterForm;