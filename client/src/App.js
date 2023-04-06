import {React,useEffect ,useState} from 'react';
import { useDispatch } from 'react-redux';
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import {getPosts} from './actions/posts'
import Form from './components/Forms/Form';
import Posts from './components/Posts/Posts';
import memories from './images/memories.png';



function App() {
 const [currentId,setCurrentId]=useState(null)
  
  const dispatch=useDispatch();

  useEffect(()=>{
 dispatch(getPosts())
  },[dispatch]);
  return (
    <>
      <Container maxWidth="lg"  >
        <AppBar  position='static' color='inherit' style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',borderRadius:'10px',marginBottom:'20px'}}>
          <Typography  variant='h2' align="center" style={{color:'#15dce6'}}>Memories</Typography>
          <img  src={memories} alt="icon" height='60' style={{height:'50px',width:'50px'}} />
        </AppBar>
        <Grow in>
          <Container>
            <Grid container  justify='space-between' alignItems='stretch' spacing={3}>
              <Grid item xs={12} sm={7}>
                <Posts setCurrentId={setCurrentId}/>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form currentId={currentId} setCurrentId={setCurrentId} />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </>
  );
}

export default App;
