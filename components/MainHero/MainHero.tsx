/* eslint-disable @next/next/no-img-element */
import ImageBox from 'components/shared/ImageBox'
import * as React from 'react'

export type MainHero = {
  heading: string
  body?: string
  heroImage: any
  heroImageAlt: string
}

export type Props = MainHero

export const MainHero = ({
  heading,
  body,
  heroImage,
  heroImageAlt,
}: Props) => {
  return (
    <div className='bg-green-primary py-10 pt-20 px-8 md:px-20'>
       <div className='max-4xl mx-auto space-y-8'>
          {heading && (
           <h1 className='text-small sm:text-large text-black'><span className='mr-4'>&rarr;</span>{heading}</h1>
          )}
        {body && (
          <div className='max-w-7xl self-start'>
            <h4 className='text-black text-extra-small md:text-small'>{body}</h4>
          </div>
        )}
        </div>
        {heroImage && (
          <div className='w-full mt-12'>
             <ImageBox
                image={heroImage}
                alt={heroImageAlt}
                className='md:w-full md:h-full text-black'
              />
          </div>
        )}
      </div>
  )
}
