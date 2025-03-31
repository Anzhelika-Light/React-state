import { Component, useState } from "react";
import { nanoid } from "nanoid";
import { ToastContainer } from "react-toastify";
import "./App.css";

import Counter from "./components/Counter";
import Dropdown from "./components/Dropdown";
import ColorPicker from "./components/ColorPicker";
import Form from "./components/Form";
import TodoList from "./components/Todo/TodoList";
import TodoEditor from "./components/Todo/TodoEditor";
import Filter from "./components/Todo/TodoFilter";
import Menu from "./components/Menu";
import ToggleButton from "./components/ToggleButton";
import Vote from "./components/Vote";
import Books from "./components/Books";
import Feedback from "./components/Feedback/Feedback";
import PhoneBook from "./components/PhoneBook/PhoneBook";
import AccordionItem from "./components/AccordionItem/AccordionItem";
import AccordionOption1 from "./components/Accordion/AccordionOption1";
import AccordionOption2 from "./components/Accordion/AccordionOption2";
import CharactersList from "./components/CharactersList";
import GoodsList from "./components/GoodsList/GoodsList";
import Reader from "./components/Reader/Reader";
import UserRegistration from "./components/UserRegistration";
import ShoppingPlan from "./components/Shopping/ShoppingPlan";
import Modal from "./components/Modal";
import Clock from "./components/Clock";
import Tabs from "./components/Tabs";
import IconButton from "./components/IconButton";
import { ReactComponent as AddIcon } from "./icons/add.svg";
import { PlayerApp } from "./components/PlayerApp/PlayerApp";
import { Reader2 } from "./components/Reader2/Reader2";
import Pokemon from "./components/Pokemon/Pokemon";
import { MaterialApp } from "./components/Material/MaterialApp";
import { FormsWithFormik } from "./components/FormsWithFormik/FormsWithFormik";
import Posts from "./components/Posts/Posts";
import PostSearch from "./components/Posts/PostsSearch";

import menuItems from "./data/menuItems.json";
import initialTodos from "./data/todos.json";
import accordionItems from "./data/accordion.json";
import characters from "./data/characters.json";
import goods from "./data/goods.json";
import publications from "./data/publications.json";
import publications2 from "./data/publications2.json";
import tabs from "./data/tabs.json";

import "./App.css";

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "grey", color: "#607D8B" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

class App extends Component {
  state = {
    todos: initialTodos,
    filter: "",
    showModal: false,
  };

  componentDidMount() {
    const todos = localStorage.getItem("todos");
    const parsedTodos = JSON.parse(todos);
    if (parsedTodos) {
      this.setState({
        todos: parsedTodos,
      });
    }
  }

  componentDidUpdate(_, prevState) {
    const nextTodos = this.state.todos;
    const prevTodos = prevState.todos;

    if (nextTodos !== prevTodos) {
      localStorage.setItem("todos", JSON.stringify(this.state.todos));
    }

    if (nextTodos.length > prevTodos.length && prevTodos.length !== 0) {
      this.toggleModal();
    }
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  addTodo = (text) => {
    const todo = {
      id: nanoid(),
      text,
      completed: false,
    };

    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));
    // this.toggleModal();
  };

  deleteTodo = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== todoId),
    }));
  };

  toggleCompleted = (todoId) => {
    this.setState(({ todos }) => ({
      todos: todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { todos, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return todos.filter((todo) =>
      todo.text.toLowerCase().includes(normalizedFilter)
    );
  };

  calculateCompletedTodos = () => {
    const { todos } = this.state;
    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );
  };

  render() {
    const { todos, filter, showModal } = this.state;

    const totalTodoCount = todos.length;
    const completedTodoCount = this.calculateCompletedTodos();

    const visibleTodos = this.getVisibleTodos();

    return (
      <>
        {/* <Counter initialValue={10} /> */}
        {/* <Dropdown /> */}
        {/* <ColorPicker options={colorPickerOptions} /> */}
        {/* <Form onSubmit={this.onSubmitHandler} />*/}

        {/* TODOS */}
        {/* <div>
          <p>General number of todos: {totalTodoCount}</p>
          <p>Done todos: {completedTodoCount}</p>
        </div>

        <IconButton onClick={this.toggleModal}>
          <AddIcon fill="white" width="40" height="40" />
        </IconButton>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <TodoEditor onSubmit={this.addTodo} />
          </Modal>
        )}
        <Filter value={filter} onChange={this.changeFilter} />
        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        /> */}

        {/* <Menu items={menuItems} /> */}
        {/* <ToggleButton text="Click me!" /> */}
        {/* <Vote /> */}
        {/* <Books /> */}
        {/* <Feedback /> */}
        {/* <PhoneBook showModal={showModal} onClose={this.toggleModal} /> */}
        {/* <AccordionItem /> */}
        {/* <AccordionOption1 accordionItems={accordionItems} /> */}
        {/* <AccordionOption2 accordionItems={accordionItems} /> */}
        {/* <CharactersList characters={characters} /> */}
        {/* <GoodsList goods={goods} /> */}
        {/* <Reader items={publications} /> */}
        {/* <UserRegistration /> */}
        {/*<ShoppingPlan /> */}

        {/* <button type="button" className="btn" onClick={this.toggleModal}>
          Show / hide timer
        </button>
        {showModal && <Clock />} */}
        {/* <Tabs items={tabs} /> */}

        {/* <PlayerApp /> */}

        {/* <Reader2 items={publications2} /> */}

        {/* <Pokemon />
        <ToastContainer autoClose={3000} /> */}

        {/* <MaterialApp /> */}

        {/* <FormsWithFormik /> */}

        <PostSearch />
        {/* <Posts /> */}
      </>
    );
  }
}

export default App;
