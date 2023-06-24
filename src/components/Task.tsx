import React, { useEffect, useRef, useState } from 'react';
import { Task, Comment } from '../graphql/APITypes';
import ApiService from '../services/ApiService';
import { CardContent, TextField } from '@material-ui/core';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import { CheckBoxOutlineBlankOutlined, CommentOutlined, Done, DoneOutline, ModeCommentOutlined, PauseCircleFilled, PauseCircleOutline } from '@material-ui/icons';
import { Status } from '../graphql/API';
import dayjs from 'dayjs';
import CommentsComponent from './Comments';
import useStyles from './Task.styles';
import DeleteComponent from './Delete';

interface Props { 
    task: Task;
    onDelete: (t: Task) => void;
}

interface TextFieldValue {
  value: string;
  focus?: Function;
}

enum Expanded {
  None, Comments, Blockers
}

export default function TaskComponent(props: Props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(Expanded.None);
  const [task, setTask] = useState<Task>();
  const [loading, setLoading] = useState(true);
  const nameRef = useRef<TextFieldValue>({value: '' });

  const hydrateTask = function() {
    setTask(props.task);
    setLoading(true);
    ApiService.getTask(props.task.id).then(hydratedTask => {
        setLoading(false);
        setTask(hydratedTask);
        nameRef.current.value = hydratedTask.name;
    });
  }

  const deleteTask = function() {
    if (!loading) {
      setLoading(true);    
      ApiService.deleteTask(props.task).then(() => {
        setLoading(false);
        props.onDelete(props.task);
      });
    }
  }
  
  const submitOnEnter = function(ev: any) {
    if (ev.key === 'Enter') {
      ev.preventDefault();      
      // UpdateTask();
    }
  }

  useEffect(() => {
    hydrateTask();
  }, [props.task]);

  const handleExpandClick = (type: Expanded) => {
    setExpanded(type === expanded ? Expanded.None : type);
  };

  const createdDate: string = task ? dayjs(task.createdAt).format('DD/MM/YYYY') : '';

  return task ? (
    <div className={classes.root}>
      <div className={classes.row}>
        <CheckBoxOutlineBlankOutlined></CheckBoxOutlineBlankOutlined>
        <TextField className={classes.form} id="name" inputRef={nameRef} disabled={loading} onKeyPress={submitOnEnter}/>
        <IconButton aria-label="blockers" onClick={() => handleExpandClick(Expanded.Blockers)} aria-expanded={expanded === Expanded.Blockers}>
          {task?.hasBlockers?.items?.length ? <PauseCircleOutline /> : <PauseCircleFilled />}
        </IconButton>
        <IconButton aria-label="comments" onClick={() => handleExpandClick(Expanded.Comments)} aria-expanded={expanded === Expanded.Comments}>
          {task?.comments?.items?.length ? <CommentOutlined /> : <ModeCommentOutlined />}
        </IconButton>
        <IconButton aria-label="mark as done">
          {task?.status === Status.DONE ? <Done /> : <DoneOutline/> }
        </IconButton>
        <DeleteComponent label="task" onDelete={deleteTask}></DeleteComponent>      
      </div>
      <div className={expanded !== Expanded.None ? classes.expanded : undefined}>
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
      </div>
    </div>
  ) : null;
}