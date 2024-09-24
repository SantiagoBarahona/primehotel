import PropTypes from 'prop-types'
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import { useRefresh } from "../../hooks/useRefresh";
import { Backdrop } from '@mui/material';

export default function ProtectedAdminRoute({ children }) {

    const [auth, setAuth] = useAuth()
    const [isLoading, setIsLoading] = useState(true)
    const refresh = useRefresh()
    const navigate = useNavigate()


    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        const verifyRefreshToken = async () => {
            try {
                const newAuth = await refresh()
                if (!newAuth.accessToken) {
                    return navigate("/admin/signin")
                }
                setAuth(newAuth)
            } catch (err) {
                console.log(err)
                return navigate("/admin/signin")
            } finally {
                setIsLoading(false)
            }
        }
        !auth?.accessToken ? verifyRefreshToken() : setIsLoading(false)
    })

    return (
        isLoading ?
            <Backdrop
                sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
                open={isLoading}
            />
            : children
    )
}

ProtectedAdminRoute.propTypes = {
    children: PropTypes.node.isRequired, // Asegura que 'children' sea requerido y sea un nodo
};