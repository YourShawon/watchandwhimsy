'use client'

import { format } from 'date-fns'
import { ChevronDownIcon, DotsHorizontalIcon } from '@radix-ui/react-icons'
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from '@tanstack/react-table'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { useState } from 'react'
import OrderDetails from './order-details'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { formatAmount } from '@/lib/utils'

type order = {
  orderId: string
  date: string
  status:
    | 'pending'
    | 'processing'
    | 'success'
    | 'failed'
    | 'shipped'
    | 'delivered'
  quantity: string
  amount: number
}

interface RowData {
  status:
    | 'pending'
    | 'processing'
    | 'success'
    | 'failed'
    | 'shipped'
    | 'delivered'
}

const data: order[] = [
  {
    orderId: '#m5gr84i9',
    amount: 316,
    status: 'pending',
    quantity: '2 Items',
    date: new Date().toLocaleString()
  },
  {
    orderId: '#3u1reuv4',
    amount: 242,
    status: 'success',
    quantity: '1 Item',
    date: new Date().toLocaleString()
  },
  {
    orderId: '#derv1ws0',
    amount: 837,
    status: 'processing',
    quantity: '1 Item',
    date: new Date().toLocaleString()
  },
  {
    orderId: '#ckma50ae',
    amount: 874,
    status: 'success',
    quantity: '2 Items',
    date: new Date().toLocaleString()
  },
  {
    orderId: '#5kma53ae',
    amount: 874,
    status: 'success',
    quantity: '2 Items',
    date: new Date().toLocaleString()
  },
  {
    orderId: '#ekmac3ae',
    amount: 874,
    status: 'success',
    quantity: '2 Items',
    date: new Date().toLocaleString()
  },
  {
    orderId: '#5amg53ae',
    amount: 874,
    status: 'success',
    quantity: '2 Items',
    date: new Date().toLocaleString()
  },
  {
    orderId: '#csma5eae',
    amount: 874,
    status: 'success',
    quantity: '2 Items',
    date: new Date().toLocaleString()
  },
  {
    orderId: '#akm353ae',
    amount: 874,
    status: 'success',
    quantity: '2 Items',
    date: new Date().toLocaleString()
  },
  {
    orderId: '#dkm353ae',
    amount: 874,
    status: 'success',
    quantity: '2 Items',
    date: new Date().toLocaleString()
  },
  {
    orderId: '#bhqecj4p',
    amount: 721,
    status: 'failed',
    quantity: '10 Items',
    date: new Date().toLocaleString()
  }
]

const columns: ColumnDef<order>[] = [
  {
    accessorKey: 'orderId',
    header: 'Order ID',
    cell: ({ row }) => (
      <div className='capitalize'>{row.getValue('orderId')}</div>
    )
  },
  {
    accessorKey: 'date',
    header: 'Date',
    cell: ({ row }) => (
      <div className='capitalize'>
        {format(row.getValue('date'), 'dd-MMM-yyyy')}
      </div>
    )
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }: { row: { getValue: (key: keyof RowData) => string } }) => {
      const status = row.getValue('status') as RowData['status']

      const statusStyles: Record<RowData['status'], string> = {
        pending: 'bg-yellow-100 text-black-solid sm:hover:bg-yellow-200',
        processing: 'bg-blue-100 text-blue-800 sm:hover:bg-blue-200',
        success: 'bg-green-100 text-green-800 sm:hover:bg-green-200',
        failed: 'bg-red-100 text-red-800 sm:hover:bg-red-200',
        shipped: 'bg-purple-100 text-purple-800 sm:hover:bg-purple-200',
        delivered: 'bg-teal-100 text-teal-800 sm:hover:bg-teal-200'
      }

      return (
        <span
          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-sm font-medium ${statusStyles[status]}`}
        >
          {status}
        </span>
      )
    }
  },
  {
    accessorKey: 'quantity',
    header: 'Quantity',
    cell: ({ row }) => (
      <div className='capitalize'>{row.getValue('quantity')}</div>
    )
  },
  {
    accessorKey: 'amount',
    header: () => <div className='text-right'>Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('amount'))

      return (
        <div className='text-right font-medium'>{formatAmount(amount)}</div>
      )
    }
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const order = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' className='h-8 w-8 p-0 sm:hover:bg-white-1x'>
              <span className='sr-only'>Open menu</span>
              <DotsHorizontalIcon className='h-4 w-4' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end' className='border bg-white'>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(order.orderId)}
              className='cursor-pointer sm:hover:bg-white-2x'
            >
              Copy order ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className='cursor-pointer sm:hover:bg-white-2x'>
              View product
            </DropdownMenuItem>

            <Dialog>
              <DialogTrigger asChild>
                <Button className='cursor-pointer border sm:hover:bg-white-2x'>
                  View Details
                </Button>
              </DialogTrigger>
              <OrderDetails />
            </Dialog>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  }
]

const Orders = () => {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection
    },
    initialState: {
      pagination: {
        pageSize: 5 // Set the initial page size to 5
      }
    }
  })

  return (
    <Card className='space-y-5 border'>
      <CardHeader>
        <CardTitle className='text-black-solid'>Recent Orders</CardTitle>
        <CardDescription className='flex flex-col gap-2 text-muted-foreground'>
          <span>{`View and manage your recent purchases`}</span>
        </CardDescription>
      </CardHeader>

      <Separator className='m-0 h-[1px] w-full bg-white-1x' />

      <CardContent>
        <div className='w-full'>
          <div className='flex items-center py-4'>
            <Input
              placeholder='Filter IDs...'
              value={
                (table.getColumn('orderId')?.getFilterValue() as string) ?? ''
              }
              onChange={event =>
                table.getColumn('orderId')?.setFilterValue(event.target.value)
              }
              className='max-w-sm focus:border-cyan-600 focus-visible:ring-0 focus-visible:ring-offset-0'
            />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant='outline' className='ml-auto'>
                  Columns <ChevronDownIcon className='ml-2 h-4 w-4' />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='end' className='bg-white'>
                {table
                  .getAllColumns()
                  .filter(column => column.getCanHide())
                  .map(column => {
                    return (
                      <DropdownMenuCheckboxItem
                        key={column.id}
                        className='cursor-pointer capitalize transition-all duration-300 sm:hover:bg-white-2x'
                        checked={column.getIsVisible()}
                        onCheckedChange={value =>
                          column.toggleVisibility(!!value)
                        }
                      >
                        {column.id}
                      </DropdownMenuCheckboxItem>
                    )
                  })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className='rounded-md border'>
            <Table>
              <TableHeader>
                {table.getHeaderGroups().map(headerGroup => (
                  <TableRow key={headerGroup.id} className=''>
                    {headerGroup.headers.map(header => {
                      return (
                        <TableHead
                          className='font-semibold text-muted-foreground'
                          key={header.id}
                        >
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                        </TableHead>
                      )
                    })}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map(row => {
                    return (
                      <TableRow
                        key={row.id}
                        data-state={row.getIsSelected() && 'selected'}
                      >
                        {row.getVisibleCells().map(cell => (
                          <TableCell key={cell.id} className='text-black-solid'>
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </TableCell>
                        ))}
                      </TableRow>
                    )
                  })
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length}
                      className='h-24 text-center text-muted-foreground'
                    >
                      No results.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          <div className='flex items-center justify-end space-x-2 py-4'>
            <div className='space-x-2'>
              <Button
                className='border sm:hover:bg-white-2x'
                size='sm'
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                Previous
              </Button>
              <Button
                className='border sm:hover:bg-white-2x'
                size='sm'
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default Orders
