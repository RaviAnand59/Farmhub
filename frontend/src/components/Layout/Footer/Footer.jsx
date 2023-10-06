import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';

const StyledBox = styled(Box)({
  position: 'relative',
  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    opacity: 0.8,
    backgroundImage: `url(/Images/combine.jpg)`,
    filter: 'brightness(50%)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover'
  }
});

const SocialLink = styled(Link)(({ theme }) => ({
  '&:hover': {
    '& .MuiSvgIcon-root': {
      color: theme.palette.secondary.main
    },
  },
}));

export default function BasicGrid() {
  return (
    <StyledBox>
      <Box component='div' position='relative' color='white' mt={8} pt={8} pb={2}>
        <Container>
          <Grid container columnSpacing={4} rowSpacing={8}>
            <Grid item xs={12} sm={6} md={4}>
              <img src="/Images/main-logo.png" alt='FarmHub Logo' style={{ width: '35%' }} />
              <List>
                <ListItem disablePadding>
                  <ListItemText primary="Invertis University Bareilly , Uttar Pradesh" />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemText primary="Email: farm4hub@gmail.com" />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant='h6'>QUICK LINKS</Typography>
              <List>
                <ListItem disablePadding>
                  <Link component={RouterLink} to='/' color='primary.main' underline='hover'>
                    <ListItemText primary="Home" />
                  </Link>
                </ListItem>
                <ListItem disablePadding>
                  <Link component={RouterLink} to='/about-us' color='primary.main' underline='hover'>
                    <ListItemText primary="About us" />
                  </Link>
                </ListItem>
                {/* Add more links as needed */}
              </List>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant='h6' gutterBottom>SOCIAL LINKS</Typography>
              <SocialLink component={RouterLink} to='https://www.linkedin.com/in/farm-hub-6843a1272/'>
                <LinkedInIcon fontSize="large" color="primary" />
              </SocialLink>
              <SocialLink component={RouterLink} to='https://www.instagram.com/farm.hub4/'>
                <InstagramIcon sx={{ ml: 1 }} fontSize="large" color="primary" />
              </SocialLink>
              <Box id="google_translate_element"></Box>
            </Grid>
            <Grid item xs={12}>
              <Typography variant='subtitle2' align='center'>
                2023 All Rights Reserved, Developed By FarmHub
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </StyledBox>
  );
}
