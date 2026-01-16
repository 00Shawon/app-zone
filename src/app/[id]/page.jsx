
import apps from '../../../public/appData.json';
import React from "react";
import DownloadButton from '../components/DownloadButton';



export default async function AppDetails({ params }) {
  const { id } = await params;

  // Find the app
  const app = apps.find((item) => String(item.id) === id);

  if (!app) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl font-semibold">App not found</h1>
      </div>
    );
  }
  const handleDownload = (e) => {
    e.preventDefault();
    alert(`Downloading ${app.title}...`);
    
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-indigo-500 to-purple-600 h-64 md:h-80 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative flex flex-col items-center gap-4">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <img
              src={app.image}
              alt={app.title}
              className="object-cover w-full h-full"
            />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold">{app.title}</h1>
          <p className="text-base md:text-lg text-white/80">{app.companyName}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 md:px-0 mt-20 space-y-10">
        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 text-center">
            <h2 className="text-xl font-semibold">Rating</h2>
            <p className="text-2xl font-bold text-yellow-400 mt-2">{app.ratingAvg} ⭐</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{app.reviews.toLocaleString()} Reviews</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 text-center">
            <h2 className="text-xl font-semibold">Downloads</h2>
            <p className="text-2xl font-bold text-indigo-500 mt-2">{(app.downloads / 1_000_000).toFixed(1)}M+</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 text-center">
            <h2 className="text-xl font-semibold">Size</h2>
            <p className="text-2xl font-bold text-purple-500 mt-2">{app.size} MB</p>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
          <h2 className="text-2xl font-semibold mb-4">About the App</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{app.description}</p>
        </div>

        {/* Ratings Breakdown */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
          <h2 className="text-2xl font-semibold mb-4">Ratings Breakdown</h2>
          <div className="space-y-3">
            {app.ratings.map((rate) => {
              const percentage = Math.round((rate.count / app.reviews) * 100);
              return (
                <div key={rate.name} className="flex items-center gap-3">
                  <span className="w-14 text-sm">{rate.name}</span>
                  <div className="flex-1 h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-3 bg-yellow-400"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                  <span className="w-16 text-sm text-right text-gray-500 dark:text-gray-400">
                    {rate.count.toLocaleString()}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sticky Download Button */}
        <DownloadButton appTitle={app.title} />
      </div>
    </div>
  );
}
