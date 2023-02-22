import style from "./Header.module.css";
import logo from "../../assets/img/logo.svg";
import { Container } from "../Container/Container.jsx"

export const Header = () => (

<header className={style.header}>

<Container>
<div className={style.container}>
  <img className={style.logo} src={logo} alt="Logo YourMeal" />

  <div className={style.wrapper}>
    <h1 className={style.title}>
      <span>The Most</span>
      <span className={style.red}>Delicious Burgers!</span>
    </h1>

    <p className={style.appeal}>Free delivery from $100</p>
  </div>
  </div>
</Container>
</header>

);