import{  styled } from "@mui/material"
import Avatar from "../../../../assets/images/profile-pic (1).png"
import  Grid  from '@mui/material/Grid/'
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import DownloadIcon from '@mui/icons-material/Download'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import StyledButton from "../../../../components/Styledbuttons/StyledButton"



const Hero = () => {
  
  const StyledHero = styled("div")(({theme}) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display:"flex",
    alignItems:"center",
    [theme.breakpoints.up('xs')]: {  // <= mobile
      paddingTop:"100px",
    },
    [theme.breakpoints.up('md')]: {  // >= mobile
      paddingTop:"0",
    }
  }))

  const StyledImg = styled("img")(({theme}) => ({
    width: "100%",
    borderRadius: "50%",
    border:`1px solid ${theme.palette.primary.contrastText}`

  }))

  return (
    <>
    <StyledHero>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <StyledImg src={Avatar} />
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>Jonathan Plets</Typography>
            <Typography color="primary.contrastText" variant="h2" textAlign="center">I'm a Software Engineer</Typography>
              <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
        
                <StyledButton onClick={() => console.log("download")}>
                <DownloadIcon />
                 <Typography>
                  Download CV
                  </Typography>
                </StyledButton>

                </Grid>
                <Grid item xs={12} md={4} display="flex" justifyContent="center">

                <StyledButton onClick={() => console.log("download")}>
                <MailOutlineIcon />
                 <Typography>
                   Contact me
                 </Typography>
                  </StyledButton>
                </Grid>
              </Grid>

          </Grid>
        </Grid>
      </Container>

         
  
    </StyledHero>
    </>
  )
}

export default Hero