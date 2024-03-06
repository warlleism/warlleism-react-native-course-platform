import { createContext, ReactNode, useState } from "react";
import { ComponentContextProps } from "../interfaces/IContext";


export const ComponentContext = createContext<ComponentContextProps | null>(null);
interface ComponentProviderProps {
    children: ReactNode;
}

const ComponentProvider: React.FC<ComponentProviderProps> = ({ children }) => {
    const [activeLink, setActiveLink] = useState<string>('Home');

    return (
        <ComponentContext.Provider
            value={{
                activeLink,
                setActiveLink
            }}
        >
            {children}
        </ComponentContext.Provider>
    );
};

export default ComponentProvider;
