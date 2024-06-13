import img from "../../../assets/img.png";
import CardBlog from "../../../components/card/Blog";
import { getBerita } from "../../../services/tes";
import { useEffect, useState } from "react";

const FeatDetailBlog = () => {
    const [berita, setBerita] = useState(null);

    const fetchData = async () => {
      try {
        const res = await getBerita();
        setBerita(res?.data?.blog);
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []);

  return (
    <div className="w-full px-10 flex flex-col gap-y-10 py-8 poppins text-blue-950">
      <div className="w-full flex flex-col items-center gap-y-6">
        <h3 className="text-3xl font-bold">Preview Latvia VS Kanada 23.</h3>
        <img src={img} alt="" />
      </div>
      <div>
        <h4 className="font-bold">mato</h4>
        <p className="font-light">24 september 2022</p>
      </div>
      <div>
        <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A nesciunt tempore iure harum recusandae magnam minus aperiam qui, ex tenetur, doloremque minima, quibusdam autem sit quos nisi repudiandae nemo commodi et. Blanditiis recusandae, non nobis aliquam repellendus similique porro dolorum nam voluptates molestiae. Neque natus ex, sint maxime, corporis saepe fugit rerum praesentium ea delectus excepturi ad totam dolor dolorum? Esse quisquam repellat at totam eligendi qui eveniet tempora voluptas quo temporibus facere aliquid ullam iusto inventore reiciendis porro, ut asperiores dolores? Culpa, dolore quis. Pariatur, quasi, nostrum magnam, laborum adipisci doloribus repudiandae reprehenderit ad nulla culpa expedita possimus beatae nesciunt sit? Rerum expedita quis consectetur provident veritatis earum, sapiente assumenda sequi eaque soluta, deleniti vel officia culpa dolores veniam vero quaerat voluptatem natus. Illo odit ullam minus, voluptatem obcaecati perspiciatis consequatur fuga voluptatum ea, accusamus modi omnis repellendus enim ratione beatae quasi ducimus. Dolores corporis minima vitae libero unde quibusdam porro maiores est molestiae enim adipisci, ullam a cum dignissimos reiciendis officiis voluptates ducimus error quas! Magnam autem animi odio repudiandae perferendis, possimus deserunt, ducimus iste corrupti eos earum inventore molestiae. Consequatur ipsam quia voluptatibus necessitatibus animi nobis, nulla nam omnis non expedita quidem adipisci architecto quod corporis voluptates molestias enim inventore cum odit tempora quo. A reiciendis unde, rem ducimus ut impedit officia dolores? Excepturi laboriosam minus esse autem, et voluptatibus eveniet nisi recusandae rem dolorem, totam magni officiis ipsa sequi voluptatem praesentium assumenda debitis nobis iure corrupti est deserunt culpa, voluptate molestiae. Quae, optio consequatur. Rerum modi sunt cumque a eligendi vitae iste doloremque. Reiciendis fuga minima magni nihil odit doloribus dignissimos eius! Exercitationem excepturi nesciunt numquam deleniti eius illo repellat, eveniet ipsum, recusandae esse nihil in maxime delectus, neque tempora nulla explicabo? Vero debitis perferendis quam nesciunt id corrupti officiis ad ex libero explicabo modi natus, sunt aliquam, pariatur adipisci hic deleniti ratione sapiente a dolorem ea tempore optio commodi doloribus. Beatae dolorem repellendus ab, quibusdam sapiente magni? Quisquam dicta sed, amet ipsa dolores blanditiis qui consequuntur minus deleniti delectus, placeat ipsum exercitationem. Ab obcaecati et reprehenderit harum molestias minus odio velit dolore, accusantium placeat porro! Sit officiis consequatur vel tempore nihil ipsam, laudantium modi, voluptas, unde saepe accusantium. Ullam dolorum obcaecati placeat. Ab quisquam esse obcaecati repudiandae possimus, praesentium, harum enim corrupti omnis nam corporis in veritatis deserunt nesciunt exercitationem ipsum rem ea molestiae deleniti libero consectetur? Quidem minus labore eveniet pariatur ipsam nesciunt aut?</h1>
      </div>
      <div>
        <h3 className="font-bold text-3xl">Artikel lainnya</h3>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
      {berita?.slice(0,4).map((k, index) => (
          <CardBlog
            key={index}
            link="/blog/detail"
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
