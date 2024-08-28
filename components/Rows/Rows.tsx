import ImageBox from 'components/shared/ImageBox';
import * as React from 'react'

type Text = {
  bioText: string;
}

type Blocks = {
  rowsImage: any;
  rowsImageAlt: string;
  name: string;
  role: string;
  email: string;
  bio: Text[];
}

export type Rows = {
  body: string;
  heading: string;
  blocks: Blocks[];
}

export type Props = Rows

export const Rows = ({ heading, body, blocks }: Props) => {
  return (
    <section className="rows bg-green-tan py-10 pt-20 px-8 md:px-20">
      <div className="max-w-4xl flex flex-col justify-start items-start space-y-8">
        {heading && (
          <h2 className="text-small sm:text-medium text-black flex items-center">
            <span className="mr-4">&rarr;</span>
            {heading}
          </h2>
        )}
        {body && (
          <p className="max-w-7xl text-left text-black text-extra-small md:text-small">
            {body}
          </p>
        )}
      </div>
      <div className={`mt-6 gap-16 grid grid-cols-1 justify-between ${blocks.length === 2 ? "lg:grid-cols-2" : "grid-cols-1"} ${blocks.length === 3 ? "lg:grid-cols-3" : "grid-cols-1"}`}>
        {blocks?.map((block, i) => (
          <div key={i} className="flex flex-col space-y-4">
            <div className="overflow-hidden w-full h-full">
              <ImageBox
                image={block.rowsImage}
                alt={block.rowsImageAlt || 'Image description'}
                className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
              />
            </div>
            {block.name && (
              <h4 className=" text-black text-extra-small 2xl:text-small">{block.name}</h4>
            )}
            <div className="space-y-2">
              {block.bio?.map((bio, b) => (
                <p key={b} className="text-extra-small text-black">
                  {bio.bioText}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
