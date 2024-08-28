/* eslint-disable @next/next/no-img-element */
import * as React from 'react'


type listings = {
    year: string;
    name: string;
}

export type List = {
  heading: string;
  body: string;
  listings: listings[];
}

export type Props = List

export const List = ({
    heading,
  body,
  listings,
}: Props) => {
  return (
    <div className='bg-green-tan'>
        <div className='py-10 pt-20 px-8 md:px-20'>
            <div className='mx-auto space-y-8 mb-10'>
                {heading && (
                    <h1 className='text-medium sm:text-large text-black'><span className='mr-4'>&rarr;</span>{heading}</h1>
                )}
                {body && (
                    <div className='max-w-7xl'>
                        <h4 className='text-black text-extra-small md:text-small'>{body}</h4>
                    </div>
                )}
            </div>
            <div className='w-full flex flex-col bg-white'>
                {listings?.map((list, i) => {
                    return(
                        <div key={i} className='border-t border-black py-10 px-8 w-full flex flex-col md:flex-row md:space-x-10 xl:space-x-16'>
                            <h5 className='text-black text-small md:text-medium'>
                                {list.year}
                            </h5>
                            <h5 className='text-black text-small md:text-medium'>
                                {list.name}
                            </h5>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}
