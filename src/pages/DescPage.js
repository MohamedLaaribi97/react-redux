import { useParams } from "react-router-dom";
import { Series } from "../data/Series";

const DescPage = () => {
  const { id } = useParams();
  const findSerie = Series.find((Serie) => Serie.id === parseInt(id));
  return (
    <div>
      <h1 >{findSerie.title}</h1>
      <p>{findSerie.description}</p>
      {findSerie.trailerLink}
    </div>
  );
};
export default DescPage;
