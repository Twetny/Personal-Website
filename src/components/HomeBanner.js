import './HomeBanner.css';
import {Box, Container, CssBaseline, Typography } from '@mui/material';

function HomeBanner() {
    return (
        <div className='HomeBanner'>    
         <Container
         maxWidth={false}
            sx={{
                width: '100%',
                height: '500px',
                backgroundColor: 'gray',
                }}
            >
            <Typography
             variant='h2'
             sx={{
                 textAlign: 'left',
                 paddingTop: '150px',
                 paddingLeft: '40px',
             }}>
                Hi There!
            </Typography>
            <Box
            sx={{
                textAlign: 'left',
                paddingTop: '15px',
                paddingLeft: '40px',
                lineHeight: '3',
            }}>
            <Typography>
                My name is Gavin and I'm an aspiring software engineering student at Victoria Unviersity of Wellington.
            </Typography>
            <Typography>
                I'm currently in my penultimate year in my studies and have been really enjoying all the things I've been doing!
            </Typography>
            <Typography>
                I got my first taste of programming when I was about 12 years old and funnily enough, did not like it at all.
            </Typography>
            <Typography>
                Outside of programming, you'll catch me playing football (or watching it) and an unhealthy amount of video games.
            </Typography>
            <Typography>
                Thanks for taking the time out of your day to check me out. Enjoy your stay! :)
            </Typography>
            </Box>
            <CssBaseline />
            <Box 
            sx={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '40px' 
            }}>
            <img src="image" alt="image" width="200" height="200"/>
            </Box>
        </Container>
        
        </div>
    );
}

export default HomeBanner;


// const heroBannerStyle = {
//     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', // You can change the gradient colors here
//     color: 'white',
//     padding: '40px',
//     textAlign: 'center',
//   };
  
//   const heroTextStyle = {
//     marginBund: 'white',
//     color: 'black',
//   };
  
//   function HeroBanner() {
//     return (
//       <div style={heroBannerStyle}>
//         <h2 style={heroTextStyle}>Welcome to My Website</h2>
//         <p style={heroTextStyle}>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//           Sed nonummy tincidunt ut lacreet dolore magna aliguam erat volutpat.
//         </p>
//         <button style={heroButtonStyle}>Get Started</button>
//       </div>
//     );
//   }
  
//   export default HeroBanner;ottom: '20px',
//   };
  
//   const heroButtonStyle = {
//     marginTop: '10px',
//     backgro