const bentukLinks = {
  stratovulkan: "https://id.wikipedia.org/wiki/Gunung_berapi_kerucut",
  kompleks: "https://id.wikipedia.org/wiki/Gunung_berapi_kompleks",
  "bawah laut": "https://id.wikipedia.org/wiki/Gunung_api_bawah_laut",
  kaldera: "https://id.wikipedia.org/wiki/Kaldera",
  gabungan: "https://id.wikipedia.org/wiki/Gunung_berapi_gabungan",
  "kerucut bara": "https://id.wikipedia.org/wiki/Kerucut_bara",
  supervulkan: "https://id.wikipedia.org/wiki/Supervulkan",
};

export default function Card({ key, nama, tinggi_meter, geolokasi, bentuk }) {
  return (
    <div
      className="bg-white space-y-2 p-4 rounded-md border md:col-span-4 col-span-12 border-gray-200 shadow-sm hover:scale-95 ease-in duration-100"
      key={key}
    >
      <img
        className="w-full rounded-md"
        src={`/Gunung ${nama}.jpg`}
        alt={nama}
        onError={(e) => {
          e.target.src = "/placeholder.png";
          e.target.alt = "Placeholder";
        }}
      />
      <h2 className="font-medium text-sm">
        Nama Gunung:{" "}
        <span className="text-gray-600 font-normal capitalize  text-sm">
          {nama}
        </span>{" "}
      </h2>
      <p className="font-medium text-sm">
        Tinggi:{" "}
        <span className="text-gray-600 font-normal capitalize  text-sm">
          {tinggi_meter}
        </span>{" "}
      </p>

      <p className="font-medium text-sm">
        Geolokasi:{" "}
        <span className="text-gray-600 font-normal capitalize  text-sm">
          {geolokasi}
        </span>{" "}
      </p>
      <p className="font-medium text-sm">
        Bentuk:
        {bentuk && bentukLinks[bentuk.toLowerCase()] ? (
          <a
            target="_blank"
            className="capitalize underline text-gray-600"
            href={bentukLinks[bentuk.toLowerCase()]}
          >
            {bentuk}
          </a>
        ) : bentuk || bentuk === "N/A" ? (
          <span>Belum Diketahui</span>
        ) : (
          ""
        )}
      </p>
    </div>
  );
}
