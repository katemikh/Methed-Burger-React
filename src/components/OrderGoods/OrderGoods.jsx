import { Count } from "../Count/Count";
import style from "./OrderGoods.module.css";


export const OrderGoods = ({item}) => (
    <li className={style.item}>
    <img className={style.image} src="img/burger_1.jpg" alt={item}/>

    <div className={style.goods}>
      {/* <h3 className={style.title}>Super Cheesie</h3> */}
      <h3 className={style.title}>{item}</h3> 

      <p className={style.weight}>512g</p>

      <p className={style.price}>1279
        <span className="currency">$</span>
      </p>
    </div>

<Count count={1} />
{/*     <div className="count">
      <button className="count__minus">-</button>
      <p className="count__amount">1</p>
      <button className="count__plus">+</button>
    </div> */}
  </li>
)