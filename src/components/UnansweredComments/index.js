import unanswered_comments from '../../app/json/unanswered_comments.json'
import React from 'react';
import './styles.css'

function UnansweredComments(props) {
    const comments = unanswered_comments.map(item =>
        <table>
            <tr>
                <td>{item.author}</td><td>{item.text}</td><td>{item.date}</td>
            </tr>
        </table>
        );
    return (
        <div className="comments" id="comments">
            <div>
                <p> Komentarze bez odpowiedzi </p>
                <details>
                    <summary>Dlaczego pokazujemy Ci komentarze, na które jeszcze nie ma odpowiedzi?</summary>
                    <p>W mediach społecznościowych szczególnie ważna jest interkacja z innymi użytkownikami.</p>
                    <p>Jeśli więc odpowiadasz na pytania swoich fanów – chętniej będą do Ciebie wpadać!</p>
                    <p>Dodatkowo - algorytm Instagrama promuje profile z większą aktywnością fanów.</p>
                </details>
                </div>
            {comments}
        </div>);
}
export default UnansweredComments;