import {signIn, signOut, useSession} from "next-auth/react"
import Link from "next/link"

function index() {
 const {session, loading} = useSession()
 
 return (
  <>
   <h1>Home Page</h1>

   {
    !session && !loading && (
     <Link href='/api/auth/signin'>
    <a onClick={e => {
     e.preventDefault()
     signIn('github')
    }}>Sign In</a>
   </Link>
    )
   }

    {
     session && (
   <Link href='/api/auth/signout'>
     <a onClick={e => {
      e.preventDefault()
      signOut()
   }}>Sign Out</a>
   </Link>
     )
    }

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