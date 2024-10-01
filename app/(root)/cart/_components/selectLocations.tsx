import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { SelectLocationFormProps } from '@/interface/cart'

function SelectLocationForm({
  handleSelectLocation,
  handleShippingPrice,
  locations,
  errorMessage
}: SelectLocationFormProps) {
  // Extract unique departments for rendering
  const departments = Array.from(
    new Set(locations.map(location => location.department))
  )

  return (
    <>
      <Select
        onValueChange={(value: string) => {
          handleSelectLocation(value)
          handleShippingPrice(value)
        }}
      >
        <SelectTrigger className='capitalize'>
          <SelectValue placeholder='Select Location' />
        </SelectTrigger>
        <SelectContent className='bg-white'>
          {departments.map(department => (
            <SelectGroup key={department}>
              <SelectLabel className='my-1 bg-white-2x capitalize'>
                {department}
              </SelectLabel>
              {locations
                .filter(item => item.department === department)
                .map((item, index) => (
                  <SelectItem
                    key={index}
                    value={item.name}
                    className='cursor-pointer capitalize transition-all duration-300 sm:hover:bg-white-2x'
                  >
                    {item.name}
                  </SelectItem>
                ))}
            </SelectGroup>
          ))}
        </SelectContent>
      </Select>
      {/* {errorMessage && <p className="text-red-500">{errorMessage}</p>} */}
    </>
  )
}

export default SelectLocationForm
