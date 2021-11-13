import Footer from "./Footer";
import Navbar from "./Navbar";
import Head from "next/head"

const Layout = ({children}) => {
    return ( 
        
        <div className="content">
            <Head>
                <title>Ninja List</title>
                <meta name="keywords" content='ninjas'/>
            </Head>
            <Navbar/>
            { children }
            <Footer/>
        </div>
     );
}
 
export default Layout;