import useLocalStorage from "../../../hooks/useLocalStorage";
import css from "./SignupForm.module.css";

export default function SignupForm() {
  const [email, setEmail] = useLocalStorage("email", "");
  const [password, setPassword] = useLocalStorage("password", "");

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;

      default:
        return;
    }
  };

  // useEffect(() => {
  //   window.localStorage.setItem("email", JSON.stringify(email));
  // }, [email]);

  // useEffect(() => {
  //   window.localStorage.setItem("password", JSON.stringify(password));
  // }, [password]);

  return (
    <form className={css.form} autoComplete="off">
      <label className={css.label}>
        <span>Email</span>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
        />
      </label>

      <label className={css.label}>
        <span>Password</span>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
}
