import { conn } from "@/utils/database";
import next from "next";
import { NextRequest, NextResponse } from "next/server";

interface Params {
  id: number;
}

export async function GET(
  request: NextRequest,
  { params }: { params: Params },
) {
  try {
    const query = "SELECT * FROM products WHERE id = $1";
    const value = [params.id];

    const response = await conn.query(query, value);

    if (response.rows.length === 0) {
      return NextResponse.json("No existe");
    }

    console.log(response);
    return NextResponse.json(response.rows);
  } catch (error: any) {
    return NextResponse.json(error.message);
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Params },
) {
  try {
    const query = "DELETE FROM products WHERE id = $1 RETURNING *";
    const value = [params.id];

    const response = await conn.query(query, value);

    if (response.rowCount === 0) {
      return NextResponse.json("No existe");
    }

    console.log(response);
    return NextResponse.json(response.rows);
  } catch (error: any) {
    return NextResponse.json(error.message);
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Params },
) {
  try {
    const body = await request.json()
    const {nombre, precio, descripcion, image} = body;

    const query = "UPDATE products SET nombre = $1, precio = $2, descripcion = $3, image = $4 WHERE id = $5 RETURNING *";
    const value = [nombre, precio, descripcion, image, params.id];

    const response = await conn.query(query, value);

    if (response.rows.length === 0) {
      return NextResponse.json("No existe");
    }

    console.log(response);
    return NextResponse.json(response.rows);
  } catch (error: any) {
    return NextResponse.json(error.message);
  }
}
