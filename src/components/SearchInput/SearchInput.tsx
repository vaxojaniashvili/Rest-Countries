import  { useState } from "react";

const SearchInput = ({ onSearch}:any) => {

  const [input, setInput] = useState("");

  const submitHandler = (e:any) => {
    e.preventDefault();
    onSearch(input);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        onChange={(e) => setInput(e.target.value)}
        value={input}
        className="bg-white shadow-xl w-full border h-full rounded-md px-16 outline-none"
        type="search"
        placeholder="Search for a country…"
      />
    </form>
  );
};

export default SearchInput;
