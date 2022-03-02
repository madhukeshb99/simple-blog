import BlogList from "./BlogList";
import useDataFetch from "./DataFetch";

const Home = () => {
    const {data : blogs, isLoading, error} = useDataFetch('http://localhost:8000/blogs');

    return ( 
        <div className="home">
            {error && <h2> {error} </h2>}
            {isLoading && <h2>Loading......</h2>}
            {blogs && !error && <BlogList blogs={blogs} title='All blogs'/>}
        </div>
     );
}
 
export default Home;