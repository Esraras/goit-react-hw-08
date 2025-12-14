import { changeFilter } from "../../redux/filters/slice.js";
import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filters/selectors.js";

function SearchBox() {
  const dispatch = useDispatch();

  const nameFilter = useSelector(selectNameFilter);

  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div>
      <span>Find contacts by name</span>
      <input
        className="searchInput"
        type="text"
        value={nameFilter}
        onChange={handleFilterChange}
      />
    </div>
  );
}
export default SearchBox;
