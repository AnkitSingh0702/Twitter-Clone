import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  secret: "2c1277e86e4964d1ca82e93e539a547f",
  pages:{
      signIn:'/auth/signin'
  },
  callbacks:{
    async session({session, token, user}){
      session.user.username = session.user.name.split(" ").join("").toLocaleLowerCase();
      session.user.uid = token.sub;
      return session;
    }
  }
})