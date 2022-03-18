import { useFilter } from "../../../../../../context";
import "./ratingRadio.css";
import { FaStar } from "react-icons/fa";

export const RatingRadio = ({ starsArray }) => {
    const { state, dispatch } = useFilter();

    return (
        <>
            <h3 className="heading-6">Rating</h3>
            <span>
                {starsArray.map((star) => (
                    <label key={star} htmlFor={star} className="star-display">
                        <input
                            onChange={(e) => {
                                dispatch({
                                    type: "STAR_RATING",
                                    payload: {
                                        selectedStar: Number(e.target.value),
                                    },
                                });
                            }}
                            checked={state.selectedRating === star}
                            type="radio"
                            id={star}
                            name="star"
                            value={star}
                        />
                        <span>
                            {` ${star}  `} <FaStar /> and above
                        </span>
                    </label>
                ))}
            </span>
        </>
    );
};
