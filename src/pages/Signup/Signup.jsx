import { useRef, useState } from "react";
import "./signup.css";
import { useAuth } from "../../context";
import { userSignup } from "../../utils";
import { Link, useNavigate } from "react-router-dom";

export const Signup = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const nameRef = useRef();
    const navigate = useNavigate();
    const [fieldErrors, setFieldErrors] = useState({});
    const { setCurrentUser } = useAuth();

    return (
        <div className="modal-sm rootShoot-modal" id="modal-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title heading-4">Sign up</h1>
                    </div>
                    <div className="modal-body">
                        <div style={{ color: "red", textAlign: "center" }}>
                            {Object.values(fieldErrors).map((e) => (
                                <p key={Math.random()}>{e}</p>
                            ))}
                        </div>
                        <form
                            autoComplete="off"
                            noValidate
                            onSubmit={(e) =>
                                userSignup(
                                    e,
                                    nameRef,
                                    emailRef,
                                    passwordRef,
                                    setFieldErrors,
                                    setCurrentUser,
                                    navigate
                                )
                            }
                        >
                            <label htmlFor="username" className="input-label">
                                Full Name
                                <input
                                    ref={nameRef}
                                    className="input"
                                    type="text"
                                    placeholder="Enter your Full Name"
                                    minLength={1}
                                    id="username"
                                />
                                <p className="input-error-msg">
                                    {fieldErrors.fullName}
                                </p>
                            </label>
                            <label htmlFor="email" className="input-label">
                                Email
                                <input
                                    ref={emailRef}
                                    className="input"
                                    type="text"
                                    placeholder="Enter your Email id"
                                    id="email"
                                    pattern="^.+@.+.\.+.+."
                                />
                                <p className="input-error-msg">
                                    {fieldErrors.email}
                                </p>
                            </label>
                            <label htmlFor="password" className="input-label">
                                Password
                                <input
                                    ref={passwordRef}
                                    className="input"
                                    type="password"
                                    placeholder="Enter the password"
                                    id="password"
                                    minLength={8}
                                />
                                <p className="input-error-msg">
                                    {fieldErrors.password}
                                </p>
                            </label>
                            <input
                                className="btn-filled-green rootShoot-margin-center text-align-center"
                                type="submit"
                                value="Sign up"
                            />
                        </form>
                    </div>
                    <div className="modal-footer">
                        <Link
                            to="/sign-in"
                            className="btn-link text-align-center rootShoot-text-capital"
                        >
                            Already have an account ?
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
