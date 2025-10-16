import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Collection = () => {

  let [data, setData] = useState([])
  useEffect(()=>{
    fetch(" http://localhost:3000/products", {method : "GET"})
    .then( (response) => {return response.json()})
    .then( (data) => {setData(data);
    }) // response.json that means convert the json data into normal data
  }, [])
  return (
      <section className='bg-gradient-to-r from-gray-400 to-teal-800 font-poppins'>
        <h1 className='text-2xl p-5 font-bold'>Product List</h1>

        <div className=' grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-5'>
        {
          data.map(product => (
            <div key={data.id} className='bg-white flex flex-col h-72 w-auto items-center justify-center shadow-md rounded-lg p-2'>
              <img src={product.image} alt={product.title} className='rounded-md h-36 w-32' />  {/* in case just copy the style from the dummay api website you need to change the code product.thumbnail into product image */}
              <div className='mt-4'>
                <h1 className='text-xs uppercase font-bold'>{product.title}</h1>
                <p className=' text-gray-600 text-sm'>{product.description.slice(0, 40)}...</p>
                <p className=' text-gray-600'>${product.price}</p>
              </div>
              <div className='flex justify-between items-center'>
                <button className='px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700'>Add to cart</button>
              </div>
            </div>
          ))
        }
      </div>
      </section>
  )
}

export default Collection