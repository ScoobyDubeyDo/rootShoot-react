import { FilterBox, ProductsList } from "./components";
import { FaFilter } from "react-icons/fa";
import "./products.css";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useFilter, useLoader } from "../../context";
import axios from "axios";

export const Products = () => {
    const [mobileFilterShow, setMobileFilterShow] = useState(false);
    const { categoryId } = useParams();
    const navigate = useNavigate();
    const { setIsLoading } = useLoader();
    const { filterDispatch } = useFilter();

    useEffect(() => {
        categoryId &&
            (async () => {
                try {
                    setIsLoading(true);
                    const res = await axios.get(
                        `/api/categories/${categoryId}`
                    );
                    if (res.status === 200) {
                        await filterDispatch({
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
                } finally {
                    setIsLoading(false);
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
