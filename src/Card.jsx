const shapeMeanings = {
  stratovulkan:
    "Stratovolcano: A tall, conical volcano composed of layers of hardened lava, tephra, and volcanic ash.",
  perisai:
    "Perisai: A shield volcano with gentle slopes and built up primarily by the flow of low-viscosity basaltic lava.",
  kompleks:
    "Kompleks: Complex volcano with multiple vents and sub-vents, often forming overlapping calderas.",
  supervulkan:
    "Supervolcano: A volcano capable of producing an eruption with an ejecta volume greater than 1,000 cubic kilometers.",
  fumarol:
    "Fumarol: A vent in the Earth's crust that emits steam and gases, often found near volcanoes.",
  kaldera:
    "Kaldera: A large volcanic crater, typically formed by the collapse of a volcano after an eruption.",
  "kerucut bara":
    "Kerucut Bara: Translates to 'Cinder Cone' - a steep conical hill of volcanic fragments that accumulate around and downwind from a vent.",
  "bawah laut": "shfjkasfkjashfhaskjgdfjkasgfjk",
  "N/A": "wuyr8eyrwyeruweyy",
  "kerucut piroklastik": "wuyr8eyrwyeruweyy",
  kerucut: "wuyr8eyrwyeruweyy",
  "kubah lava": "wuyr8eyrwyeruweyy",
  gabungan: "wuyr8eyrwyeruweyy",
};
export default function Card({ key, nama, tinggi_meter, geolokasi, bentuk }) {
  return (
    <div
      className="bg-white space-y-1 p-4 rounded-md border col-span-4 border-gray-200 shadow-sm hover:scale-95 ease-in duration-100"
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
        Bentuk:{" "}
        <span className="text-gray-600 font-normal capitalize  text-sm">
          {bentuk}
        </span>{" "}
      </p>
      {shapeMeanings[bentuk] && (
        <p className="text-gray-600 px-2 py-2 bg-gray-100 rounded-md text-xs ">
          {shapeMeanings[bentuk]}
        </p>
      )}
    </div>
  );
}
