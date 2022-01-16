import React, { useEffect, useState } from 'react';
import { Config } from '../../constants/constants';
import { getTopFans } from '../../app/api'

import './styles.css'

function TopFans(props) {
    const [topFans, setFans] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await getTopFans(Config.USER);
                setFans(res);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);

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
            <summary>Rozwiń listę fanów</summary>
                <div class="container-table100">
                    <div class="wrap-table100">
                        <div class="table100 ver1 m-b-110">
                            <div class="table100-head">
                                <table>
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