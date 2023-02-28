/* import "./order.css";
import "./goods.css";
import "./count.css"; */
import style from "./Order.module.css";
import { OrderGoods } from "../OrderGoods/OrderGoods";

const orderList = ["Super Cheesie", "Fries", "Hot Hot-Dog"];

export const Order = () => {

    return (
        <div className={style.order}>
        <section className={style.wrapper}>
          <div className={style.header} tabIndex="0" role="button">
            <h2 className={style.title}>Basket</h2>

            <span className={style.count}>4</span>
          </div>

          <div className={style.wrap_list}>
            <ul className={style.list}>

            {orderList.map((item, i) => <OrderGoods key={i} item={item}/>)}

           {/*  <li className="item">
              <OrderGoods />
            </li> */}
{/*               <li className="item">
                <img className="image" src="img/burger_1.jpg" alt="Super Cheesie"/>

                <div className="goods">
                  <h3 className="goods__title">Super Cheesie</h3>

                  <p className="goods__weight">512g</p>

                  <p className="goods__price">1279
                    <span className="currency">$</span>
                  </p>
                </div>

                <div className="count">
                  <button className="count__minus">-</button>
                  <p className="count__amount">1</p>
                  <button className="count__plus">+</button>
                </div>
              </li> */}

             {/*  <li className="item">
                <img className="image" src="img/free_1.jpg" alt="Fries"/>

                <div className="goods goods">
                  <h3 className="goods__title">Fries</h3>

                  <p className="goods__weight">180g</p>

                  <p className="goods__price">245
                    <span className="currency">$</span>
                  </p>
                </div>

                <div className="count">
                  <button className="count__minus">-</button>
                  <p className="count__amount">2</p>
                  <button className="count__plus">+</button>
                </div>
              </li> */}

              {/* <li className="item">
                <img className="image" src="img/hot-dog_1.jpg" alt="Hot Hot-Dog"/>

                <div className="goods goods">
                  <h3 className="goods__title">Hot Hot-Dog</h3>

                  <p className="goods__weight">245g</p>

                  <p className="goods__price">239
                    <span className="currency">$</span>
                  </p>
                </div>

                <div className="count">
                  <button className="count__minus">-</button>
                  <p className="count__amount">1</p>
                  <button className="count__plus">+</button>
                </div>
              </li> */}
            </ul>

            <div className={style.total}>
              <p>Итого</p>
              <p>
                <span className={style.amount}>1279</span>
                <span className="currency">$</span>
              </p>
            </div>

            <button className={style.submit}>Make an Order</button>

            <div className={style.apeal}>
              <p className={style.text}>Free Delivery</p>
              <button className={style.close}>Roll up</button>
            </div>
          </div>
        </section>
      </div>
    );
}


