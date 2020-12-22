import { getPosts } from "../api/posts";
import Link from "next/link";
import { Container, Media } from "react-bootstrap";

const Post = (props) => (
  <Container>
    <>
      {props.posts.map((post, index) => (
        <Link href={`post/[slug]`} as={`post/${post.slug}`}>
          <Media style={{ cursor: "pointer" }} key={index}>
            <img
              width={64}
              height={64}
              className='align-self-start mr-3'
              src={post.feature_image}
              alt='blog feature image'
            />
            <Media.Body>
              <h5>{post.title}</h5>
              <p>{post.excerpt}</p>
            </Media.Body>
          </Media>
        </Link>
      ))}
    </>
  </Container>
);

Post.getInitialProps = async () => {
  const posts = await getPosts();
  return { posts: posts };
};

export default Post;
