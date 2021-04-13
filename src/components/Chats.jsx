import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import {Chat} from './index';

const useStyles = makeStyles(() => ({
  'button': {
    height: 400,
    padding: '0',
    overflow: 'auto',
    backgroundColor: '#eee',
    borderRadius: '4px'
  },
}));

const Chats = (props) => {
  const classes = useStyles();

  return(
    <List className={classes.button}>
      {props.chats.map((chat, index) => {
        return <Chat text={chat.text} type={chat.type} key={index.toString()}/>
      })}
    </List>
  )
}

export default Chats
