import { getEngagement } from '../../app/api';
import React, { useEffect, useState } from 'react';
import './style.scss'
import { Config } from '../../constants/constants';

function Engamement(props) {
    const [engagement, setEngagement] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await getEngagement(Config.USER);
                setEngagement(res);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);
    return (
        <div className='engagementTable'>
            <p>Zaangażowanie</p>
            <div className='engagementRow'>
                <div className='engagementColumn'><div className='engagementCard'>Twoja liczba komentarzy: {engagement.comments}</div> </div>
                <div className='engagementColumn'><div className='engagementCard'>Twoja liczba like'ów: <b>{engagement.likes}</b></div></div>
                <div className='engagementColumn'><div className='engagementCard'>Zaangażowanie odbiorców: {engagement.engagement} %</div></div>
            </div>
        </div>);
}

export default Engamement;