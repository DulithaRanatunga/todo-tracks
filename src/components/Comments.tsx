import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import { Comment } from '../graphql/APITypes';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: '36ch',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
  }),
);


interface Props { 
    comments: Comment[];
}

export default function CommentsComponent(props: Props) {
  const classes = useStyles();

  const sortedCommentsWithDividers: any[] = [];
  if (props.comments) {
    props.comments.forEach((comment, index, arr) => {
        sortedCommentsWithDividers.push(
        <ListItem key={comment.id} alignItems="flex-start">
            {comment.content}
        </ListItem>)
        if (index !== arr.length - 1) {
            sortedCommentsWithDividers.push(<Divider component="li" />);
        }
    });
  }

  return (sortedCommentsWithDividers.length ?
    <List className={classes.root}>
      {sortedCommentsWithDividers}
    </List> : <Typography>There are no comments. Add one? </Typography>
  );
}