import { useState , useEffect} from 'react';
import BlogList from './BlogList';
const Home = () => {
    const [blog, setBlog] = useState([
        { title: 'My first blog', Body: 'lorem ipsum ...', author: 'Yash', id: '1' },
        { title: 'My birthday', Body: 'lorem ipsum ...', author: 'Shivansh', id: '2' },
        { title: 'My first day at college', Body: 'Khula hi nai abhi tak :(', author: 'Shivansh', id: '3' }
    ]);
    const handleDelete = (id) => {
        const newBlogs = blog.filter(blog => blog.id !== id);
        setBlog (newBlogs);
    };
    useEffect(()=>{

        }
    );
    return (
        <div className='home'>
            <BlogList blogProp={blog} handleDelete={handleDelete} />
        </div>
    );

}

export default Home;