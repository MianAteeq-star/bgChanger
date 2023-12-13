import { useState } from "react";

function App() {
  const [count, setCount] = useState("#34a0a4");

  return (
    <div className="  w-100 h-screen " style={{ backgroundColor: count }}>
      <div className=" fixed bottom-12 inset-x-1 flex flex-wrap justify-center ">
        <div className="w-100 h-20 bg-white gap-4 flex flex-wrap justify-center  items-center p-4 rounded-2xl">

        <button
          className=" p-4 rounded-xl text-black"
          style={{ backgroundColor: "red" }}
          onClick={() => setCount("red")}
        >
          Red
        </button>
        <button
          className=" p-4 rounded-xl text-black "
          style={{ backgroundColor: "green" }}
          onClick={() => setCount("green")}
        >
          Green
        </button>
        <button
          className=" p-4 rounded-xl text-black"
          style={{ backgroundColor: "blue" }}
          
          onClick={()=>setCount("blue")}
        >
          Blue
        </button>
        <button
          className=" p-4 rounded-xl text-black"
          style={{ backgroundColor: "grey" }}
          onClick={() => setCount("grey")}
        >
          Grey
        </button>
        <button
          className="p-4 rounded-xl text-black"
          style={{ backgroundColor: "yellow" }}
          onClick={()=>setCount("yellow")}
          >
          Yellow
        </button>
        <button
          className="p-4 rounded-xl text-black"
          style={{ backgroundColor: "white" }}
          onClick={()=>setCount("white")}
        >
          White
        </button>
        <button
          className="p-4 rounded-xl text-white"
          style={{ backgroundColor: "black" }}
          onClick={()=>setCount("black")}
          >
          Black{" "}
        </button>
        <button
          className="  p-4 rounded-xl text-black"
          style={{ backgroundColor: "purple" }}
          onClick={()=>setCount("purple")}
          >
          Purple
        </button>
          </div>
      </div>
    </div>
  );
}

export default App;
