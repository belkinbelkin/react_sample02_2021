import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './UserCard.css';
import {FaUserAstronaut} from 'react-icons/fa';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

/**
 * User card component
 * props: { user } - object
 * Expected fields: username, about, submission_count, comment_count, created_at
 */

export default function UserCard({user}) {
  const classes = useStyles();


  return (
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2">
            <FaUserAstronaut/> {user.username}
          </Typography>
          <br/>
          <Typography variant="body2" component="p">
            {user.about === '' ? 'No description' : user.about}
          </Typography>
          <br/>
          <Typography variant="body2" component="p">
            Number of submissions: {user.submission_count}
          </Typography>
          <Typography variant="body2" component="p">
            Number of comments: {user.comment_count}
          </Typography>
          <Typography variant="body2" component="p">
            Created at: {new Date(user.created_at).toLocaleDateString('UK')}
          </Typography>
        </CardContent>
      </Card>
  );
}