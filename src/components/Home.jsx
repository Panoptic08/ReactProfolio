import React, { useState, useEffect } from 'react';
import dp from '../images/dp.jpg';
import sun1 from '../images/sun1.png';
import github2 from '../images/github2.png';
import Blogs from './Blogs';
import Projects from './Projects';
import About from './About';
import Exp from './Exp';
import Cp from './cp';
import Contactme from './contactme';

function Home() {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);

    const words = ['Web and Android Developer', 'CP', 'Communication', 'Leadership'];

    const typingDelay = 130;
    const pauseTime = 2000;
    const deletingDelay = 3000 / 10;

    useEffect(() => {
        const current = loopNum % words.length;
        const fullText = words[current];

        if (isDeleting) {
            if (text.length > 0) {
                setTimeout(() => setText(fullText.substring(0, text.length - 1)), deletingDelay);
            } else {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        } else {
            if (text.length < fullText.length) {
                setTimeout(() => setText(fullText.substring(0, text.length + 1)), typingDelay);
            } else {
                setTimeout(() => setIsDeleting(true), pauseTime);
            }
        }
    }, [text, isDeleting, loopNum]);

    return (
        <>
            <div id="home" className="mt-2 w-full h-15 rounded p-5 text-white text-xl">
                <div className="flex text-white fixed" style={{ marginLeft: "57%" }}>
                    <h1 className="mr-10 hover:text-orange-200 hover:underline">
                        <a href="#home">Home</a>
                    </h1>
                    <h1 className="cursor-pointer mr-10 hover:text-orange-200 hover:underline">
                        <a href="#about">About</a>
                    </h1>
                    <h1 className="cursor-pointer mr-10 hover:text-orange-200 hover:underline">
                        <a href="#projects">Portfolio</a>
                    </h1>
                    <h1 className="cursor-pointer mr-10 hover:text-orange-200 hover:underline">
                        <a href="#exp">Experiences</a>
                    </h1>
                    <h1 className="cursor-pointer mr-10 hover:text-orange-200 hover:underline">
                        <a href="#cp">CP</a>
                    </h1>
                    <h1 className="cursor-pointer mr-10 hover:text-orange-200 hover:underline">
                        <a href="#contact">Contact</a>
                    </h1>
                </div>
            </div>

            <img src={dp} alt="" className="h-10 rounded-full" style={{ marginTop: "-2%" }} />
            <div className="flex mt-20 mb-10" style={{ marginLeft: "35%" }}>
                <h1 className="text-4xl text-center text-white mr-5">Skills->  </h1>
                <h1 className="text-4xl text-center text-white">
                    {text}
                    <span className="cursor">|</span>
                </h1>
            </div>
            <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3k1YXFwcnN2Y2s2ZmVwcHdvdWRtemxvdHF4Ynk1eHdvNnhtaWVoMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2C6v4QD5d3YOO4YhID/giphy.webp" alt="" className="rounded-xl mt-28" style={{ marginLeft: "35%" }} />

            <div style={{ marginTop: "25%" }}>
                <About />
                <Projects />
                <Exp />
                <Cp />
                <Contactme />
            </div>
        </>
    );
}

export default Home;
