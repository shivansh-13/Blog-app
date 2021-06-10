import { useState , useEffect} from 'react';
import BlogList from './BlogList';
const Home = () => {
    const [blog, setBlog] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            fetch('http://localhost:3000/blog')
            .then(res => {
                return res.json() ;
            })
            .then(data =>{
                setBlog(data);
                setIsLoading(false);
            })
        },1000)
    },[]);
    return (
        <div className='home'>
        {isLoading && <div className = "LoadingAnimation">Loading  . . .</div>}
          { blog && <BlogList blogProp={blog} title= "All blogs" />}
        </div>
    );

}

export default Home;