import React, { useEffect, useState } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Comment, Event } from '../graphql/APITypes';
import ApiService from '../services/ApiService';
import { Card, CardContent } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { CommentOutlined, Done, DoneOutline, ModeCommentOutlined, PauseCircleFilled, PauseCircleOutline } from '@material-ui/icons';
import dayjs from 'dayjs';
import CommentsComponent from './Comments';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
    },  
    done: {
      marginLeft: 'auto'
    },
    expanded: {
      borderBottom: '1px solid'
    }
  }),
);

interface Props { 
    event: Event;
}

enum Expanded {
  None, Comments, Blockers
}

export default function EventComponent(props: Props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(Expanded.None);
  const [event, setEvent] = useState<Event>();
  const [loading, setLoading] = useState(true);

  const fetchEvent = function() {
    setEvent(props.event);
    setLoading(true);
    ApiService.getEvent(props.event.id).then(hydratedEvent => {
        setLoading(false);
        setEvent(hydratedEvent);
    });
  }

  useEffect(() => {
    fetchEvent();
  }, [props.event]);

  const handleExpandClick = (type: Expanded) => {
    setExpanded(type === expanded ? Expanded.None : type);
  };

  const createdDate: string = event ? dayjs(event.createdAt).format('DD/MM/YYYY') : '';
  const triggerDate: string = event && event.trigger ? dayjs(event.trigger).format('DD/MM/YYYY') : '';

  return event ? (
    <Card className={classes.root}>
      <CardHeader 
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={event.name}
        subheader={createdDate}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Expected trigger: {triggerDate}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={expanded !== Expanded.None ? classes.expanded : undefined}>
        <IconButton aria-label="blockers" onClick={() => handleExpandClick(Expanded.Blockers)} aria-expanded={expanded === Expanded.Blockers}>
          {event?.blocks?.items?.length ? <PauseCircleOutline /> : <PauseCircleFilled />}
        </IconButton>
        <IconButton aria-label="comments" onClick={() => handleExpandClick(Expanded.Comments)} aria-expanded={expanded === Expanded.Comments}>
          {event?.comments?.items?.length ? <CommentOutlined /> : <ModeCommentOutlined />}
        </IconButton>
        <IconButton aria-label="mark as done" className={classes.done}>
          {event?.done ? <Done /> : <DoneOutline/> }
        </IconButton>
      </CardActions>
      <Collapse in={expanded === Expanded.Blockers} timeout="auto" unmountOnExit>
        <CardContent>
          Blockers
        </CardContent>
      </Collapse>
      <Collapse in={expanded === Expanded.Comments} timeout="auto" unmountOnExit>
        <CardContent>
          <CommentsComponent comments={event?.comments?.items as Comment[]} />
        </CardContent>
      </Collapse>
    </Card>
  ) : null;
}