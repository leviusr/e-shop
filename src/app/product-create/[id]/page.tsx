"use client";
import { useNotes } from "@/context/NoteContext";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";

interface Params {
  id: number;
}

function Products({ params }: { params: Params }) {
  const router = useRouter();
  const { modifyData, data, uniqueData } = useNotes();
  const [nombre, setNombre] = useState<string>("");
  const [precio, setPrecio] = useState<number>(0);
  const [descripcion, setDescripcion] = useState<string>("");
  const [image, setImage] = useState<string>("");

  const changeName = (e: any) => {
    setNombre(e.target.value);
  };
 
  const changePrecio = (e: any) => {
    setPrecio(e.target.value);
  };
  const changeDescripcion = (e: any) => {
    setDescripcion(e.target.value);
  };
  const changeImage = (e: any) => {
    setImage(e.target.value);
  };

  useEffect(() => {
    uniqueData(params.id);
  }, []);

  useEffect(() => {
    if (data) {
      data.map(
        (e) => (
          setNombre(e.nombre),
          setPrecio(e.precio),
          setDescripcion(e.descripcion),
          setImage(e.image)
        ),
      );
    }
  }, [data]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    modifyData(params.id, {nombre, precio, descripcion, image} )
    router.push('/list-product')
  };

  console.log(data);
  console.log(nombre);

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-[calc(100vh-20vh)] flex flex-col gap-y-2 justify-center items-center"
    >
      <input
        name="nombre"
        onChange={changeName}
        type="text"
        className="w-96 px-3 py-2 rounded"
        value={nombre}
      />
      <input
        name="precio"
        onChange={changePrecio}
        type="number"
        className="w-96 px-3 py-2 rounded"
        value={precio}
      />
      <input
        name="descripcion"
        onChange={changeDescripcion}
        type="text"
        placeholder="descripcion del producto"
        className="w-96 px-3 py-2 rounded"
        value= {descripcion}
      />
      <input
        name="image"
        onChange={changeImage}
        type="text"
        placeholder="url Image"
        className="w-96 px-3 py-2 rounded"
        value={image}
      />
      <input
        type="submit"
        value="Modificar"
        className="bg-cuarty w-96 py-2 text-white rounded"
      />
      <button
        onClick={() => router.back()}
        type="button"
        className=" py-2 px-2 w-20 m-10 text-blue-800 underline"
      >
        volver
      </button>
    </form>
  );
}

export default Products;
