import React from 'react';
import { useRef } from 'react';
import { MainContext } from './Context/MainContext';
import { useContext } from 'react';

const Filter = ({ categories, cat, catHandler, range, rangeHandler, rating, ratingHandler, }) => {
  
  const ratingForm = useRef(0);
  // console.log("cccccccccc",categories)

  const { products } = useContext(MainContext);

  let count =0; 
  const getItemscount = (category)=>{
for(let p of products){
  if(p.category == category){
    ++count;
  }
}
return count;
  }



  return (
    <div className='border border-red-300 '>
      <div className='p-2 shadow'>
        <div className='text-3xl font-bold'>Categories</div>
        <hr className='mt-3' />
        <ul>
          <li className={`cursor-pointer duration-150 capitalize  p-2 border-b ${(cat.length == 0) ? 'active-cat' : ' '}`}>  All          ({products.length})</li>

          {
            categories.map(
              (category, index) => {
                return (
                  <div key={index}>
                    <hr className='my-3' />
                    <li onClick={() =>
                    // console.log(category);
                      catHandler(category)
                    } className={` duration-[250ms] cursor-pointer capitalize  p-2 ${(index != categories.length-1) ? 'border-b' : ' '} ${(cat.indexOf(category) != -1) ? ' active-cat' : ' '}`} key={index}> {category}   ({getItemscount(category)})
                     </li>

                  </div>
                )
              }

            )
          }
        </ul>
      </div>

      <div className='p-2 shadow my-3'>
        <div className='text-3xl font-bold'>Price</div>

        <hr className='mt-3' />
        <input value={range.from} type="number" onChange={(e) => {
          rangeHandler({
            from: parseInt(e.target.value),
            to: parseInt(range.to)
          })
        }} className={`w-full m-1 p-1 border focus:outline-none ${(range.from > range.to) ? 'border-red-700 border-2' : ' '} `} />
        <div className='text-center'> TO</div>
        <input value={range.to} min={parseInt(range.from)} type="number" onChange={(e) => {
          rangeHandler({
            to: parseInt(e.target.value),
            from: parseInt(range.from)
            
          })
        }} className='w-full m-1 p-1 border focus:outline-none ' />
      </div>

      <div className='p-2 shadow'>
        <div className='text-3xl font-bold'>Rating</div>
        <hr className='mt-3' />
        <ul>
          <form ref={ratingForm}>

            <li input onClick={() => {
              ratingHandler(1)
            }} className={`cursor-pointer duration-150   p-2 border-b ${(rating == 1 ) ? 'font-bold' : ' '}`}>  <input type="radio" name='rating' /> 1 and above </li>
            <li onClick={() => {
              ratingHandler(2)
            }} className={`cursor-pointer duration-150   p-2 border-b ${(rating == 2 ) ? 'font-bold' : ' '}`}> <input type="radio" name='rating' /> 2 and above </li>
            <li onClick={() => {
              ratingHandler(3)
            }} className={`cursor-pointer duration-150   p-2 border-b ${(rating == 3 ) ? 'font-bold' : ' '}`}> <input type="radio" name='rating' /> 3 and above </li>
            <li onClick={() => {
              ratingHandler(4)
            }} className={`cursor-pointer duration-150   p-2 border-b ${(rating == 4 ) ? 'font-bold' : ' '}`}> <input type="radio" name='rating' /> 4 and above </li>
          

          </form>

        </ul>
      </div>

      <button onClick={() => {
        catHandler([""]);
        rangeHandler({
          to: 0,
          from: 0
        })
        ratingHandler(null);
        ratingForm.current.reset();
      }} className='p-3 border text-white bg-red-600 w-full block font-bold active:bg-red-400'>Clear Filter</button>
    </div>



  )

}

export default Filter;
