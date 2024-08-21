import React from 'react';
import dp from '../images/dp.jpg';

const frameworks = [
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSTVjZgtLF2vqZV3Nh6VdLV5HEZ3xOyVCRuw&s", alt: "HTML" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHPlU1ZjmDtTYorXqiip4hYId_heLT4MJ-1A&s", alt: "CSS" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", alt: "JavaScript" },
  { src: "https://cdn.worldvectorlogo.com/logos/react-1.svg", alt: "React" },
  { src: "https://www.svgrepo.com/show/376337/node-js.svg", alt: "Node.js" },
  { src: "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png", alt: "Redux" },
  { src: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg", alt: "Tailwind CSS" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyya9RHo3mreo1_8Ha8ccZtAUUpaCQrN4WxA&s", alt: "Next.js" },
  { src: "https://media.dev.to/cdn-cgi/image/width=320,height=320,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Forganization%2Fprofile_image%2F2225%2F81202665-3201-4ceb-b247-f8c5feae746f.png", alt: "Appwrite" },
  { src: "https://cdn.worldvectorlogo.com/logos/git-icon.svg", alt: "Git" },
  { src: "https://cdn.worldvectorlogo.com/logos/github-icon.svg", alt: "GitHub" },
  { src: "https://1000logos.net/wp-content/uploads/2020/09/Java-Emblem.jpg", alt: "GitHub" },
];

function About() {
  return (
    <div id='about' className='flex flex-col items-center lg:flex-row lg:justify-around mt-10 mb-40 cursor-pointer'>
      <div className='bg-gray-900 w-11/12 h-auto border-2 border-blue-400 rounded-xl'>
        <div className='w-full h-5 bg-blue-300 rounded'></div>
        <div className='flex justify-center items-center space-x-10 p-10'>
          <img src={dp} alt="Kartik Doda" className='h-40 rounded-full border-4 border-blue-500' />
          <div>
            <h1 className='text-white text-5xl font-bold mb-2'>Kartik Doda</h1>
            <p className='text-blue-400 text-2xl'>Full Stack Developer</p>
            <p className='text-white mt-4'>Passionate about web and Android development, exploring Web3, and contributing to open-source projects.</p>
          </div>
        </div>
        <div className='flex justify-around my-8'>
          <div className='grid grid-cols-4 gap-4'>
            {frameworks.map((framework, index) => (
              <img key={index} src={framework.src} alt={framework.alt} className='h-12 w-auto rounded-lg hover:scale-125 transition-transform duration-300' />
            ))}
          </div>
        </div>
        <div className='p-8'>
          <h1 className='text-white text-4xl font-semibold'>About</h1>
          <div className='w-20 h-2 bg-blue-500 rounded mt-2 mb-4'></div>
          <p className='text-gray-300 text-lg'>
          I am a passionate developer currently working in the full-stack and Web3 space, with a strong foundation in advanced frontend development. My expertise extends to using technologies like React, Appwrite, and Tailwind CSS, with which I've built a variety of projects that demonstrate my ability to create dynamic and responsive web applications.
<br />
In addition to web development, I have experience in Android development using Java, where I successfully developed a laundry management app for my college’s laundry system. This project honed my skills in building user-friendly mobile applications and solving real-world problems through technology.
<br /><br />
As I continue to grow in my career, I am eager to master more aspects of frontend and backend development, as well as delve deeper into blockchain technology. My interests are not just limited to coding; I am also deeply passionate about entrepreneurship and aspire to create impactful products that can improve industries like logistics on a global scale.
<br />
Building innovative solutions that address real-world challenges is what drives me. I am always on the lookout for new opportunities to learn, grow, and collaborate on exciting projects that can make a difference.
          </p>
        </div>

        
       
    
        <div className='p-8'>
          <h1 className='text-white text-4xl font-semibold'>Besides coding</h1>
          <div className='w-20 h-2 bg-blue-500 rounded mt-2 mb-4'></div>
          <div className='flex mt-8 mb-5 '>

            <img src="https://www.creativefabrica.com/wp-content/uploads/2021/06/24/Pencil-icon-Draw-writing-icon-Graphics-13841493-1-312x208.jpg" alt="" className='h-10 mr-5 rounded-xl'/>
          <p className='text-gray-300 text-xl'>
            I write blogs about tect, web3, opensource and entrepreneurship :   <a href="https://readyy.hashnode.dev/" className='text-blue-400
            '>readyy.hashnode.dev</a>
          </p>
          
          </div>

          <div className='flex mt-8 mb-5 '>

            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3SI2TYjh-iljA6-kojopDOvuigkh_ntLuDw&s" alt="" className='h-10 mr-5 rounded-xl'/>
          <p className='text-gray-300 text-xl'>
            My podcast collection:   <a href="" className='text-blue-400
            '>Soon!</a>
          </p>
          
          </div>

          <div className='flex mt-8 mb-5 '>

            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZWer7p366pMvvP2-99_hQ1KUPb8w-1PXDZQ&s" alt="" className='h-10 mr-5 rounded-xl'/>
          <p className='text-gray-300 text-xl'>
            I rate movies :   <a href="" className='text-blue-400
            '>Soon!</a>
          </p>
          
          </div>

        </div>

        <div className='p-8'>
          {/* <h1 className='text-white text-4xl font-semibold'>Socials</h1>
          <div className='w-20 h-2 bg-blue-500 rounded mt-2 mb-4'></div> */}
          

          <div className='w-full h-10 flex justify-center mt-5 mb-5'>
          <h1 className='text-white text-4xl font-semibold mr-10'>Connect</h1>
          <a href="https://linktr.ee/Kartik_Doda">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3upTvZXEC9ihGWUS0DtYr_k7yQxWQ5z4LJQ&s" alt="" className='h-12 rounded-full  hover:scale-125 transition-transform duration-300 mr-10'/>
            </a>
          {/* <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="" className='h-12 rounded-full hover:scale-125 transition-transform duration-300  mr-10'/>
          <img src="https://img.freepik.com/premium-vector/twitter-new-logo-twitter-icons-new-twitter-logo-x-2023_929078-218.jpg?semt=ais_hybrid" alt="" className='h-12 hover:scale-125 transition-transform duration-300  mr-10'/>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/480px-LinkedIn_logo_initials.png" alt="" className='h-12 hover:scale-125 transition-transform duration-300  mr-10'/> */}
        </div> 
        </div>

        
      </div>

      
    </div>
  );
}

export default About;

