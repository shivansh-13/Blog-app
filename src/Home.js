import { useState } from 'react';
const Home = () => {
    const [blog, setBlog] = useState([
        { title: 'My first blog', Body: 'lorem ipsum ...', author: 'Yash', id: '1' },
        { title: 'My birthday', Body: 'lorem ipsum ...', author: 'Shivansh', id: '2' },
        { title: 'My first day at college', Body: 'Khula hi nai abhi tak :(', author: 'Shivansh', id: '3' }
    ]);
    return (
        <div className='home'>
            {blog.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author} </p>
                    
                </div>
            ))}

        </div>
    );

}

export default Home;