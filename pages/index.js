import Link from 'next/link'

function Home() {
 return (
  <div>
   <h1>Home page</h1>
   <Link href='/blog'>
     <a>Blog</a>
   </Link>
  </div>
 )
}

export default Home