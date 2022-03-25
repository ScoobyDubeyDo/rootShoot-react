import "./singleProduct.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLoader } from "../../context";

const ProdDesc =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero dicta sit, tenetur dolorem nobis distinctio. Aperiam blanditiis fugit quos? Vel eveniet nisi porro excepturi, voluptates atque iure. Atque numquam nihil pariatur inventore sit magnam, rem tempore ex, voluptas laudantium aperiam nulla! Quas eum sed, quidem eaque dolores facilis illo cumque v erit recusandae quibusdam accusantium totam pariatur optio. Veniam nihil nostrum id expedita quos unde ipsam dolor beatae dicta, distinctio asperiores.";

export const SingleProduct = () => {
    const { productId } = useParams();
    const { setIsLoading } = useLoader();
    const [productDetails, setProductDetails] = useState({
        imgUrl: "",
        name: "",
        price: "",
        rating: "",
        type: [],
    });

    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true);
                const res = await axios.get(`/api/products/${productId}`);
                if (res.status === 200) {
                    setProductDetails(res.data.product);
                }
            } catch (err) {
                console.log("Error while getting the product", err);
            } finally {
                setIsLoading(false);
            }
        })();
    }, []);

    return (
        <div className="single-product">
            <img
                src={productDetails.imgUrl}
                alt={productDetails.name}
                className="responsive-image"
            />
            <div>
                <h2 className="heading-4">{productDetails.name}</h2>
                <p className="text-body-sm rootShoot-full-width">
                    {productDetails.type.toLocaleString()}
                </p>
                <div>
                    <p className="heading-5">{`₹ ${productDetails.price}`}</p>
                    <label htmlFor="qty" className="heading-5">
                        Quantity:&nbsp;
                        <select name="qty" id="qty">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </label>
                </div>
                <p className="text-body-lg rootShoot-text-align-justify text-gutterBottom">
                    {ProdDesc}
                </p>
                <button className="btn-filled-green rootShoot-full-width text-gutterBottom">
                    buy now
                </button>
                <button className="btn-outlined-green rootShoot-full-width text-gutterBottom">
                    add to cart
                </button>
            </div>
        </div>
    );
};
