import React, { useState,useEffect,useRef } from 'react';
import { useForm } from 'react-hook-form';

import { styled } from '@mui/material/styles';
import { Box, Stack, Typography, List, ListItem, ListItemText,TextField, Paper} from '@mui/material';
import Grid  from '@mui/material/Grid2';
import picture from '../img/contact_image.jpg';
import Footer from './Footer';
import styles from '../styles/Contact.module.css';


function FormWithReactHookForm(formRef){
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting },
        reset,
        getValues,
    } = useForm();
    
    const onSubmit = async (data) => {
        //TO DO : Submit to server here
        await new Promise((resolve)=> setTimeout(resolve,1000));
        reset();
    };



    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col
        gap-y-2" ref={formRef}>
                    <h2>Contact Us</h2>
                    <input { ...register('name',
                    {
                        required:"Name is required",
                        minLength:{
                            value:2,message:"Name is not valid",
                        },
                        maxLength:{
                            value:20,message:"Name can't be longer than 20 characters"
                        },
                    })}
                        type='name'
                        placeholder='First name'
                        className='px-4 py-2 rounded'
                    />
                    <input { ...register('email',
                    {
                        required:"Email is required",
                        minLength:{
                            value:8,message:"Email is not valid"
                        },
                    })}
                        type='email'
                        placeholder='Email'
                        className='px-4 py-2 rounded'
                    />
                    {errors.email && ( <p className='alert alert-danger'>{`${errors.email.message}`}</p>
                    )}

                  <button
                  disabled={isSubmitting}
                  type="submit">Submit
                  </button>
                </form>
    )


}
/* const inputProps ={
    inputLabel: {
        sx: {
            transform:'translate(14px,0px) ',
            '&.MuiInputLabel-shrink': { //label floating state 
                transform:'translate(14px,-25px)'
            },
            transition:'transform 0.2s ease',
        },
    },
    input:{
        className:styles.input,
    },
    outlinedInputRoot: {
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'gray',
            borderWidth: '2px', // Default border color
          },
          '&:hover fieldset':{
            borderColor: 'blue',
            borderWidth: '2px',
          },
          '&.Mui-focused fieldset': {
            borderColor: 'blue', // Focused border color
            borderWidth: '2px',
            transition: 'border-color 0.3s ease, border-width 0.3s ease',
          },
        },
    },
};
 */
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#ffffff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    flexGrow: 1,
  }));




const inputProps = {
    root: {
        '& .MuiInputLabel-root':
        {
            color:'gray',
            '&.Mui-focused':{
                color:'black',
            }
        },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'grey', // Border color for the input
          borderWidth: '2px',  // Border width
          borderRadius: '4px', // Rounded corners (optional)
          color:'red'
        },
        '&:hover fieldset':{
            borderColor:'blue',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'blue',  // Ensure border stays blue when focused
          color:'black',
          borderWidth: '2px',
          borderRadius: '4px',
          transition: 'border-color 0.3s ease, border-width 0.3s ease',  // Smooth border transition
        },
      },
    },
  };


const contactPage = () =>{
    return (
        <Grid container  sx={
            {
                gap:{xs:2,sm:3,md:5,lg:10,xl:20,xxl:30},
                paddingLeft:{xs:2,sm:3,md:5,lg:10,xl:28,xxl:40},
                paddingTop:{xs:2,sm:3,md:5,lg:10,xl:18,xxl:20},
                width:{xs:"100%"}
            }}>
            <Stack
            direction={{ xs: 'column', sm: 'column', md:'row' }}
            
            sx={{
              justifyContent: "flex-start",
              alignItems: 'flex-start',
            }}>
            <Grid item size={5}>
                    <List spacing={{ xs: 1}} useFlexGap sx={{flexWrap:'wrap'}}>
                    <ListItem><Typography variant='h4'>Address</Typography></ListItem>
                    <ListItem><ListItemText>Bahnhofstrasse 9</ListItemText></ListItem>
                    <ListItem><ListItemText>5600 Fahrwangen, Aargau</ListItemText></ListItem>
                    <ListItem><ListItemText>Switzerland</ListItemText></ListItem>
                    <ListItem><ListItemText>01234567890</ListItemText></ListItem>
                    </List>
            </Grid>
            <Grid item size={6} sx={{paddingRight:{md:"40px",lg:"93px",xs:0}}}>
                <Item sx={{width:'100%', height:"100%"}}><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2705.993098496743!2d8.236558076905194!3d47.294934471163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47901a19f3670a67%3A0xa9e2b57d946b5a7a!2zQmFobmhvZnN0cmFzc2UgOSwgNTYxNSBGYWhyd2FuZ2VuLCDQqNCy0LDRmNGG0LDRgNGB0LrQsA!5e0!3m2!1ssr!2srs!4v1732667374978!5m2!1ssr!2srs" width="100%" height="400" style={{border:0}}></iframe></Item>
            </Grid>
            </Stack>
        </Grid>
        );
}
export default contactPage


{/* <Grid container spacing={2} fluid='md'>
            <Row>
                <Col  xs={12} md={12} className={style.col}>
                    
                    
                    
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={12} className={style.map}>
                    
                </Col>
            </Row>
        </Grid>
            <div className={style.container}>
            <div className={`${style.card} ${isVisible ? style.visible : ""}`}>
                <div>
                    {FormWithReactHookForm(formRef)}
                </div>
            </div>
            </div>
           */}



{/* <Box component="form" sx={{'& .MuiTextField-root': {m:2.5,width:'18ch', bgcolor:'#ffff'}}}
            noValidate
            autoComplete='off' paddingBottom={51}>
            <Stack>
            <TextField id="outlined-basic" label="Name" variant="outlined" slotProps={{ shrink:true,}} sx={inputProps.root}/>
            <TextField id="outlined-basic" label="Last Name" variant="outlined" slotProps={{ shrink:true,}} sx={inputProps.root} />
            <TextField id="outlined-basic" label="Email" variant="outlined" slotProps={{ shrink:true,}} sx={inputProps.root}/>
            <TextField id="outlined-multiline-static" label="Text" rows={3} multiline slotProps={{ shrink:true,}} sx={inputProps.root} />
            </Stack>
        </Box> */}