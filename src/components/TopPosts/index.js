// import top_posts from '../../app/json/mostlikedposts.json'
import React, { useEffect, useState } from 'react';
import { getMostLikedPosts } from '../../app/api'
import { Config } from '../../constants/constants';
import './styles.css'

function TopPosts(props) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await getMostLikedPosts(Config.USER);
                setPosts(res);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);

    const topPosts = posts.map(item =>
        <li className="zoom-on-hover">
            <a href={item.picture_url}>
                <div className="postImage">
                    <img src={item.picture_url}/>
                    <div className="caption">
                        <h2>Polubienia: {item.likes} Komentarze: {item.comments}</h2>
                    </div>
                </div>
            </a>
        </li>

    );
    return (
        <div className="topPosts" id="topPosts">
            <p>Najbardziej lubiane posty</p>
            <p className='tableText'>Poniżej znajdziesz listę postów, które są najczęściej lajkowane i komentowane.
                Przeanalizuj, co fajnego udało Ci się w nich stworzyć, aby powtórzyć sukces!</p>
            <details>
                <summary>Rozwiń listę postów</summary>
                <div className="wrapper group">
                    <section id="content">
                        <ul className="grid half-width group">
                            {topPosts}
                        </ul>
                    </section>
                </div>
            </details>
        </div>);
}
export default TopPosts;