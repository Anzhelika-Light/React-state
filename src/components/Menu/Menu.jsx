import { useState } from "react";
import css from "./Menu.module.css";

const Menu = ({ items }) => {
  const [activeIdx, setActiveIdx] = useState(1);

  const handleClick = (e, index) => {
    e.preventDefault();

    setActiveIdx(index);
  };

  const elements = items.map(({ id, link, text }, index) => (
    <li key={id}>
      <a
        href={link}
        className={index === activeIdx ? `${css.link} ${css.active}` : css.link}
        onClick={(e) => handleClick(e, index)}
      >
        {text}
      </a>
    </li>
  ));
  return <ul className={css.menu}>{elements}</ul>;
};

export default Menu;

// class Menu extends Component {
//   state = {
//     activeIdx: 1,
//   };

//   handleClick = (e, index) => {
//     e.preventDefault();

//     this.setState({
//       activeIdx: index,
//     });
//   };

//   render() {
//     const { items } = this.props;
//     const { activeIdx } = this.state;
//     const { handleClick } = this;

//     const elements = items.map(({ id, link, text }, index) => (
//       <li key={id}>
//         <a
//           href={link}
//           className={
//             index === activeIdx ? `${css.link} ${css.active}` : css.link
//           }
//           onClick={(e) => handleClick(e, index)}
//         >
//           {text}
//         </a>
//       </li>
//     ));
//     return <ul className={css.menu}>{elements}</ul>;
//   }
// }

// export default Menu;
