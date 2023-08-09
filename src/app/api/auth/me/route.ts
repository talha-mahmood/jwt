import {cookies} from 'next/headers'
import { COOKIE_NAME } from '../../../../../constants'
import { NextResponse } from 'next/server'
import { verify } from 'jsonwebtoken'
export async function GET(){
    const cookiestore=cookies()
    const token=cookiestore.get(COOKIE_NAME)
    if(!token){
        return NextResponse.json(
            {
            message:"Unauthorized",

        },
        {
            status:401
        }
        )
    }
    const {value}   = token
    const secret=process.env.JWT_SECRET||""
    try{
        verify(value,secret)
        const response={
            user:"Super top secret user"
        }
        return new Response(JSON.stringify(response),
    {
        status: 200
      
    })

    }catch(err){
        return NextResponse.json(
            {
            message:"Something went wrong",

        },
        {
            status:404
        }
        )
    }
 
    console.log(token)
}



