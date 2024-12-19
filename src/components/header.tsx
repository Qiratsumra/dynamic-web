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
    {name:"Contact", path:"" },    

]


export default function Header() {
  
  return (
    <header className="flex border-b py-3 px-4 sm:px-10 font-[sans-serif] min-h-[70px] tracking-wide relative z-50">
    <div className='flex justify-between items-center w-full'>
      
      {/* Logo Section */}
      <div className="flex items-center">
        <Link href="/">
          <Image src={profile} alt="logo" className='rounded-full w-16 sm:w-20 ring-2 ring-orange-500' />
        </Link>
        <h1 className="ml-4 text-lg sm:text-2xl font-bold hover:text-orange-400 text-orange-700">Qirat Saeed</h1>
      </div>
      
      {/* Desktop Navigation Links */}
      <div className='hidden md:flex justify-between items-center'>
        <ul className="flex gap-8 lg:gap-16 font-serif font-bold">
          {LinksData.map((list) => (
            <li key={list.path} className="text-orange-700 hover:text-orange-600 hover:cursor-pointer">
              <Link href={`${list.path}`}>{list.name}</Link>
            </li>
          ))}
        </ul>  
      </div>
      
      {/* Social Icons */}
      <div className="hidden md:flex gap-4 lg:gap-8 items-center">
        <Github className="text-orange-700 hover:text-orange-600 hover:cursor-pointer" />
        <LinkedinIcon className="text-orange-700 hover:text-orange-600 hover:cursor-pointer" />
        <Instagram className="text-orange-700 hover:text-orange-600 hover:cursor-pointer" />
      </div>
      <ModeToggle/>
      {/* Mobile Menu Button */}
      <Sheet>
        <SheetTrigger className="md:hidden">
          <Menu className="text-2xl" />
        </SheetTrigger>
        
        {/* Mobile Menu Content */}
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="mt-5 text-xl sm:text-2xl font-bold font-serif text-orange-700 hover:text-orange-600">Menu Bar</SheetTitle>
            <ul className="mt-5">
              {LinksData.map((list) => (
                <li key={list.path} className="mt-4 text-lg sm:text-xl font-bold font-serif text-orange-700 hover:text-orange-600 hover:cursor-pointer">
                  <Link href={`${list.path}`}>{list.name}</Link>
                </li>
              ))}
            </ul>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  </header>
  
  )
}