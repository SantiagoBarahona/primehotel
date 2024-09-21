import PropTypes from 'prop-types'
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import { useRefresh } from "../../hooks/useRefresh";

export default function ProtectedAdminRoute({ children }) {

    const [auth, setAuth] = useAuth()
    const [isLoading, setIsLoading] = useState(true)
    const refresh = useRefresh()
    const navigate = useNavigate()


    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        const verifyRefreshToken = async () => {
            try {
                const refreshToken = await refresh()
                setAuth(prev => {
                    return ({ ...prev, refreshToken: refreshToken })
                })
                if (!auth.accessToken) {
                    return navigate("/admin/signin")
                }
            } catch (err) {
                console.log(err)
            } finally {
                setIsLoading(false)
            }
        }
        !auth?.accessToken ? verifyRefreshToken() : setIsLoading(false)
    })

    return (
        isLoading ?
            <h1>Loading</h1>
            : children
    )
}

ProtectedAdminRoute.propTypes = {
    children: PropTypes.node.isRequired, // Asegura que 'children' sea requerido y sea un nodo
};