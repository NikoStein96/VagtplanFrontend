function Home() {
  return (
    <div className="flex flex-col items-center mt-10 gap-5">
      <h1 className="text-2xl text-blue-500 font-bold tracking-widest">
        PLAN-IT
      </h1>

      <h2 className="text-5xl text-center line-">
        Organiser dit hold, <br /> planlæg succes Med et{" "}
        <span className="text-blue-500">klik!</span>
      </h2>

      <div className="max-w-[80rem] border-2 rounded">
        <img className="w-full" src="./hero.jpg" />
      </div>
    </div>
  );
}

export default Home;
