import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineShoppingCart, AiFillCloseSquare, AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import { BsFillBagCheckFill } from 'react-icons/bs';
import { MdAccountCircle } from 'react-icons/md';

const Navbar = ({cart,addToCart,removeFromCart,clearCart,subTotal}) => {
    const toggleCart = () => {
        // ref.current.style="transition:0.5s";
        if (ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-full');
            ref.current.classList.add('translate-x-0');
            // ref.current.style="display:block";
            
        }
        else if (!ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-0');
            ref.current.classList.add('translate-x-full');
            // ref.current.style="display:none";
        }
    }
    const ref = useRef()
    return (
        <>
            <div className='flex flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-md sticky bg-white top-0 z-10'>
                <div className="logo mx-5">
                    <Link href={'/'}>
                        <a>
                            <Image src="/logo.png" alt="" width={200} height={40} />
                        </a>
                    </Link>
                </div>
                <div className="nav">
                    <ul className="flex items-center space-x-4 font-bold md:text-md">
                        <Link href={'/tshirts'}><a><li>TShirt</li></a></Link>
                        <Link href={"/hoodies"}><a><li>Hoodies</li></a></Link>
                        <Link href={"/stickers"}><a><li>Stickers</li></a></Link>
                        <Link href={"/mugs"}><a><li>Mugs</li></a></Link>
                    </ul>
                </div>
                <div  className="cart absolute right-5 flex">
                <Link href={'/login'}>
                    <MdAccountCircle className=' text-xl md:text-2xl mr-3 cursor-pointer'/>
                </Link> 
                    <AiOutlineShoppingCart onClick={toggleCart} className=' cursor-pointer text-xl md:text-2xl ' />
                </div>
                <div ref={ref} className={`w-82 h-[100vh] sideCart absolute overflow-y-scroll top-0 right-0 bg-pink-100 p-10 transform transition-transform ${Object.keys(cart).length !==0?'translate-x-0':'translate-x-full'}`}>
                    <h2 className='font-bold text-xl text-center' >Shopping Cart</h2>
                    <span onClick={toggleCart} className="absolute top-2 right-3 cursor-pointer text-3xl text-pink-500"> <AiFillCloseSquare /></span>
                    <ol className='list-decimal font-semibold'>
                        {Object.keys(cart).length ==0 && <div className='my-4 font-semibold'>Your card is Empty!</div>}
                        {Object.keys(cart).map((k)=>{return <li key={k}>
                            <div className="item flex my-3">
                                <div className='w-2/3 font-semibold'>{cart[k].name}</div>
                                <div className='w-1/3 flex items-center justify-center font-semibold0' ><AiFillMinusCircle onClick={()=>{removeFromCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant)}} className='mx-1 text-pink-500 cursor-pointer' />{cart[k].qty}<AiFillPlusCircle onClick={()=>{addToCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant)}} className='mx-1 cursor-pointer text-pink-500' /></div>

                            </div>
                        </li>})}
                    </ol>
            <div className="font-bold my-2 ">Subtotale: ₹{subTotal}</div>

                    <div className="flex">
                    <Link href={'/checkout'}>
                       <button className="flex mx-auto text-white mt-5 mr-2 bg-pink-500 border-0 py-2 px-4 focus:outline-none hover:bg-pink-600 rounded text-sm"><BsFillBagCheckFill className='m-1' />Checkout</button>
                    </Link> 
                        <button onClick={clearCart} className="flex mx-auto text-white mt-5 bg-pink-500 border-0 py-2 px-4 focus:outline-none hover:bg-pink-600 rounded text-sm">Clear Cart</button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;
