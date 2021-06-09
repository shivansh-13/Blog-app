import { useState , useEffect} from 'react';
import BlogList from './BlogList';
const Home = () => {
    const [blog, setBlog] = useState(null);
    useEffect(()=>{
            fetch('http://localhost:3000/blog')
            .then(res => {
                return res.json() ;
            })
            .then(data =>{
                setBlog(data);
            })
        },[]
    );
    return (
        <div className='home'>
          { blog && <BlogList blogProp={blog}  />}
        </div>
    );

}

export default Home;