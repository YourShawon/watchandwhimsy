
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import { Dispatch, FC, SetStateAction } from "react";

interface SearchProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const SearchModal:FC<SearchProps> = ({open, setOpen}) => {

  return (
    <>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <span>Man</span>
            </CommandItem>
            <CommandItem>
              <span>Woman</span>
            </CommandItem>
            <CommandItem>
              <span>kids</span>
            </CommandItem>
            <CommandItem>
              <span>Couples</span>
            </CommandItem>
            <CommandItem>
              <span>Minimalist Watch</span>
            </CommandItem>
            <CommandItem>
              <span>Leather</span>
            </CommandItem>
            <CommandItem>
              <span>Metal</span>
            </CommandItem>
            <CommandItem>
              <span>Smart Watch</span>
            </CommandItem>
            <CommandItem>
              <span>Digital Watch</span>
            </CommandItem>
            <CommandItem>
              <span>Analog Watch With Number</span>
            </CommandItem>
            <CommandItem>
              <span>Analog Watch Without Number</span>
            </CommandItem>
            <CommandItem>
              <span>Table Watch</span>
            </CommandItem>
            <CommandItem>
              <span>Wall clock</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
        </CommandList>
      </CommandDialog>
    </>
  )
}
export default SearchModal