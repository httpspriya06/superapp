function Chips({ id, categories, setCategories, movies, color }) {
  const handleClick = () => {
    const index = categories.indexOf(String(id));
    categories.splice(index, 1);
    setCategories([...categories]);
    movies[id - 1].selected = !movies[id - 1].selected;
  };

  return (
    <div>
      <button
        style={{
          backgroundColor: "#11B800",
          width: "100px",
          padding: "0.80%",
          borderRadius: "12px",
          color: "white",
          letterSpacing: "1.5px",
          margin: "5px",
          border: "green",
        }}
      >
        {movies[id - 1].heading}{" "}
        <span onClick={handleClick} className="cross">
          X
        </span>
      </button>
    </div>
  );
}

export default Chips;
