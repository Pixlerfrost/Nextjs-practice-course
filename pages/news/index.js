function NewsArticle({articles}) {
 return (
  <>
  <h1>News articles</h1>
  {articles.map(article => {
   return (
    <div key={article.id}>
     <h2>
      {article.id} {article.title} | {article.category}
     </h2>
    </div>
   )
  })}
  </>
 )
}

export default NewsArticle

export async function getServerSideProps() {
 const response = await fetch()
 const data = await response.json()

 return {
  props: {
   articles: data
  }
 }
}