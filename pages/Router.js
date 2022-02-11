import {useRouter} from 'next/router'

function Router() {
 const router = useRouter()
 
 function clickhandler() {
  console.log('test');
  router.push('/')
 }
  return (
  <div>
   <h1>Router page</h1>
   <button onClick={clickhandler}>Product</button>
  </div>
  )
}

export default Router