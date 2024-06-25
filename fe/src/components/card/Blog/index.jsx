const CardBlog = ({ link, judul, deskripsi, pemilik, ttl, foto }) => {
  return (
    <a href={link}>
      <div className="h-[300px] lg:h-[500px] rounded-3xl shadow-2xl">
        <img
          src={foto}
          alt="image"
          className="h-[40%] lg:h-[50%] w-full rounded-t-3xl object-cover"
        />
        <div className="flex flex-col justify-between h-[50%] p-5">
          <div className="font-bold flex flex-col gap-y-4">
            <h1 className="text-sm">Futsal</h1>
            <h3 className="text-xs lg:text-sm line-clamp-1">{judul}</h3>
          </div>
          <div className="flex flex-col gap-y-1 lg:gap-y-8">
            <h1 className="text-[#505F79] line-clamp-3 text-xs lg:text-sm">{deskripsi}.</h1>
            <div className="flex flex-col lg:justify-between line-clamp-1">
              <p className="text-[10px] text-[#505F79] truncate lin max-w-[100px]">oleh {pemilik}</p>
              <p className="text-[#505F79] text-[10px] line-clamp-2 max-w-[100%px]">{ttl}</p>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default CardBlog;
