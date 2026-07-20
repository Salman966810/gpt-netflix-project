const MoviesDescription = ({ id, original_title, overview }) => {
  return (
    <div className=" absolute w-screen  text-white mt-105 ml-24 bg-linear-to-r from-black/40">
      <h1 className="font-bold text-3xl p-3">{original_title}</h1>
      <p className="w-1/3 p-3">{overview}</p>

      <div className="mt-2 w-1/3 p-3 z-50">
        <button className="px-4 py-4 bg-gray-600 mr-10 font-bold rounded-2xl cursor-pointer ">
          ▶️ Play
        </button>
        <button className="px-4 py-4 bg-gray-600 font-bold rounded-2xl cursor-pointer">
        
          ℹ️ Info
        </button>
      </div>
    </div>
  );
};

export default MoviesDescription;
