import { useRef, useState } from "react";
import { GrClose } from "react-icons/gr";
import { useLockBodyScroll, useOnClickOutside } from "../../../../hooks";
import { availableCoupons } from "../../../../utils";
import "./couponsModal.css";

export const CouponsModal = ({
    totalMRP,
    setCouponDiscount,
    setCouponModal,
}) => {
    const [couponInput, setCouponInput] = useState("");
    const [notApplicable, setNotApplicable] = useState(false);
    const couponsModalRef = useRef();
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
    useOnClickOutside(couponsModalRef, () => setCouponModal(false));

    return (
        <div className="modal-sm">
            <div className="modal-dialog" ref={couponsModalRef}>
                <div className="modal-content">
                    <div className="modal-header coupon-modal-header">
                        <h1 className="modal-title heading-5">APPLY COUPON</h1>
                        <button
                            onClick={() => setCouponModal(false)}
                            className="icon-btn-ghost-sm modal-close-btn"
                        >
                            <GrClose />
                        </button>
                    </div>
                    <div className="modal-header">
                        <input
                            type="text"
                            placeholder="Coupon Code"
                            id="coupon-input"
                            value={couponInput}
                            onChange={(e) => setCouponInput(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") applyCoupon();
                            }}
                        />
                        <button
                            onClick={() => applyCoupon()}
                            className="btn-filled-green modal-close-btn"
                        >
                            Apply
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="text-body-lg">
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
                                            key={coupon.code}
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
                                        <div
                                            key={coupon.code}
                                            className="coupon-code-wrapper-notapplicable"
                                        >
                                            <p className="coupon-code">
                                                {coupon.code}
                                            </p>
                                            <p>{coupon.description}</p>
                                        </div>
                                    )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
