import { createContext, useContext, useState } from "react";

const LoaderAndToastContext = createContext();

const LoaderAndToastProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [toastMessage, setToastMessage] = useState({ type: "", text: "" });

    return (
        <LoaderAndToastContext.Provider
            value={{ isLoading, setIsLoading, toastMessage, setToastMessage }}
        >
            {children}
        </LoaderAndToastContext.Provider>
    );
};

const useLoaderOrToast = () => useContext(LoaderAndToastContext);

export { LoaderAndToastProvider, useLoaderOrToast };
