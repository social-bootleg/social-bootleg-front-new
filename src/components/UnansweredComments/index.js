import unanswered_comments from '../../app/json/unanswered_comments.json'
import React from 'react';
import './styles.css'

function UnansweredComments(props) {
    const comments = unanswered_comments.map(item =>
        <tr class="row100 body">
            <td class="cell100 column1">{item.author}</td><td class="cell100 column2">{item.text}</td><td class="cell100 column3">{item.date}</td>
        </tr>
    );
    return (
        <div className="comments" id="comments">
            <div>
                <p> Komentarze bez odpowiedzi </p>
                <details>
                    <summary>Dlaczego pokazujemy Ci komentarze, na które jeszcze nie ma odpowiedzi?</summary>
                    W mediach społecznościowych szczególnie ważna jest interkacja z innymi użytkownikami.<br></br>
                    Jeśli więc odpowiadasz na pytania swoich fanów – chętniej będą do Ciebie wpadać! <br></br>
                    Dodatkowo - algorytm Instagrama promuje profile z większą aktywnością fanów.<br></br>
                </details>
            </div>
            <details>
                <summary>Rozwiń listę komentarzy</summary>
                <div class="container-table100">
                    <div class="wrap-table100">
                        <div class="table100 ver1 m-b-110">
                            <div class="table100-head">
                                <table>
                                    <thead>
                                        <tr class="row100 head">
                                            <th class="cell100 column1">Autor</th>
                                            <th class="cell100 column2">Treść</th>
                                            <th class="cell100 column2">Data</th>
                                        </tr>
                                    </thead>
                                    {comments}
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </details>

        </div>);
}
export default UnansweredComments;