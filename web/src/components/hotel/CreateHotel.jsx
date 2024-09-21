import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAxiosPrivate } from "../../hooks/useAxiosPrivate"

export function CreateHotel() {

    const [hotelName, setHotelName] = useState('')
    const [error, setError] = useState(false)
    const navigate = useNavigate()
    const axiosPrivate = useAxiosPrivate()

    const handleChange = () => {
        setHotelName(event.target.value)
    }

    const hanldeSubmit = async () => {
        event.preventDefault()
        const response = await axiosPrivate.post(
            'http://localhost:3000/hotel',
            { name: hotelName }
        )
        console.log(response)
        if (response.status == 200)
            navigate("/admin/create-hotel-success")
        if (response.status == 400)
            setError(true)

    }

    const getInputClassname = () => {
        return error ?
            "block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-red-300 placeholder:text-gray-400 focus:border-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
            :
            "block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    }

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Enter the following data</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                            Hotel name
                        </label>
                        <div className="mt-2">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                onChange={handleChange}
                                className={getInputClassname()}
                            />
                        </div>
                        {error && <p className="text-red-500 text-sm">This name has already been chosen!</p>}
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            onClick={hanldeSubmit}
                        >
                            Create
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export function HotelCreatedSuccessfully() {
    return (
        <div>
            <h1>Hotel created successfully!</h1>
        </div>
    )
}