import Footer from '../components/footer'

function About() {
 return <div>About</div>
}

export default About

About.getLayout = function PageLayout(page: any) {
 return (
  <>
  {page}
  <Footer />
  </>
 )
}