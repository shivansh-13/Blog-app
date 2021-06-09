const BlogList = ({blogProp,handleDelete}) => {
    const blog = blogProp;
    return (
        <div className="blog-list">
            {blog.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author} </p>
                    <button className="button" onClick={() =>handleDelete(blog.id)}>Delete Blog</button>
                </div>
            ))}
        </div>
    );
}

export default BlogList;