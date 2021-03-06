import React, { useState } from "react";

// Styles
import "./style.scss";

const HashtagSearch = props => {
  const [searchTerm, setSearchTerm] = useState("");
  const [toggleReset, setToggleReset] = useState(false);

  const onInputChange = event => {
    const value = event.target.value;
    setSearchTerm(value);
    if (!value.length) {
      props.search(value);
    }
  };

  const handleSearchReset = () => {
    setToggleReset(false);
    props.resetSearch("");
  };

  const handleSubmit = event => {
    event.preventDefault();
    setSearchTerm("");

    if (searchTerm.length > 2) {
      setToggleReset(true);
    } else {
      setToggleReset(false);
    }

    props.search(searchTerm);
  };

  return (
    <div>
      <p>DOBIERZ TAGI</p>
    <form
      className="search-form"
      onSubmit={event => {
        handleSubmit(event);
      }}>
      <div className="form-group">
        <input
          type="text"
          placeholder="Wpisz tu nazwę tagu (bez #), by dobrać pasujące"
          onChange={onInputChange}
          value={searchTerm}
        />
        <button className="primary-btn">Dobierz tagi!</button>
      </div>
    </form>
    </div>
  );
};

export default HashtagSearch;
