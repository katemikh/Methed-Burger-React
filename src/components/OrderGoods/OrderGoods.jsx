import { Count } from "../Count/Count";
import style from "./OrderGoods.module.css";
import { API_URI, POSTFIX } from "../../const";


export const OrderGoods = ({title, price, image, count, id, weight}) => (
    <li className={style.item}>
    <img className={style.image} src={`${API_URI}/${image}`} alt={title}/>

    <div className={style.goods}>
      {/* <h3 className={style.title}>Super Cheesie</h3> */}
      <h3 className={style.title}>{title}</h3> 

      <p className={style.weight}>{weight}g</p>

      <p className={style.price}>{price}
        <span className="currency">&nbsp;$</span>
      </p>
    </div>

<Count count={count} id={id}/>
{/*     <div className="count">
      <button className="count__minus">-</button>
      <p className="count__amount">1</p>
      <button className="count__plus">+</button>
    </div> */}
  </li>
)