import { useState } from "react";
import CardItem from "./MovieCard";

const MovieList = ({ data }) => {
  console.log(data);
  const [search, setSearch] = useState("");
  const filteredData = data.filter((item) => {
    return (
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.rating.toString().includes(search)
    );
  });
  return (
    <>
      <input style={{marginTop: 20}} 
        type="search"
        placeholder="search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="card-list">
        {filteredData.map((item) => {
          return <CardItem key={item.id} item={item} />;
        })}
      </div>
    </>
  );
};

export default MovieList;
