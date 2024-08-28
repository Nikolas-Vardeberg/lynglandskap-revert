/* eslint-disable @next/next/no-img-element */
import ImageBox from 'components/shared/ImageBox'
import * as React from 'react'

export type Image = {
  image: any;
  imageAlt: string;
}

export type Props = Image

export const Image = ({
  image,
  imageAlt
}: Props) => {
  return (
    <div className='bg-green-primary'>
      {image && (
        <div className='py-10 px-8 md:px-20 max-w-8xl'>
          <ImageBox 
            image={image}
            alt={imageAlt}
            className='w-full h-full self-start'
          />
        </div>
      )}
    </div>
  )
}
