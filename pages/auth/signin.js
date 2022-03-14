import {BsTwitter} from 'react-icons/bs'
import { getProviders, signIn as SignIntoProvider } from "next-auth/react"


 function SignIn({ providers }) {

   
  return (
    <>
      <div className=" grid grid-cols-2 divide-x ">
        <div>
          <img src="/main .png" className="w-45  max-h-full  " alt="" />
        </div>
      <div className="  w-64  min-h-500">
        <div className=" ">
         <BsTwitter size={40} className = 'text-sky-600 mt-8 ml-10'/>
        </div>
        <div className="flex flex-row  ml-10 mt-20 font-bold tracking-normal">
          <h1 className="text-7xl">Happening</h1>
          <h1 className="text-7xl ml-3 ">now</h1>
        </div>
        <div className="flex flex-row  ml-11 mt-12 font-bold tracking-normal">
          <h2 className="text-3xl tracking-normal">Join</h2>
          <h2 className="text-3xl ml-3 tracking-normal">Twitter</h2>
          <h2 className="text-3xl ml-3 tracking-normal">today.</h2>
        </div>
        

        
      {Object.values(providers).map((provider) => (
        <div key={provider.name} className=" ml-11 mt-12" >
          <button onClick={() => SignIntoProvider(provider.id, { callbackUrl: '/'})} className="button">
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    
  
      </div>
      </div>
      <footer className="flex flex-row justify-evenly mt-3 ml-2 mr-2 font-sans text-gray-500 ">
      <p className="hover:underline">About</p>
      <p className="hover:underline">Help Center</p>
      <p className="hover:underline">Terms of Service</p>
      <p className="hover:underline">Privacy Policy</p>
      <p className="hover:underline">Cookie Policy</p>
      <p className="hover:underline">Accessibility</p>
      <p className="hover:underline">Ads info</p>
      <p className="hover:underline">Blog</p>
      <p className="hover:underline">Status</p>
      <p className="hover:underline">Careers</p>
      <p className="hover:underline">Brand Resources</p>
      <p className="hover:underline">Advertising</p>
      <p className="hover:underline">Marketing</p>
      <p className="hover:underline">Twitter for Business</p>
      <p className="hover:underline">Developers</p>
      <p className="hover:underline">Directory</p>
      <p className="hover:underline">Settings</p>
      </footer>
      <footer className="flex justify-center text-gray-500 hover:underline">© 2022 Twitter, Inc.</footer>

      </>


);
}
export async function getServerSideProps() {
    const providers = await getProviders()
    return {
      props: { providers },
    }
  }

  export default SignIn;