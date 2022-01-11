import ghost_followers from '../../app/json/ghost_followers.json'
import React from 'react';

function GhostFollowers(props) {
    const ghosts = ghost_followers.map(item =>
        <div>
            <table>
                <tr>
                    <td>{item.user == '' ? item.username : item.user}</td><td><a href="http://instagram.com/{item.username}">http://instagram.com/{item.username}</a></td>
                </tr>
            </table>

        </div>);
    // <ListItem key ={title} value={value} />);
    return (
        <div className="ghostFollowers">
            <div>
                <details>
                    <summary>Czym są ghost followersi?</summary>
                    Ghost followersi to takie osoby, które mimo obserwowania Twojego profilu nie podejmują z nim żadnych interakcji... <br></br>
                    Poniżej wyswietla się lista tych użytkownikow - zastanów się, jak mozesz przyciągnąć ich uwagę!
                </details>
                </div>
            {ghosts}
        </div>);
}
export default GhostFollowers;