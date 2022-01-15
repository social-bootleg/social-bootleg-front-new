import React, { useEffect, useState } from 'react';
import './style.scss'
import { Config } from '../../constants/constants';
import { getPostsStats } from '../../app/api'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


function PostsStats(props) {
    const [stats, setStats] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await getPostsStats(Config.USER);
                setStats(res);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);

    const labels = [];
    const likes = [];
    const comments = [];
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Statystyki postów wstawianych w dane dni',
            },
        },
    };

    const plotData = {
        labels,
        datasets: [
            {
                label: 'Polubienia',
                data: likes,
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Komentarze',
                data: comments,
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            }

        ]
    };

    stats.map(item => {
        labels.push(item.date)
        likes.push(item.likes)
        comments.push(item.comments)
    });


    return (<div className="posts_stats" id="posts_stats">
        <p>Statystyki postów</p>
        <details>
            <summary>Rozwiń wykres ze statystykami</summary>
            <Bar options={options} data={plotData} />
        </details>
    </div>);
}
export default PostsStats;