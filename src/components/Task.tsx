import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { Task, Comment } from '../graphql/APITypes';
import ApiService from '../services/ApiService';
import { Card, CardContent } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { CommentOutlined, Done, DoneOutline, ModeCommentOutlined, PauseCircleFilled, PauseCircleOutline } from '@material-ui/icons';
import { Status } from '../graphql/API';
import dayjs from 'dayjs';
import CommentsComponent from './Comments';
import useStyles from './Task.styles';

interface Props { 
    task: Task;
}

enum Expanded {
  None, Comments, Blockers
}

export default function TaskComponent(props: Props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(Expanded.None);
  const [task, setTask] = useState<Task>();
  const [loading, setLoading] = useState(true);

  const updateGroup = function() {
    setTask(props.task);
    setLoading(true);
    ApiService.getTask(props.task.id).then(hydratedTask => {
        setLoading(false);
        setTask(hydratedTask);
    });
  }

  useEffect(() => {
    updateGroup();
  }, [props.task]);

  const handleExpandClick = (type: Expanded) => {
    setExpanded(type === expanded ? Expanded.None : type);
  };

  const createdDate: string = task ? dayjs(task.createdAt).format('DD/MM/YYYY') : '';

  return task ? (
    <Card className={classes.root}>
      <CardHeader 
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={task.name}
        subheader={createdDate}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Current status:: {task?.status}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={expanded !== Expanded.None ? classes.expanded : undefined}>
        <IconButton aria-label="blockers" onClick={() => handleExpandClick(Expanded.Blockers)} aria-expanded={expanded === Expanded.Blockers}>
          {task?.hasBlockers?.items?.length ? <PauseCircleOutline /> : <PauseCircleFilled />}
        </IconButton>
        <IconButton aria-label="comments" onClick={() => handleExpandClick(Expanded.Comments)} aria-expanded={expanded === Expanded.Comments}>
          {task?.comments?.items?.length ? <CommentOutlined /> : <ModeCommentOutlined />}
        </IconButton>
        <IconButton aria-label="mark as done" className={classes.done}>
          {task?.status === Status.DONE ? <Done /> : <DoneOutline/> }
        </IconButton>
      </CardActions>
      <Collapse in={expanded === Expanded.Blockers} timeout="auto" unmountOnExit>
        <CardContent>
          Blockers
        </CardContent>
      </Collapse>
      <Collapse in={expanded === Expanded.Comments} timeout="auto" unmountOnExit>
        <CardContent>
          <CommentsComponent comments={task?.comments?.items as Comment[]} />
        </CardContent>
      </Collapse>
    </Card>
  ) : null;
}