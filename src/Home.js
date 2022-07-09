import BlogList from "./components/BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const {data: blogs, isPending, error} = useFetch('http://localhost:9000/blogs')
    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id)
    //     setBlogs(newBlogs)
    // }

    // useEffect(() => {
    //     setTimeout(() => {
    //         fetch("http://localhost:9000/blogs")
    //             .then(res => {
    //                 if(!res.ok) {
    //                     throw Error("could not fetch the data for that resource")
    //                 }
    //                 return res.json()
    //             })
    //             .then((data) => {
    //                 setBlogs(data)
    //                 setIsPending(false)
    //                 setError(null)
    //             })
    //             .catch(err => {
    //                 setIsPending(false)
    //                 setError(err.message)
    //             })
    //     }, 1000)
    // }, [])

    return (   
        <div className="home">
            {error && <div>{error}</div>}
            { isPending && <div>Loading...</div> }
            { blogs && <BlogList blogs={blogs} title="All blogs!"/>}
            { blogs && <BlogList blogs={blogs.filter((blog) => blog.author === "ama")}  title="Ama's blogs" />} 
        </div>
    );
}
 
export default Home;