import React, { useRef, useState } from "react";
function Search({ setNewUrl }) {
  const searchText = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const query = searchText.current.value;
    setNewUrl(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={searchText}  placeholder=" ✍ Write what you want and I will find it 😉"/>
      <button>Search</button>
    </form>
  );
}

export default Search;
