import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { MainContext } from './Context/MainContext';

const Header = () => {
    const { cart } = useContext(MainContext);
    return (
        <div className='  top-0 w-full  shadow-lg mx-auto  fixed text-2xl py-[30px] z-[99999] bg-[white] '>
            <ul className='flex gap-5 font-bold w-full justify-end  pe-10'>
                <li>
                    <Link to={"/"} > Home </Link>
                </li>
                <li> 

                    <Link to={"/cart"}>  Cart  ({cart.length}) </Link>
                </li>
            </ul>
        </div>
    );
}

export default Header;
