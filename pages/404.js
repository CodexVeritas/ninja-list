import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { useEffect } from 'react'
import router, {useRouter } from 'next/router'

const NotFound = () => {
    
    useEffect(() => {
        console.log('will be exiting 404 page')
        setTimeout(() =>{
            router.push('/')
        }, 3000)
    }, [])
    
    return ( 
        <div className="not-found">
            <h1>Ooooops....</h1>
            <h2>The page has been eaten by a wild wombat. Sorry...</h2>
            <p>Go back to the <Link href="/"><a className={styles.btn}> Homepage </a></Link></p>
        </div>
    );
}
 
export default NotFound;