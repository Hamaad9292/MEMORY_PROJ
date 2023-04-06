import React from 'react';
import { Card, CardActions, CardContent, Button, Typography, CardMedia, Grid } from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import moment from 'moment';
import MoreHoriz from '@mui/icons-material/MoreHoriz';
import './styles.css';
import { useDispatch } from 'react-redux';
import { deletePost ,likePost} from '../../../actions/posts';

function Post({ post, setCurrentId }) {
  const dispatch = useDispatch();
  return (
    <>
      <Card style={{ position: 'relative', height: '100%', }}>
        <CardMedia style={{ height: '10rem', width: '20rem' }} image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
        <Grid container spacing={2} style={{ position: 'absolute', top: '10px', right: '10px', padding: '16px', }}>
          <Grid xs={8} md={10} style={{ color: 'White', }}>
            <Typography variant="h6" style={{ marginLeft: '2rem' }}>{post.creator}</Typography>
            <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
          </Grid>
          <Grid item xs={4} md={2}>
            <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}><MoreHoriz fontSize="medium" /></Button>
          </Grid>
        </Grid>
        <div >
          <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
        </div>
        <Typography gutterBottom variant="h5" component="h2">{post.title}</Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
        </CardContent>
        <CardActions>
          <Grid container spacing={2}>
            <Grid xs={9} md={9}>
          <Button size='small' color='primary' onClick={() => dispatch(likePost(post._id))}>
            <ThumbUpAltIcon fontSize='small' />Like{post.likeCount}
          </Button></Grid>
          <Grid xs={3} md={3}><Button size='small' color='primary' onClick={() => dispatch(deletePost(post._id))}>
            <DeleteIcon fontSize='small' />Delete
          </Button></Grid>
          </Grid>
        </CardActions>
      </Card>

    </>
  )
}

export default Post;