import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

import './modal.css'
import { useDispatch } from 'react-redux';
import { removeMovie } from '../../Redux/User/Actions/contentActions';
function SelectedMovie({movieDtails}) {
    const [state, setState] = React.useState({
        vertical: 'top',
        horizontal: 'right',
      });
    const dispatch = useDispatch()
      const { vertical, horizontal } = state;
    const [on,setOn]= useState(false);

     
  
      useEffect(()=>{

        if(movieDtails){
          setOn(true)
         }

      },[on,movieDtails])

      const handleClick = (e) => {
        e.preventDefault()
        dispatch(removeMovie())
       };
      
  return (
    <div >
      <Snackbar
     
        anchorOrigin={{ vertical, horizontal }}
        open={on}
        message={movieDtails.title}
        key={vertical + horizontal}
        action={
            <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClick}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
        }
      />
      
    </div>
  )
}

export default SelectedMovie