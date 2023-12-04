import React, { useState } from 'react';
import Modal from 'react-modal';
import PaymentForm from './PaymentForm'; // Assuming your PaymentForm component is in a separate file

Modal.setAppElement('#root');

export default function PaymentForm() {
    return (
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Payment Information
          </h2>
        </div>
  
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
  
            <div>
            <label htmlFor="creditCard" className="block text-sm font-medium leading-6 text-gray-900">
              Credit Card Number
            </label>
            <div className="mt-2 relative">
              <input
                id="creditCard"
                name="creditCard"
                type="text"
                autoComplete="cc-number"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                {/* Visa icon */}
                <img
                  className="h-6 w-6"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Visa_2014_logo_detail.svg/1200px-Visa_2014_logo_detail.svg.png"
                  alt="Visa"
                />
                {/* MasterCard icon */}
                <img
                  className="h-6 w-6 ml-2"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/1200px-Mastercard_2019_logo.svg.png"
                  alt="MasterCard"
                />
                {/* Amex icon */}
                <img
                  className="h-6 w-6 ml-2"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/American_Express_logo.svg/1200px-American_Express_logo.svg.png"
                  alt="Amex"
                />
              </div>
            </div>
          </div>
  
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="cvv" className="block text-sm font-medium leading-6 text-gray-900">
                  CVV
                </label>
                <div className="mt-2">
                  <input
                    id="cvv"
                    name="cvv"
                    type="text"
                    autoComplete="cc-csc"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              {/* Add more credit card details as needed */}
            </div>
  
            <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Shipping Information
            </h2>
  
            {/* Add shipping address fields here, e.g., name, city, state, zip, address 1, address 2 */}
  
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Pay Now
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }