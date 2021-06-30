import { FormEvent, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  function handleSubmint(event: FormEvent) {
    event.preventDefault();

    console.log({ email, pass });
  }

  return (
    <form onSubmit={handleSubmint} className={styles.container}>
      <label htmlFor="email">E-Mail</label>
      <input
        type="text"
        name="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="text"
        name="password"
        value={pass}
        onChange={e => setPass(e.target.value)}
      />
      <button type="submit">Entrar</button>
    </form>
  );
}
