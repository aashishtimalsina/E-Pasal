import { Link } from 'react-router-dom'
import { useState } from "react";
import ModalSection from '../../components/Modal/ModalSection';


const Cart = ({ cart, addCount, subCount, removeItem, getTotal }) => {

  return (

    <>

      <div className="container mx-auto mt-10">
        <div className="flex  md:flex-row flex-col shadow-md my-10">
          <div className=" w-full md:w-3/4 bg-white px-10 py-10 gap-3">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">Shopping Cart</h1>
              <h2 className="font-semibold text-2xl">{cart.length} Items</h2>
            </div>
            <div className="flex mt-10 space-between  mb-5">
              <h3 className="font-semibold text-gray-600 text-xs uppercase mx-auto w-2/5">Product Details</h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase  ml-auto w-1/5 text-center">Quantity</h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center hidden sm:block">Price</h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 mx-auto text-center">Total</h3>
            </div>


            {

              cart.map((cartItem) => (
                <div key={cartItem.id} className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                  <div className="flex w-2/5">
                    <div className="w-20">
                      <img className="h-24" src={cartItem.thumbnail} alt="" />
                    </div>
                    <div className="flex flex-col justify-between ml-4 flex-grow">
                      <span className="font-bold text-sm">{cartItem.title}</span>
                      <span className="text-red-500 text-xs">{cartItem.brand}</span>
                      <a onClick={() => removeItem(cartItem.id)} className="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
                    </div>
                  </div>
                  <div className="flex justify-center mx-auto w-1/5">
                    <button onClick={() => subCount(cartItem.id)} className="px-2 py-1  border">-</button>

                    <input className="mx-2 border text-center w-8" type="text" value={cartItem.quantity}></input>

                    <button onClick={() => addCount(cartItem.id)} className="px-2 py-1 border">+</button>
                  </div>
                  <span className="text-center w-1/5 font-semibold mx-auto hidden sm:block text-sm">Rs. {cartItem.price}</span>
                  <span className="text-center w-1/5 font-semibold mx-auto text-sm">Rs. {cartItem.price * cartItem.quantity}</span>
                </div>
              ))

            }

            <Link to="/allproducts" className="flex font-semibold text-indigo-600 text-sm mt-10">
              <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
              Continue Shopping
            </Link>

          </div>

          <div id="summary" className="w-full md:w-1/4 px-8 py-10">
            <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase"> {cart.length} items</span>
              <span className="font-semibold text-sm">Rs.{getTotal()}</span>
            </div>
            <div>
              <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
              <select className="block p-2 text-gray-600 w-full text-sm">
                <option>Standard shipping - Rs.10.00</option>
              </select>
            </div>

            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span> Rs. {getTotal() + 10}</span>
              </div>
              <ModalSection cart={cart} />
            </div>
          </div>

        </div>
      </div>

    </>
  )
}

export default Cart