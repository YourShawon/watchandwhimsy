'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Checkbox } from '@/components/ui/checkbox'
import * as Slider from '@radix-ui/react-slider'
import { Label } from '@/components/ui/label'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'

interface ListItemProps {
  list: string[]
  renderItem: (item: string) => JSX.Element // Render prop for custom item rendering
}

// Generic List component
const List: React.FC<ListItemProps> = ({ list, renderItem }) => (
  <>
    {list.map((item, i) => (
      <div key={item + i} className='flex items-center space-x-2'>
        {renderItem(item)}
      </div>
    ))}
  </>
)

const Filtering = () => {
  const [rangeValues, setRangeValues] = useState<number[]>([5, 200])
  const defaultMinValue = 1
  const defaultMaxValue = 300

  const handleSliderChange = (values: number[]) => {
    setRangeValues(values)
  }

  // Render function for checkbox items
  const renderCheckbox = (item: string) => (
    <>
      <Checkbox
        className='border-2 border-gray-300 data-[state=checked]:border-green-0x data-[state=checked]:bg-green-0x'
        id={item}
      />
      <Label className='cursor-pointer font-normal' htmlFor={item}>
        {item}
      </Label>
    </>
  )

  return (
    <ScrollArea className='col-span-12 w-full rounded-lg lg:col-span-3 lg:max-h-screen lg:shadow-sm'>
      <div className='flex flex-col gap-6'>
        {/* Filter by category */}
        <Card className='lg:mr-2'>
          <CardHeader>
            <div className='flex items-center justify-between'>
              <CardTitle className='text-lg text-green-0x'>
                Categories
              </CardTitle>
              <Button className='p-1 text-sm text-green-0x' variant={'link'}>
                Reset sort
              </Button>
            </div>
            <Separator />
          </CardHeader>
          <CardContent>
            <List
              list={[
                'man',
                'woman',
                'kids',
                'couples',
                'minimalist-watch',
                'leather',
                'metal',
                'smart-watch',
                'digital-watch',
                'analog-watch-with-number',
                'analog-watch-without-number',
                'table-watch',
                'wall-clock'
              ]}
              renderItem={item => (
                <p className='w-fit cursor-pointer text-sm capitalize leading-9 transition-all duration-300 hover:ml-1 hover:text-green-0x'>
                  {item}
                </p>
              )}
            />
          </CardContent>
        </Card>

        {/* Filters by price range color and condition */}
        <Card className='lg:mr-2'>
          <CardHeader>
            <div className='flex items-center justify-between'>
              <CardTitle className='text-lg text-green-0x'>Filters</CardTitle>
              <Button className='p-1 text-sm text-green-0x' variant={'link'}>
                Reset sort
              </Button>
            </div>
            <Separator />
          </CardHeader>
          <CardContent className='space-y-6'>
            <div className='space-y-2'>
              <h3 className='font-semibold text-muted-foreground'>
                Fill by Price
              </h3>
              <Slider.Root
                className='relative flex h-5 w-full cursor-pointer touch-none select-none items-center'
                min={defaultMinValue}
                max={defaultMaxValue}
                step={1}
                value={rangeValues}
                onValueChange={handleSliderChange}
              >
                <Slider.Track className='relative h-1 grow rounded-full bg-green-0x'>
                  <Slider.Range className='absolute h-full rounded-full bg-black transition-all duration-300' />
                </Slider.Track>
                <Slider.Thumb className='block h-4 w-4 rounded-full bg-green-0x shadow-lg focus:outline-none' />
                <Slider.Thumb className='block h-4 w-4 rounded-full bg-green-0x shadow-lg focus:outline-none' />
              </Slider.Root>

              <div className='text-sm text-muted-foreground'>
                Range: ${rangeValues[0]} - ${rangeValues[1]}
              </div>
            </div>

            <div className='space-y-2'>
              <h3 className='font-medium'>Colors</h3>
              <List
                list={[
                  'Gold',
                  'Silver',
                  'White',
                  'Black',
                  'Pink',
                  'Grey',
                  'Blue',
                  'Green',
                  'Red',
                  'Purple',
                  'Yellow',
                  'Orange'
                ]}
                renderItem={renderCheckbox}
              />
            </div>

            <div className='space-y-2'>
              <h3 className='font-medium'>Materials</h3>
              <List
                list={[
                  'Stainless Steel',
                  'Rose Gold',
                  'Silver',
                  'Aluminium',
                  'Ceramic',
                  'Yellow Gold',
                  'Titanium'
                ]}
                renderItem={renderCheckbox}
              />
            </div>

            <div className='space-y-2'>
              <h3 className='font-medium'>Brand</h3>
              <List
                list={[
                  'Accurist',
                  'adidas Originals',
                  'All We Are',
                  'Anne Klein',
                  'Armani Exchange',
                  'Baume and Mercier',
                  'Bering',
                  'Boss',
                  'Bulova',
                  'Calvin Klein'
                ]}
                renderItem={renderCheckbox}
              />
            </div>

            <div className='space-y-2'>
              <h3 className='font-medium'>Item Conditions</h3>
              <List
                list={['New', 'Used', 'Refurbished']}
                renderItem={renderCheckbox}
              />
            </div>

            {/* <Button variant={"bgGreen"}>
              <FaFilter className="w-4 h-4 mr-2" /> Filter
            </Button> */}
          </CardContent>
        </Card>
      </div>
    </ScrollArea>
  )
}

export default Filtering
