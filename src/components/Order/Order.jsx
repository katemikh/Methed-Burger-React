import style from "./Order.module.css";
import { OrderGoods } from "../OrderGoods/OrderGoods";
import { useDispatch, useSelector } from "react-redux";
import { orderRequestAsync } from "../../store/order/orderSlice";
import { useEffect } from "react";
import { openModal } from "../../store/modalDelivery/modalDeliverySlice";


export const Order = () => {
  const {totalPrice, totalCount, orderList, orderGoods} = useSelector(state => state.order);
 
  const dispatch = useDispatch();
   useEffect(() => {
    dispatch(orderRequestAsync());
  },[orderList.length]);

  return (
        <div className={style.order}>
        <section className={style.wrapper}>
          <div className={style.header} tabIndex="0" role="button">
            <h2 className={style.title}>Basket</h2>

            <span className={style.count}>{totalCount}</span>
          </div>

          <div className={style.wrap_list}>
            <ul className={style.list}>
            {orderGoods.map((item) => <OrderGoods key={item.id} {...item} />)}
            </ul>

            <div className={style.total}>
              <p> Total </p>
              <p>
                <span className={style.amount}>{totalPrice}</span>
                <span className="currency">&nbsp;$</span>
              </p>
            </div>

            <button className={style.submit} 
            disabled={orderGoods.length === 0}
            onClick={() => {
              dispatch(openModal())
            }}>
            Make an Order
            </button>

            <div className={style.apeal}>
              <p className={style.text}>Free Delivery</p>
              <button className={style.close}>Roll up</button>
            </div>
          </div>
        </section>
      </div>
    );
}


