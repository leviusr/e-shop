import { cn } from "@/libs/utils";
import Image from "next/image";
import { ReactNode, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import React from "react";

function Car() {
  return (
    <section className="px-5 text-white mb-3">
      <div className="px-3 w-full h-40 bg-cuarty drop-shadow-md  flex justify-between items-center">
        <div className="relative w-36 h-36 border rounded">
          <Image src="/example.png" alt="example" fill />
        </div>
        <div className="text-sm w-56 px-3 border-r border-r-white h-full py-5">
          <p>
            description description description description description
            description description description description description
            description
          </p>
        </div>
        <div className="gap-x-5 gap-y-3 flex items-center text-sm">
          <label className="flex flex-col text-zinc-400">
            Price:
            <div className="text-white">0.00 $</div>
          </label>
          <label className="flex flex-col text-zinc-400">
            cantidad:
            <input min="1" max='5' id="valor" name="valor" type="number" className="w-16 text-black" defaultValue="1"  />
          </label>
          <div>
          <br />
          <span>
            <FaTrashAlt />
          </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Car;
