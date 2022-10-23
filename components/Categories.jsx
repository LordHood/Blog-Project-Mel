import React, { useEffect, useState} from 'react'
import Link from 'next/link'
import { getCategories } from '../services'

const Categories = () => {
  const [categories, setCategories] = useState([]); // This gets the full list of available categories

  useEffect(() => { // useEffect is only called once on load to get the categories
    getCategories()
      .then((newCategories) => setCategories(newCategories))
  }, []); // We are only calling this function once so we leave an empty array to do this

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8 pb-12'>
        <h3 className='text-xl mb-8 font-semibold border-b pb-4'> 
          Categories
        </h3>
        {categories.map((category) => (
          <Link key={category.slug} href={`/category/${category.slug}`}>
            <span className='cursor-pointer block pb-3 mb-3'>
              {category.name}
            </span>
          </Link>
        ))}
    </div>
  )
}

export default Categories