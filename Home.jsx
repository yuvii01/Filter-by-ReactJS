import React, { useContext, useEffect, useState } from 'react';
import Filter from './Filter';
import Listing from './Listing';
import axios from 'axios';
import { rankings } from 'match-sorter';
import { MainContext } from './Context/MainContext';

const Home = () => {

  const {products} = useContext(MainContext);
   const [categories, setCategory] = useState([]);
 
  const [cat, setcat] = useState([]);
  const [range, setRange] = useState({
    from:parseInt(0),
    to: parseInt(0)
  })
  const [rating, setRating] = useState(null);

  const catHandler = (category) => {
  
    const  i = cat.indexOf(category);
    if(category == ""){
      setcat([]);
    }
     else if(i == -1){
 const newcat=[...cat,
  category];
  
  setcat(newcat);
  }
  else{
   const newcat = cat.filter(
      (d)=>{
if(d != category){
return true;
}
      }
    );
    setcat(newcat);
  }

}
  


function rangeHandler(e){
console.log(e);
}
  
  useEffect(
    () => {
      axios.get("https://fakestoreapi.com/products/categories")
        .then(
          (success) => {
            // console.log(success)
            setCategory(success.data);
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

//   function productHandler(data){
// setProduct(data);
//   }

  
  return (
    <div className='grid grid-cols-5 max-w-[1200px] mx-auto  gap-2 my-[110px]'>
      <Filter rating={rating} ratingHandler={setRating} range={Range} rangeHandler={rangeHandler} categories={categories} cat={cat} catHandler={catHandler}  />
      <Listing  cat={cat} range={range} rating={rating}  />
    </div>
  );
}



export default Home;
