import { NextRequest, NextResponse} from 'next/server'
import {IUser} from '../../../Types/Users'
const users:IUser[] = require( '@/app/api/users').users

export async function GET () {
    return NextResponse.json(users)
}

export async function POST (req:Request, res:Response) {
    const body = await req.json();
    const user = users.find(u => u.id==body.id)

    return NextResponse.json(user)
}