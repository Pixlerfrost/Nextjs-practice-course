import { getSession } from "next-auth/react"

function Blog({ data }) {
  return <h1>Blog Page - {data}</h1>
}

export default Blog

export async function getServerSideProps(context) {
  const session = await getSession(context)

  return {
   props: {
    data: session ? 'List of 100 blogs' : 'List of free blogs'
   }
  }
}