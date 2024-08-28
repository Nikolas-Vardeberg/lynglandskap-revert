import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'
import { NavLogo } from './NavLogo'


type MenuItem = {
  label: string
  url: string
  _key: string
}

export type NavigationProps = {
  menu: MenuItem[]
}

export type Props = NavigationProps

export const Navigation = ({ menu }: Props) => {
  return (
    <header className='px-10 bg-green-dark items-center py-5  text-white'>
          <div>
          {menu && (
            <ul className='flex flex-col sm:flex-row  gap-8'>
              {menu.map((item) => {
                return(
                  <li key={item._key}>
                    <Link className='' href={item.url}>
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
       
    </header>
  )
}

export default Navigation;
