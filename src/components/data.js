import React from 'react'
import Database from '../database.js';

function DataDisplay(props) {
    return (
        <div>
            <p>{props.id}</p>
            <p>{props.name}</p>
            <p>{props.phone}</p>
            <p>{props.email}</p>
        </div>
    )
}