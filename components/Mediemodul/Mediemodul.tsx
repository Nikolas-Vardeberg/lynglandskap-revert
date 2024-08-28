import ImageBox from 'components/shared/ImageBox';
import Link from 'next/link';
import * as React from 'react'

type textlink = {
    text: string;
    url: string;
}

type Cards = {
    hasDarkBackground: boolean;
    imageOnRight: boolean;
    image: any;
    imageAlt: string;
    heading: string;
    body: string;
    textlink: textlink[];
}

export type Mediemodul = {
    heading: string;
    body: string;
    cards: Cards[];
}

export type Props = Mediemodul

export const Mediemodul = ({ heading, body, cards, textlink }: Props) => {
  return (
    <div className='bg-green-tan py-10 pt-20 px-8 md:px-20'>
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
            {cards?.map((card, i) => {
                return(
                    <div key={i} className={`${card.hasDarkBackground? "bg-green-dark" : "bg-white"} grid grid-cols-1 lg:grid-cols-2 mt-6`}>
                        <div
                            className={`relative mx-auto h-[300px] md:h-[500px] w-full self-start md:mt-0 ${
                            card.imageOnRight ? 'order-last mt-8' : ''
                            }`}
                        >
                            <ImageBox
                                width={500}
                                height={500}
                                image={card.image}
                                alt={card.imageAlt}
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>
                        <div className=" py-10 flex flex-col justify-center px-20">
                            {heading && (
                            <h2
                                className={`text-small text-center lg:text-left lg:text-medium 2xl:text-large mb-4 ${
                                card.hasDarkBackground ? 'text-white' : 'text-black'
                                }`}
                            >
                                {card.heading}
                            </h2>
                            )}
                            {card.textlink?.map((links, i) => {
                                return(
                                   <Link href={links.url} className='text-black text-center lg:text-left text-extra-small lg:text-small hover:text-green-dark'>
                                        {links.text}
                                   </Link>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
  )
}
