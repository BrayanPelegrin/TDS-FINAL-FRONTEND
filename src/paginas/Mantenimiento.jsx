import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableContainer, TableHead, TableCell, TableBody, TableRow, Modal, Button, TextField } from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';

const baseURL = 'http://localhost:5114/api/Productos';

const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  iconos: {
    cursor: 'pointer'
  },
  inputMaterial: {
    width: '100%'
  }
}));


const Mantenimiento = () => {

  const styles = useStyles();



  const [data, setData] = useState([]);
  const [ModalInsertar, setModalInsertar] = useState(false);
  const [consolaSeleccionada, setConsolaSeleccionada] = useState({
    nombre: String,
    descripcion: String,
    categoriaId: String,
    precio: Number,
    stock: Number,

  })

  const handleChange = (name, value) => {

    setConsolaSeleccionada(prevState => ({
      ...prevState,
      [name]: value
    }))

    console.log(consolaSeleccionada)

  }

  const peticionPost = async () => {
    await axios.post(baseURL, consolaSeleccionada)
      .then(response => {
        setData(data.concat(response.data))
        abrirCerrarModalInsertar()
      })
  }

  const arr = new Array();

  const peticionGet = async () => (
    await axios.get(baseURL)
      .then(response => {

        const { result } = response.data;

        let obj = {
          nombre: '',
          descripcion: '',
          categoriaId: 0,
          precio: 0,
          stock: 0,
          categoria: ''
        }


        for (let i = 0; i < result.length; i++) {

          const { descripcion } = result[i].categoria;

          obj = {
            nombre: result[i].nombre,
            descripcion: result[i].descripcion,
            precio: result[i].precio,
            stock: result[i].stock,
            categoria: descripcion
          }

          arr[i] = obj;

        }
        setData(arr);
      })

  )

  const abrirCerrarModalInsertar = () => {
    setModalInsertar(!ModalInsertar);
  }


  useEffect(async () => {
    await peticionGet();
  }, [])

  const bodyInsertar = (
    <div className={styles.modal}>
      <h3>Agregar Nueva Consola</h3>
      <TextField name="nombre" className={styles.inputMaterial} label="Nombre" onChange={e => handleChange(e.target.name, e.target.value)} />
      <br />
      <TextField name="descripcion" className={styles.inputMaterial} label="Descripcion" onChange={e => handleChange(e.target.name, e.target.value)} />
      <br />

      <TextField type="number" name="categoriaiD" className={styles.inputMaterial} label="Categoria" onChange={e => handleChange(e.target.name, parseInt(e.target.value))} />
      <br />

      <TextField type="number" name="precio" className={styles.inputMaterial} label="Precio" onChange={e => handleChange(e.target.name, parseInt(e.target.value))} />
      <br />
      <TextField type="number" name="stock" className={styles.inputMaterial} label="Disponible" onChange={e => handleChange(e.target.name, parseInt(e.target.value))} />

      <div align="right">
        <Button color="primary" onClick={() => peticionPost()}>Insertar</Button>
        <Button onClick={() => abrirCerrarModalInsertar()}>Cancelar</Button>
      </div>
    </div>
  )

  return (
    <div>
      <br />
      <Button onClick={abrirCerrarModalInsertar}>Insertar</Button>
      <br />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Descripcion</TableCell>
              <TableCell>Precio</TableCell>
              <TableCell>Disponible</TableCell>
              <TableCell>Categoria</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data.map(consola => (
              <TableRow key={consola.id}>
                <TableCell>{consola.nombre}</TableCell>
                <TableCell>{consola.descripcion}</TableCell>
                <TableCell>{consola.precio}</TableCell>
                <TableCell>{consola.stock}</TableCell>
                <TableCell>{consola.categoria}</TableCell>
                <TableCell>
                  <Edit />
                  &nbsp;&nbsp;&nbsp;
                  <Delete />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal
        open={ModalInsertar}
        onClose={abrirCerrarModalInsertar}>
        {bodyInsertar}
      </Modal>
    </div>
  )
}

export default Mantenimiento