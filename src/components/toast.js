import React from 'react';
import * as Toaster from 'react-hot-toast';
/* import toast from 'react-hot-toast'; */
import { FaBeer } from 'react-icons/fa';
import Grid from '@mui/material/Grid';
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
import Card from "@mui/material/Card";
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Avatar from "react-avatar";


const defaultParamsSuccess = {    
  position: 'top-right',
  duration: 6000000, 
   
  style: {
    borderLeft: "5px solid #23ca4b",
    /* background: "#F3F2FF", */
    padding: '16px',
    color: '#000', 
    cursor: "default" , 
        
    },  
    
  iconTheme: {
    primary: '#23ca4b',
    secondary: '#FFF',
  }    
}

const defaultParamsError = {
  
}


const ToastComponent = ({ message, icon, detail}) => {
  return (
    <React.Fragment>    
      <Grid container spacing={2} style={{ width: "500px"}}>
     <DismissButton><button > x </button></DismissButton>
          <Grid item xs={12}> 
          <Grid container> 
            <Grid item xs={1}>           
            {/* <ContentIcon> {icon}  </ContentIcon> */}
            </Grid>
            <Grid container>
            <Grid item xs={10}>            
            <WrapMessage> {message}  </WrapMessage>           
          </Grid> 
          </Grid> 
          <Grid item xs={10}>            
            <WrapDetail> {detail} </WrapDetail>            
          </Grid>            
        </Grid>  
        </Grid>             
      </Grid>       
    </React.Fragment>
  )
}

const Primary = ({message, detail}) =>{return(
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
              {message}
            </Typography>
          </WrapMessage>
          <WrapDetail>
            <Typography variant="body2" color="text.secondary">
              {detail}
            </Typography>
          </WrapDetail>
        </Box>
      </Card>
    </>
  )))};

export const toast = {
  success: (message, detail) => {
    const string =<ToastComponent message={message} detail={detail} />            
    Toaster.toast.success(React.createElement('div', {}, string), defaultParamsSuccess);
  },
  error: (message) => {
    const string = <ToastComponent message={message} />
    Toaster.toast.error(React.createElement('div', {}, string), defaultParamsError );
  }, 
  primary: (message, detail) => {
    const string = <Primary message={message} detail={detail} />
    Toaster.toast.custom(React.createElement('div', {}, string), defaultParamsError);
  },  
}

































/* import React from 'react';
import { Toaster } from 'react-hot-toast';


const defaultParams = {
  position: 'top-right',
  duration: 2000,  
}

const ToastComponent = ({ message, icon }) => {
  return (
    <React.Fragment>     
      {message}
    </React.Fragment>
  )
}

export const toast = {
  success: (message) => {
    const string = <ToastComponent message={message}  />
    Toaster.toast.success(React.createElement('div', {}, string));
  },
  error: (message) => {
    const string = <ToastComponent message={message} />
    toast.error(React.createElement('div', {}, string));
  },
  info: (message) => {
    const string = <ToastComponent message={message}  />
    toast.info(React.createElement('div', {}, string));
  }
} */