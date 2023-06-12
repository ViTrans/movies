import "./App.css";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <div className="header flex items-center justify-center gap-x-5 text-white py-10 mb-5">
        <span className="text-primary">Home</span>
        <span className="">Movies</span>
      </div>
      <section className="banner h-[500px] mb-20 page-container">
        <div className=" w-full h-full rounded-lg relative">
          <img
            src="https://nld.mediacdn.vn/2019/4/25/3515432-endgamedek-15561710302491765206118.jpg"
            alt=""
            className="w-full h-full rounded-lg object-cover"
          />
          <div className="absolute left-5 bottom-5 w-ful text-white">
            <h2 className="font-bold text-3xl mb-5">Avengers</h2>
            <div className="flex items-center gap-x-3 mb-8">
              <span className="py-2 px-4 border border-white rounded-md">
                Adventure
              </span>
              <span className="py-2 px-4 border border-white rounded-md">
                Adventure
              </span>
              <span className="py-2 px-4 border border-white rounded-md">
                Adventure
              </span>
            </div>
            <button className="inline-flex items-center justify-center px-8 py-4  text-white bg-primary rounded-lg">
              Watch Now
            </button>
          </div>
        </div>
      </section>
      <HomePage></HomePage>
    </>
  );
}

export default App;
