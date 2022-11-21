import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

export const Perfil = () => {
    const {user, isAuthenticated, isLoading} = useAuth0();

    if (isLoading){
        return <div>Cargando...</div>
    }

    return (
        isAuthenticated && (
            <div>{user.name}</div>
        )
    )
}
