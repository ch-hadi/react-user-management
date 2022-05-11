/* This example requires Tailwind CSS v2.0+ */
import React, {useEffect} from 'react'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {MenuIcon,XIcon} from '@heroicons/react/outline'
// import { useDispatch , useSelector } from 'react-redux'
import {useDispatch, useSelector } from 'react-redux'
// import {Link} from 'react-router-dom'
import {Logout } from '../SignIn/store/signInSlice'
import Card from '../../Components/Card/Card'
// import IdleTimeOutHandler from '../../Components/Timer/IdleTimeOutHandler'
// import Timmer from '../../Components/Timmer/Timmer'



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Main() {

  const dispatch = useDispatch()

  const users = useSelector((state)=>state.persistedReducer.AddUserReducer.users)
  return (
    
    <Popover className="relative bg-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-6" flex>
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Workflow</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt=""
              />
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <Popover className="relative">
              {({ open }) => (
                <>
                  
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      
                       
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
              User Managment System
            </a>
        

          
          </Popover.Group>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            {/* <a href="/login"  className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
              Sign in
            </a> */}
            <a
              onClick={()=>{dispatch(Logout())}}
              href="/login"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Logout
            </a>
          </div>

        
        </div>
       <div className='w-full flex '>
       <div className='bg-blue-400 w-60 h-screen'>
           <h1 className='text-xl text-center font-bold'>Profile</h1>
           <hr></hr>
          <div className='ml-6 mt-5'>
          <p>Hammad Ahmad</p>
           <p className='mb-9'>mrhammad.009@gmail.com</p>
           <a href='/add-user' className='mt-5 py-3 px-4 text-white bg-red-800 rounded'>Add User</a>
          </div>
      </div>
      <div className='w-full '>
           <p className='bg-red-400 text-center font-bold text-xl py-10 px-5'>List of Users</p>
           <div className='w-full h-full'>
             {
               users.length == 0 ? <h1 className='text-xl font-bold py-10 text-center'>No User Added</h1> : users?.map((user)=>  <Card 
               firstName={user.firstName}
               lastName={user.lastName} 
               email= {user.email}
               UserName ={user.UserName}
               />)
             }
           </div>
      </div>
     

       </div>
      </div>
     
    
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
               
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Pricing
                </a>

                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Docs
                </a>
               
              </div>
              <div>
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Sign up
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?{' '}
                  <a href="#" className="text-indigo-600 hover:text-indigo-500">
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
     
     
   
   {/* <IdleTimeOutHandler/> */}
   {/* <Timmer delay={4000} onIdle='Idle' onActive='active' /> */}
    </Popover>
  )
}