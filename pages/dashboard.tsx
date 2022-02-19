import useSWR from 'swr'

async function fetcher() {
 const response = await fetch('http://localhost:4000/dashboard')
 const data = response.json()
 return data
}

function DashBoardSWR() {
 const { data, error } = useSWR('dashboard', fetcher)

 if(error) return 'Error'
 if(!data) return 'Loading...'

 return (
  <div>{data.posts}</div>
 )
}


export default DashBoardSWR