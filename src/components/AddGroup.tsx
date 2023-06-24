import React, { useRef, useState } from 'react';
import { Grouping } from '../graphql/APITypes';
import { Button, TextField } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import ApiService from '../services/ApiService';
import useStyles from './AddGroup.styles';

interface Props { 
    parent?: Grouping;
    onCreate: (group: Grouping) => void;
}

interface TextFieldValue {
  value: string;
}

export default function AddGroupComponent(props: Props) {  
  const classes = useStyles();
  const [showForm, setShowForm] = useState<boolean>(false);    
  const nameRef = useRef<TextFieldValue>({value: ''});
  const [loading, setLoading] = useState(false);
  
  const createGroup = function() {    
    if (!loading && nameRef?.current?.value.length) {
      setLoading(true);    
      ApiService.createGrouping(nameRef.current.value, props.parent).then(newGroup => {
        setLoading(false);
        setShowForm(false);
        props.onCreate(newGroup);
      });
    }
  }

  const submitOnEnter = function(ev: any) {
    if (ev.key === 'Enter') {
      ev.preventDefault();      
      createGroup();
    }
  }

  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary" onClick={() => setShowForm(true)}>
        <Add></Add>
        Group
      </Button>
      {showForm && <div>
        <TextField autoFocus className={classes.form} id="name" inputRef={nameRef} disabled={loading} onKeyPress={submitOnEnter}/>
      </div>}
    </div>
  );
}
