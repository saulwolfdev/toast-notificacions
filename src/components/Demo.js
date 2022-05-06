import React, {useState} from "react";
import { toast, Toaster } from "react-hot-toast";
/* import {toast} from "./toast" */
import Grid from "@mui/material/Grid";
import {
  DismissButton,
  WrapMessage,
  WrapDetail,
  ContentIconCopy,
  ContentIconEye,
  ContentButtonText,
  ContentButtonContained,
  Box,
  ContentAvatar,
} from "./toast.styles";
import { FiCopy, FiEye } from "react-icons/fi";
import CardActions from "@mui/material/CardActions";
import Card from "@mui/material/Card";
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Avatar from "react-avatar";

const primary = () =>
  toast.custom((t) => (
    <>
      <Card sx={{ maxWidth: 550 }} style={{ borderLeft: "5px solid #5348ff" }}>
        <Box>
          <ContentAvatar>           
            {
              <Avatar
                name="Foo Bar"
                size="50"
                round={true}
                value="30%"
                color="#5348ff"
              />
            }
          </ContentAvatar>
          <DismissButton>
            <Button onClick={() => toast.dismiss(t.id)}> X </Button>{" "}
          </DismissButton>
          <ContentIconCopy>
            <IconButton
              disabled
              aria-label="upload picture"
              component="span"
              size="small"
            >
              <FiCopy />
            </IconButton>
          </ContentIconCopy>
          <ContentIconEye>
            <IconButton
              disabled
              aria-label="upload picture"
              component="span"
              size="small"
            >
              <FiEye />
            </IconButton>
          </ContentIconEye>
          <ContentButtonText>
            <Button variant="text" size="small">Text1</Button>
          </ContentButtonText>
          <ContentButtonContained>
            <Button variant="contained" size="small" >Text2</Button>
          </ContentButtonContained>
          <WrapMessage>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
          </WrapMessage>
          <WrapDetail>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000
            </Typography>
          </WrapDetail>
        </Box>
      </Card>
    </>
  ));

const successWithLink = () =>
  toast.custom((t) => (
    <>
      <Card sx={{ maxWidth: 550 }} style={{ borderLeft: "5px solid #23ca4b" }}>
        <Box>
          <ContentAvatar>
            {" "}
            {
              <Avatar
                name="Foo Bar"
                size="50"
                round={true}
                value="30%"
                color="#23ca4b"
              />
            }{" "}
          </ContentAvatar>
          <DismissButton>
            <Button onClick={() => toast.dismiss(t.id)}> X </Button>{" "}
          </DismissButton>
          <ContentIconCopy>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
              size="small"
            >
              <FiCopy />
            </IconButton>
          </ContentIconCopy>
          <ContentIconEye>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
              size="small"
            >
              <FiEye />
            </IconButton>
          </ContentIconEye>
          <WrapMessage>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
          </WrapMessage>
          <WrapDetail>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000
            </Typography>
          </WrapDetail>
        </Box>
      </Card>
    </>
  ));

const Success = ({message, detail, activeSuccess} ) => {  
  return(
  toast.custom((t) => (
    <>
      <Card sx={{ maxWidth: 550 }} style={{ borderLeft: "5px solid #23ca4b" }}>
        <Box>
          <ContentAvatar>            
            {
              <Avatar
                name="Foo Bar"
                size="50"
                round={true}
                value="30%"
                color="#23ca4b"
              />
            }
          </ContentAvatar>
          <DismissButton>
            <Button onClick={() => toast.dismiss(t.id)}> X </Button>
          </DismissButton>
          <WrapMessage>
            <Typography gutterBottom variant="h5" component="div">
              Lizard{/* {message} */}
            </Typography>
          </WrapMessage>
          <WrapDetail>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000{/* {detail} */}
            </Typography>
          </WrapDetail>
        </Box>
      </Card>
    </>
  )))};

const error = () =>
  toast.custom((t) => (
    <>
      <Card sx={{ maxWidth: 550 }} style={{ borderLeft: "5px solid red" }}>
        <Box>
          <ContentAvatar>
            {" "}
            {
              <Avatar
                name="Foo Bar"
                size="50"
                round={true}
                value="30%"
                color="red"
              />
            }{" "}
          </ContentAvatar>
          <DismissButton>
            <Button onClick={() => toast.dismiss(t.id)}> X </Button>{" "}
          </DismissButton>
          <WrapMessage>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
          </WrapMessage>
          <WrapDetail>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000
            </Typography>
          </WrapDetail>
        </Box>
      </Card>
    </>
  ));

const warning = () =>
  toast.custom((t) => (
    <>
      <Card sx={{ maxWidth: 550 }} style={{ borderLeft: "5px solid orange" }}>
        <Box>
          <ContentAvatar>
            {" "}
            {
              <Avatar
                name="Foo Bar"
                size="50"
                round={true}
                value="30%"
                color="orange"
              />
            }{" "}
          </ContentAvatar>
          <DismissButton>
            <Button onClick={() => toast.dismiss(t.id)}> X </Button>{" "}
          </DismissButton>
          <WrapMessage>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
          </WrapMessage>
          <WrapDetail>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000
            </Typography>
          </WrapDetail>
        </Box>
      </Card>
    </>
  ));

const info = () =>
  toast.custom((t) => (
    <>
      <Card
        sx={{ maxWidth: 550 }}
        style={{ borderLeft: "5px solid turquoise" }}
      >
        <Box>
          <ContentAvatar>
            {" "}
            {
              <Avatar
                name="Foo Bar"
                size="50"
                round={true}
                value="30%"
                color="turquoise"
              />
            }{" "}
          </ContentAvatar>
          <DismissButton>
            <Button onClick={() => toast.dismiss(t.id)}> X </Button>{" "}
          </DismissButton>
          <WrapMessage>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
          </WrapMessage>
          <WrapDetail>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000
            </Typography>
          </WrapDetail>
        </Box>
      </Card>
    </>
  )); 

const Demo = () => {
  const [activeSuccess, setActiveSuccess] = useState(false);
  return (
    <div>
      <button onClick={primary}> Toast Primary </button>
      <button onClick={successWithLink}> Toast SuccessWithLink </button>
      <button onClick={Success}> Toast Succes </button>
      <button onClick={info}> Toast Ifo </button>      
      <button onClick={warning}> Toast Warning </button>
      <button onClick={error}> Toast Error </button>    
      {/* <button onClick={()=> setActiveSuccess(!activeSuccess)}> successtest  </button>    
      <Success message="hola" detail="hola2" /> */}
      <Toaster position="top-right" toastOptions={{ duration: 500000 }} />

     
    </div>
  );
};

export default Demo;
















/* import React from  'react';
import  toast, { Toaster } from 'react-hot-toast';
import {toasted} from "./toast"


const notifySucces = () => toasted.success("Se envio correctamente", "la publicacion se vera en la seccion de noticias de la pagina")

const notifyError = () => toasted.error('hola, hola, hola, hola, hola, hola, hola, hola, hola, hola, hola, hola, hola, hola, hola, hola, ')


const notifyIcon = () => toasted.icon('Se envio correctamente', "hola");

const Demo = () => {
  return (
    <div>
      <button onClick={()=>notifySucces(toasted)}>success</button>
      <button onClick={()=>notifyError(toasted)}>error</button>
        <button onClick={()=>notifyIcon(toasted)}>icon</button>   
        <button></button>  
     
       <Toaster reverseOrder={true} />        
    </div>
  );
};

export default Demo    */
