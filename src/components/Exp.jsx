import React from 'react';
import enigma from '../images/enigma.png'


function Exp() {
    return (
        <>
        <div className='bg-gray-900 min-h-screen flex flex-col items-center'>
            <h1 id='exp' className='text-5xl mt-5 text-white text-center hover:scale-110 cursor-pointer mb-10 mt-20'>
            Accomplishments
                <div className='w-28 h-2 mt-2 bg-yellow-700 rounded mx-auto mr-48'></div>
            </h1>
            
            <div className='grid grid-cols-2 gap-x-20 gap-y-10 items-center mt-20'>
                {/* Experience 1 */}
                <div className='bg-black text-white p-6 rounded-lg shadow-lg items-center justify-center transform hover:scale-105 transition-transform duration-300'>
                    <img src={enigma} alt="" className='rounded-xl h-28 ml-28' />
                    <h1 className='mt-8 text-center text-2xl'>Participated in an inter-College <br /> Data Science Hackathon <br /> 4th Rank <br /> team of 4 people developed a website <br /> for supply chain optimization using <br /> Python(streamlit).</h1>
                <button className='bg-blue-400 rounded py-4 px-4 text-black text-xl hover:scale-110 ml-28 mt-5 mb-5 '>Preview Project</button>
                </div>
                <div className='w-full h-1 bg-gray-400'></div>

                {/* Experience 2 */}
                <div className='w-auto h-1 bg-gray-400'></div>
                <div className='bg-black text-white p-6 w-auto rounded-lg shadow-lg items-center justify-center transform hover:scale-105 transition-transform duration-300' style={{marginTop: "-16%"}}>
                    <img src="https://media.licdn.com/dms/image/C560BAQF-KQ-NBhYdFw/company-logo_200_200/0/1632205710362?e=2147483647&v=beta&t=JjOE-OUnX08csi3vQ8j-wRKaWfihyzzrl4KUvHjy80I" alt="" className='rounded-xl h-28'  style={{marginLeft: "35%"}}/>
                    <h1 className='mt-8 text-center text-2xl mb-10'>Co-Head Tech Team <br /> (IBF BU) <br /> INDIAN BLOCKCHAIN FRATERNITY</h1>
                </div>

                {/* Experience 3 */}
                {/* <div className='bg-blue-900 text-white p-6 rounded-lg shadow-lg flex items-center justify-center transform hover:scale-105 transition-transform duration-300'>
                    <p className='text-xl'>Experience 3</p>
                </div>
                <div className='w-full h-1 bg-gray-400'></div> */}

                {/* Experience 4 */}
                {/* <div className='w-full h-1 bg-gray-400'></div>
                <div className='bg-blue-900 text-white p-6 rounded-lg shadow-lg flex items-center justify-center transform hover:scale-105 transition-transform duration-300'>
                    <p className='text-xl'>Experience 4</p>
                </div> */}
            </div>

            <div className='h-40'></div>
        </div>
        </>
    )
}

export default Exp;
