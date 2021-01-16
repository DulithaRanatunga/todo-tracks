import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Grouping, Task } from '../graphql/APITypes';
import ApiService from '../services/ApiService';
import { Grid } from '@material-ui/core';
import TaskComponent from './Task';
import {useStyles, Accordion, AccordionDetails, AccordionSummary} from './Grouping.styles';
import AddGroupComponent from './AddGroup';

interface Props { 
    group: Grouping;
}

export default function GroupingComponent(props: Props) {
  const classes = useStyles();
  const [group, setGroup] = useState<Grouping>();
  const [loading, setLoading] = useState(true);
 
  const updateGroup = function() {
    setGroup(props.group);
    setLoading(true);
    ApiService.getGrouping(props.group.id).then(hydratedGroup => {
        setLoading(false);
        setGroup(hydratedGroup);
    });
  }

  const addChild = function(newGroup: Grouping) {
    const children: any[] = group?.children?.items || [];
    children.push(newGroup);
    setGroup(Object.assign({}, group, { children: { items: children }}));
  }

  useEffect(() => {
    updateGroup();
  }, [props.group]);
  
  return (
    <div>
    {group &&
        <Accordion defaultExpanded={true}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="track-content"
            id="track-header"
            >
            <Typography>{group.name}</Typography>
            <div className={classes.addGroup} onClick={(e) => e.stopPropagation()}>
              <AddGroupComponent parent={group} onCreate={addChild}></AddGroupComponent>
            </div>
            </AccordionSummary>
            <AccordionDetails>
            {loading ? (<Typography>Loading</Typography>) :             
              (<div>
                {!!group.children?.items?.length &&
                  <React.Fragment>
                    <Grid container direction="column">
                      {group.children.items.map((child) => <GroupingComponent key={child?.id} group={child as Grouping} />)}
                    </Grid>
                    <hr/>
                  </React.Fragment>
                }
                {!!group.tasks?.items?.length &&         
                  <React.Fragment>
                    <Grid container direction="column" spacing={2}>
                      {group.tasks.items.map((task) => {
                        return <Grid item><TaskComponent key={task?.id} task={task as Task} /></Grid>
                      })}
                    </Grid>
                  </React.Fragment>
                }
              </div>)}
            </AccordionDetails>
        </Accordion>      
    }
    </div>
  );
}
