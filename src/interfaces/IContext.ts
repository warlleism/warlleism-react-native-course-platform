import { Dispatch, SetStateAction } from "react";

export interface ComponentContextProps {
    activeLink: string;
    setActiveLink: Dispatch<SetStateAction<string>>;
}