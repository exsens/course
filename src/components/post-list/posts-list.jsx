import PostItem from './post-item/post-item.jsx'

const PostList = ({ postsData, avatar }) => {

  return (
    <ul>
      {postsData.map((post, idx) => {
        return <PostItem key={idx} postsData={post} src={avatar} />
      })}
    </ul>
  )
}

export default PostList;