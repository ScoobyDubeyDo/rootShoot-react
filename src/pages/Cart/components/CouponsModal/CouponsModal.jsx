import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { useLockBodyScroll } from "../../../../hooks";
import { availableCoupons } from "../../../../utils";
import "./couponsModal.css";

export const CouponsModal = ({
    totalMRP,
    setCouponDiscount,
    setCouponModal,
}) => {
    const [couponInput, setCouponInput] = useState("");
    const [notApplicable, setNotApplicable] = useState(false);
    const availableCouponsLength = availableCoupons.filter(
        (coupon) => coupon.minimumPrice <= totalMRP
    );
    const notAvailableCouponsLength = availableCoupons.filter(
        (coupon) => coupon.minimumPrice > totalMRP
    );

    const applyCoupon = () => {
        const temp = availableCoupons.find(
            (item) => item.code.toLowerCase() === couponInput.toLowerCase()
        );

        if (!temp) {
            setNotApplicable("No such coupon!");
        } else if (temp.minimumPrice > totalMRP) {
            const lackingAmount = Math.ceil(temp.minimumPrice - totalMRP);
            setNotApplicable(
                `Oh no..! Add products worth ₹${lackingAmount} more, to use this coupon`
            );
        } else {
            if (temp.discount) {
                setCouponDiscount(temp.discount);
            }
            if (temp.discountPercentage) {
                setCouponDiscount(
                    Math.floor(totalMRP / (100 / temp.discountPercentage))
                );
            }
            setCouponModal(false);
        }
    };

    useLockBodyScroll();

    return (
        <div class="modal-sm">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title heading-5">APPLY COUPON</h1>
                        <button
                            onClick={() => setCouponModal(false)}
                            class="icon-btn-ghost-sm modal-close-btn"
                        >
                            <GrClose />
                        </button>
                    </div>
                    <div class="modal-header">
                        <input
                            type="text"
                            placeholder="Coupon Code"
                            value={couponInput}
                            onChange={(e) => setCouponInput(e.target.value)}
                        />
                        <button
                            onClick={() => applyCoupon()}
                            class="btn-filled-green modal-close-btn"
                        >
                            Apply
                        </button>
                    </div>
                    <div class="modal-body">
                        <p class="text-body-lg">
                            <p className="coupon-error">{notApplicable}</p>
                            {!!availableCouponsLength.length && (
                                <p className="heading-6 text-gutterBottom">
                                    Coupons applicable for you:
                                </p>
                            )}
                            {availableCoupons.map(
                                (coupon) =>
                                    coupon.minimumPrice <= totalMRP && (
                                        <div
                                            className="coupon-code-wrapper"
                                            onClick={() => {
                                                setCouponInput(coupon.code);
                                                setNotApplicable("");
                                            }}
                                        >
                                            <p className="coupon-code">
                                                {coupon.code}
                                            </p>
                                            <p>{coupon.description}</p>
                                        </div>
                                    )
                            )}
                            {!!notAvailableCouponsLength.length && (
                                <p className="heading-6 text-gutterBottom text-gutterTop">
                                    Coupons not applicable:
                                </p>
                            )}
                            {availableCoupons.map(
                                (coupon) =>
                                    coupon.minimumPrice > totalMRP && (
                                        <div className="coupon-code-wrapper-notapplicable">
                                            <p className="coupon-code">
                                                {coupon.code}
                                            </p>
                                            <p>{coupon.description}</p>
                                        </div>
                                    )
                            )}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
