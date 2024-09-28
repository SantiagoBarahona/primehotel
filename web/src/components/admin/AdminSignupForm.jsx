import { useState } from "react"
import PhoneInput from "react-phone-number-input"
import "react-phone-number-input/style.css"
import "./AdminSignupForm.css"

export function AdminSignupForm() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [prefix, setPrefix] = useState('+57')
    const [cellphone, setCellphone] = useState('')
    const [birthdate, setBirthdate] = useState('')

    const handleEmailChange = () => {
        setEmail(event.target.value)
    }
    const handlePasswordChange = () => {
        setPassword(event.target.value)
    }

    const handleNameChange = () => {
        setName(event.target.value)
    }

    const handleLastnameChange = () => {
        setLastname(event.target.value)
    }

    const handleCellphoneChange = () => {
        const raw_number = event.target.value.split(' ')
        const prefix = raw_number.shift().split('+')[1]
        const number = raw_number.join('')
        setPrefix(prefix)
        setCellphone(number)
    }

    const handleDateChange = () => {
        const date = event.target.value
        setBirthdate(date)
    }

    const handleSubmit = async () => {
        event.preventDefault()
        await fetch('http://localhost:3000/register/admin', {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ email, password, name, lastname, prefix, cellphone, birthdate })
        })
            .then(res => res.json())
            .then(data => {
                // TODO MEJORAR ESTO
                // IF CODE = 200 || CODE = 400
                alert(JSON.stringify(data))
            })
    }

    return (

        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img className="mx-auto w-auto" src="/logo-icon.png" alt="Primehotel logo" style={{ height: '100px' }} />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">Sign up into our page</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="/login" method="POST">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 ">Email address</label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                onChange={handleEmailChange}
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium leading-6 ">Password</label>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                onChange={handlePasswordChange}
                                type="password"
                                autoComplete="current-password"
                                required
                                className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium leading-6 ">Name</label>
                            <div className="mt-2">
                                <input
                                    id="name"
                                    name="name"
                                    onChange={handleNameChange}
                                    type="text"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div className="flex-grow ml-1">
                            <label htmlFor="lastname" className="block text-sm font-medium leading-6 ">Lastname</label>
                            <div className="mt-2">
                                <input
                                    id="lastname"
                                    name="lastname"
                                    onChange={handleLastnameChange}
                                    type="text"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="flex flex-col justify-center">
                            <label htmlFor="cellphone" className="block text-sm font-medium leading-6 ">Cellphone</label>
                            <div className="mt-2">
                                <PhoneInput
                                    id="cellphone"
                                    name="cellphone"
                                    className="text-black"
                                    onChange={handleCellphoneChange}
                                    placeholder="Enter cellphone number"
                                    international={true}
                                    defaultCountry="CO"
                                    smartCaret={true}
                                    required />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="date" className="block text-sm font-medium leading-6 ">Select your birthdate</label>
                            <div className="mt-2">
                                <input
                                    id="date"
                                    type="date"
                                    name="date"
                                    onChange={handleDateChange}
                                    className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            onClick={handleSubmit}
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign up</button>
                    </div>


                </form>

            </div>
        </div>
    )
}