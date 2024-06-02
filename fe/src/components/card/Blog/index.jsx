const CardBlog = ({ link, judul, deskripsi, pemilik, ttl, foto }) => {
  return (
    <a href={link}>
      <div className="h-[500px] rounded-3xl shadow-2xl">
        <img
          src={foto}
          alt="image"
          className="h-[50%] w-full rounded-t-3xl object-cover"
        />
        <div className="flex flex-col justify-between h-[50%] p-5">
          <div className="font-bold flex flex-col gap-y-4">
            <h1 className="text-base">Futsal</h1>
            <h3 className="text-sm line-clamp-4">{judul}</h3>
          </div>
          <div className="flex flex-col gap-y-8">
            <h1 className="text-[#505F79] line-clamp-3 text-sm">{deskripsi}.</h1>
            <div className="flex justify-between">
              <p className="text-xs text-[#505F79] truncate max-w-[100px]">oleh {pemilik}</p>
              <p className="text-[#505F79] text-xs">{ttl}</p>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default CardBlog;
