import React from 'react';
import { useContext } from 'react';
import { MainContext } from './Context/MainContext';
import MainContextWrapper from './Context/MainContext';

const Cart = () => {

    // const { removecart } = useContext(MainContext);
    const { removecart } = useContext(MainContext);
    const { cart } = useContext(MainContext);
    const {products} = useContext(MainContext);
    let CartProducts = [];

  if(cart.length !=0){
  CartProducts = products.filter(
        (prod)=>{
            if(cart.indexOf(prod.id) != -1){
                return true;
            }
        }

    ) }

    // function removefromcart(pid){
    //   console.log(pid);
    // }
// console.log(CartProducts);
    return (
        <div className='my-[120px]'>
           <div className='text-4xl text-center font-bold underline tracking-wider'>

        CART ( {cart.length})
            </div>
<div >
    
<div className='w-full h-auto border-2 my-4'>
 
{
CartProducts.map((prod,index) => {return <div key={index} className="flex items-center gap-5 justify-between mb-4 w-[1200px]">
    <div className="flex items-center w-full justify-between">
      <img src={prod.image} alt={prod.title} className=" ms-5 h-[100px] w-[100px] items-center flex object-cover mr-4" />
     
    
    <div>
        <p className="font-bold">{prod.title} </p>
        <p className="text-gray-500">${prod.price}</p>
      </div>
    <div>
      <span className="font-bold">{prod.rate}</span> <span> <button onClick={removecart(prod.rate)} className='cursor-pointer text-xl '>X </button></span>
    </div>
    </div>
  </div>}
           
          
          )}
       
</div>
</div>

        </div>
    );
}

export default Cart;
