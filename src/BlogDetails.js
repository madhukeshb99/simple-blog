import { useHistory, useParams } from "react-router-dom";
import useDataFetch from "./DataFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data : blog, isLoading, error } = useDataFetch('http://localhost:8000/blogs/' + id);
    const hist = useHistory()
    const handleDelete = (e) => {
            fetch('http://localhost:8000/blogs/'+id, {
                method: 'DELETE'
            }).then(() => {
                hist.push('/');    
            })
    }
    return ( 
        <div className="blog-details">
            { error && <h2> { error } </h2> }
            { isLoading && <h2> Loading..... </h2>}
            { blog && !error && (
                <article>
                    <h2> { blog.title } </h2>
                    <div> Written by { blog.author }</div>
                    <p> { blog.body } </p>
                    <br></br>
                    <button onClick={handleDelete}>DELETE</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;