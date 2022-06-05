const loadScript = async (url) => {
	return new Promise((resolve) => {
		const script = document.createElement("script");
		script.src = url;

		script.onload = () => {
			resolve(true);
		};

		script.onerror = () => {
			resolve(false);
		};

		document.body.appendChild(script);
	});
};
export const displayRazorpay = async (
	currentUser,
	totalMRP,
	navigate,
	clearCart,
	setCouponDiscount,
	setToastMessage
) => {
	const res = await loadScript(
		"https://checkout.razorpay.com/v1/checkout.js"
	);

	if (!res) {
		setToastMessage({
			type: "red",
			text: "Razorpay SDK failed to load, check you connection",
		});
		return;
	}

	const options = {
		key: "rzp_test_HYLYM5j2PvIow1",
		amount: Number(totalMRP) * 100,
		currency: "INR",
		name: "rootShoot",
		description: "You are one step closer",
		image: `https://rootshoot.vercel.app/favicon.png`,
		handler: async function (response) {
			setToastMessage({
				type: "green",
				text: "The Payment was successfull !",
			});
			await clearCart();
			navigate("/");
			setCouponDiscount(0);
		},
		prefill: {
			name: currentUser.fullName,
			email: currentUser.email,
			contact: "6969691213",
		},
		theme: {
			color: "#66bb6a",
		},
	};
	const paymentObject = new window.Razorpay(options);
	paymentObject.open();
};
