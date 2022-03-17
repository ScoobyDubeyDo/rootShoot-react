import { FilterBox, ProductsList } from "./components";
import { FaFilter } from "react-icons/fa";
import "./products.css";
import { useState } from "react";

export const Products = () => {
    const [mobileFilterShow, setMobileFilterShow] = useState(false);

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
