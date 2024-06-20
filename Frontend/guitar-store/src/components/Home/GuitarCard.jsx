import React from 'react'

const GuitarCard = () => {
  return (
    <>
    <div className='flex justify-center gap-4 mb-36'>
                <div className="h-96 w-72 bg-white border border-gray-200 rounded-sm shadow dark:bg-white dark:border-gray-700">
                    <a href="#">
                        <img className="rounded-t-sm w-full h-full object-contain" src="/photos/sp1.jpg" alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-xl font-thin tracking-tight text-gray-900 dark:text-white">Limited Edition Mikey Way Jazz Bass®</h5>
                        </a>
                    </div>
                </div>

                <div className="h-96 w-72 bg-white border border-gray-200 rounded-sm shadow dark:bg-white dark:border-gray-700">
                    <a href="#">
                        <img className="rounded-t-sm w-full h-full object-contain" src="/photos/sp2.jpg" alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-xl font-thin tracking-tight text-gray-900 dark:text-white">Made in Japan Limited Hybrid II Telecaster®, Noir</h5>
                        </a>
                    </div>
                </div>
                <div className="h-96 w-72 bg-white border border-gray-200 rounded-sm shadow dark:bg-white dark:border-gray-700">
                    <a href="#">
                        <img className="rounded-t-sm w-full h-full object-contain" src="/photos/sp3.jpg" alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-xl font-thin tracking-tight text-gray-900 dark:text-white">Paranormal Esquire® Deluxe</h5>
                        </a>
                    </div>
                </div>
                <div className="h-96 w-72 bg-white border border-gray-200 rounded-sm shadow dark:bg-white dark:border-gray-700">
                    <a href="#">
                        <img className="rounded-t-sm w-full h-full object-contain" src="/photos/sp4.jpg" alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-xl font-thin tracking-tight text-gray-900 dark:text-white">Limited Edition Squier Sonic® Stratocaster® HT</h5>
                        </a>
                    </div>
                </div>
            </div>
    </>
  )
}

export default GuitarCard