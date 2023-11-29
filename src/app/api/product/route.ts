import { NextRequest, NextResponse } from "next/server";
import { conn } from "@/utils/database";

export async function GET (request:NextRequest){
  try{
  const response = await conn.query("SELECT * FROM products");
  console.log(response)
  return NextResponse.json(response.rows)
  }catch (error:any){
    console.log(error.message)
  }
}


export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nombre, precio, descripcion, image } = body;
     const query =
       "INSERT INTO products(nombre, precio, descripcion, image) VALUES ($1, $2, $3, $4) RETURNING *";
     
    const values = [nombre, precio, descripcion, image];
    
     const response = await conn.query(query, values);
    console.log(response);
    return NextResponse.json(response.rows[0]);
  } catch (error) {
    console.log(error);
  }
}

export async function DELETE (request: NextResponse){

}
