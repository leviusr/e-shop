import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import { conn } from "@/utils/database";

interface Data {
  rows:[{
    now:string
  }]    
}

export async function GET (){
  const response = await conn.query('SELECT NOW()')
  console.log(response)
  return NextResponse.json(response.rows[0].now)  
}

