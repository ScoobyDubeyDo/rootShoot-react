import { FilterBox, ProductsList } from "./components";
import { FaFilter } from "react-icons/fa";
import "./products.css";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useFilter } from "../../context";
import axios from "axios";

export const Products = () => {
    const [mobileFilterShow, setMobileFilterShow] = useState(false);
    const { categoryId } = useParams();
    const navigate = useNavigate();
    const { dispatch } = useFilter();

    useEffect(() => {
        categoryId &&
            (async () => {
                try {
                    const res = await axios.get(
                        `/api/categories/${categoryId}`
                    );
                    if (res.status === 200) {
                        await dispatch({
                            type: "TYPES",
                            payload: {
                                typeOfProd: res.data.category.categoryName,
                                isChecked: true,
                            },
                        });
                        navigate("/products", { replace: true });
                    }
                } catch (err) {
                    console.log("Error while getting the category name", err);
                }
            })();
    }, []);

    return (
        <div className="products-wrapper">
            <FilterBox
                mobileFilterShow={mobileFilterShow}
                setMobileFilterShow={setMobileFilterShow}
            />
            <ProductsList />
            <section className="filter-footer rootShoot-hidden">
                <button
                    onClick={() => setMobileFilterShow(true)}
                    className="btn-outlined-green filter-footer-btns"
                >
                    <FaFilter />
                    filter
                </button>
            </section>
        </div>
    );
};
