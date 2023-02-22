import "./order.css";
import "./goods.css";
import "./count.css";

export const Order =() => {

    return (
        <div className="catalog__order order">
        <section className="order__wrapper">
          <div className="order__header" tabindex="0" role="button">
            <h2 className="order__title">Basket</h2>

            <span className="order__count">4</span>
          </div>

          <div className="order__wrap_list">
            <ul className="order__list">
              <li className="order__item">
                <img className="order__image" src="img/burger_1.jpg" alt="Super Cheesie"/>

                <div className="order__goods goods">
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
              </li>

              <li className="order__item">
                <img className="order__image" src="img/free_1.jpg" alt="Fries"/>

                <div className="order__goods goods">
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
              </li>

              <li className="order__item">
                <img className="order__image" src="img/hot-dog_1.jpg" alt="Hot Hot-Dog"/>

                <div className="order__goods goods">
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
              </li>
            </ul>

            <div className="order__total">
              <p>Итого</p>
              <p>
                <span className="order__amount">1279</span>
                <span className="currency">$</span>
              </p>
            </div>

            <button className="order__submit">Make an Order</button>

            <div className="order__apeal">
              <p className="order__text">Free Delivery</p>
              <button className="order__close">Roll up</button>
            </div>
          </div>
        </section>
      </div>
    )
}


