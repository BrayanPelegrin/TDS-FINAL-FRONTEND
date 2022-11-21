import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Label } from "@material-ui/icons";

export const IniciarSesion = () => {
  const { loginWithRedirect } = useAuth0();

  return <div onClick={() => loginWithRedirect()}>Iniciar Sesion o Registrarse</div>;
};
