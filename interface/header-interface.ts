import { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface HeaderMiddleProps {
    handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
    text: string;
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
  }
export interface MobileNavProps {
    handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  }
export interface HeaderBottomProps {
  isOpen: boolean;
  handleOpenChange: (isOpen: boolean) => void;
  handleToggle: () => void;
}