import { useState } from "react";

// Task: Build a simple movie list where users can: Add a movie title using an input where user can press Enter Key , and button Display the list of movies Remove a movie by clicking a delete button

const MovieListComponent = () => {
  const [movies, setMovies] = useState<string[]>([]);
  const [newMovie, setNewMovie] = useState<string>("");

  const addMovie = () => {
    if (newMovie.trim() !== "") {
      setMovies([...movies, newMovie]);
      setNewMovie("");
    }
  };
  const deleteMovie = (index: number) => {
    setMovies(movies.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Movie List Component</h2>
      <input
        type="text"
        placeholder="Add a movie title"
        value={newMovie}
        onChange={(e) => setNewMovie(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addMovie();
          }
        }}
      />

      <button onClick={addMovie}>Add Movie</button>

      <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            {movie}
            <button onClick={() => deleteMovie(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieListComponent;
