import { Component } from "react";
import FormAddUser from "./FormAddUser";
import UserInfo from "./UserInfo";
import css from "./UserRegistration.module.css";
import { nanoid } from "nanoid";

class UserRegistration extends Component {
  state = {
    users: [],
    filter: "",
  };

  componentDidMount() {
    const users = JSON.parse(localStorage.getItem("users"));
    if (users?.length) this.setState({ users });
  }

  componentDidUpdate(_, prevState) {
    const { users } = this.state;
    if (users !== prevState.users) {
      localStorage.setItem("users", JSON.stringify(users));
    }
  }

  addUser = (data) => {
    const newUser = { id: nanoid(), ...data };
    this.setState(({ users }) => ({
      users: [newUser, ...users],
    }));
  };

  deleteUser = (id) => {
    this.setState(({ users }) => ({
      users: users.filter((user) => user.id !== id),
    }));
  };

  handleFilter = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  getVisibleUsers = (e) => {
    const { users, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const result = users.filter(
      ({ name, email }) =>
        name.toLowerCase().includes(normalizedFilter) ||
        email.toLowerCase().includes(normalizedFilter)
    );
    return result;
  };

  render() {
    const { filter } = this.state;
    const { addUser, deleteUser, handleFilter } = this;
    const visibleUsers = this.getVisibleUsers();

    return (
      <div className={css.container}>
        <h1 className={css.title}>Registration form</h1>
        <div className={css.wrapper}>
          <FormAddUser onSubmit={addUser} />
          <div>
            <label>
              Search for user:
              <input
                type="text"
                name="filter"
                onChange={handleFilter}
                value={filter}
                className={css.filter}
              />
            </label>
            <UserInfo users={visibleUsers} deleteUser={deleteUser} />
          </div>
        </div>
      </div>
    );
  }
}

export default UserRegistration;
