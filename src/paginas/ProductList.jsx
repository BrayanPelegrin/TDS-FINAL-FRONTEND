import styled from "styled-components";
import Navbar from "../Componentes/Navbar";
import Products from "../Componentes/Products";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Title>Producto</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Productos flitrados:</FilterText>
        </Filter>
        <Filter>
          <FilterText>Ordenar Productos:</FilterText>
          <Select>
            <Option selected>Reciente</Option>
            <Option>Precio (asc)</Option>
            <Option>Precio (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
    </Container>
  );
};

export default ProductList;
