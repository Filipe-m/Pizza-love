'use client'
import { useState } from 'react'
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi'
import Doces from '../../database/doces.json'

function doces() {
  const [page, setpage] = useState(0)

  const left = () => setpage(0)
  const right = () => setpage(28)

  const leftMobile = () => {
    if (page == 0) {
      return 0
    } else {
      setpage(page - 19)
    }
  }
  const rightMobile = () => {
    if (page > 27) {
      return 0
    } else {
      setpage(page + 19)
    }
  }

  const pizzas = Doces.map(produto => (
    <li
      key={produto.id}
      style={{ transform: `translateX(-${page}rem)` }}
      className=" transition-all duration-500  flex flex-shrink-0 flex-col justify-center items-center text-bg-black dark:text-primary"
    >
      <img
        className=" h-48 rounded-md  md:w-52 w-72 "
        src={produto.imagem}
        alt={produto.nome}
      />
      <h2 className=" text-md ">{produto.nome}</h2>
      <h3 className=' font-bold font-Roboto text-lg ' >R${produto.valor}</h3>
    </li>
  ))

  return (
    <div className="relative flex items-center mx-auto justify-center  w-[74%]  py-4 mt-3">

      <button
        className="absolute grid md:hidden place-items-center left-0 z-20 bg-bg-black dark:bg-primary w-8 h-8 rounded-full -translate-x-10  "
        onClick={leftMobile}
      >
        {' '}
        <HiOutlineArrowLeft className="stroke-red-600 dark:stroke-black" />{' '}
      </button>
      <ul className="flex max-h-[20rem] overflow-x-hidden whitespace-nowrap gap-4  px-3 ">
        {pizzas}
      </ul>

      <button
        className="absolute grid md:hidden place-items-center right-0 z-20 bg-bg-black dark:bg-primary w-8 h-8 rounded-full translate-x-10  "
        onClick={rightMobile}
      >
        {' '}
        <HiOutlineArrowRight className="stroke-red-600 dark:stroke-black" />{' '}
      </button>
    </div>
  )
}

export default doces
