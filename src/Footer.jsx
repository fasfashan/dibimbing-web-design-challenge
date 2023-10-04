export default function Footer() {
  return (
    <footer className="max-w-6xl m-auto text-center mt-20 px-4 space-y-4 mb-8">
      <p>
        Data di atas diambil dari public API. Kamu bisa melihatnya di{" "}
        <a
          className="underline"
          target="_blank"
          href="https://github.com/yogski/indonesia-public-static-api#api-gunung-berapi-indonesia-apivolcanoes"
        >
          sini
        </a>{" "}
      </p>
      <button className="bg-white border border-gray-200 text-black shadow-md px-6 py-2 rounded-md self-center">
        <a className="text-sm" href="#header">
          Kembali ke atas🔝
        </a>
      </button>
      <p className="text-sm ">© {new Date().getFullYear()} Fasha Fadillah</p>
    </footer>
  );
}
