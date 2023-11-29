"use client";
import { NextResponse } from "next/server";
import { Suspense, useEffect, useState } from "react";
import { DataExample } from "@/interfaces/data";
import Image from "next/image";
import Loading from "@/app/loading";
import Link from "next/link";

interface DataFill {
  [key: string]: {
    name: string;
    url: string;
  };
}

function Gallery() {
  const [valor, setValor] = useState<DataFill[]>([]);

  useEffect(() => {
    async function getPokemon() {
      const getData = await fetch("http://localhost:3000/api/data");
      const data: DataFill = await getData.json();
      setValor([data]);
    }
    getPokemon();
  }, []);

  console.log(valor);
  return (
    <section className="px-20 bg-secondary/20 w-full h-full grid grid-cols-3 justify-center gap-x-10 gap-y-10 py-20 ">
      <Suspense fallback={<Loading />}>
      {valor.map((e) =>
        e.map((exe) => (
          <Link href='/' className="hover:bg-primary bg-primary/50 rounded-xl  w-full h-[500px] flex flex-col justify-center items-center drop-shadow-md hover:scale-105">
              <div className="w-full uppercase px-5 text-xl h-[15%] font-bold bg-tercery items-center flex">{exe.name}</div>
              <div className="relative w-full bg-black/40  h-[50%] bg-blue-500">
                <Image src='/pic.svg' alt={exe.name} loading="lazy" fill />
            </div>
              <div className="font-mono text-sm h-[35%] py-5 w-full px-5 gap-y-1 grid grid-cols-1">
                <h3 className="font-bold uppercase">descripcion: <span className="font-light lowercase">texto texto y mas texto</span></h3>
                <h3 className="font-bold uppercase">Ranking: <span className="font-light">*****</span></h3>

                <h3 className="font-bold uppercase">Bs: <span className="font-light">### Bs</span></h3>
                <h3 className="font-bold uppercase">$$: <span className="font-light">### $$</span></h3>
                
              </div>
          </Link>
        )),
      )}
    </Suspense>
    </section>
  );
}

export default Gallery;
