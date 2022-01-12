import top_posts from '../../app/json/mostlikedposts.json'
import React from 'react';
import photo from "../../img/topPost1.jpg"
import './styles.css'
import InstagramEmbed from 'react-instagram-embed';


function TopPosts(props) {
    const topPosts = top_posts.map(item =>
        <li className="zoom-on-hover">
            <a href="http://www.flickr.com/photos/84923476@N00/309452844/">
                <div className="image">
                    <img src="http://farm1.staticflickr.com/111/309452844_365dd1a323_n.jpg" />
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