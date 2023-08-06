import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTwitterSquare, faLinkedin, faGithub, faTelegram} from '@fortawesome/free-brands-svg-icons';
import {faArchway} from "@fortawesome/free-solid-svg-icons";


function App() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-200">

      <div className="w-40 h-40">
        <img className="w-full h-full object-cover rounded-full border-2 border-gray-300 shadow-md" src="/metony.png" alt="Antonio"/>
      </div>

      <h1 className="text-2xl font-semibold text-gray-800 mt-4">metony.eth</h1>

      <div className="flex justify-center items-center space-x-4 mt-4">
        <a href="https://twitter.com/metonyeth" data-tooltip-target="tooltip-twitter"  className="text-blue-400 hover:text-blue-600" target={"_blank"}>
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

    </div>
  );
}

export default App;
