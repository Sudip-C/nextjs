"use client"
import styles from './page.module.css'

import { useRouter } from 'next/navigation'

export default function Home() {
  const router=useRouter()
  return (
    <main >
    <div className={styles.navbar}>
      <p>Home</p>
      <p onClick={()=>router.push("/text-to-speech")}>Text to speech</p>
      <p onClick={()=>router.push("/speech-to-text")}>Speech to Text</p>
    </div>
      <div className={styles.Description} >
        <p>
         Welcome to first next.js website
        </p>
       
      </div>

      

      
    </main>
  )
}
