const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleNextPage = (e) => {
    setPage((prevState) => prevState + 1); // increment page by 1
    scrollTop(); // scroll to top
  };
  const handlePrevPage = (e) => {
    if (page > 1) {
      setPage((prevState) => prevState - 1); // decrement page by 1
      scrollTop(); // scroll to top
    } else {
      return;
    }
  };
  return (
    <div className="flex justify-center items-center py-4 px-2 gap-4 text-color-primary text-2xl ">
      <button
        className="transition-all hover:text-color-accent"
        onClick={handlePrevPage}
      >
        Prev
      </button>
      <p>
        {page} of {lastPage}
      </p>
      <button
        className="transition-all hover:text-color-accent"
        onClick={handleNextPage}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
