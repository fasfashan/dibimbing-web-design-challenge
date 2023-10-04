export default function Header() {
  return (
    <header className="bg-[url('/bg-header.jpg')] p-4 flex justify-center bg-cover bg-center min-h-screen">
      <div className="flex md:max-w-4xl 2xl:max-w-6xl space-y-4 flex-col justify-center text-center">
        <a href="/">
          {" "}
          <img className="mx-auto" src="/Logo.svg" alt="Logo" width="80" />
        </a>

        <h1 className="text-white leading-tight md:text-6xl text-4xl font-bold">
          Menjelajahi Keindahan Gunung Berapi Indonesia
        </h1>
        <p className="text-gray-300 text-lg">
          Meskipun gunung berapi sering kali dihubungkan dengan potensi bahaya
          dan letusan yang merusak, keindahan alamnya juga patut diakui. Di
          bawah Amerika Serikat dan Rusia, Indonesia berada di nomor 3 negara
          dengan jumlah gunung berapi terbanyak di dunia.
        </p>
        <button className="bg-black text-white shadow-md px-6 py-2 rounded-md self-center">
          <a className="" href="#filter">
            Jelajahi Sekarang👇🏻
          </a>
        </button>
      </div>
    </header>
  );
}
