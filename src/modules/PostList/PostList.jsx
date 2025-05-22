import { Link } from "react-router-dom";

const PostList = ({ items = [] }) => {
  const elements = items.map(({ id, title }) => (
    <li key={id}>
      <Link to={`/posts/${id}`}>{title}</Link>
    </li>
  ));

  return <ol>{elements}</ol>;
};

export default PostList;
