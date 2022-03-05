import Link from "next/link"
import { useSession, signIn, signOut } from 'next-auth/react';

// using client side session retrieval
function index() {
  const { data: session, status } = useSession();
  console.log(session, status)
  
 

  if (status === 'loading') {
    return <h1>Loading...</h1>;
  }
  if (session) {
    return (
      <>
      <Link href="http://localhost:3000/dashboard">
        <a>dashboard</a>
      </Link> <br/>   
        <button type="button" onClick={() => signOut()}>
          Sign out
        </button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button type="button" onClick={() => signIn()}>
        Sign in
      </button>
    </>
  );
};



export default index