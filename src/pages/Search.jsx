import React from "react";

const Search = ({ setSearchTerm }) => {
  return (
    <div className="flex justify-center my-4">
      <input
        type="text"
        placeholder="Ürün Ara..."
        className="w-2/3 md:w-1/3 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default Search;
