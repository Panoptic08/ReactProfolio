import React from 'react';

function Projects() {
    return (
        <>np
            <hr />
            <div className=''>
                <h1 id='projects' className='text-5xl mt-5 text-pink-100 text-center mb-20 '>Projects   <div className='w-28 h-2 bg-blue-700 rounded mt-2'style={{marginLeft: "44.5%"}}></div>
                </h1>
              
                <div className='flex flex-wrap justify-evenly bg-gradient-to-b from-gray-800 to-grey-900 py-16 w-10/12 h-auto rounded-xl' style={{marginLeft: "7%"}}>
                    {['Blog App'].map((title, index) => (
                        <div key={index} className='m-5 transform hover:scale-105 transition-transform duration-300'>
                            <h1 className='text-2xl text-pink-100 mt-5 mb-5 text-center'>{title}</h1>
                            <div className='w-64 h-auto bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300'>
                                <img 
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMwnX4TzxmuGZLxHQqk6rufArI80qldMNuew&s" 
                                    alt="" 
                                    className='h-28 w-full rounded-t-xl object-cover'
                                />
                                <hr className='border-gray-300' />
                                <button 
                                    className='w-28 h-10 bg-blue-200 rounded-xl mt-10 mb-5 text-center block mx-auto hover:bg-blue-300 transition-colors duration-300'
                                >
                                    Preview
                                </button>
                                <hr className='border-gray-300' />
                                <h1 className='text-xl text-black ml-5 text-center mb-10 px-4'>
                                    React and Appwrite <br /> Create, Write, Edit, and Delete
                                </h1>
                            </div>
                            
                        </div>
                    ))}
                                    
                </div>

                <div className='flex flex-wrap justify-evenly bg-gradient-to-b from-gray-800 to-grey-900 py-16 w-10/12 h-auto ml-40 rounded-xl'>
                    {['Blog App'].map((title, index) => (
                        <div key={index} className='m-5 transform hover:scale-105 transition-transform duration-300'>
                            <h1 className='text-2xl text-pink-100 mt-5 mb-5 text-center'>Manage All socials</h1>
                            <div className='w-64 h-auto bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300'>
                                <img 
                                    src="https://www.socialchamp.io/wp-content/uploads/2021/10/Blog-Banner_Q2-2023_1125x600_40_40-how-to-post-on-multiple-social-networks-simultaneously.png" 
                                    alt="" 
                                    className='h-28 w-full rounded-t-xl object-cover'
                                />
                                <hr className='border-gray-300' />
                                <a href="https://react-blog-eta-lilac.vercel.app/">
                                <button 
                                    className='w-28 h-10 bg-blue-200 rounded-xl mt-10 mb-5 text-center block mx-auto hover:bg-blue-300 transition-colors duration-300'
                                >
                                    Preview
                                </button>
                              </a>
                               
                                <hr className='border-gray-300' />
                                <h1 className='text-xl text-black ml-5 text-center mb-10 px-4'>
                                    React and Appwrite <br /> Create, Write, Edit, and Delete
                                </h1>
                            </div>
                            
                        </div>
                    ))}
                    

                    
                </div>
            </div>
        </>
    );
}

export default Projects;
