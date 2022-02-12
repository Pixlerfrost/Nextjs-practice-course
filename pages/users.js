function UserList({users}) {
 return (
  <>
  {users.map(user => {
   return (
    <div key={user.id}>
     <h1>{user.name}</h1>
    </div>
   )
  })}
  </>
 )
}

export default UserList

export async function getStaticProps() {
 const response = await fetch('https://jsonplaceholder.typicode.com/users')
 const data = await response.json()

 return {
  props: {
   users: data
  }
 }
}