import React from 'react';

function Projects() {
    return (
        <>np
            <hr />
            <div className=''>
                <div className='' style={{marginRight: "70%"}}>
                <h1 id='projects' className='text-5xl mt-5 text-pink-100 text-center mb-20 '>Projects   <div className='w-28 h-2 bg-blue-700 rounded mt-2'style={{marginLeft: "35.5%"}}></div>
                </h1>
                </div>
               
              
                <div className='flex flex-wrap justify-evenly bg-gradient-to-b from-gray-800 to-grey-900 py-16 w-10/12 h-auto rounded-xl' style={{marginLeft: "7%"}}>
                    {['Blog App'].map((title, index) => (
                        <div key={index} className='m-5 transform hover:scale-105 transition-transform duration-300'>
                            <h1 className='text-2xl text-pink-100 mt-5 mb-5 text-center'>{title}</h1>
                            <div className='w-64 h-64 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300'>
                                <img 
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMwnX4TzxmuGZLxHQqk6rufArI80qldMNuew&s" 
                                    alt="" 
                                    className='h-28 w-full rounded-t-xl object-cover'
                                />
                                <hr className='border-gray-300' />
                               
                                <hr className='border-gray-300' />
                                <h1 className='text-xl text-black ml-5 text-center mt-10 px-4'>
                                    React and Appwrite <br /> Create, Write, Edit, and Delete
                                </h1>
                            </div>
                            <a href="https://blog-app-r.vercel.app/">
                               <button 
                                    className='w-28 h-10 bg-blue-200 rounded-xl mt-10 mb-5 text-center block mx-auto hover:bg-blue-300 transition-colors duration-300'
                                >
                                    Preview
                                </button>
                                </a> 
                        </div>
                    ))}
                     {['Blog App'].map((title, index) => (
                        <div key={index} className='m-5 transform hover:scale-105 transition-transform duration-300'>
                            <h1 className='text-2xl text-pink-100 mt-5 mb-5 text-center'>Manage All socials</h1>
                            <div className='w-64 h-64 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300'>
                                <img 
                                    src="https://www.socialchamp.io/wp-content/uploads/2021/10/Blog-Banner_Q2-2023_1125x600_40_40-how-to-post-on-multiple-social-networks-simultaneously.png" 
                                    alt="" 
                                    className='h-28 w-full rounded-t-xl object-cover'
                                />
                                <hr className='border-gray-300' />
                               
                               
                                <hr className='border-gray-300' />
                                <h1 className='text-xl text-black ml-5 text-center mt-10  px-4'>
                                    React and Appwrite <br /> Create, Write, Edit, and Delete
                                </h1>
                            </div>
                            <a href="https://react-blog-eta-lilac.vercel.app/">
                                <button 
                                    className='w-28 h-10 bg-blue-200 rounded-xl mt-10 mb-5 text-center block mx-auto hover:bg-blue-300 transition-colors duration-300'
                                >
                                    Preview
                                </button>
                              </a>
                        </div>
                    ))}

{['Blog App'].map((title, index) => (
                        <div key={index} className='m-5 transform hover:scale-105 transition-transform duration-300'>
                            <h1 className='text-2xl text-pink-100 mt-5 mb-5 text-center'>Laundry App Android*</h1>
                            <div className='w-64 h-72 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300'>
                                <img 
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRssSv21RqOsSDwlgZUzzDRZOfXN87LyMUz9Q&s" 
                                    alt="" 
                                    className='h-28 w-full rounded-t-xl object-cover'
                                />
                                <hr className='border-gray-300' />
                                
                                <hr className='border-gray-300' />
                                <h1 className='text-xl text-black ml-5 text-center mt-5 px-4'>
                                    Dholo <br /> Created a laundry management System, <br />for both washer and dropper.
                                </h1>
                                <a href="https://dholo.netlify.app/">
                                <button 
                                    className='w-28 h-10 bg-blue-200 rounded-xl mt-10 mb-5 text-center block mx-auto hover:bg-blue-300 transition-colors duration-300'
                                >
                                    Preview
                                </button>
                               </a>
                                
                                
                            </div>
                            
                        </div>
                    ))}
                                    
                </div>

                { <div className='flex flex-wrap justify-evenly bg-gradient-to-b from-gray-800 to-grey-900 py-16 w-10/12 h-auto ml-28 rounded-xl'>
                    <div className='' style={{marginRight: "70%"}}>
                <h1 id='projects' className='text-5xl mt-5 text-pink-100 text-center mb-20 '>Certificates<div className='w-28 h-2 bg-blue-700 rounded mt-2'style={{marginLeft: "5.5%"}}></div>
                </h1>
                </div>
                     {['Blog App'].map((title, index) => (
                        <div key={index} className='m-5 transform hover:scale-105 transition-transform duration-300'>
                            <h1 className='text-2xl text-pink-100 mt-5 mb-5 text-center'>Microsoft Verson controls</h1>
                            <div className='w-64 h-72 bg-white  rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300'>
                                <img 
                                    src="" 
                                    alt="" 
                                    className='h-28 w-full rounded-t-xl object-cover'
                                />
                                <hr className='border-gray-300' />
                                <a href="https://react-blog-eta-lilac.vercel.app/">
                               
                              </a>
                               
                                <hr className='border-gray-300' />
                                <h1 className='text-xl text-black ml-5 text-center mb-5 px-4 mt-5'>
                                GitHub and GitHub Copilot (ongoing)
                                
                                </h1>
                                <div>
                                <button 
                                    className='w-28 h-10 bg-blue-200 rounded-xl mt-10  text-center block mx-auto hover:bg-blue-300 transition-colors duration-300 '
                                >
                                    Preview
                                </button>
                                </div>
                               
                               
                            </div>
                            
                            
                        </div>
                    ))}

                    
                </div> }
            </div>
        </>
    );
}

export default Projects;
