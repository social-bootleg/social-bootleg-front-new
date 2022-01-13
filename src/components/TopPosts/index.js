import top_posts from '../../app/json/mostlikedposts.json'
import React from 'react';
import './styles.css'
import InstagramEmbed from 'react-instagram-embed';
import photo from "../../img/posts/B1J2utxCvTr.jpg"

function TopPosts(props) {
    const topPosts = top_posts.map(item =>
        <li className="zoom-on-hover">
            <a href={item.picture_url}>
                <div className="postImage">
                    <img src={item.filename}/>
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