import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import meme from "./Data/index.json";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"} min-h-screen flex flex-col items-center justify-center p-4`}>
      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700"
      >
        {darkMode ? (
          <FaMoon className="h-6 w-6 text-gray-800" />
        ) : (
          <FaSun className="h-6 w-6 text-yellow-500" />
        )}
      </button>

      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-6">Dharma Gyan</h1>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-full lg:w-[1200px]">
        {meme.map((video) => (
          <div
            key={video.id}
            className={`${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"} p-4 rounded-lg shadow-md cursor-pointer`}
            onClick={() => setSelectedVideo(video)}
          >
            <img
              src={video.image}
              alt={video.title}
              className={`w-full h-40 object-contain ${darkMode ? "bg-gray-700" : "bg-stone-100"} rounded-md`}
            />
            <h2 className="mt-2 text-center font-semibold">{video.title}</h2>
          </div>
        ))}
      </div>

      {/* Dialog Box for Video Play */}
      <Dialog
        open={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      >
        <div className={`${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"} p-6 rounded-lg shadow-lg w-[700px] w-full`}>
          {selectedVideo && (
            <>
              <h2 className="text-xl font-bold mb-4">{selectedVideo.title}</h2>
              <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                <video
                  src={selectedVideo.video}
                  controls
                  className={`absolute top-0 left-0 w-full h-full object-${selectedVideo.type} rounded-md`}
                  autoPlay
                />
              </div>
              <div className="mt-4 flex justify-between">
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md"
                >
                  Close
                </button>
                <a
                  href={selectedVideo.video}
                  download
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                  Download
                </a>
              </div>
            </>
          )}
        </div>
      </Dialog>
    </div>
  );
};

export default App;
