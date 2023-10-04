export default function Content() {
  return (
    <>
      <div className="mt-14 gap-x-4  px-4 gap-y-10 grid items-center grid-cols-12 max-w-6xl m-auto">
        <div className="md:col-span-7 col-span-12">
          <h1 className="text-4xl font-semibold mb-4">
            Jumlah Gunung Api Aktif✨
          </h1>
          <p className="text-gray-600">
            Indonesia, tanah api, adalah rumah bagi sejumlah gunung api yang
            menakjubkan. Saat ini, terdapat lebih dari 100 gunung yang tersebar
            di seluruh kepulauan. Informasi ini mungkin akan diperbarui secara
            berkala untuk memberikan pemahaman yang akurat tentang kondisi
            gunung api di Indonesia.
          </p>
        </div>
        <figure className="md:col-span-5 col-span-12">
          <img
            className="w-full rounded-md"
            src="/Gunung Sindoro.jpg"
            alt="Gunung Sindoro"
          />
          <figcaption className="text-center text-sm italic text-gray-400 mt-2">
            Sumber: https://unsplash.com/@hamzahanafi_
          </figcaption>
        </figure>
      </div>
      <div className="mt-20 gap-x-4  px-4 gap-y-10 grid items-center grid-cols-12 max-w-6xl m-auto">
        <div className="md:col-span-7 col-span-12">
          <h1 className="text-4xl font-semibold mb-4">
            Keindahan yang Menyelubungi Bahaya🌋
          </h1>
          <p className="text-gray-600">
            Meskipun dikenal sebagai tempat yang berpotensi berbahaya, gunung
            api di Indonesia juga merupakan keajaiban alam yang luar biasa. Dari
            puncak yang menjulang hingga lembah yang hijau, setiap gunung api
            memiliki pesona dan karakteristiknya sendiri.
          </p>
        </div>
        <figure className="md:col-span-5 col-span-12">
          <img
            className="w-full rounded-md"
            src="/Bromo.jpg"
            alt="Gunung Bromo"
          />
          <figcaption className="text-center text-sm italic text-gray-400 mt-2">
            Sumber: https://unsplash.com/@mlapergolaphoto
          </figcaption>
        </figure>
      </div>
      <div className="mt-20 gap-x-4  px-4 gap-y-10 grid items-center grid-cols-12 max-w-6xl m-auto">
        <div className="md:col-span-7 col-span-12">
          <h1 className="text-4xl font-semibold mb-4">
            Manfaat Gunung Berapi🗻
          </h1>
          <ol className="list-decimal text-sm text-gray-600 pl-4">
            <li className="">
              <span className="text-black font-medium">Tanah yang subur:</span>{" "}
              Lahan di sekitar gunung berapi seringkali sangat subur karena
              letusan vulkanik menghasilkan material seperti abu vulkanik yang
              kaya akan nutrisi. Ini membuat tanah cocok untuk pertanian.
            </li>
            <li className="">
              <span className="text-black font-medium">Sumber panas bumi:</span>{" "}
              Beberapa wilayah di sekitar gunung berapi dapat memanfaatkan panas
              bumi sebagai sumber energi geotermal. Energi geotermal ini dapat
              digunakan untuk pembangkit listrik dan pemanas.
            </li>
            <li className="">
              <span className="text-black font-medium">Pariwisata:</span> Gunung
              berapi yang tidak aktif atau yang aman untuk dikunjungi dapat
              menjadi daya tarik pariwisata. Banyak orang tertarik untuk melihat
              keindahan alam dan fenomena geologi unik yang dimiliki gunung
              berapi.
            </li>
          </ol>
        </div>
        <figure className="md:col-span-5 col-span-12">
          <img
            className="w-full rounded-md"
            src="/slamet.jpg"
            alt="gunung slamet"
          />
          <figcaption className="text-center text-sm italic text-gray-400 mt-2">
            Sumber: https://unsplash.com/@tituswindip
          </figcaption>
        </figure>
      </div>
    </>
  );
}
