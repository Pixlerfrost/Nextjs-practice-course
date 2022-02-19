import {useState, useEffect} from 'react'

function DashBoard() {
 const [isLoading, setIsLoading] = useState(true)
 const [dashBoardData, setDashBoardData] = useState(null)

 useEffect(() => {
   async function fetchDashBoardData() {
    const response = await fetch('http://localhost:4000/dashboard')
    const data = response.json()
    setDashBoardData(data)
    setIsLoading(false)
   }
   fetchDashBoardData()
 }, [])

 if (isLoading) {
  return <h2>Loading...</h2>
 }
 return (
  <div>
   <h2>Posts | {dashBoardData.posts}</h2>
  </div>
 )
}

export default DashBoard