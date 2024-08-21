import React from 'react';

function Contactme() {
    return (
        <>
        <div id='conatct' className='h-10'>

        </div>
            <div id='contact' className='h-10'></div>
            <div className="flex flex-col items-center justify-center min-h-screen">
                <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">Contact Me</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-gray-700">Name</label>
                            <input 
                                type="text" 
                                placeholder="Your Name" 
                                className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Email</label>
                            <input 
                                type="email" 
                                placeholder="Your Email" 
                                className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Message</label>
                            <textarea 
                                placeholder="Your Message" 
                                className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400" 
                                rows="4"
                            ></textarea>
                        </div>
                        <h1 className='text-xl text-black text-center'>Open to discuss tech || Startups || Web3 || OpenSource</h1>
                        <button 
                            type="submit" 
                            className="w-full px-4 py-2 font-semibold text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

            <footer className='bg-gray-800'>
                <hr className='border-gray-600' />
                <div className='flex justify-evenly py-6 text-center text-white'>
                    <div>
                        <h3 className='text-2xl font-semibold'>Follow Me</h3>
                        <div className='flex justify-center mt-2'>
                            {/* Replace # with your social media links */}
                            <a href="#" className='mx-2'>Twitter</a>
                            <a href="#" className='mx-2'>LinkedIn</a>
                            <a href="#" className='mx-2'>GitHub</a>
                        </div>
                    </div>
                    <div>
                        <h3 className='text-2xl font-semibold'>Contact</h3>
                        <p>Email: kartikdoda@gmail.com</p>
                     
                    </div>
                    
                </div>
                <div className='text-center py-4 bg-gray-900'>
                    <p className='text-sm text-gray-400'>© 2024 Kartik Doda. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
}

export default Contactme;
