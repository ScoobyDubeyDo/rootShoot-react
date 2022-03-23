import { createContext, useContext, useState } from "react";

const LoaderContext = createContext();

const LoaderProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
            {children}
        </LoaderContext.Provider>
    );
};

const useLoader = () => useContext(LoaderContext);

export { LoaderProvider, useLoader };
