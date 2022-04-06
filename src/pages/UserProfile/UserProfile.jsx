import { Link } from "react-router-dom";
import { useAuth, useWishlistAndCart } from "../../context";
import { userSignout } from "../../utils";
import "./userProfile.css";

export const UserProfile = () => {
    const {
        currentUser: { email, fullName },
        setCurrentUser,
    } = useAuth();
    const { setWishlist, setCart } = useWishlistAndCart();

    return (
        <div className="modal-sm rootShoot-modal" id="modal-1">
            <div className="modal-dialog">
                <div className="modal-content profile-box">
                    <div className="modal-header">
                        <h1 className="modal-title heading-4">Profile</h1>
                    </div>
                    <div className="modal-body">
                        <img
                            className="avatar-circle-lg rootShoot-margin-center user-profile-img "
                            src="https://www.serieslike.com/images/karishma-kaa-karishma.webp"
                            alt="avatar"
                        />
                        <div className="text-gutterTop">
                            <p className="heading-6 text-gutterBottom">
                                Display Name: {fullName}
                            </p>
                            <p className="heading-6 text-gutterBottom">
                                Email: {email}
                            </p>
                        </div>
                        <Link
                            onClick={() => {
                                userSignout(setCurrentUser);
                                setWishlist([]);
                                setCart([]);
                            }}
                            className="btn-outlined-green rootShoot-margin-center text-align-center text-gutterTop"
                            to="/"
                        >
                            log out
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
