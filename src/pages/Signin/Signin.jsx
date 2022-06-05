import { useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth, useLoaderOrToast } from "../../context";
import { userSignin } from "../../utils";

export const Signin = () => {
	const emailRef = useRef();
	const passwordRef = useRef();
	const navigate = useNavigate();
	const location = useLocation();
	const [fieldErrors, setFieldErrors] = useState({});
	const { setCurrentUser } = useAuth();
	const { setIsLoading, setToastMessage } = useLoaderOrToast();
	return (
		<div className="modal-sm rootShoot-modal" id="modal-1">
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<h1 className="modal-title heading-4">Sign in</h1>
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
								userSignin(
									e,
									emailRef.current.value,
									passwordRef.current.value,
									setFieldErrors,
									setCurrentUser,
									navigate,
									setIsLoading,
									setToastMessage,
									location?.state?.from
								)
							}>
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
								value="Sign in"
							/>
							<input
								// the style below is temporary, this entire button is going to get deleted
								style={{ marginTop: "1rem" }}
								className="btn-filled-green rootShoot-margin-center text-align-center"
								type="reset"
								value="guest sign in"
								onClick={(e) =>
									userSignin(
										e,
										"karishma@kaa.karishma",
										"karishma",
										setFieldErrors,
										setCurrentUser,
										navigate,
										setIsLoading,
										setToastMessage,
										location?.state?.from
									)
								}
							/>
						</form>
					</div>
					<div className="modal-footer">
						<Link
							to="/sign-up"
							className="btn-link rootShoot-text-capital text-align-center">
							Create New Account
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
