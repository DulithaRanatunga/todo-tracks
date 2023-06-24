import React, { useRef, useState } from 'react';
import { Grouping, Task } from '../graphql/APITypes';
import { TextField } from '@material-ui/core';
import { AddBoxOutlined } from '@material-ui/icons';
import ApiService from '../services/ApiService';
import useStyles from './AddTask.styles';

interface Props { 
    parent?: Grouping;
    onCreate: (task: Task) => void;
}

interface TextFieldValue {
  value: string;
  focus?: Function;
}

export default function AddTaskComponent(props: Props) {  
  const classes = useStyles();
  const nameRef = useRef<TextFieldValue>({value: '' });
  const [loading, setLoading] = useState(false);
  
  const createTask = function() {    
    if (!loading && nameRef?.current?.value.length) {
      setLoading(true);    
      ApiService.createTask(nameRef.current.value, props.parent).then(task => {
        setLoading(false);
        props.onCreate(task);
        if (nameRef.current && nameRef.current.focus) {
          nameRef.current.value = "";
          nameRef.current.focus();
        }
      });
    }
  }

  const submitOnEnter = function(ev: any) {
    if (ev.key === 'Enter') {
      ev.preventDefault();      
      createTask();
    }
  }

  return (
    <div className={classes.root}>
      <AddBoxOutlined></AddBoxOutlined>
      <TextField autoFocus label="Add Task" className={classes.form} id="name" inputRef={nameRef} disabled={loading} onKeyPress={submitOnEnter}/>
    </div>
  );
}
