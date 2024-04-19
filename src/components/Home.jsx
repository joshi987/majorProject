import React from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
function Home() {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center h-full">
    <div className="text-center">
      <h1 className="text-5xl text-green-500 font-semibold pb-12">
        CheckMyAnswer
      </h1>
      <div className="container mx-auto mt-8 px-4 w-2/3 h-auto shadow-lg">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Hi friends ")
              .pauseFor(1000)
              .deleteAll()
              .typeString(
                "I can help evaluate subjective answers based on certain criteria and guidelines provided to me. However, it is important to note that subjective answers can be influenced by various factors such as personal biases, emotions, and cultural background, which may not be fully understood by me. Therefore, while I can provide a level of objective analysis, I cannot replace the value of human judgment and contextual understanding in evaluating subjective answers."
              )
              .start();
          }} 
        />
      </div>
    </div>
  </div>
  
  );
}

export default Home;
