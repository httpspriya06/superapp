import styles from "./Category.module.css";
import Chips from "../Global/chips";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const movies = [
  {
    id: "1",
    heading: "Action",
    src: "./assets/image 2.png",
    Color: "#FF5209",
    selected: false,
  },
  {
    id: "2",
    heading: "Drama",
    src: "./assets/image 3.png",
    Color: "#D7A4FF",
    selected: false,
  },
  {
    id: "3",
    heading: "Romance",
    src: "./assets/image 4.png",
    Color: "#11B800",
    selected: false,
  },
  {
    id: "4",
    heading: "Thriller",
    src: "./assets/image 6.png",
    Color: "#84C2FF",
    selected: false,
  },
  {
    id: "5",
    heading: "Western",
    src: "./assets/image 7.png",
    Color: "#902500",
    selected: false,
  },
  {
    id: "6",
    heading: "Horror",
    src: "./assets/image 8.png",
    Color: "#7358FF",
    selected: false,
  },
  {
    id: "7",
    heading: "Fantasy",
    src: "./assets/image 9.png",
    Color: "#FF4ADE",
    selected: false,
  },
  {
    id: "8",
    heading: "Music",
    src: "./assets/image 10.png",
    Color: "#E61E32",
    selected: false,
  },
  {
    id: "9",
    heading: "Fiction",
    src: "./assets/image 11.png",
    Color: "#6CD061",
    selected: false,
  },
];

function ImageCard({ image, id, categories, setCategories }) {
  function handleClick() {
    const updatedCategories = [...categories];
    const updatedMovies = [...movies];

    if (categories.includes(String(id + 1))) {
      const index = categories.indexOf(String(id + 1));
      updatedCategories.splice(index, 1);
    } else {
      updatedCategories.push(String(id + 1));
    }

    updatedMovies[id].selected = !updatedMovies[id].selected;
    setCategories(updatedCategories);
  }

  return (
    <div
      className={`${styles.card} ${image.selected ? styles.selected : ""}`}
      style={{ backgroundColor: image.Color }}
      onClick={handleClick}
    >
      <div className={styles.genre}>{image.heading}</div>
      <img id={styles.poster} src={image.src} alt="" />
    </div>
  );
}

function Category() {
  const [categories, setCategories] = useState([]);
  const [lengthError, setLengthError] = useState(false);

  const navigate = useNavigate();

  const handleSignUp = () => {
    if (categories.length < 3) {
      setLengthError(true);
      return;
    } else {
      setLengthError(false);
      const selectedGenres = categories.map(
        (category) => movies[parseInt(category) - 1].heading
      );
      window.localStorage.setItem("genres", JSON.stringify(selectedGenres));
      navigate("/browwse");
    }
  };
  return (
    <>
      <div className={styles.categorypage}>
        <div className={styles.left}>
          <img id={styles.logo} src="./assets/Super.png" alt="Super" />

          <p id={styles.choose}>
            Choose your entertainment <br />
            category
          </p>
          {categories.map((category) => (
            <Chips
              id={category}
              color={"Green"}
              movies={movies}
              categories={categories}
              setCategories={setCategories}
            />
          ))}

          {lengthError ? (
            <p className={styles.err}>🔺Minimum 3 category required ..!</p>
          ) : (
            <></>
          )}
        </div>
        <div className={styles.right}>
          <div className={styles.grid}>
            {movies.map((image, index) => (
              <ImageCard
                key={index}
                image={image}
                categories={categories}
                setCategories={setCategories}
                id={index}
              />
            ))}
          </div>
          <button className={styles.btn} onClick={handleSignUp}>
            Next Page
          </button>
        </div>
      </div>
    </>
  );
}

export default Category;
