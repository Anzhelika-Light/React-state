import { useState, useMemo } from "react";
import css from "./Friends.module.css";

const initialFriends = [
  "Games Blant",
  "Blanca Petson",
  "Flint Good",
  "Jayla Stephens",
  "Jasmin Oruell",
  "Jasmyn Clark",
  "Aracely Royas",
  "Jay Shea",
  "Sean Paul",
  "Gkjjl KHjy",
  "Hljj Ukjjhlkj",
  "Gjhjljj Olljjg",
];

export default function Friends() {
  const [count, setCount] = useState(0);
  const [friends] = useState(initialFriends);
  const [filter, setFilter] = useState("");

  const visibleFriends = useMemo(() => {
    console.log("Filter friends" + Date.now());
    return friends.filter((friend) => friend.toLowerCase().includes(filter));
  }, [filter, friends]);

  //   const visibleFriends = friends.filter((friend) =>
  //     friend.toLowerCase().includes(filter)
  //   );

  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)} className={css.btn}>
        {count}
      </button>
      <hr />
      <input onChange={(e) => setFilter(e.target.value)} value={filter} />
      <ul>
        {visibleFriends.map((friend, idx) => (
          <li key={idx}>{friend}</li>
        ))}
      </ul>
    </div>
  );
}
