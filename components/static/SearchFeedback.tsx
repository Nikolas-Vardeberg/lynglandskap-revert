
import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'
import { MdArrowRight, MdOutlineSearch, MdSearch } from 'react-icons/md'
import { IoIosMenu } from 'react-icons/io'
import { FaArrowRightLong } from "react-icons/fa6";


export const SearchFeedback = () => {
  return (
    <div className="w-full bg-green-700 py-10 border-gray-300 mx-auto">
        <div className="container flex justify-start items-start mx-auto flex-col">
            <div className="items-center justify-center mx-auto">
                <h2 className="text-white text-xl">Fant du det du lettet etter?</h2>
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-5">
                    <button className="bg-green-tan hover:bg-green-dark hover:text-white duration-100 text-black flex  h-0 p-6 justify-center items-center">
                        Ja
                    </button>
                <button className="bg-white border-green-dark text-black  hover:border-white hover:bg-green-dark hover:text-white duration-100 flex h-0 p-6 justify-center items-center">
                        Nei
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchFeedback;
