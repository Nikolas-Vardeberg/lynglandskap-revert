import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'
import { MdArrowRight, MdOutlineSearch, MdSearch } from 'react-icons/md'
import { IoIosMenu } from 'react-icons/io'
import { FaArrowRightLong } from "react-icons/fa6";

import { NavLogo } from './NavLogo'

type BlogItem = {
  title: string
  url: string
  _key: string
}

type MenuItem = {
  title: string
  url: string
  _key: string
}

export type NavigationProps = {
  menu: MenuItem[]
  blog: BlogItem[]
}

export type Props = NavigationProps

export const Navigation = ({ menu, blog }: Props) => {
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleSearchToggle = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    setIsSearchOpen(!isSearchOpen);
  };

  const handleMenuToggle = () => {
    if (isSearchOpen) {
      setIsSearchOpen(false);
    }
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full flex-col border-b  mx-auto bg-green-dark">
      <div className="container flex flex-row py-5 items-center justify-between px-8 lg:px-0 mx-auto">
            <a href="/" className="flex justify-start items-start text-base text-green-tan">
                Lyng Landskap
            </a>
            <div className="flex flex-row space-x-2">
                <div onClick={handleSearchToggle} id="search-toggle" className="flex border border-green-tan text-green-tan min-w-fit min-h-fit h-0 px-6 py-5 justify-center rounded-full hover:bg-green-tan hover:text-black duration-300 ">
                    <div className="flex justify-center items-center">
                        <span className="flex text-sm md:text-base items-center space-x-1"><MdOutlineSearch className="mr-2 text-lg items-center justify-center flex mx-auto"/>Søk</span>
                    </div>
                </div>
                <div onClick={handleMenuToggle} className="flex border border-green-tan text-green-tan min-w-fit min-h-fit h-0 px-8 py-5 justify-center items-center rounded-full hover:bg-green-tan hover:text-black duration-300 ">
                    <div className="flex justify-center items-center">
                        <span className="flex text-sm md:text-base items-center justify-center"><IoIosMenu className="mr-2 items-center text-lg justify-center flex mx-auto"/>Meny</span>
                    </div>
                </div>

            </div>
    </div>
    <div className={`w-full bg-green-tan absolute z-30 mx-auto border-b py-10 duration-300 shadow-md transition-all transform ${isSearchOpen ? '' : 'hidden'}`}>
        <div className="container flex items-center justify-center mx-auto">
          <form method="get">
            <div className="w-full max-w-[500px] items-center rounded-full h-12 border border-green-dark flex bg-white overflow-hidden">
              <MdSearch className='mx-2 text-green-dark' />
              <input placeholder="Søk..." className="bg-inherit border-none outline-none" />
              <button type="submit" className="h-full bg-green-dark p-4 flex justify-center items-center text-white">
                Søk
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className={`w-full bg-green-tan mx-auto border-b absolute py-10 z-30 duration-300 shadow-md transition-all transform ${isMenuOpen ? '' : 'hidden'}`}>
        <ul className="container grid grid-cols-1 px-4 lg:grid-cols-3 items-start md:px-0 text-base justify-between w-full mx-auto">
          <li className='flex justify-start items-start order-3 lg:order-1 flex-col space-y-4'>
            {menu.map((item) => (
              <Link href={item.url} className='flex justify-center items-center' key={item._key}>
                <span className='flex text-lg items-center justify-center'>{item.title} &rarr;</span>
              </Link>
            ))}
          </li>
          <li className='flex justify-start items-start flex-col space-y-4 order-3 lg:order-2'>
            {blog.map((item) => (
              <Link href={item.url} className='flex justify-center items-center' key={item._key}>
                <span className='flex text-lg items-center'>{item.title} &rarr;</span>
              </Link>
            ))}
          </li>
          <li className='order-1 lg:order-3 flex items-start justify-start pb-4 flex-col w-full space-y-4'>
            <Link href="/kontakt" className="flex border border-white bg-white text-black w-full md:max-w-fit min-h-fit h-0 px-8 md:px-12 py-7 justify-between items-center rounded-full hover:bg-green-dark hover:border-green-dark hover:text-white duration-300 ">
              <span className='flex justify-between items-center w-full text-base'>
                <span className='flex items-center justify-center'>Kontakt Oss</span>
                &rarr;
              </span>
            </Link>
          </li>
        </ul>
      </div>
</header>
  )
}

export default Navigation;
