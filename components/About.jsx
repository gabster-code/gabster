import React from 'react'

const About = () => {
  return (
    <div className='w-full md:h-screen p-2 flex items-center py-16 bg-[#E8E8E8]'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#0c7feb]'>About</p>
                <h2 className='py-4 '>Who is Gab?</h2>
                <p className='py-2 text-gray-600'>Just someone who likes solving problems thru code</p>
                <p className='py-2 text-gray-600'>I have about 10years of experience in IT Infrastructure solutions designing/architecting for a local Solutions Integrator.
                My love for tech has stemmed from my father showing me this thing called the "Atari" console which piqued my curiosity on how things work.
                Since then, I knew I had to be involved with the IT industry one way or another. 
                </p>
                <p className='py-2 text-gray-600'>Programming to me is like solving little puzzles and that the computer does whatever I tell it to that's why I always found it fun to do. 
                    Funny how life works somehow though, after graduating, I got into IT Infrastructure with little to no programming whatsoever.
                    Now back into the groove of programming and getting exposed to Crypto and Web3, I know I have to learn about it and be a part of it. 
                    I started my programming journey again by making Discord Bots and eventually integrating Web3 tech into it. 
                </p>
                <p className='py-2 text-gray-600'>Branching out to Web3 DAPPs, my current skillset is focused on Solidity Smart Contracts and DAPPs on Ethereum and trying to spend a little more time
                    learning about RUST and Solana ecosystem. Learning never stops that's why I also want to be involved in projects that are highly experimental
                    as I believe that the Web3 Space is still growing and a lot more innovation will come from those who start now. 😎
                    
                </p>
                <p className='py-2 text-gray-600 underline cursor-pointer'>See some of my Latest Projects Here!</p>
                
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <img className='rounded-xl' src="https://images.unsplash.com/photo-1642083139428-9ee5fa423c46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
            </div>
        </div>
    </div>
  )
}

export default About