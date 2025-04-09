const User = ({ items, onClose }) => {
  console.log(items);
  const elements = items.map(
    ({ id, name, email, address, phone, website, company }) => (
      <li key={id}>
        <p>{name}</p>
        <p>{email}</p>
        <p>
          {address.city}, {address.street}, {address.suite}`
        </p>
        <p>{phone}</p>
        <p>{website}</p>
        <p>{company.name}</p>
        <button type="button" onClick={onClose}>
          Close
        </button>
      </li>
    )
  );
  return <ul>{elements}</ul>;
};
export default User;
