const Sorting = ({ setSort }) => {
  return (
    <select
      className="bg-gray-100 border-y border-r border-gray-300 h-[70px] md:px-5 text-black  font-semibold flex items-center justify-end  rounded-r-[10px] w-2/12"
      onChange={(e) => setSort(e.target.value)}
    >
      <option
        value=""
        disabled
        className="bg-gray-400 text-white font-semibold"
      >
        SEÇİNİZ
      </option>
      <option value="inc" className=" font-semibold">
        Artan
      </option>
      <option value="dec" className=" font-semibold">
        Azalan
      </option>
    </select>
  );
};

export default Sorting;
