import React, { useState } from "react";
// import { BsSearch } from "react-icons/bs";
import { FaSistrix } from "react-icons/fa";

const SearchBox = ({ handleSearch, message }) => {
  const [value, setValue] = useState("");
  return (
    <div>
      <form
        className="btn-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch(value);
        }}
      >
        <input
          type="text"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button type="submit">
          <FaSistrix className="icon-button" />
        </button>

        {message !== "" ? <div>{message}</div> : <div></div>}
      </form>
    </div>
  );
};

export default SearchBox;
