import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableContainer, TableHead, TableCell, TableBody, TableRow, Modal, Button, TextField } from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';

const baseURL = 'http://localhost:5114/api/Categoria/';

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


const MantenimientoCategoria = () => {

  const styles = useStyles();



  const [data, setData] = useState([]);
  const [ModalInsertar, setModalInsertar] = useState(false);
  const [ModalEditar, setModalEditar] = useState(false);
  const [ModalEliminar, setModalEliminar] = useState(false);
  const [consolaSeleccionada, setConsolaSeleccionada] = useState({
    id: Number,
    descripcion: String,
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
        peticionGet()
      })
  }

  const peticionPut = async () =>{
    console.log(consolaSeleccionada);
    await axios.put(baseURL+consolaSeleccionada.id, consolaSeleccionada)
    .then(response=>{
      var dataNueva=data;
      dataNueva.map(consola=>{
        if(consolaSeleccionada.id===consola.id){
          consola.descripcion=consolaSeleccionada.descripcion;
        }
      })
      setData(dataNueva);
      abrirCerrarModalEditar();
    })
  }

  const peticionDelete=async()=>{
    console.log(baseURL+consolaSeleccionada.id)
    await axios.delete(baseURL+consolaSeleccionada.id)
    .then(response=>{
      setData(data.filter(consola=>consola.id!==consolaSeleccionada.id));
      abrirCerrarModalEliminar();
    })
  }

  const arr = new Array();

  const peticionGet = async () => (
    await axios.get(baseURL)
      .then(response => {

        const { result } = response.data;

        let obj = {
          id: 0,
          descripcion: '',

        }


        for (let i = 0; i < result.length; i++) {

          obj = {
            id: result[i].id,
            descripcion: result[i].descripcion,
          }

          arr[i] = obj;

        }
        setData(arr);
      })

  )

  const abrirCerrarModalInsertar = () => {
    setModalInsertar(!ModalInsertar);
  }

  const abrirCerrarModalEditar = () => {
    setModalEditar(!ModalEditar);
  }

  const abrirCerrarModalEliminar=()=>{
    setModalEliminar(!ModalEliminar);
  }

  const seleccionarConsola=(consola, caso)=>{
    setConsolaSeleccionada(consola);
    (caso=="Editar")?abrirCerrarModalEditar(true):abrirCerrarModalEliminar()
  }


  useEffect(async () => {
    await peticionGet();
  }, [])

  const bodyInsertar = (
    <div className={styles.modal}>
      <h3>Agregar nueva categoria</h3>
      <TextField name="descripcion" className={styles.inputMaterial} label="Descripcion" onChange={e => handleChange(e.target.name, e.target.value)} />
      <br />
      <div align="right">
        <Button color="primary" onClick={() => peticionPost()}>Insertar</Button>
        <Button onClick={() => abrirCerrarModalInsertar()}>Cancelar</Button>
      </div>
    </div>
  )

  const bodyEditar = (
    <div className={styles.modal}>
      <h3>Editar producto</h3>
      <TextField name="id" inputProps={{ readOnly: true, }} className={styles.inputMaterial} label="Id" onChange={e => handleChange(e.target.name, e.target.value)} value={consolaSeleccionada && consolaSeleccionada.id} />
      <br />
      <TextField name="descripcion" className={styles.inputMaterial} label="Descripcion" onChange={e => handleChange(e.target.name, e.target.value)} value={consolaSeleccionada && consolaSeleccionada.descripcion} />
      <br />
      <div align="right">
        <Button color="primary" onClick={() => peticionPut()}> Editar</Button>
        <Button onClick={() => abrirCerrarModalEditar()}>Cancelar</Button>
      </div>
    </div>
  )

  const bodyEliminar=(
    <div className={styles.modal}>
      <p>Estás seguro que deseas eliminar el producto <b>{consolaSeleccionada && consolaSeleccionada.nombre}</b> ? </p>
      <div align="right">
        <Button color="secondary" onClick={()=>peticionDelete()} >Sí</Button>
        <Button onClick={()=>abrirCerrarModalEliminar()}>No</Button>

      </div>

    </div>
  )

  return (
    <div>
      <br />
      <Link to="/"><Button>Inicio</Button></Link>
      <Button><Link style={{ textDecoration: 'none' }}to="/MantenimientoProductos">Mantenimiento Productos</Link></Button>
      <Button onClick={() => abrirCerrarModalInsertar()}>Insertar</Button>
      <br />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Descripcion</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data.map(consola => (
              <TableRow key={consola.id}>
                <TableCell>{consola.id}</TableCell>
                <TableCell>{consola.descripcion}</TableCell>
                <TableCell>
                  <Edit className={styles.iconos} onClick={() =>seleccionarConsola(consola, 'Editar')}/>
                  &nbsp;&nbsp;&nbsp;
                  <Delete className={styles.iconos} onClick={()=>seleccionarConsola(consola, 'Eliminar')}/>
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

      <Modal
        open={ModalEditar}
        onClose={abrirCerrarModalEditar}>
        {bodyEditar}
      </Modal>
      
      <Modal
        open={ModalEliminar}
        onClose={abrirCerrarModalEliminar}>
        {bodyEliminar}
     </Modal>
      
    </div>
  )
}

export default MantenimientoCategoria