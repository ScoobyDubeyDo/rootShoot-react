import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useFilter } from "../../../context";
import { useOnClickOutside } from "../../../hooks";

export const SearchResults = ({ searchOpen, setSearchOpen }) => {
    const { filterState } = useFilter();
    const navigate = useNavigate();
    const searchResultsRef = useRef();

    useOnClickOutside(searchResultsRef, () => setSearchOpen(false));

    return (
        <div
            ref={searchResultsRef}
            className={`search-results vertical-list ${
                filterState.searchResults.length > 0 &&
                searchOpen &&
                "search-results-show"
            }`}
        >
            {filterState.searchResults.length > 0 &&
                filterState.searchResults.map((item) => (
                    <div
                        key={item._id}
                        className="card search-result"
                        onClick={() => {
                            setSearchOpen(false);
                            navigate(`/products/${item._id}`);
                        }}
                    >
                        <div className="card-badge-green">{item.type[0]}</div>
                        <div className="card-body-horizontal">
                            <img
                                src={item.imgUrl}
                                alt={item.name}
                                className="card-side-image search-result-img"
                            />
                            <div className="card-side-content">
                                <h3 className="card-title text-noWrap">
                                    {item.name}
                                </h3>
                                <p className="card-text">{item.prodDesc[0]}</p>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
};
