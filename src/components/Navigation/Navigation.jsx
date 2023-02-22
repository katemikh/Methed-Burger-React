import classNames from "classnames";
import { Container } from "../Container/Container";
import style from "./Navigation.module.css";


export const Navigation = () => {

    return (
        <nav className={style.navigation}>
      <Container className={style.container}>
        <ul className={style.list}>
          <li className={style.item}>
            <button className={classNames(style.button, style.button_burger, style.button_active)}>Burgers</button>
          </li>
          <li className={style.item}>
            <button className={classNames(style.button, style.button_snack)}>Snacks</button>
          </li>
          <li className={style.item}>
            <button className={classNames(style.button, style.button_hotdog)}>Hot-Dog</button>
          </li>
          <li className={style.item}>
            <button class={classNames(style.button, style.button_combo)}>Combo</button>
          </li>
          <li className={style.item}>
            <button className={classNames(style.button, style.button_shawarma)}>Shawarma</button>
          </li>
          <li className={style.item}>
            <button className={classNames(style.button, style.button_pizza)}>Pizza</button>
          </li>
          <li className={style.item}>
            <button className={classNames (style.button, style.button_wok)}>Wok</button>
          </li>
          <li className={style.item}>
            <button className={classNames(style.button, style.button_dessert)}>Desserts</button>
          </li>
          <li className={style.item}>
            <button className={classNames (style.button, style.button_sauce)}>Souses</button>
          </li>
        </ul>
        </Container>
         </nav>
    );
}