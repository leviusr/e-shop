import Loading from "@/app/loading";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import { MdBrightness1 } from "react-icons/md";

function ViewFour() {
  return (
    <div>
      <Link
        href="/calzado"
        className="max-w-[70vw] grid grid-cols-2 justify-center items-center gap-x-10"
      >
        <div>
          <h2 className="text-3xl py-10 font-semibold">Prendas de Vestir</h2>
          <p>
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat
            reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
            ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
            Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
            voluptate dolor minim nulla est proident. Nostrud officia pariatur
            ut
          </p>
        </div>
        <div className="bg-slate-950/80 flex justify-center items-center rounded-xl">
          <div className="relative w-56 h-56">
            <Suspense fallback={<Loading />}>
              <Image src="/ropa.png" alt="zapatilla" fill></Image>
            </Suspense>
          </div>
        </div>
      </Link>
      <div className=" gap-2 pt-10 w-full flex items-center justify-center">
        <MdBrightness1 size={10} />
        <MdBrightness1 size={10} />
        <MdBrightness1 size={10} />
        <MdBrightness1 className="text-red-300" size={10} />
        <MdBrightness1 size={10} />
      </div>
    </div>
  );
}

export default ViewFour;
