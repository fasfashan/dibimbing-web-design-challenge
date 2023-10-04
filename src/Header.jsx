export default function Header() {
  return (
    <header className="bg-[url('/bg-header.jpg')] p-4 flex justify-center bg-cover bg-center min-h-screen">
      <div className="flex md:max-w-4xl 2xl:max-w-6xl space-y-4 flex-col justify-center text-center">
        <h1 className="text-white leading-tight md:text-6xl text-4xl font-bold">
          Menjelajahi Keindahan Gunung Berapi Indonesia
        </h1>
        <p className="text-white text-lg">
          Gunung api adalah tempat keajaiban alam yang tersembunyi. Terowongan
          es, gua-gua rahasia, dane flora endemik tumbuh di ketinggian
          tertinggi. Setiap sudut gunung api memiliki cerita dan misteri yang
          menunggu untuk diungkap.
        </p>
        <button className="bg-black text-white shadow-md px-6 py-2 rounded-md self-center">
          <a className="" href="#volcanoes-list">
            Jelajahi Sekarang
          </a>
        </button>
      </div>
    </header>
  );
}
