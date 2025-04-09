const UsersList = ({ items, onOpen, setActiveUser }) => {
  const elements = items.map(({ id, name, email }) => (
    <li key={id}>
      <p onClick={(onOpen, () => setActiveUser(id))}>{name}</p>
      <p>{email}</p>
    </li>
  ));
  return (
    <>
      <h2>List of users</h2>
      <ol>{elements}</ol>
    </>
  );
};

export default UsersList;
