import {useRouter} from 'next/router'

function review() {
  const router = useRouter()
  const {id,  reviewid} = router.query

  return <h1>Review {reviewid} for product {id}</h1>
}

export default review;
