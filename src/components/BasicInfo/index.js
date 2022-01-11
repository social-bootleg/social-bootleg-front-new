import index from '../../app/json/index.json'
import React from 'react';

function BasicInfo(props) {
    const info = index.map(item => 
        <div>
            <p>Witaj {item.name}!</p>
        <table>
            <tr><td>Twoja liczba obserwujących</td><td>{item.followers}</td></tr> 
            <tr><td>Liczba osób, które obserwujesz</td><td>{item.following}</td></tr> 
        </table>
        </div>);
    return (<div className="engagement"> 
        {info}
    </div>);
}
export default BasicInfo;