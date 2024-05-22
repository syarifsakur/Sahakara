import CardBlog from "../../../components/card/Blog";
// import foto from "../../../assets/img.png";
// import foto2 from "../../../assets/image2.svg";
// import foto3 from "../../../assets/image3.svg";
// import foto4 from "../../../assets/image4.svg";
const FeatKontenBlog = () => {
  const konten = [
    {
      link: "https://www.kompasiana.com/nurulhikmah0654/66455e37de948f40120a1422/penutupan-turnamen-futsal-la-viesta",
      judul: "Penutupan Turnamen Futsal La Viesta",
      deskripsi: "Top Score adalah atas nama Putra dari SDN 59 Kota Bima. Pemain terbaik atas nama Firdaus",
      pemilik: "NURUL HIKMAH ",
      ttl: "16 Mei 2024",
      foto: "https://assets.kompasiana.com/items/album/2024/05/16/whatsapp-image-2024-05-15-at-08-43-52-66455bf7c57afb1bb7226853.jpeg?t=o&v=770",
    },
    {
      link: "https://www.kompasiana.com/nurulhikmah0654/66455e37de948f40120a1422/penutupan-turnamen-futsal-la-viesta",
      judul: "Penutupan Turnamen Futsal La Viesta",
      deskripsi: "Top Score adalah atas nama Putra dari SDN 59 Kota Bima. Pemain terbaik atas nama Firdaus",
      pemilik: "NURUL HIKMAH ",
      ttl: "16 Mei 2024",
      foto: "https://assets.kompasiana.com/items/album/2024/05/16/whatsapp-image-2024-05-15-at-08-43-52-66455bf7c57afb1bb7226853.jpeg?t=o&v=770",
    },
    {
      link: "https://www.kompasiana.com/nurulhikmah0654/66455e37de948f40120a1422/penutupan-turnamen-futsal-la-viesta",
      judul: "Penutupan Turnamen Futsal La Viesta",
      deskripsi: "Top Score adalah atas nama Putra dari SDN 59 Kota Bima. Pemain terbaik atas nama Firdaus",
      pemilik: "NURUL HIKMAH ",
      ttl: "16 Mei 2024",
      foto: "https://assets.kompasiana.com/items/album/2024/05/16/whatsapp-image-2024-05-15-at-08-43-52-66455bf7c57afb1bb7226853.jpeg?t=o&v=770",
    },
    {
      link: "https://www.kompasiana.com/nurulhikmah0654/66455e37de948f40120a1422/penutupan-turnamen-futsal-la-viesta",
      judul: "Penutupan Turnamen Futsal La Viesta",
      deskripsi: "Top Score adalah atas nama Putra dari SDN 59 Kota Bima. Pemain terbaik atas nama Firdaus",
      pemilik: "NURUL HIKMAH ",
      ttl: "16 Mei 2024",
      foto: "https://assets.kompasiana.com/items/album/2024/05/16/whatsapp-image-2024-05-15-at-08-43-52-66455bf7c57afb1bb7226853.jpeg?t=o&v=770",
    },
    {
      link: "/",
      judul: "Preview Latvia VS Kanada",
      deskripsi: "loremloremloremlorem",
      pemilik: "mato",
      ttl: "24 september 2024",
      foto: "https://cdn1-production-images-kly.akamaized.net/7S1xszhXETmiMGOofkrebqoHKnE=/1200x900/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/1439641/original/042027300_1482131661-reddit.jpg",
    },
    {
      link: "/",
      judul: "Preview Latvia VS Kanada",
      deskripsi: "loremloremloremlorem",
      pemilik: "mato",
      ttl: "24 september 2024",
      foto: "https://cdn1-production-images-kly.akamaized.net/7S1xszhXETmiMGOofkrebqoHKnE=/1200x900/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/1439641/original/042027300_1482131661-reddit.jpg",
    },
    {
      link: "/",
      judul: "Preview Latvia VS Kanada",
      deskripsi: "loremloremloremlorem",
      pemilik: "mato",
      ttl: "24 september 2024",
      foto: "https://cdn1-production-images-kly.akamaized.net/7S1xszhXETmiMGOofkrebqoHKnE=/1200x900/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/1439641/original/042027300_1482131661-reddit.jpg",
    },
    {
      link: "/",
      judul: "Preview Latvia VS Kanada",
      deskripsi: "loremloremloremlorem",
      pemilik: "mato",
      ttl: "24 september 2024",
      foto: "https://cdn1-production-images-kly.akamaized.net/7S1xszhXETmiMGOofkrebqoHKnE=/1200x900/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/1439641/original/042027300_1482131661-reddit.jpg",
    },
  ];

  return (
    <div className="mt-40 ">
      <div className="mx-10 grid grid-cols-4 gap-10">
        {konten.map((k) => (
          <CardBlog
            link={k.link}
            judul={k.judul}
            deskripsi={k.deskripsi}
            pemilik={k.pemilik}
            ttl={k.ttl}
            foto={k.foto}
          ></CardBlog>
        ))}
      </div>

      <div className="join my-10 flex justify-center">
        <button className="join-item btn  btn-active">1</button>
        <button className="join-item btn">2</button>
        <button className="join-item btn">3</button>
        <button className="join-item btn">4</button>
      </div>
    </div>
  );
};

export default FeatKontenBlog;
