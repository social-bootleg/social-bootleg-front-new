import related_tags from '../../app/json/related_tags.json'
import React from 'react';
import './styles.css'

function RelatedTags(props) {
    const tags = related_tags.map(item =>
        <div className="tagCard">
            <p className='tagText'>{item}</p>
        </div>);
    return (
        <div className="tags">
            <div>
                <details>
                    <summary>Dlaczego odpowiednie hashtagi są tak ważne?</summary>
                    <p>Dobre hashtagi pozwalają dotrzeć do większej liczby użytkowników - także tych, którzy dotąd Cię nie obserwowali!.</p>
                </details>
                </div>
            {tags}
            <p>Zaznacz, skopiuj i wklej do swojego posta na Instagramie. </p>
        </div>);
}
export default RelatedTags;