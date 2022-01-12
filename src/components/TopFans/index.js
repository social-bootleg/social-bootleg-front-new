import topFans from '../../app/json/top_fans.json'
import React from 'react';

import './styles.css'

function TopFans(props) {
    const tags = topFans.map(item =>
        <table>
            <tr>
                <td>{item[0]}</td> <td>{item[1]}</td>
            </tr>
        </table>
        );
    return (
        <div className="topFans" id="topFans">
            <p>Top fani</p> 
            <p className='tableText'>Poniżej znajdziesz listę osób, które komentują Twoje posty najczęściej. Nie zapomnij ich odwiedzić!</p>
            <details>
                <summary>Rozwiń listę fanów</summary>
                {tags}
            </details>
        </div>);
}
export default TopFans;