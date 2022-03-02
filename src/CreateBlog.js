import { useState } from "react";
import { useHistory } from "react-router";

const CreateBlog = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [body, setBody] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const hist = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        const blog = { title, author, body };

        setIsLoading(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { 'Content-type' : 'application/json'},
            body: JSON.stringify(blog)
        }).then(() => {
            alert('New Blog added!');
            setIsLoading(false);
            hist.push('/');
        })
    }

    return ( 
        <div className="create">
            <h1>Create a New Blog</h1>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input
                type='text'
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}></input>
                <label>Blog Author</label>
                <input
                type='text'
                required
                value={author}
                onChange={(e) => setAuthor(e.target.value)}></input>
                <label>Blog Body</label>
                <textarea
                type='text'
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}></textarea>
                { !isLoading && <button>Add this Blog</button> }
                { isLoading && <button disabled>Adding this Blog</button> }
            </form>
        </div>
     );
}
 
export default CreateBlog;