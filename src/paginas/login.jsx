import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #81C6E8;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  margin-right: 45px;
`;

const buttonarreglado = styled.button`
  display: flex;
`

const Link1 = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Iniciar Sesion</Title>
        <Form>
          <Input placeholder="Correo" />
          <Input placeholder="Contraseña" />
          <buttonarreglado>
            <Button>Entrar</Button>
            <Link to="/"><Button>Atras</Button></Link>
          </buttonarreglado>
          <Link1>¿No recuerdas la contraseña?</Link1>
          <Link1>Crear una nueva cuenta</Link1>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
