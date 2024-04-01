import React, { useContext } from 'react';
import { MainContext } from './Context/MainContext';

const Listing = ({ cat, range, rating, productHandler }) => {

  const { addtocart } = useContext(MainContext);
    let { products } = useContext(MainContext);



  if (cat.length != 0) {

    products = products.filter(
      (prod) => {


        if (cat.indexOf(prod.category) != -1) {

          return true;
        }

      }
    );


  }



  if (rating != null) {
    products = products.filter(
      (prod) => {
        if (prod.rating.rate >= parseInt(rating)) {
          return true;
        }
      }
    )
  }

  if (range.to !== 0 && (range.to > range.from)) {
    products = products.filter(
      (prod) => {
        if (prod.price >= range.from && prod.price <= range.to) {
          return true;
        }
      }
    )
  }
  return (
    <div className='col-span-4 border border-blue-400 '>
      <div className="mx-auto max-w-2xl px-4  sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-4xl text-center mt-5 mb-10 font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {
            products.map(
              (prod, index) => {
                return (

                  <div className="group relative " key={prod.id}>
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 h-[250px] ">
                      <img
                        src={prod.image}
                        alt="Front of men's Basic Tee in black."
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </div>
                    <div className="mt-4 flex gap-2 justify-between">
                      <div>
                        <h3 className="text-sm text-gray-700">
                          <a href="#">
                            <span aria-hidden="true" className="absolute inset-0" />
                            {prod.title}
                          </a>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500"></p>
                      </div>
                      <p className="text-sm font-medium text-gray-900">{prod.price}</p>
                    </div>

                    <button onClick={() => { addtocart(prod.id); }} className=' z-[99999999999999999999] absolute py-[10px]  bg-blue-500 text-white w-full  bottom-0 mt-8 '>Add to Cart </button>
                  </div>
                )
              }
            )
          }



        </div>
      </div>

    </div>
  );
}

export default Listing;
