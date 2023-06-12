/* eslint-disable react/prop-types */
const MovieCard = ({ item }) => {
  const { backdrop_path, title, release_date, vote_average } = item;
  return (
    <div className="movieCard h-full flex flex-col rounded-lg p-3 bg-slate-800 select-none">
      <img
        src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
        alt=""
        className="w-full h-[250px] rounded-lg object-cover mb-5"
      />
      <div className="flex flex-col flex-1">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <div className="flex items-center justify-between text-sm opacity-50 mb-10">
          <span>{new Date(release_date).getFullYear()}</span>
          <span>{vote_average}</span>
        </div>
        <button className="inline-flex items-center justify-center px-8 py-4 mt-auto  text-white bg-primary rounded-lg">
          Watch Now
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
