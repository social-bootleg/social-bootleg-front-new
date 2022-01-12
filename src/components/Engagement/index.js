import {getEngagement} from '../../app/api';
import engagement from '../../app/json/engagement.json'
import React from 'react';
import './style.scss'

function Engamement(props) {
    const eng = engagement.map(item => 
        <div className='engagementTable'>
            <div className='engagementRow'>
                <div className='engagementColumn'><div className='engagementCard'>Twoja liczba komentarzy: {item.comments}</div> </div>
                <div className='engagementColumn'><div className='engagementCard'>Twoja liczba like'ów: <b>{item.likes}</b></div></div>
                <div className='engagementColumn'><div className='engagementCard'>Zaangażowanie odbiorców: {item.engagement} %</div></div>
            </div>
        </div>);
    return (<div className="engagement"> 
        {eng}
    </div>);
}
export default Engamement;