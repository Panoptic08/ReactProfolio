import React from 'react';

function Cp() {
    return (
        <div className='bg-gray-800 min-h-screen flex flex-col items-center p-10'>
            <div className='flex justify-between w-full'>
                <h1 id='cp' className='text-4xl text-blue-200 text-center mb-10'>
                    CP
                    <div className='w-20 h-2 mt-1 bg-orange-700 rounded mx-auto'></div>
                </h1>
                
            </div>
            <div className='text-blue-200 text-right mb-20'>
                    <p className='text-2xl'>Total Questions Solved: 60</p>
                </div>
            <div className='flex justify-center items-end gap-10 mb-20'>
                {/* Bar 1 */}
                <div className='flex flex-col items-center transform hover:scale-105 transition-transform duration-300'>
                    <div className='bg-blue-500 w-20 h-64 rounded-t-lg'></div>
                    <p className='text-blue-200 mt-2'>Arrays - 30</p>
                </div>

                {/* Bar 2 */}
                <div className='flex flex-col items-center'>
                    <div className='bg-blue-500 w-20 h-48 rounded-t-lg transform hover:scale-105 transition-transform duration-300'></div>
                    <p className='text-blue-200 mt-2'>Strings - 20</p>
                </div>

                {/* Bar 3 */}
                <div className='flex flex-col items-center'>
                    <div className='bg-blue-500 w-20 h-32 rounded-t-lg transform hover:scale-105 transition-transform duration-300'></div>
                    <p className='text-blue-200 mt-2'>Trees - 10</p>
                </div>

                {/* Bar 4 */}
                <div className='flex flex-col items-center'>
                    <div className='bg-blue-500 w-20 h-24 rounded-t-lg transform hover:scale-105 transition-transform duration-300'></div>
                    <p className='text-blue-200 mt-2'>Graphs- 0.0</p>
                </div>
            </div>

            <div className='flex items-center justify-evenly w-full'>
                {/* Profile 1 */}
                <div className='flex flex-col items-center'>
                <div className='h-20 w-20 bg-gray-400 rounded-full mb-2 transform hover:scale-105 transition-transform duration-300'>
                        <a href="https://leetcode.com/Panoptic08/">
                            <img src='https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png' alt='LeetCode' className='h-12 rounded-full mt-5 ml-4' />
                        </a>
                    </div>
                    <p className='text-blue-200'>Panoptic08</p>
                </div>

                {/* Profile 2 */}
                <div className='flex flex-col items-center'>
                <div className='h-20 w-20 bg-gray-400 rounded-full mb-2 transform hover:scale-105 transition-transform duration-300'>
                        <a href="https://www.naukri.com/code360/profile/WQ">
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMgfbQtp9IayH6YmI4xDCj6mhJq32XzTTPWw&s' alt='LeetCode' className='h-12 rounded-full mt-5 ml-4' />
                        </a>
                    </div>
                    <p className='text-blue-200'>panoptic</p>
                </div>

                <div className='flex flex-col items-center'>
                <div className='h-20 w-20 bg-gray-400 rounded-full mb-2 transform hover:scale-105 transition-transform duration-300'>
                        <a href="https://www.hackerrank.com/profile/Kartikdoda86">
                            <img src='https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png' />
                        </a>
                    </div>
                    <p className='text-blue-200'>@Kartikdoda86</p>
                </div>
            </div>

            
        </div>
    );
}

export default Cp;
