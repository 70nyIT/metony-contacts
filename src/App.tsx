import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTwitterSquare, faLinkedin, faGithub, faTelegram} from '@fortawesome/free-brands-svg-icons';
import {faArchway} from "@fortawesome/free-solid-svg-icons";


function App() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-blue-100 via-blue-100 to-blue-200 pb-10">

      <div className="w-40 h-40 mt-40">
        <img className="w-full h-full object-cover rounded-full border-2 border-gray-300 shadow-md hover:shadow-lg hover:scale-110 transition" src="/metony.png" alt="Antonio"/>
      </div>

      <h1 className="text-2xl font-semibold text-gray-800 mt-4">metony.eth</h1>

      {/* Social links and Bio in one card */}
      <div className="bg-white rounded-3xl shadow-md p-6 mt-6 max-w-md w-11/12 md:w-2/3 text-center hover:shadow-lg">
        <div className="flex justify-center items-center space-x-4 mb-6">
          <a href="https://twitter.com/0xMeTony" data-tooltip-target="tooltip-twitter" className="text-blue-400 hover:text-blue-600" target={"_blank"}>
            <FontAwesomeIcon icon={faTwitterSquare} size={"xl"} />
          </a>
          <a href="https://warpcast.com/metony" className="text-purple-500 hover:text-purple-700" target={"_blank"}>
            <FontAwesomeIcon icon={faArchway} size={"xl"} />
          </a>
          <a href="https://github.com/70nyIT" className="text-neutral-900 hover:text-neutral-950" target={"_blank"}>
            <FontAwesomeIcon icon={faGithub} size={"xl"} />
          </a>
          <a href="https://t.me/t0nIT" className="text-blue-400 hover:text-blue-600" target={"_blank"}>
            <FontAwesomeIcon icon={faTelegram} size={"xl"} />
          </a>
        </div>
        <h2 className="text-xl font-bold mb-3">About me</h2>
        <p className="text-gray-700 text-justify">
          A passionate tech-guy with a strong engineering background. I've pioneered in Blockchain development and led research.<br/> Blending my love for technology with lessons learned from coaching basketball, I'm dedicated to creating scalable, secure and open systems.
        </p>
      </div>

      {/* Projects created */}
      <div className="w-full md:w-2/3 mt-10 px-2">
        <h2 className="text-xl font-bold mb-3 text-center">I've been working on ... </h2>
        <div className="flex flex-wrap justify-center">
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col m-2 md:w-5/12">
            <img className="w-20 h-20 object-cover rounded-full" src="/imgs/safe-logo.png" alt="Project 1" />
            <h3 className="text-xl font-bold mt-4">Stealth Safe</h3>
            <p className="text-gray-700 mt-2 flex-grow">Enjoy the privacy of Stealth address with the flexibility of Smart Accounts. Submission at EthGlobal Paris 2023.</p>
            <a href="https://ethglobal.com/showcase/stealth-safes-n6aj5" target={"_blank"} className="w-auto self-center mt-4 bg-white border-blue-500 border-0 text-blue-500 text-center rounded-3xl py-2 px-6 hover:bg-blue-600 hover:text-white">Find out more</a>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col m-2 md:w-5/12">
            <img className="w-20 h-20 object-cover rounded-full" src="/imgs/daolize-logo.jpg" alt="Project 1" />
            <h3 className="text-xl font-bold mt-4">Daolize</h3>
            <p className="text-gray-700 mt-2 flex-grow">Social feeds co-creation for NFT communities in a permissionless environment.</p>
            <a href="https://daolize.com" target={"_blank"} className="w-auto self-center mt-4 bg-white border-blue-500 border-0 text-blue-500 text-center rounded-3xl py-2 px-6 hover:bg-blue-600 hover:text-white">Find out more</a>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col m-2 md:w-5/12">
            <img className="w-20 h-20 object-cover rounded-full" src="/imgs/tproof-logo.avif" alt="Project 1" />
            <h3 className="text-xl font-bold mt-4">tProof</h3>
            <p className="text-gray-700 mt-2 flex-grow">Open source blockchain evidence that a file exists at a certain date with NFT as receipt.</p>
            <a href="https://tproof.io" target={"_blank"} className="w-auto self-center mt-4 bg-white border-blue-500 border-0 text-blue-500 text-center rounded-3xl py-2 px-6 hover:bg-blue-600 hover:text-white">Find out more</a>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col m-2 md:w-5/12">
            <img className="w-20 h-20 object-cover rounded-full" src="/imgs/webflow-aws-logo.png" alt="Project 1" />
            <h3 className="text-xl font-bold mt-4">Webflow AWS</h3>
            <p className="text-gray-700 mt-2 flex-grow">An out-of-the box tool written in Python to deploy your Webflow static website on AWS with a serverless architecture.</p>
            <a href="https://github.com/odfdata/webflow-aws" target={"_blank"} className="w-auto self-center mt-4 bg-white border-blue-500 border-0 text-blue-500 text-center rounded-3xl py-2 px-6 hover:bg-blue-600 hover:text-white">Find out more</a>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col m-2 md:w-5/12">
            <img className="w-20 h-20 object-cover rounded-full" src="/imgs/thesis-logo.png" alt="Project 1" />
            <h3 className="text-xl font-bold mt-4">Reducing Water Footprint: More Crop per Drop</h3>
            <p className="text-gray-700 mt-2 flex-grow">Master thesis for my Engineering studies. Published on <a href={"https://www.nature.com/ngeo/"} target={"_blank"} className={"underline"}>Nature</a>, it proves that we don't need extra land to feed up to 20B users on this planet.</p>
            <a href="http://rdcu.be/yafR" target={"_blank"} className="w-auto self-center mt-4 bg-white border-blue-500 border-0 text-blue-500 text-center rounded-3xl py-2 px-6 hover:bg-blue-600 hover:text-white">Find out more</a>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
