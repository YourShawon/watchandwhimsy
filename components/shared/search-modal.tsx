
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import { headerCategoryList } from "@/constants/header";
import { SearchProps } from "@/interface/shared";
import { FC } from "react";



const SearchModal:FC<SearchProps> = ({open, setOpen}) => {

  return (
    <>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList className="popover-content-scroll">
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            {
              headerCategoryList.map(category => (
                <CommandItem key={category.id}>
              <span className="capitalize">{category.title}</span>
            </CommandItem>
              ))
            }
  
          </CommandGroup>
          <CommandSeparator />
        </CommandList>
      </CommandDialog>
    </>
  )
}
export default SearchModal