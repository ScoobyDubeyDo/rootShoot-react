import "./ratingRadio.css";
import { FaStar } from "react-icons/fa";

export const RatingRadio = ({ starsArray }) => {
    return (
        <>
            <h3 className="heading-5">Rating</h3>
            <span>
                {starsArray.map((star) => (
                    <label key={star} htmlFor={star} className="star-display">
                        <input
                            // onChange={(e) => {
                            //     console.log(state.selectedRating, star);
                            //     dispatch({
                            //         type: "STAR_RATING",
                            //         payload: {
                            //             selectedStar: Number(e.target.value),
                            //         },
                            //     });
                            // }}
                            // checked={state.selectedRating === star}
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
