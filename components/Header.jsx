import React, { useEffect, useState} from 'react'
import Link from 'next/link'
import { getCategories } from '../services'


const Header = () => {
    const [categories, setCategories] = useState([]); // This gets the full list of available categories

    useEffect(() => { // useEffect is only called once on load to get the categories
        getCategories()
        .then((newCategories) => setCategories(newCategories))
    }, []); // We are only calling this function once so we leave an empty array to do this

  return (
    <div className=' container mx-auto px-10 mb-8'>
        <div className='border-b w-full inline-block border-blue-400 py-8'>
            <div className='md:float-left block'>
                <Link href="/">
                    <span className='cursor-pointer font-bold text-4xl text-white'>
                        Mel's Blog
                    </span>
                </Link>
            </div>
            <div className='hidden md:float-left md:contents'>
                {categories.map((category) =>(
                    <Link key={category.slug} href={`/category/${category.slug}`}>
                        <span className='md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>
                            {category.name}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Header