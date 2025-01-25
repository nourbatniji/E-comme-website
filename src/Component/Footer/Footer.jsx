import React from 'react'
import amazon from "../../assets/images/amazon-pay.png"
import americanExpress from "../../assets/images/american-express.png"
import mastercard from "../../assets/images/master-card.png"
import paypal from "../../assets/images/paypal.png"
import appstore from "../../assets/images/appstore.png"
import googleplay from "../../assets/images/googleplay.png"

export default function Footer() {
  return (
    <>
      <div className="footer py-12 bg-slate-100">
        <div className="container w-10/12 mx-auto mb-0 ">
          <h1>Get the FreshCart app</h1>
          <h5 className="pb-5 pt-2">We will send you a link, open it on your phone to download the app.</h5>
          <form className="flex items-baseline justify-center  mx-auto">
            <div className="mb-5 w-10/12">
              <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green focus:border-green block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green dark:focus:border-green" placeholder="Email.." required />
            </div>
            <button type="submit" className="text-white w-2/12 bg-green hover:bg-green focus:ring-4 focus:outline-none focus:ring-green font-medium rounded-lg text-sm  sm:w-auto  text-center dark:bg-green dark:hover:bg-green dark:focus:ring-green  mx-3 px-8 py-[12px]">Share App Link</button>
          </form>

          <div className='flex justify-between items-center gap-16 border-t-2 border-b-2'>

            <div className='w-5/12 flex items-center '>
              <p>Payment Partners</p>
              <img src={amazon} className='w-14 px-2' alt="" />
              <img src={americanExpress} className='w-14 px-2' alt="" />
              <img src={mastercard} className='w-14 px-2' alt="" />
              <img src={paypal} className='w-14 px-2' alt="" />
            </div>

            <div className='w-5/12 flex items-center justify-center'>
              <p className='w-fit'>Get deleveries with FreshCart</p>
              <img src={appstore} className='w-20 ms-4' alt="" />
              <img src={googleplay} className='w-24' alt="" />
          </div>
          </div>


        </div>
      </div>


    </>
  )
}
