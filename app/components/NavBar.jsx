import React from 'react'
import { BsCart } from 'react-icons/bs'

function NavBar() {
  return (
    <React.Fragment>
      <div className="w-full flex bg-red-600 z-50 px-4 md:px-8 justify-between fixed top-0 max-h-20 items-center">
        <div className=" flex flex-col items-center gap-2 justify-center ">
          <h2 className=" w-8 h-8 grid place-items-center font-extrabold text-2xl md:text-2xl rounded-full outline outline-black text-primary ">
            1
          </h2>
        </div>
         <div className='flex items-center'>
          <img src="https://img.icons8.com/bubbles/512/pizza.png" alt="logo" className='md:w-20 w-20' />
          <h1 className=' md:text-5xl text-4xl text-primary  font-Logo  '>Pizza Love</h1>
         </div>
        <div>
          <button>
            <BsCart className="w-full h-6 fill-primary" />
          </button>
        </div>
      </div>
      <nav className="w-full flex items-center justify-center pb-3 mt-20 bg-red-600">
        <ul className=" text-primary  flex font-Roboto gap-8 md:text-xl md:gap-12 text-lg">
          <button>Pizzas</button>
          <button>Petiscos</button>
          <button>Bebidas</button>
          <button>Doces</button>
        </ul>
      </nav>
    </React.Fragment>
  )
}

export default NavBar
