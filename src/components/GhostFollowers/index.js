import React, { useEffect, useState } from 'react';
import { getGhostFollowers } from '../../app/api'
import { Config } from '../../constants/constants';

function GhostFollowers(props) {
    const [ghost_followers, setGhosts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await getGhostFollowers(Config.USER);
                setGhosts(res);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);

    const ghosts = ghost_followers.map(item =>
        <tr class="row100 body">
            <td class="cell100 column1">{item.user == '' ? item.username : item.user}</td><td class="cell100 column2"><a href={`http://instagram.com/${item.username}`}>http://instagram.com/{item.username}</a></td>
        </tr>);
    // <ListItem key ={title} value={value} />);
    return (
        <div className="ghostFollowers" id="ghostFollowers">
            <div>
                <p>Ghost followersi</p>
                <details>
                    <summary>Czym są ghost followersi?</summary>
                    Ghost followersi to takie osoby, które mimo obserwowania Twojego profilu nie podejmują z nim żadnych interakcji... <br></br>
                    Poniżej wyswietla się lista tych użytkownikow - zastanów się, jak mozesz przyciągnąć ich uwagę!
                </details>
                <details>
                    <summary>Rozwiń listę</summary>
                    <div class="container-table100">
                        <div class="wrap-table100">
                            <div class="table100 ver1 m-b-110">
                                <div class="table100-head">
                                    <table>
                                        <thead>
                                            <tr class="row100 head">
                                                <th class="cell100 column1">Użytkownik</th>
                                                <th class="cell100 column2">Link do profilu</th>
                                            </tr>
                                        </thead>
                                        {ghosts}
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </details>
            </div>


        </div>);
}
export default GhostFollowers;