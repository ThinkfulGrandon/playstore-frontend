import React from 'react';

export default function ReturnedApps(props) {
    return(
        <div className="app-list">
            <h2>{ props.App }</h2>
            <p>{ props.rating }</p>
            <p>{ props.price }</p>
        </div>
    )
}