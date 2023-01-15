import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'

import Scroll from "react-scroll"

const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Features', href: '#features', current: false },
    { name: 'Chatbots', href: '#', current: false },
    // { name: 'Calendar', href: '#', current: false },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

const Navbar = () => {
  
    let scroller = Scroll.scroller;
  const router=useRouter()
    return (
        

<Disclosure as="nav" className="bg-gray-800 sticky top-0 w-full z-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  {/* <img
                    className="block h-8 w-auto lg:hidden"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  /> */}
                  <Link href="/">
                   <Image
                    className=" h-12 w-auto "
                    src="/assets/logo.svg"
                    width={100}
                    height={100}
                    alt="ok"
                  /></Link>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:w-full sm:justify-center">
                  <div className="flex  space-x-4">
                    {/* {navigation.map((item) => ( */}
                      <button
                        onClick={()=>{router.push("/")}}
                        className={classNames(
                          router.pathname==="/" ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                      >
                        Home
                      </button>
                      <button
                        // onClick={()=>{
                        //   scroller.scrollTo('features', {
                        //     duration: 100,
                        //     delay: 0,
                        //     smooth: true,
                        //     offset: 50, // Scrolls to element + 50 pixels down the page
                            
                        //   })
                        // }}
                        onClick={()=>{router.push("/#features")}}
                        className={classNames(
                          router.pathname.includes("#features") ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                      >
                        Features
                      </button>
                      <button
                        onClick={()=>{router.push("projects")}}
                        className={classNames(
                          router.pathname.includes("/projects") ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                      >
                        Chatbots
                      </button>
                    {/* ))} */}
                  </div>
                </div>
              </div>
          
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
     
    )
}

export default Navbar
