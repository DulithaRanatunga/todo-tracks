import React, { useState, useEffect } from 'react';
import './Tracks.css';
import GroupingComponent from './Grouping';
import ApiService from '../services/ApiService';
import { Event, Grouping } from '../graphql/APITypes';
import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import EventComponent from './Event';
import { WatchLater } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexFlow: 'row nowrap'
    },
    groups: {
      flexGrow: 1
    },    
    eventHeader: {
      padding: theme.spacing(1),
      borderBottom: '1px solid #ddd',
      display: 'flex',
      flexFlow: 'row nowrap',
      alignItems: 'center'
    },
    eventContent: {
      padding: theme.spacing(1),
      "& > div": {
        marginTop: theme.spacing(1)
      }      
    }
  }),
);


function TracksComponent() {
  const classes = useStyles();

  const [tracks, setTracks] = useState<Grouping[]>([]);
  const [events, setEvents] = useState<Event[]>([]);

  const filterGroups = function(gs: Grouping[]): Grouping[] {
    // Only show top level groups.    
    return gs.filter(g => !g.parent);
  }

  useEffect(() => {
    ApiService.getGroupings().then(groups => setTracks(filterGroups(groups)));
    ApiService.getEvents().then(e => setEvents(e));
  }, []);
  
  return (    
    <div className={classes.root}>
      <div className={classes.groups}>
        {tracks.map((group) => <GroupingComponent key={group.id} group={group}/>)}
      </div>
      <div>
        <div className={classes.eventHeader}>
          <WatchLater/>
          <Typography>Events</Typography>
        </div>
        <div className={classes.eventContent}>
          {events.map((e) => <EventComponent key={e.id} event={e} />)}
        </div>        
      </div>        
    </div>
  );
}

export default TracksComponent;