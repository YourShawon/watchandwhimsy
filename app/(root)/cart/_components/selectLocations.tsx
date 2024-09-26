import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

type Location = {
  name: string
  department: string
}

type SelectLocationFormProps = {
  handleSelectLocation: (location: string) => void
  handleShippingPrice: (location: string) => void
  errorMessage?: string
  locations: Location[]
}

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
          <SelectValue placeholder='Select Location'/>
        </SelectTrigger>
        <SelectContent className='border-border'>
          {departments.map(department => (
            <SelectGroup key={department}>
              <SelectLabel>
                {department.charAt(0).toUpperCase() + department.slice(1)}
              </SelectLabel>
              {locations
                .filter(item => item.department === department)
                .map((item, index) => (
                  <SelectItem
                    key={index}
                    value={item.name}
                    className='capitalize'
                  >
                    {item.name}
                  </SelectItem>
                ))}
            </SelectGroup>
          ))}
        </SelectContent>
      </Select>
      {/* {errorMessage && <p className='text-red-500'>{errorMessage}</p>} */}
    </>
  )
}

export default SelectLocationForm
