import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTwitterSquare} from '@fortawesome/free-brands-svg-icons'

const Tweet = ({id, href, target})=>{
        return(
            <a id={id} href={href} target={target}><FontAwesomeIcon className ="fa-3x" icon={faTwitterSquare} color="aqua" fontSize = '100rem'/></a>
        );
}


export default Tweet;