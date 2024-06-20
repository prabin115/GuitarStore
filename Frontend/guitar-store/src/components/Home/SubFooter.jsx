import React from 'react'

const SubFooter = () => {
  return (
    <>
        <div className='flex justify-around items-start text-center p-16 bg-gray-100 mt-28 mb-16'>
            <div>
                <section className='w-48'>
                    <h1 className='font-bold mb-2'>QUALITY ASSURED</h1>
                    <p className=''>Certified quality assurance</p>
                </section>
            </div>
            <div>
                <section className='w-48'>
                    <h1 className='font-bold mb-2'>FREE SHIPPING</h1>
                    <p className=''>Free shipping on all orders over Rs.1000</p>
                </section>
            </div>
            <div>
                <section className='w-48'>
                    <h1 className='font-bold mb-2'>EASY RETURNS</h1>
                    <p className=''>Return or exchange within 30 days of receipt</p>
                </section>
            </div>
            <div>
                <section className='w-48'>
                    <h1 className='font-bold mb-2'>SUPPORT</h1>
                    <p className=''>Get support & advice from our expert gear advisors</p>
                </section>
            </div>
        </div>
    </>
  )
}

export default SubFooter