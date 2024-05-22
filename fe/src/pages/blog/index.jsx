import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import FeatSearch from "../../features/Blog/Search";
import FeatKontenBlog from "../../features/Blog/konten";

const BlogPages = () => {
  return (
    <div>
      <Navbar />
      <FeatSearch/>
      <FeatKontenBlog/>
      <Footer/>
    </div>
  );
};

export default BlogPages;
