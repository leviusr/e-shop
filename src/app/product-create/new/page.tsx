"use client";
import { useNotes } from "@/context/NoteContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FormEvent, useEffect, useState } from "react";

function Products() {
  const { data, createData } = useNotes();
  const route = useRouter();
  const [nombre, setNombre] = useState<string>("");
  const [precio, setPrecio] = useState<number>(0);
  const [descripcion, setDescripcion] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [success, setSucces] = useState(false);

  const isComplete = () => {
    setSucces(!success);
  };

  const valores = { nombre, precio, descripcion, image };

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
    if (success === true) {
      const interval = setTimeout(() => {
        setSucces(!success);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [success]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createData({ nombre, precio, descripcion, image });
    setNombre("");
    setPrecio(0);
    setDescripcion("");
    setImage("");
    setSucces(!success);
  };

  console.log(valores);
  console.log(success);

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-[calc(100vh-20vh)] flex flex-col gap-y-2 justify-center items-center"
    >
      {success && (
        <div className="font-bold text-xl italic w-96 flex justify-center bg-green-600 ">
          exitoso
        </div>
      )}
      <input
        name="nombre"
        onChange={changeName}
        type="text"
        placeholder="Nombre del producto"
        className="w-96 px-3 py-2 rounded"
        value={nombre}
      />
      <input
        name="precio"
        onChange={changePrecio}
        type="number"
        placeholder="123456789"
        className="w-96 px-3 py-2 rounded"
        value={precio}
      />
      <input
        name="descripcion"
        onChange={changeDescripcion}
        type="text"
        placeholder="descripcion del producto"
        className="w-96 px-3 py-2 rounded"
        value={descripcion}
      />
      <input
        name="image"
        onChange={changeImage}
        type="text"
        placeholder="url Image"
        className="w-96 px-3 py-2 rounded"
        value={image}
      />
      <input type="submit" className="bg-cuarty w-96 py-2 text-white rounded" />
      <button
        onClick={() => route.back()}
        type="button"
        className=" py-2 px-2 w-20 m-10 text-blue-800 underline"
      >
        volver
      </button>
    </form>
  );
}

export default Products;
