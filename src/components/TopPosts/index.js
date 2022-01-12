import top_posts from '../../app/json/mostlikedposts.json'
import React from 'react';
import photo from "../../img/topPost1.jpg"
import './styles.css'
import InstagramEmbed from 'react-instagram-embed';


function TopPosts(props) {
    const topPosts = top_posts.map(item =>
        <div className='postTable'>
        <div className='postRow'>
            <div className='imageColumn'>
            <img src={photo} width={500}></img>
            </div>
        </div>
        <div className='postRow'>
            <div className='postColumn'><div className="card"><p className='tableText'><strong>Polubienia</strong></p><p className='tableText'>{item.likes}</p></div></div>
            <div className='postColumn'><div className='card'><p className='tableText'><strong>Komentarze</strong></p><p className='tableText'>{item.comments}</p></div> </div>
        </div>
        </div>
       
        );
    return (
        <div className="topPosts" id="topPosts">
            <p>Najbardziej lubiane posty</p> 
            <p className='tableText'>Poniżej znajdziesz listę postów, które są najczęściej lajkowane i komentowane.
            Przeanalizuj, co fajnego udało Ci się w nich stworzyć, aby powtórzyć sukces!</p>
            <details>
                <summary>Rozwiń listę postów</summary>
                {topPosts}
            </details>
           
        </div>);
}
export default TopPosts;