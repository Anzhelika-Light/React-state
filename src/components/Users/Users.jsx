import { Component } from "react";
import axios from "axios";
import UsersList from "./UsersList";
import Modal from "../Modal";
import User from "./User";

class Users extends Component {
  state = {
    items: [],
    loading: false,
    error: null,
    showModal: false,
    activeUser: null,
  };

  componentDidMount = () => {
    this.fetchUsers();
  };

  fetchUsers = async () => {
    this.setState({ loading: true });
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      this.setState({ items: data });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ loading: false });
    }
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  setActiveUser = (id) => {
    this.setState({ activeUser: id });
  };

  render() {
    const { items, loading, error, showModal, activeUser } = this.state;
    const { toggleModal, setActiveUser } = this;
    const activeUserInfo = items.filter((item) => item.id === activeUser);

    return (
      <>
        <UsersList
          items={items}
          onOpen={toggleModal}
          setActiveUser={setActiveUser}
        />
        {loading && <p>...loading</p>}
        {error && <p>Failed to get users.Try again later.</p>}
        {showModal && (
          <Modal onClose={toggleModal}>
            <User items={activeUserInfo} onClose={toggleModal} />
          </Modal>
        )}
      </>
    );
  }
}
export default Users;
