"use client";
import EditIcons from "@/components/edit-icons";
import { useNotes } from "@/context/NoteContext";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function ListProducts() {
  const { data, getData } = useNotes();
  const [valor, setValor] = useState<string>("");
  const regex = new RegExp("^" + valor, "i");

  useEffect(() => {
    getData();
  }, []);

  console.log(data);
  console.log(valor);

  return (
    <section className=" flex flex-col gap-1 px-5 text-sm font-serif">
      <div className="h-[20vh] flex flex-col justify-center items-end  w-full ">
        <div className="w-full flex justify-center items-center h-[10vh]">
          <input
            onChange={(e) => setValor(e.target.value)}
            className="w-1/2 py-2 px-5 text-xl"
            placeholder="Buscar articulo"
          />
        </div>
        <div className="w-full flex justify-center items-center h-[10vh]">
          <Link
            href="/product-create/new"
            className=" relative w-56 bg-cuarty text-center px-3 py-2"
          >
            New Product{" "}
          </Link>
        </div>
      </div>
      <div className="bg-neutral-950 text-white font-semibold text-md uppercase w-full pl-5 pr-10 h-16 grid grid-cols-5 items-center ">
        <div>id</div>
        <div>nombre</div>
        <div>precio</div>
        <div>descripcion</div>
        <div className="flex justify-end">accion</div>
      </div>
      <div className="h-[55vh] w-full overflow-y-auto">
        {valor.length > 2 ? (
          <div>
            {data.map(
              (e) =>
                e.nombre.match(regex) && (
                  <div>
                    {data.map(
                      (exe) =>
                        e.id === exe.id && (
                          <div>
                            <div className="px-5 h-16 bg-neutral-800 text-white rounded border grid grid-cols-5 items-center">
                              <div className="">{e.id}</div>

                              {e.nombre}
                              <div className="">{e.precio}</div>
                              <div className="">{e.descripcion}</div>
                              <div className="w-full flex justify-end">
                                <EditIcons id={e.id} />
                              </div>
                            </div>
                          </div>
                        ),
                    )}
                  </div>
                ),
            )}
          </div>
        ) : (
          <div>
            {data.map((e) => (
              <div key={e.id} className="">
                <Link href='/' className="hover:bg-neutral-950 z-10 px-5 h-16 bg-neutral-800 text-white rounded border grid grid-cols-5 items-center">
                  <div className="">{e.id}</div>

                  {e.nombre}
                  <div className="">{e.precio}</div>
                  <div className="">{e.descripcion}</div>
                  <div className="w-full flex justify-end">
                    <EditIcons id={e.id} />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default ListProducts;
