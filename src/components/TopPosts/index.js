import top_posts from '../../app/json/mostlikedposts.json'
import React from 'react';
import photo from "../../img/topPost1.jpg"
import './styles.css'

function TopPosts(props) {
    const topPosts = top_posts.map(item =>
        <div className='postTable'>
        <div className='card'>
            <img src={photo} width={500}></img>
        </div>
        <div className='postRow'>
            <div className='column'><div className="card"><p><strong>Polubienia</strong></p><p>{item.likes}</p></div></div>
            <div className='column'><div className='card'><p><strong>Komentarze</strong></p><p>{item.comments}</p></div> </div>
        </div>
        </div>
        // <table>
        //     <tr>
        //         <td>{item.likes}</td> <td>{item.comments}</td>
        //     </tr>
        // </table>
        );
    return (
        <div className="topPosts" id="topPosts">
            <p>Najbardziej lubiane posty</p> 
            <p>Poniżej znajdziesz listę postów, które są najczęściej lajkowane i komentowane.
            Przeanalizuj, co fajnego udało Ci się w nich stworzyć, aby powtórzyć sukces!</p>
            {topPosts}
        </div>);
}
export default TopPosts;