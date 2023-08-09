import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { COOKIE_NAME } from './constants'
 
export function middleware(request: NextRequest) {
   


    if(request.cookies.has(COOKIE_NAME)){
    //     let cookie = request.cookies.get('OutSiteJWT')
    //     // console.log(cookie) // => { name: 'OutSiteJWT', value: 'ebmneheheiuiy678eiu', Path: '/' }
    //     const {value}:any = cookie;
    //      console.log(value)
    //     //   request.cookies.delete('nextjs')
    //    request.token = value;
       
    }else{
       return new NextResponse(
        JSON.stringify({ success: false, message: 'Unauthorized' }),
        { status: 401, headers: { 'content-type': 'application/json' } }
      )


    }
}


export const config = {
    matcher: '/admin/:path*',
}


