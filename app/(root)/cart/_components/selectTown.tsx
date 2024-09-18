import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'

type Location = {
  name: string
  department: string
}

type SelectTownFormProps = {
  setSelectedLocation: (location: string) => void
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  errorMessage?: string
  locations: Location[]
}

function SelectTownForm({
  setSelectedLocation,
  handleSubmit,
  errorMessage,
  locations
}: SelectTownFormProps) {
  return (
    <form onSubmit={e => handleSubmit(e)}>
      <Select onValueChange={setSelectedLocation}>
        <SelectTrigger className='w-52 rounded border-[#E8F6EA]'>
          <SelectValue placeholder='Select a Location' />
        </SelectTrigger>
        <SelectContent className='h-80 rounded border-[#E8F6EA] bg-[#f5fff6] text-[#222]'>
          <SelectGroup>
            <SelectLabel className='bg-[#E8F6EA]'>Dhaka</SelectLabel>
            {locations
              .filter(item => item.department === 'dhaka')
              .map((item, index) => (
                <SelectItem key={index} value={item.name}>
                  {item.name}
                </SelectItem>
              ))}
          </SelectGroup>
          <SelectGroup>
            <SelectLabel className='bg-[#E8F6EA]'>Rajshahi</SelectLabel>
            {locations
              .filter(item => item.department === 'rajshahi')
              .map((item, index) => (
                <SelectItem key={index} value={item.name}>
                  {item.name}
                </SelectItem>
              ))}
          </SelectGroup>
          <SelectGroup>
            <SelectLabel className='bg-[#E8F6EA]'>Rangpur</SelectLabel>
            {locations
              .filter(item => item.department === 'rangpur')
              .map((item, index) => (
                <SelectItem key={index} value={item.name}>
                  {item.name}
                </SelectItem>
              ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      {errorMessage && <p className='mt-2 text-red-500'>{errorMessage}</p>}

      <Button
        type='submit'
        className='mt-4 rounded bg-[#088178] px-12 text-base font-medium text-white hover:bg-[#088178] hover:text-white'
      >
        Update
      </Button>
    </form>
  )
}

export default SelectTownForm
