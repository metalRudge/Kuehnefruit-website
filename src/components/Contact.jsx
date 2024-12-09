import React, { useState,useEffect,useRef } from 'react';
import { useForm } from 'react-hook-form';

import { styled } from '@mui/material/styles';
import { Box, Stack, Typography, List ,ListItem, ListItemText,TextField, Paper,Button} from '@mui/material';
import Grid  from '@mui/material/Grid2';
import picture from '../img/contact_image.jpg';
import Footer from './Footer';
import styles from '../styles/Contact.module.css';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#ffffff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    flexGrow: 1,
    
  }));

const textFieldStyling = {
  '& label':{
    color: "primary.main",
    
    
  }
  
}

const contactPage = () =>{
    const [scrollAmount,setScrollAmount] = useState(0);
    let [isVisible, setIsVisible] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
      const handleWheel = (event) => {
        setScrollAmount((prev) => Math.min(Math.max(prev + event.deltaY, 0), 100));
      };
      
      window.addEventListener("wheel", handleWheel);
      return () => window.removeEventListener("wheel", handleWheel);
    }, []);
    isVisible = scrollAmount >= 50;
    useEffect(() => {
      const mediaQuery = window.matchMedia('(max-width: 960px)'); // Match `md` breakpoint
      const handleScreenChange = () => {
        setIsSmallScreen(mediaQuery.matches);
  
        if (mediaQuery.matches) {
          document.body.style.overflow = 'auto'; // Enable scrolling
        } else {
          document.body.style.overflow = 'hidden'; // Disable scrolling
        }
      };
  
      // Initial check and event listener
      handleScreenChange();
      mediaQuery.addEventListener('change', handleScreenChange);
  
      return () => mediaQuery.removeEventListener('change', handleScreenChange);
    }, []);
    return (
        <>
        <Grid container  sx={
            {  
              paddingLeft:{xs:2,sm:3,md:5,lg:10,xl:60,xxl:40},
              paddingRight:{xs:2,sm:3,md:5,lg:10,xl:28,xxl:40},
              overflow: {
                xs: 'auto', // Allow scrolling for small screens
                md: 'hidden', // Disable scrolling for medium and larger screens
                lg:'hidden'
              },
            }}>
            <Stack
            direction={{ xs: 'column', sm: 'row', md:'row' }}
            sx={{
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}>
            <Grid>
                    <List spacing={{ xs: 1}} sx={{flexWrap:'wrap', p:0}}>
                    <ListItem><Typography variant='h4'>Address</Typography></ListItem>
                    <ListItem><ListItemText>Bahnhofstrasse 9</ListItemText></ListItem>
                    <ListItem><ListItemText>5600 Fahrwangen, Aargau</ListItemText></ListItem>
                    <ListItem><ListItemText>Switzerland</ListItemText></ListItem>
                    <ListItem><ListItemText>01234567890</ListItemText></ListItem>
                    </List>
            </Grid>
            <Grid sx={{paddingRight:{md:'20px',lg:'20px',xs:'10px'}}}>
                <Item sx={{width:'100%', height:'100%'}}>
                    <div  className="ratio ratio-16x9">
                      <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2705.993098496743!2d8.236558076905194!3d47.294934471163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47901a19f3670a67%3A0xa9e2b57d946b5a7a!2zQmFobmhvZnN0cmFzc2UgOSwgNTYxNSBGYWhyd2FuZ2VuLCDQqNCy0LDRmNGG0LDRgNGB0LrQsA!5e0!3m2!1ssr!2srs!4v1732667374978!5m2!1ssr!2srs' width='100%' height='500'></iframe>
                    </div>
                </Item>
            </Grid>
            </Stack>
            <Stack className={styles.form} 
            sx={{
            paddingTop:{xs:5,lg:0},
            paddingBottom:{xs:5,lg:0}, 
            direction:'row',
            position:'relative',
            paddingLeft:'1rem',
            opacity: isVisible ? 1 : 0,
            transition: "bottom 0.5s ease, opacity 0.5s ease",
            zIndex:1
          }} gap={2}>
        <Typography variant="h5" gutterBottom sx={{textAlign:'start', paddingBottom:0}}>
          Contact Us
        </Typography>
          <TextField
            sx={{...textFieldStyling,maxWidth:'20ch'}}
            label="Name"
            variant="standard"
            type='text'
          />
          <TextField
            sx={{...textFieldStyling,maxWidth:'30ch'}}
            label="Email"
            variant="standard"
            type="email"
           
          />
          <TextField
          sx={{...textFieldStyling,maxWidth:'65.55ch'}}
            label="Message"
            variant="filled"
            multiline
            minRows={2}
            maxRows={3}
          />
          <Button variant="contained" color="primary" sx={{maxWidth:'10ch'}}>
            Submit
          </Button>
      </Stack>
        </Grid>
        
        </>
        );
}
export default contactPage