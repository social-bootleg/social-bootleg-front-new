import {getEngagement} from '../../app/api';
import engagement from '../../app/json/engagement.json'
import React from 'react';

function Engamement(props) {
    const eng = engagement.map(item => 
        <div>
            <p>Twoja liczba komentarzy: {item.comments}</p> 
            <p>Twoja liczba like'ów: <b>{item.likes}</b></p>
            <p>Zaangazowanie odbiorców: {item.engagement} %</p>
        </div>);
    // <ListItem key ={title} value={value} />);
    return (<div className="engagement"> 
        {eng}
    </div>);
}
export default Engamement;