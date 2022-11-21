import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const SalirSesion = () => {
  const { logout } = useAuth0();

  return (
    <div onClick={() => logout({ returnTo: window.location.origin })}>
      Salir
    </div>
  );
};