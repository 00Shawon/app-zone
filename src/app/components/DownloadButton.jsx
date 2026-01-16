'use client';

import { useState } from "react";
import toast from "react-hot-toast";

export default function DownloadButton({ appTitle }) {
  const [isDownloaded, setIsDownloaded] = useState("Download Now")
  const handleDownload = () => {
    toast.success("Download Successful !");
    setIsDownloaded('Downloaded');
  };

  return (
    <div className="sticky bottom-4 md:bottom-10 z-50">
      <button
        onClick={handleDownload}
        className="block md:inline-block w-full md:w-auto text-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 px-10 rounded-2xl shadow-lg transition-all duration-300"
      >
        {isDownloaded}
      </button>
    </div>
  );
}