import {signIn, signOut} from "next-auth/react"
import Link from "next/link"

function index() {
 return (
  <>
   <h1>Home Page</h1>

   <Link href='/api/auth/signin'>
    <a onClick={e => {
     e.preventDefault()
     signIn()
    }}>Sign In</a>
   </Link>
   
  <Link href='/api/auth/signout'>
   <a onClick={e => {
    e.preventDefault()
    signOut()
   }}>Sign Out</a>
   </Link>
  </>
 )
}

export default index