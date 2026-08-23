"use client";

import { useState } from "react";

const studySpots = [
  {
    id: 1,
    name: "Central Library",
    location: "Main Campus",
    noise: "Low",
    wifi: "Excellent",
    outlets: 18,
    crowd: "Low",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Student Center",
    location: "Block A",
    noise: "Medium",
    wifi: "Excellent",
    outlets: 12,
    crowd: "Medium",
    rating: 4.5,
  },
  {
    id: 3,
    name: "Engineering Study Room",
    location: "Engineering Block",
    noise: "Low",
    wifi: "Good",
    outlets: 20,
    crowd: "High",
    rating: 4.6,
  },
  {
    id: 4,
    name: "Campus Cafe",
    location: "Food Court",
    noise: "High",
    wifi: "Good",
    outlets: 8,
    crowd: "High",
    rating: 4.2,
  },
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [noise, setNoise] = useState("All");
  const [wifi, setWifi] = useState("All");

  const filteredSpots = studySpots.filter((spot) => {
    const searchMatch =
      spot.name.toLowerCase().includes(search.toLowerCase()) ||
      spot.location.toLowerCase().includes(search.toLowerCase());

    const noiseMatch =
      noise === "All" || spot.noise === noise;

    const wifiMatch =
      wifi === "All" || spot.wifi === wifi;

    return searchMatch && noiseMatch && wifiMatch;
  });

  return (
    <main className="min-h-screen bg-gray-100">

      {/* HEADER */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

          <div>
            <h1 className="text-3xl font-bold text-blue-600">
              StudySpot
            </h1>

            <p className="text-gray-500">
              Find your perfect campus study place
            </p>
          </div>

          <button
            onClick={() => alert("Add Study Spot feature coming soon!")}
            className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700"
          >
            + Add Study Spot
          </button>

        </div>
      </header>


      {/* HERO */}
      <section className="bg-blue-600 text-white py-16">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Find the Perfect Place to Study
          </h2>

          <p className="text-blue-100 text-lg mb-8">
            Find study places based on Wi-Fi, noise,
            outlets and crowd level.
          </p>

          <input
            type="text"
            placeholder="Search library, cafe, study room..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-2xl px-5 py-4 rounded-xl text-black outline-none"
          />

        </div>

      </section>


      {/* FILTERS */}
      <section className="max-w-7xl mx-auto px-6 py-8">

        <div className="bg-white rounded-xl shadow p-6">

          <h2 className="text-xl font-bold mb-5">
            Filter Study Spots
          </h2>

          <div className="flex flex-wrap gap-5">

            <div>
              <label className="block text-sm font-medium mb-2">
                Noise Level
              </label>

              <select
                value={noise}
                onChange={(e) => setNoise(e.target.value)}
                className="border rounded-lg px-4 py-2"
              >
                <option value="All">All</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>


            <div>
              <label className="block text-sm font-medium mb-2">
                Wi-Fi Quality
              </label>

              <select
                value={wifi}
                onChange={(e) => setWifi(e.target.value)}
                className="border rounded-lg px-4 py-2"
              >
                <option value="All">All</option>
                <option value="Excellent">Excellent</option>
                <option value="Good">Good</option>
              </select>
            </div>

          </div>

        </div>

      </section>


      {/* MAIN CONTENT */}
      <section className="max-w-7xl mx-auto px-6 pb-12">

        <div className="grid lg:grid-cols-3 gap-8">

          {/* STUDY SPOTS */}
          <div className="lg:col-span-2">

            <div className="flex justify-between items-center mb-6">

              <h2 className="text-2xl font-bold">
                Study Spots
              </h2>

              <span className="text-gray-500">
                {filteredSpots.length} places found
              </span>

            </div>


            <div className="grid md:grid-cols-2 gap-6">

              {filteredSpots.map((spot) => (

                <div
                  key={spot.id}
                  className="bg-white rounded-xl shadow p-6 hover:shadow-xl transition"
                >

                  <div className="flex justify-between mb-5">

                    <div>
                      <h3 className="text-xl font-bold">
                        {spot.name}
                      </h3>

                      <p className="text-gray-500 mt-1">
                        📍 {spot.location}
                      </p>
                    </div>

                    <div className="text-yellow-500 font-bold">
                      ⭐ {spot.rating}
                    </div>

                  </div>


                  <div className="grid grid-cols-2 gap-3">

                    <div className="bg-gray-100 p-3 rounded-lg">
                      <p className="text-sm text-gray-500">
                        Noise
                      </p>

                      <p className="font-bold">
                        🔊 {spot.noise}
                      </p>
                    </div>


                    <div className="bg-gray-100 p-3 rounded-lg">
                      <p className="text-sm text-gray-500">
                        Wi-Fi
                      </p>

                      <p className="font-bold">
                        📶 {spot.wifi}
                      </p>
                    </div>


                    <div className="bg-gray-100 p-3 rounded-lg">
                      <p className="text-sm text-gray-500">
                        Outlets
                      </p>

                      <p className="font-bold">
                        🔌 {spot.outlets}
                      </p>
                    </div>


                    <div className="bg-gray-100 p-3 rounded-lg">
                      <p className="text-sm text-gray-500">
                        Crowd
                      </p>

                      <p className="font-bold">
                        👥 {spot.crowd}
                      </p>
                    </div>

                  </div>


                  <button
                    onClick={() =>
                      alert(
                        `${spot.name}\nLocation: ${spot.location}\nRating: ${spot.rating}`
                      )
                    }
                    className="w-full bg-blue-600 text-white py-3 rounded-lg mt-5 hover:bg-blue-700"
                  >
                    View Location
                  </button>

                </div>

              ))}

            </div>


            {filteredSpots.length === 0 && (

              <div className="bg-white p-10 rounded-xl text-center mt-5">
                <h3 className="text-xl font-bold">
                  No study spots found
                </h3>

                <p className="text-gray-500 mt-2">
                  Try changing your search or filters.
                </p>
              </div>

            )}

          </div>


          {/* MAP */}
          <div>

            <h2 className="text-2xl font-bold mb-6">
              Campus Map
            </h2>

            <div className="bg-white rounded-xl shadow overflow-hidden">

              <div className="h-[500px] bg-gray-200 flex items-center justify-center">

                <div className="text-center">

                  <div className="text-7xl mb-5">
                    📍
                  </div>

                  <h3 className="text-2xl font-bold">
                    Campus Map
                  </h3>

                  <p className="text-gray-500 mt-2">
                    Google Maps will be added here
                  </p>

                  <button
                    onClick={() =>
                      alert("Google Maps API will be connected here.")
                    }
                    className="bg-blue-600 text-white px-5 py-3 rounded-lg mt-5"
                  >
                    Open Map
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-8">

        <div className="max-w-7xl mx-auto text-center px-6">

          <h2 className="text-2xl font-bold">
            StudySpot
          </h2>

          <p className="text-gray-400 mt-2">
            Find. Study. Focus.
          </p>

          <p className="text-gray-500 mt-5 text-sm">
            © 2026 StudySpot. All rights reserved.
          </p>

        </div>

      </footer>

    </main>
  );
}