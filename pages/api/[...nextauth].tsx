import NextAuth from "next-auth/next";
import Providers from  'next-auth/providers'

export default NextAuth({
 providers: [
  Providers.GitHub({
   clientId: '',
   clientSecret: ''
   
  })
 ]
})