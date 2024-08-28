import ImageBox from 'components/shared/ImageBox';
import Link from 'next/link';
import * as React from 'react'

type Links = {
    service: string;
    url: string;
}


export type Fastlink = {
  hasDarkBackground: boolean
  eyebrow: string;
  fastlinkImage: any;
  fastlinkImageAlt: string;
  blocks: Links[];
}

export type Props = Fastlink

export const Fastlink = ({ hasDarkBackground, eyebrow, fastlinkImage, fastlinkImageAlt, blocks}: Props) => {
  return (
    <div className={hasDarkBackground ? 'bg-green-dark' : 'bg-green-primary'}>
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className='flex flex-col justify-center items-center md:items-start py-12 px-12 md:px-24 xl:px-32 2xl:px-52'>
                {eyebrow && (
                    <h4 className={`${hasDarkBackground ? "text-white" : "text-black"} text-extra-small md:text-small lg:text-large`}>{eyebrow}</h4>
                )}
                {blocks?.map((block, i) => {
                    return(
                        <Link className={`${hasDarkBackground ? "text-white" : "text-black"} hover:scale-110 duration-100`} href={block.url} key={i}>
                            <h2 className='text-small 2xl:text-large'><span className='mr-4'>&rarr;</span>{block.service}</h2>
                        </Link>
                    )
                })}
            </div>
            {fastlinkImage && (
                <div className='h-full'>
                    <ImageBox 
                        image={fastlinkImage}
                        alt={fastlinkImageAlt}
                        className='md:w-full md:h-full object-cover'
                    />
                </div>
            )}
        </div>
    </div>
  )
}
