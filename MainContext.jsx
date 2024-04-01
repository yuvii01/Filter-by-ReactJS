import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
const MainContext = createContext();
const MainContextWrapper = (props) => {

    const [cart, setCart] = useState([]);
    const [products, setProduct] = useState([]);
     const addtocart = (pid) => {
        if(cart.indexOf(pid) == -1){
       setCart([...cart,pid]);
        }

        
      
     

    }

    useEffect(
        () => {
          axios.get("https://fakestoreapi.com/products")
            .then(
              (success) => {
                setProduct(success.data);
              }
            )
            .catch(
              (err) => {
                console.log("helo");
              }
            )
        },
        []
      )

    const removecart = (pid) => {
      console.log(pid);
    //  const cartoon = cart.filter(
    //   ()=>{
    //     if(cart.indexOf(pid) != -1){
    //       return false;
    //     }
    //     else{
    //       return true;
    //     }
    //   }
    //  )
    //  console.log(cartoon);
    }


    return (
        <MainContext.Provider value={{products, cart, addtocart, removecart }}>
            {props.children}
        </MainContext.Provider>
    );
}

export default MainContextWrapper;
export { MainContext };