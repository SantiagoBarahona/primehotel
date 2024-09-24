import { useState } from "react"
import axios from "../../api/axios"
import { useNavigate } from "react-router-dom"
import useAuth from "../../hooks/useAuth"

export function AdminSignin() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [, setAuth] = useAuth('')
    const navigate = useNavigate()

    const handleEmailChange = ({ target: { value } }) => {
        setEmail(value)
    }

    const handlePasswordChange = ({ target: { value } }) => {
        setPassword(value)
    }

    const handleSubmit = async () => {
        event.preventDefault()
        try {
            const response = await axios.post("http://localhost:3000/auth/admin", {
                email,
                password
            }, {
                withCredentials: true
            })
            setAuth(response.data)
            navigate('/admin')
        } catch (err) {
            console.log(err.message)
        }
    }
    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img className="mx-auto w-auto" src="/logo-icon.png" alt="Primehotel logo" style={{ height: '100px' }} />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">Sign in to your account</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form action="http://localhost:3000/auth/admin" method="POST" className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    onChange={handleEmailChange}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    onChange={handlePasswordChange}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                onClick={handleSubmit}
                            >
                                Sign in
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Not a member?{' '}
                        <a href="signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Sign up now!
                        </a>
                    </p>
                </div>
            </div>
        </>
    )
}
