import { ADD_SERIE, DELETE_SERIE } from "../actionTypes/seriesActions";

const addSerie = (serie) => {
  return {
    type: ADD_SERIE,
    payload: serie,
  };
};

const deleteSerie = (id) => {
  return {
    type: DELETE_SERIE,
    payload: id,
  };
};
export { addSerie, deleteSerie };
