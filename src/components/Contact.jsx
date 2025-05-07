import React, { useState,useEffect,useRef } from 'react';
import { useForm } from 'react-hook-form';
import {createRoot} from 'react-dom/client';
import {AdvancedMarker, APIProvider, Map} from '@vis.gl/react-google-maps';
import { styled } from '@mui/material/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {Box,Stack, Typography, List ,ListItem, ListItemText,TextField, Paper,Button,Card} from '@mui/material';
import Grid  from '@mui/material/Grid2';
import Container from '@mui/material/Container';
import CallIcon from '@mui/icons-material/Call';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import picture from '../img/contact_image.jpg';
import Footer from './Footer';
import styles from '../styles/Contact.module.css';




const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#ffffff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    boxShadow:'none',
    border:'none',
    textAlign: 'left',
    flexGrow: 1,
    minWidth: 'auto',
    minHeight: 'auto',
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
    <Container>
      <Stack direction={{ xs: "column", md: "row" }} // Column on mobile, row on desktop
        spacing={0} sx={{
          alignItems:'flex-start',
          boxShadow:'none',
          border:'none',
          outline:"none",

        }

        }
        >
      <Grid>
        <Item>
              <List>
                <ListItem><Typography variant='h2'>Address</Typography></ListItem>
                <ListItem><HomeRoundedIcon></HomeRoundedIcon><ListItemText sx={{paddingLeft:2}}>Bahnhofstrasse 11, 5615 Fahrwangen, Aargau, Switzerland</ListItemText></ListItem>
                <ListItem><EmailOutlinedIcon></EmailOutlinedIcon><ListItemText sx={{paddingLeft:2}}>info@kuehnefruit.ch</ListItemText></ListItem>
                <ListItem><CallIcon></CallIcon><ListItemText sx={{paddingLeft:2}}><a href='tel:+41 56 676 60 60'>+41 56 676 60 60</a></ListItemText></ListItem>
              </List>
        </Item>
      </Grid>
      <Box  sx={{
          boxShadow:'none',
          border:'none',
          outline:"none",
          width: { xs: "80%", md: "50%" },
          height: { xs: "50vh", md: "50vh" }, // 60% viewport height on mobile, 50% on desktop
          borderRadius: 1, // Rounded corners for a nice look
          overflow: "hidden", // Prevents layout shifts
          marginLeft:{xs:'24px'},
          boxShadow: 3, // Adds subtle shadow for aesthetics
        }}>
            <APIProvider apiKey={process.env.REACT_APP_API_KEY}>
              <Map
                mapId = 'DEMO_MAP_ID'
                style={{width:'100%',height:"100%"}}
                defaultCenter={{lat:47.2950193977601, lng:8.238923893637663}}
                defaultZoom={16}
                gestureHandling={'greedy'}
                disableDefaultUI={false}
              />
              <AdvancedMarker position ={{lat:47.2950193977601, lng:8.238923893637663}}/>
            </APIProvider>
      </Box>
      </Stack>
      <Grid sx={{marginTop:{xs:'5%',md:"-12%"},marginBottom:{xs:"5%",md:0}}}>
          <Item>
            <Stack className={styles.form} 
            sx={{
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
          </Item>
      </Grid>
    </Container>
  </>);
}
export default contactPage