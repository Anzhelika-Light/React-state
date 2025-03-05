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

  getVisisbleUsers = (e) => {};

  render() {
    const { users, filter } = this.state;
    const { addUser, deleteUser, handleFilter } = this;

    return (
      <div className={css.container}>
        <h1 className={css.title}>Registration form</h1>
        <div className={css.wrapper}>
          <FormAddUser onSubmit={addUser} />
          <label>
            Search for user:
            <input
              type="text"
              name="filter"
              onChange={handleFilter}
              value={filter}
            />
          </label>
          <UserInfo users={users} deleteUser={deleteUser} />
        </div>
      </div>
    );
  }
}

export default UserRegistration;
