import './Blog.css'

function Blog(props){
    const list = props.posts.map((post) => (
        <div key={post.id}  className="article">
    {/* ou import un uuid key={uuid} */}
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <h3>{post.author}</h3>
        </div>
    ))
    
    
    return(
        <> 
        <h1>Mon joli blog</h1>
        {/* Ces petits crochets c des fragments qui permettent de return plusieurs choses a la fois */}
        <div className="blog">
            {list}
        </div>
        </>
    )
}

export default Blog