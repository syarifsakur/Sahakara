import CardBlog from "../../../components/card/Blog";
import { getBerita } from "../../../services/tes";
import { useEffect, useState } from "react";
// import foto from "../../../assets/img.png";
// import foto2 from "../../../assets/image2.svg";
// import foto3 from "../../../assets/image3.svg";
// import foto4 from "../../../assets/image4.svg";
const FeatKontenBlog = () => {
  const [berita, setBerita] = useState(null);

  const fetchData = async () => {
    try {
      const res = await getBerita();
      setBerita(res?.data?.articles);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="mt-40 ">
      <div className="mx-10 grid grid-cols-4 gap-10">
        {berita?.map((k, index) => (
          <CardBlog
            key={index}
            link={k.url}
            judul={k.title}
            deskripsi={k.description}
            pemilik={k.author}
            ttl={k.publishedAt}
            foto={k.urlToImage}
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
