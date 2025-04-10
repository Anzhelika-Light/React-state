import css from "./UsersList.module.css";

const UsersList = ({ items, openModal, onOpen, setActiveUser }) => {
  const elements = items.map(({ id, name, email }) => (
    <li className={css.item} key={id}>
      {/* <p
        onClick={() => {
          onOpen();
          setActiveUser(id);
        }}
      >
        {name}
      </p> */}
      <p className={css.name} onClick={() => openModal(id)}>
        {name}
      </p>
      <p className={css.email}>{email}</p>
    </li>
  ));
  return (
    <>
      <h2>List of users</h2>
      <ol className={css.list}>{elements}</ol>
    </>
  );
};

export default UsersList;
