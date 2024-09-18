import { IUser } from "@/Types/Users";
import { NextRequest, NextResponse } from "next/server";
import { users } from "../users";

export async function POST(req:NextRequest) {
    const body = await req.json()
    const friends:IUser[] = users.filter(u => body.some(b => b==u.id))
    console.log(friends)

    return NextResponse.json(friends)
}