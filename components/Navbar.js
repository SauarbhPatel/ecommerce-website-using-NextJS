import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineShoppingCart, AiFillCloseSquare,AiFillPlusCircle,AiFillMinusCircle } from 'react-icons/ai';
import { BsFillBagCheckFill } from 'react-icons/bs';

const Navbar = () => {

    const toggleCart = () => {
        if (ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-full');
            ref.current.classList.add('translate-x-0');
        }
        else if (!ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-0');
            ref.current.classList.add('translate-x-full');
        }
    }
    const ref = useRef()
    return (
        <>
            <div className='flex flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-md'>
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
                <div onClick={toggleCart} className="cart absolute right-5">
                    <button><AiOutlineShoppingCart className=' text-xl md:text-2xl ' /></button>
                </div>
                <div ref={ref} className="w-72 h-full sideCart absolute overflow-y-scroll top-0 right-0 bg-pink-100 p-10 transform transition-transform translate-x-full">
                    <h2 className='font-bold text-xl text-center' >Shopping Cart</h2>
                    <span onClick={toggleCart} className="absolute top-2 right-3 cursor-pointer text-3xl text-pink-500"> <AiFillCloseSquare /></span>
                    <ol className='list-decimal font-semibold'>
                        <li>
                            <div className="item flex my-3">
                                <div className='w-2/3 font-semibold'>Tshirt - Wear the code</div>
                                <div className='w-1/3 flex items-center justify-center font-semibold0' ><AiFillMinusCircle className='mx-1 text-pink-500 cursor-pointer'/>2<AiFillPlusCircle className='mx-1 cursor-pointer text-pink-500'/></div>
                                
                            </div>
                        </li>
                        <li>
                            <div className="item flex my-3">
                                <div className='w-2/3 font-semibold'>Tshirt - Wear the code</div>
                                <div className='w-1/3 flex items-center justify-center font-semibold0' ><AiFillMinusCircle className='mx-1 text-pink-500 cursor-pointer'/>2<AiFillPlusCircle className='mx-1 cursor-pointer text-pink-500'/></div>
                                
                            </div>
                        </li>
                        <li>
                            <div className="item flex my-3">
                                <div className='w-2/3 font-semibold'>Tshirt - Wear the code</div>
                                <div className='w-1/3 flex items-center justify-center font-semibold0' ><AiFillMinusCircle className='mx-1 text-pink-500 cursor-pointer'/>2<AiFillPlusCircle className='mx-1 cursor-pointer text-pink-500'/></div>
                                
                            </div>
                        </li>
                    
                        <li>
                            <div className="item flex my-3">
                                <div className='w-2/3 font-semibold'>Tshirt - Wear the code</div>
                                <div className='w-1/3 flex items-center justify-center font-semibold0' ><AiFillMinusCircle className='mx-1 text-pink-500 cursor-pointer'/>2<AiFillPlusCircle className='mx-1 cursor-pointer text-pink-500'/></div>
                                
                            </div>
                        </li>
                        <li>
                            <div className="item flex my-3">
                                <div className='w-2/3 font-semibold'>Tshirt - Wear the code</div>
                                <div className='w-1/3 flex items-center justify-center font-semibold0' ><AiFillMinusCircle className='mx-1 text-pink-500 cursor-pointer'/>2<AiFillPlusCircle className='mx-1 cursor-pointer text-pink-500'/></div>
                                
                            </div>
                        </li>
                        
                        
                        <li>
                            <div className="item flex my-3">
                                <div className='w-2/3 font-semibold'>Tshirt - Wear the code</div>
                                <div className='w-1/3 flex items-center justify-center font-semibold0' ><AiFillMinusCircle className='mx-1 text-pink-500 cursor-pointer'/>2<AiFillPlusCircle className='mx-1 cursor-pointer text-pink-500'/></div>
                                
                            </div>
                        </li>
                
                    </ol>
                    <button className="flex mx-auto text-white mt-10 bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-sm"><BsFillBagCheckFill className='m-1'/>Checkout</button>
                </div>
            </div>
        </>
    )
}

export default Navbar;
