import index from '../../app/json/index.json'
import React from 'react';
import './style.scss'

function BasicInfo(props) {
    const info = index.map(item => 
        <div className='table'>
            <div className='card'>Witaj {item.name}</div>
        <div className='row'>
            <div className='column'><div className="card"><p><strong>Twoja liczba obserwujących</strong></p><p>{item.followers}</p></div></div>
            <div className='column'><div className='card'><p><strong>Liczba osób, które obserwujesz</strong></p><p>{item.following}</p></div> </div>
        </div>
        </div>);
    return (<div className="engagement"> 
        {info}
    </div>);
}
export default BasicInfo;