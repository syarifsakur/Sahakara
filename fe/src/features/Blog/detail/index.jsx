// import img from "../../../assets/img.png";
import CardBlog from "../../../components/card/Blog";
import { getDetailBlog } from "../../../services/detailBlog";
// import { getBerita } from "../../../services/tes";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getBerita } from "../../../services/tes";

const FeatDetailBlog = () => {
  const { id } = useParams();
  const [berita, setBerita] = useState(null);
  const [tes,setTes] = useState(null)

  const fetchData = async () => {
    try {
      const res = await getDetailBlog(id);
      setBerita(res?.data?.blog);
      // console.log(berita);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchDataAll = async () => {
    try {
      const res = await getBerita();
      setTes(res?.data?.blog);
      // console.log(berita);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
    fetchDataAll();
  }, [id]);

  if (!berita) {
    return <div className="h-screen flex justify-center items-center">Loading...</div>;
  }


  return (
    <div className="w-full px-10 flex flex-col gap-y-10 py-8 poppins text-blue-950">
      <div className="w-full flex flex-col items-center gap-y-6">
        <h3 className="text-3xl font-bold">{berita[0]?.judul}</h3>
        <img src={berita[0].foto} alt="" className="w-full h-[500px]"/>
      </div>
      <div>
        <h4 className="font-bold">{berita[0].author}</h4>
        <p className="font-light">{berita[0].created_at}</p>
      </div>
      <div>
        <h1>{berita[0].deskripsi}</h1>
      </div>
      <div>
        <h3 className="font-bold text-3xl">Artikel lainxnya</h3>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
      {tes?.slice(0,4).map((k, index) => (
          <CardBlog
            key={index}
            link={`/blog/detail/${k.id}`}
            judul={k.judul}
            deskripsi={k.deskripsi}
            pemilik={k.author}
            ttl={k.created_at}
            foto={k.foto}
          ></CardBlog>
        ))}
      </div>
    </div>
  );
};

export default FeatDetailBlog;
