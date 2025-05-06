import { useState } from "react";
import VoteActions from "./VoteActions";
import VoteResults from "./VoteResults";
import Block from "./Block";
import css from "./Vote.module.css";

const Vote = () => {
  const [state, setState] = useState({
    republic: 0,
    democrate: 0,
  });

  const { democrate, republic } = state;
  const total = democrate + republic;

  const calcPercentage = (propertyName) => {
    if (!total) {
      return 0;
    }

    const value = state[propertyName];
    const result = (value / total) * 100;
    return Number(result.toFixed(2));
  };

  const vote = (propertyName) => {
    setState((prevState) => ({
      ...prevState,
      [propertyName]: prevState[propertyName] + 1,
    }));
  };

  const democratePercentage = calcPercentage("democrate");
  const republicPercentage = calcPercentage("republic");

  return (
    <div className={css.wrapper}>
      <Block title="Проголосувати">
        <VoteActions vote={vote} />
      </Block>

      <Block title="Результати">
        <VoteResults
          total={total}
          democrate={democrate}
          republic={republic}
          democratePercentage={democratePercentage}
          republicPercentage={republicPercentage}
        />
      </Block>
    </div>
  );
};

// class Vote extends Component {
//   state = {
//     republic: 0,
//     democrate: 0,
//   };

//   calcTotal() {
//     const { democrate, republic } = this.state;
//     return democrate + republic;
//   }
//   calcPercentage(propertyName) {
//     const total = this.calcTotal();
//     if (!total) {
//       return 0;
//     }
//     const value = this.state[propertyName];
//     const result = (value / total) * 100;
//     return Number(result.toFixed(2));
//   }

//   vote = (propertyName) => {
//     this.setState((prevState) => ({
//       [propertyName]: prevState[propertyName] + 1,
//     }));
//   };

//   render() {
//     const { democrate, republic } = this.state;
//     const total = this.calcTotal();
//     const democratePercentage = this.calcPercentage("democrate");
//     const republicPercentage = this.calcPercentage("republic");

//     return (
//       <div className={css.wrapper}>
//         <Block title="Проголосувати">
//           <VoteActions vote={this.vote} />
//         </Block>

//         <Block title="Результати">
//           <VoteResults
//             total={total}
//             democrate={democrate}
//             republic={republic}
//             democratePercentage={democratePercentage}
//             republicPercentage={republicPercentage}
//           />
//         </Block>
//       </div>
//     );
//   }
// }

export default Vote;
