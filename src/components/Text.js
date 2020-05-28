import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faQuoteLeft} from '@fortawesome/free-solid-svg-icons'

const Text =({id, value})=>{
    return(
        <>        
        <p id={id}><FontAwesomeIcon icon ={faQuoteLeft} className ="fa-lg"/> {value}</p>
        </>
    );       
    
}

export default Text;