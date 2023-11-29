"use client";
import { Arapey } from "next/font/google";
import React, { MouseEventHandler, useEffect, useRef, useState } from "react";
import ViewOne from "./banner/view-one";
import ViewTwo from "./banner/view-two";
import ViewThree from "./banner/view-three";
import ViewFour from "./banner/view-four";
import ViewFive from "./banner/view-five";
import { addListener } from "process";

function Bannerrr() {
  const array = [1, 2, 3, 4, 5];
  const [view, setView] = useState<number>(array[0]);
  const indexRef = useRef<number>(0);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setView(array[indexRef.current]);
      indexRef.current = (indexRef.current + 1) % array.length;
    }, 3000);
    return () => clearInterval(interval);
  }, [array]);

  const handleWhell = (e: React.WheelEvent) => {
    e.preventDefault();
    if (view === 5){
      setView(1)
    }
    if (e.deltaY && e.deltaY < 0){
      setView(valor => valor -1)
    }else{
      setView(valor => valor +1)
    }
    }

  return (
    <section  className="px-10 w-full overflow-scroll ">
      <h1 className="w-full text-center text-5xl text-bold py-10 gap-5 uppercase text-primary/80 font-bold drop-shadow-md  ">
        encuentra lo que deseas...
      </h1>
      <div className="flex w-full h-[500px]" onWheel={handleWhell}>
        {view === 1 ? (
          <div className="bg-cuarty rounded w-full flex justify-center items-center p-5">
            <ViewOne />
          </div>
        ) : view === 2 ? (
          <div className="p-5 bg-primary/50 rounded w-full flex justify-center items-center">
            <ViewTwo />
          </div>
        ) : view === 3 ? (
          <div className="p-5 bg-tercery rounded w-full flex justify-center items-center">
            <ViewThree />
          </div>
        ) : view === 4 ? (
          <div className="p-5 bg-quinty rounded w-full flex justify-center items-center">
            <ViewFour />
          </div>
        ) : (
          <div className="p-5 bg-secondary rounded w-full flex justify-center items-center">
            <ViewFive />
          </div>
        )}
      </div>
    </section>
  );
}

export default Bannerrr;
