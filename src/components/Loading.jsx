import React from "react";
import { PuffLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-200 z-50">
      <PuffLoader color="#2a004e" size={150} />
    </div>
  );
};

export default Loading;
