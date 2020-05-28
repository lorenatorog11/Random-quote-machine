import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTwitterSquare} from '@fortawesome/free-brands-svg-icons'

const Tweet = ({id, href})=>{
        return(
            <a id={id} href={href}><FontAwesomeIcon className ="fa-3x" icon={faTwitterSquare} color="aqua" fontSize = '100rem'/></a>
        );
}


export default Tweet;