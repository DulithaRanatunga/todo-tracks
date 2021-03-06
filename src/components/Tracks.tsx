import React, { useState, useEffect } from 'react';
import GroupingComponent from './Grouping';
import ApiService from '../services/ApiService';
import { Event, Grouping } from '../graphql/APITypes';
import { Typography } from '@material-ui/core';
import EventComponent from './Event';
import { WatchLater } from '@material-ui/icons';
import useStyles from './Tracks.styles';
import AddGroupComponent from './AddGroup';

function TracksComponent() {
  const classes = useStyles();

  const [tracks, setTracks] = useState<Grouping[]>([]);
  const [events, setEvents] = useState<Event[]>([]);

  const filterGroups = function(gs: Grouping[]): Grouping[] {
    // Only show top level groups.    
    return gs.filter(g => !g.parent);
  }

  const deleteGroup = function(group: Grouping) {
    setTracks(tracks.filter(t => t.id !== group.id));
  }
 
  useEffect(() => {
    ApiService.getGroupings().then(groups => setTracks(filterGroups(groups)));
    ApiService.getEvents().then(e => setEvents(e));
  }, []);

  return (    
    <div>
      <div className={classes.main}>
        <div className={classes.groups}>
          {tracks.map((group) => <GroupingComponent key={group.id} group={group} onDelete={deleteGroup} />)}
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
      <div className={classes.add}>
        <AddGroupComponent onCreate={(group) => setTracks(tracks.concat([group]))}/>      
      </div>       
    </div>
  );
}

export default TracksComponent;