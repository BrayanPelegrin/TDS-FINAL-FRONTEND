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
  width: 40%;
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
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;


const Button = styled.button`
  margin-top: 10px;
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-right: 10px;
`;
const buttonarreglado = styled.button`
  display: flex;
`

const Registrar = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Crear una cuenta</Title>
        <Form>
          <Input placeholder="Nombre" />
          <Input placeholder="Apellido" />
          <Input placeholder="Nombre de usuario" />
          <Input placeholder="Correro" />
          <Input placeholder="Contraseña" type="password"/>
          <Input placeholder="Confirmar contraseña" type="password"/>
          <buttonarreglado>
            <Button>Crear</Button>
            <Link to="/"><Button>Atras</Button></Link>
          </buttonarreglado>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Registrar;
