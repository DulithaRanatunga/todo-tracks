import React, { useState, useEffect } from 'react';
import './Tracks.css';
import GroupingComponent from './Grouping';
import ApiService from '../services/ApiService';
import { Grouping } from '../graphql/APITypes';


function TracksComponent() {
  const [tracks, setTracks] = useState<Grouping[]>([]);

  const filterGroups = function(gs: Grouping[]): Grouping[] {
    // Only show top level groups.    
    return gs.filter(g => !g.parent);
  }

  useEffect(() => {
    ApiService.getGroupings().then(groups => setTracks(filterGroups(groups)));
  }, []);
  
  return (    
    <div>
      {tracks.map((group) => <GroupingComponent key={group.id} group={group}/>)}
    </div>
  );
}

export default TracksComponent;