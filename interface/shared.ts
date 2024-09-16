import { Dispatch, SetStateAction } from "react";

export interface ButtonComponentProps {
    text: string;
    outline?: boolean;
  }

export interface SearchProps {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
  }