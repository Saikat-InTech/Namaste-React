const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-6 max-w-full p-6 animate-pulse">
      {Array(15)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="bg-gray-300 rounded-lg w-64 h-80 shadow-md"></div>
        ))}
    </div>
  );
};

export default Shimmer;
