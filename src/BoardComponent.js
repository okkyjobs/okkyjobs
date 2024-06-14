import React from 'react';
import { useParams } from 'react-router-dom';


function BoardComponent() {
    const { boardTag } = useParams();
  
    return (
      <div>
        <h1>Board Tag: {boardTag}</h1>
      </div>
    );
  }
  
  export default BoardComponent;