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
    setCart,
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
        amount: totalMRP * 100,
        currency: "INR",
        name: "rootShoot",
        description: "You are one step closer",
        image: "https://lh3.googleusercontent.com/46QBufj0DGWUZJ4KHwGzEqaM97GoUX0Y8bszSTpZwEnSCgTbBzGi7n7F3-dSfQZBvZhfyLjQSu2kKvfRtVKuiHemiZ5A6XN_g4AKYrMOYfMGsaXIg4B2ttxzjt3UWIh6hmEOsijfMHq8Tcu9JlF2GoZhtG37s2KokmB6T7o5FEBomiGCoXT84lYLuw3JSWTomHWncFpTxMO51RJ0cwrBLXU3GBa_Vcjp_6q9ry4MnRUEWhikcq2mlmxA9kmVUETspi5FGcz1z0URIdy_1sjB9XkRXjSEE8jjf6B2dfsz0Ysu4JtJShfrJ2hldNTvISuQN68iPQhEMzIl7Dt50k-OqsZfS1HPrOUy_T0pQ4I4ugFFojmtYD0VhNiMG-UKFC04oJm6YVajYB8QSKKLgo9SP9LEJ-nKtEuxwKiFKNPHVy1-Olrae0SMilW-C6lbW-61iu8hvcSJJ8a9oHXohVGX_EIcXDk1lnitUDOSsspEXZ3tAHZjbssCdMiQ3W58lI3Jr5CSIZUhtRmSYwg4jfClNDbDetZbkGGWEvgty76H5OM0VUL9NDpTGoNPorJXNTXtwFoqcvsHy9noikrGoVvjJ_ZjsVW2xR-Gc3dDj7jyFUwS2AZI08ADzKqsoiStoMURT6Ll85_XFRimg9H6Y8-gl4HpKENHa5qrpGnhanngLFi_5pnzYCIn1qel4oPaC7necWvzXjfPKar7jH9FfM2JbJ3hMGC2gaEKp0UR5IMQMBJC1ltdsiU8A-S7yp4qkj8=s512-no?authuser=0",
        handler: function (response) {
            setToastMessage({
                type: "green",
                text: "Your Payment is successfull !",
            });
            navigate("/");
            setCart([]);
            setCouponDiscount(0);
        },
        prefill: {
            name: currentUser.fullName,
            email: currentUser.email,
            contact: "6969691213",
        },
        notes: {
            // address: orderstate.deliveryAddress.address,
        },
        theme: {
            color: "#66bb6a",
        },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
};
