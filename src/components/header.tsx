'use client'

import { FacebookIcon, Github, Instagram, LinkedinIcon, Menu } from "lucide-react";
import Image from "next/image"
import Link from "next/link"
import {  Sheet, SheetContent, SheetDescription,SheetHeader,SheetTitle,SheetTrigger,} from "@/components/ui/sheet";



import profile from '../../public/profile.png'
import { ModeToggle } from "./ModeToggle";


interface Data{
    name: string,
    path: string
}

const LinksData:Data[] =[
    { name:'Home', path:'/' },
    {name:"Blog", path:"/blog" },
  

]


export default function Header() {
  
  return (
    <header className="flex border-b border-slate-500 m-2 py-3 px-4 sm:px-10 font-[sans-serif] min-h-[70px] tracking-wide relative z-50">
    <div className='flex justify-between items-center w-full'>
      
      {/* Logo Section */}
      <div className="flex items-center">
        <Link href="/">
         <h1 className="text-4xl hover:text-slate-600">QS</h1>
        </Link>
      </div>
      
      {/* Desktop Navigation Links */}
      <div className='hidden md:flex justify-between items-center'>
        <ul className="flex gap-8 lg:gap-16 font-serif ">
          {LinksData.map((list) => (
            <li key={list.path} className="hover:cursor-pointer hover:text-slate-500">
              <Link href={`${list.path}`}>{list.name}</Link>
            </li>
          ))}
        </ul>  
      </div>
      
      {/* Social Icons */}
      <div className="hidden md:flex gap-4 lg:gap-8 items-center">
        <Github className=" hover:cursor-pointer" />
        <LinkedinIcon className=" hover:cursor-pointer" />
        <Instagram className=" hover:cursor-pointer" />
      </div>
      <div className="flex justify-evenly">
      <ModeToggle/>
      {/* Mobile Menu Button */}
      <Sheet>
        <SheetTrigger className="md:hidden">
          <Menu className="text-2xl" />
        </SheetTrigger>
        
        {/* Mobile Menu Content */}
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="mt-5 text-xl sm:text-2xl font-bold font-serif">Menu Bar</SheetTitle>
            <ul className="mt-5">
              {LinksData.map((list) => (
                <li key={list.path} className="mt-4 text-lg sm:text-xl font-bold font-serif hover:cursor-pointer">
                  <Link href={`${list.path}`}>{list.name}</Link>
                </li>
              ))}
            </ul>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      </div>
    </div>
  </header>
  
  )
}
