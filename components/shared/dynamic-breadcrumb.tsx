
"use client"
import Link from "next/link"
import React from "react"
 
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { usePathname } from "next/navigation"

const homeBreadcrumb = [
  {
    id: 0,
    title: "Home",
    href: "/",
  }
]

function capitalizeFirstLetter(str) {
  if (!str) return str; // handle empty strings
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function createBreadcrumbItems (arr) {
  const arr2 = arr.map ((item, idx) => (
    {
      id: idx + 1,
      title: capitalizeFirstLetter(item),
      href: `/${item}`
    }
  ))

  const newArr = [
    ...homeBreadcrumb,
    ...arr2,
  ]
  return newArr;
}

const DynamicBreadcrumb = () => {
  let path = usePathname()

  let arr = path.split("/").filter(str => str !== "");

  let items = createBreadcrumbItems(arr);


  return (
    <div className="px-3 py-5 mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320px]">
      <Breadcrumb>
        <BreadcrumbList>
          {items.map((item, idx )=> (
            <React.Fragment key={item.id}>
              <BreadcrumbItem>
                {idx === items.length - 1 ? (
                  <BreadcrumbPage>{item.title}</BreadcrumbPage>
                ) : (
                  <>
                    <Link href={item.href}>
                      {item.title}
                    </Link>
                  </>
                )}
              </BreadcrumbItem>
              {idx !== items.length - 1 && <BreadcrumbSeparator />}
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  )
}

export default DynamicBreadcrumb