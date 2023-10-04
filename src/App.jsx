import { useState } from "react";
import Header from "./Header";
import Card from "./Card";
import Content from "./Content";
import Footer from "./Footer";

async function getData() {
  const res = await fetch(
    "https://indonesia-public-static-api.vercel.app/api/volcanoes"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
const data = await getData();
const DATA_COUNT = 6;
function App() {
  const [sortBy, setSortBy] = useState("nameAsc");
  const [visibleData, setVisibleData] = useState(DATA_COUNT);
  const sortedData = [...data];
  const loadMore = () => {
    setVisibleData((prevVisibleData) => prevVisibleData + DATA_COUNT);
  };
  let filteredData = sortedData;
  if (sortBy === "nameAsc") {
    filteredData.sort((a, b) => a.nama.localeCompare(b.nama));
  } else if (sortBy === "nameDesc") {
    filteredData.sort((a, b) => b.nama.localeCompare(a.nama));
  } else if (sortBy === "heightAsc") {
    filteredData.sort((a, b) => {
      const heightA = parseInt(a.tinggi_meter, 10) || 0;
      const heightB = parseInt(b.tinggi_meter, 10) || 0;
      if (heightA < 0 && heightB < 0) {
        return heightA - heightB;
      } else {
        return heightA - heightB;
      }
    });
  } else if (sortBy === "heightDesc") {
    filteredData.sort((a, b) => {
      const heightA = parseInt(a.tinggi_meter, 10) || 0;
      const heightB = parseInt(b.tinggi_meter, 10) || 0;
      if (heightA < 0 && heightB < 0) {
        return heightB - heightA;
      } else {
        return heightB - heightA;
      }
    });
  }

  return (
    <>
      <Header />
      <Content />
      <div
        id="filter"
        className="flex mt-20  px-4 sticky border-b 
        } border-gray-200 top-0 py-4 px-2 bg-white z-10 text-sm items-center m-auto max-w-6xl mb-4"
      >
        <label htmlFor="sortSelect" className="mr-2">
          Urutkan data:
        </label>
        <select
          className="border  rounded-md shadow-sm border-gray-200 px-2 py-2"
          id="sortSelect"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="nameAsc">Nama A-Z</option>
          <option value="nameDesc">Nama Z-A</option>
          <option value="heightAsc">Rendah Tinggi</option>
          <option value="heightDesc">Tinggi Rendah</option>
        </select>
      </div>
      <div className="grid max-w-6xl m-auto gap-6 px-4 grid-cols-12 relative mt-8">
        {filteredData.slice(0, visibleData).map((volcano, index) => (
          <Card
            key={index}
            nama={volcano.nama}
            bentuk={volcano.bentuk}
            geolokasi={volcano.geolokasi}
            tinggi_meter={volcano.tinggi_meter}
          />
        ))}
        <div className="col-span-12 flex justify-center">
          {visibleData < filteredData.length && (
            <button
              onClick={loadMore}
              className=" text-sm bg-white border border-gray-200 text-black  col-span-full justify-center  shadow-md px-4 py-2 rounded-md"
            >
              Muat lagi🔃
            </button>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
