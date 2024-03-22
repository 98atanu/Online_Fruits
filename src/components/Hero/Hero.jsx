import React from 'react'

const Hero = () => {
  return (
    <main>
        <section>
            <div className='container'>
                {/* Navbar */}
                {/* hero */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[650px]'>
                    {/* text section */}
                    <div>
                        <h1 className='text-3xl pl-6 md:pl-14'>01______</h1>
                        <h1 className='text-5xl font-bold uppercase text-shadow'>A Healthy Fruit</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem aliquid praesentium amet blanditiis ipsa nihil!</p>
                        <button>Shop Now</button>
                    </div>
                    {/* image section */}
                    {/* blank div section */}
                </div>
            </div>
        </section>
    </main>
  )
}

export default Hero