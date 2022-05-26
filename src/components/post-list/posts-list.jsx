import PostItem from './post-item/post-item.jsx'

const PostList = ({ postsData }) => {

  return (
    <ul>
      {postsData.map((post, idx) => {
        return <PostItem key={idx} postsData={post} />
      })}
    </ul>
  )
}

export default PostList;