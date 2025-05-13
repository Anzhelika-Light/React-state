import css from "./PostList.module.css";

const PostList = ({ items = [], onClick }) => {
  const elements = items.map(({ id, title, body }) => (
    <li key={id} className={css.item} onClick={() => onClick({ title, body })}>
      <p>{id}</p>
      {title}
    </li>
  ));
  return <ul className={css.list}>{elements}</ul>;
};

export default PostList;
