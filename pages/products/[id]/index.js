import {useRouter} from 'next/router'


function Products() {
   const router = useRouter()
   const id = router.query.id
   return <h1>{id}</h1>
}

export default Products