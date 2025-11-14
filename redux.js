// 1. Зробили об'єкт action
const deposit = (amount) => {
  return {
    type: "deposit",
    payload: { amount },
  };
};

// 2. Зробили reducer, щоб обробляти action
function fundsReducer(state = 0, action) {
  switch (action.type) {
    case "deposit":
      return state + action.payload.amount;

    default:
      return state;
  }
}

// 3. Зробили store, щоб усе реєструвти та ініціалізувати
const store = createStore();

//  4. Прив'язали до компонента і відправляємо action
// В якомусь компоненті буде:
{
  /* <button onClick={REDUX.dispatch(deposit(100))}></button>; */
}
