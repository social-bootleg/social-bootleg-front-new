import topFans from '../../app/json/top_fans.json'
import React from 'react';

import './styles.css'

function TopFans(props) {
    const tags = topFans.map(item =>
        <tr class="row100 body">
            <td class="cell100 column1">{item[0]}</td> <td class="cell100 column2">{item[1]}</td>
        </tr>
    );
    return (
        <div className="topFans" id="topFans">
            <p>Top fani</p>
            <p className='tableText'>Poniżej znajdziesz listę osób, które komentują Twoje posty najczęściej. Nie zapomnij ich odwiedzić!</p>
            <details>
                <div class="container-table100">
                    <div class="wrap-table100">
                        <div class="table100 ver1 m-b-110">
                            <div class="table100-head">
                                <table>
                                    <summary>Rozwiń listę fanów</summary>
                                    <thead>
                                        <tr class="row100 head">
                                            <th class="cell100 column1">Użytkownik</th>
                                            <th class="cell100 column2">Liczba komentarzy</th>
                                        </tr>
                                    </thead>
                                    {tags}
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </details>
        </div>);
}
export default TopFans;