 import React,{useState,useEffect} from 'react'
 import { Loader ,Cards,FormFeild } from '../components'
 
 const Home = () => {
  const [loading, setLoading] = useState(false)
  const [allPosts, setallPosts] = useState(null)
   return (
     <section className="max-w-7xl mx-auto">
     <div>
      <h1 className="font-extrabold text-[#222328] text-32px">
        The Community Showcase
      </h1>
     </div>
      
     </section>
   )
 }
 
 export default Home