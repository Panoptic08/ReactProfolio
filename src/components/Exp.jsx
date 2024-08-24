import React from 'react';
import enigma from '../images/enigma.png'
import Debate from "../images/Debate.jpg"
import letter from "../images/letter.jpg"
import club from "../images/club.jpg"

function Exp() {
    return (
        <>
        <div className='bg-gray-900 min-h-screen flex flex-col items-center'>
            <div className='' style={{marginRight: "70%"}}>
            <h1 id='exp' className='text-3xl mt-5 text-white  hover:scale-110 cursor-pointer mb-10 mt-28'>
            Accomplishments
                <div className='w-28 h-1 mt-2 bg-yellow-700 rounded mx-auto mr-40'></div>
            </h1>
            </div>
           
            
            <div className='grid grid-cols-2 gap-x-20 gap-y-10 items-center mt-20'>
                
                {/* Experience 1 */}
                <div className='bg-black text-white p-3 rounded-2xl shadow-lg items-center justify-center transform hover:scale-105 transition-transform duration-300'>
                    <img src="https://miro.medium.com/v2/resize:fit:1030/1*1JNh2o6ImLlW1Aqb1dBXfA.jpeg" alt="" className='rounded-2xl h-28 ml-12' />
                    <h1 className='mt-8 text-center text-lg mb-5'>In my first hackathon, <br /> the Smart India Hackathon (SIH), <br /> I collaborated with a team of four<br /> to develop "Aasha", <br /> a website designed to consolidate scattered <br />  educational content from YouTube <br /> into a single, organized platform.</h1>
              
                </div>
               
                <div className='w-full h-1 bg-gray-400'></div>

                {/* Experience 2 */}
                
                <div className='w-auto h-1 bg-gray-400'></div>
                <div className='bg-black text-white p-3 rounded-2xl shadow-lg items-center justify-center transform hover:scale-105 transition-transform duration-300'>
                    
                    <img src={Debate} alt="" className='rounded-xl h-28'  style={{marginLeft: "25%"}}/>
                    <h1 className='mt-8 text-center text-lg mb-5'>In an inter-college debate competition, <br /> I secured the runner-up position. <br /> The debate covered crucial topics like <br /> the rise of AI <br /> and the rights of intellectual property, <br /> where I presented compelling arguments <br /> and showcased my analytical skills. </h1>
                </div>
                
                {/* Experience 3 */}
                <div className='bg-black text-white p-3 rounded-2xl shadow-lg items-center justify-center transform hover:scale-105 transition-transform duration-300'>
                    <img src={enigma} alt="" className='rounded-2xl h-28 ml-20' />
                    <h1 className='mt-8 text-center text-lg mb-5'>Participated in an inter-College <br /> Data Science Hackathon <br /> 4th Rank <br /> team of 4 people developed a website <br /> for supply chain optimization using <br /> Python(streamlit).</h1>
              
                </div>

                {/* Experience 4 */}
                <div className='w-auto h-1 bg-gray-400'></div>
                <div className='w-auto h-1 bg-gray-400'></div>
                <div className='bg-black text-white p-3 rounded-2xl shadow-lg items-center justify-center transform hover:scale-105 transition-transform duration-300'>
                    <img src={letter} alt="" className='rounded-2xl h-28 w-28' style={{marginLeft: "28%"}} />
                    <h1 className='mt-8 text-center text-lg mb-5'>Got Selected as a Co-Head <br /> of Tech team for <br /> IBF BU !</h1>
              
                </div>


                <div className='bg-black text-white p-3 rounded-2xl shadow-lg items-center justify-center transform hover:scale-105 transition-transform duration-300'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_kjFVJS3KdnNKjTckifm1ZaxVty-0tH3HMA&s" alt="" className='rounded-2xl h-28 ml-28' />
                    <h1 className='mt-8 text-center text-lg mb-10'>Co-Head Tech Team <br /> (IBF BU) <br /> INDIAN BLOCKCHAIN FRATERNITY</h1>
              
                </div>
                
                <div className='w-auto h-1 bg-gray-400'></div>
                <div className='w-auto h-1 bg-gray-400'></div>
                <div className='bg-black text-white p-3 rounded-2xl shadow-lg items-center justify-center transform hover:scale-105 transition-transform duration-300'>
                    <img src={club} alt="" className='rounded-2xl h-28 ml-20' />
                    <h1 className='mt-8 text-center text-lg mb-10'>Had a Great <br /> Experience showcasing our stall (IBF)<br /> at Club Carnival </h1>
              
                </div>

                
            </div>

            <div className='h-40'></div>
        </div>
        </>
    )
}

export default Exp;
