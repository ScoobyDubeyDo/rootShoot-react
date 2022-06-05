import { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useFilter, useLoaderOrToast } from "../../context";
import { FilterBox, ProductsList } from "./components";
import "./products.css";

export const Products = () => {
	const [mobileFilterShow, setMobileFilterShow] = useState(false);
	const { categoryId } = useParams();
	const navigate = useNavigate();
	const { setIsLoading, setToastMessage } = useLoaderOrToast();
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
					setToastMessage({
						type: "red",
						text: err.message,
					});
				} finally {
					setIsLoading(false);
				}
			})();
	}, [filterDispatch, navigate, setToastMessage, setIsLoading, categoryId]);

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
					className="btn-outlined-green filter-footer-btns">
					<FaFilter />
					filter
				</button>
			</section>
		</div>
	);
};
