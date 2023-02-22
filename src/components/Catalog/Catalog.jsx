import { Container } from "../Container/Container";
import { Order } from "../Order/Order";
import "./catalog.css";
import "./product.css";

export const Catalog = () => {

    return (
        <section className="catalog">
        <Container className="catalog__container">
        
         <Order />
  
          <div className="catalog__wrapper">
            <h2 className="catalog__title">Burgers</h2>
  
            <div className="catalog__wrap_list">
              <ul className="catalog__list">
                <li className="catalog__item">
                  <article className="product">
                    <img src="img/photo-5.jpg" alt="Meat Bomb" className="product__image"/>
  
                    <p className="product__price">689<span className="currency">$</span></p>
  
                    <h3 className="product__title">
                      <button className="product__detail">Meat Bomb</button>
                    </h3>
  
                    <p className="product__weight">520g</p>
  
                    <button className="product__add" type="button">Add</button>
                  </article>
                </li>
  
                <li className="catalog__item">
                  <article className="product">
                    <img src="img/photo-1.jpg" alt="Super Cheesie" className="product__image"/>
  
                    <p className="product__price">550<span className="currency">$</span></p>
  
                    <h3 className="product__title">
                      <button className="product__detail">Super Cheesie</button>
                    </h3>
  
                    <p className="product__weight">512g</p>
  
                    <button className="product__add" type="button">Add</button>
                  </article>
                </li>
  
                <li className="catalog__item">
                  <article className="product">
                    <img src="img/photo-3.jpg" alt="Satisfying" className="product__image"/>
  
                    <p className="product__price">639<span className="currency">$</span></p>
  
                    <h3 className="product__title">
                      <button className="product__detail">Satisfying</button>
                    </h3>
  
                    <p className="product__weight">580g</p>
  
                    <button className="product__add" type="button">Add</button>
                  </article>
                </li>
  
                <li className="catalog__item">
                  <article className="product">
                    <img src="img/photo.jpg" alt="Heavy blow" className="product__image"/>
  
                    <p className="product__price">480<span className="currency">$</span></p>
  
                    <h3 className="product__title">
                      <button className="product__detail">Heavy blow</button>
                    </h3>
  
                    <p className="product__weight">470g</p>
  
                    <button className="product__add" type="button">Add</button>
                  </article>
                </li>
  
                <li className="catalog__item">
                  <article className="product">
                    <img src="img/photo-2.jpg" alt="Classic" className="product__image"/>
  
                    <p className="product__price">450<span className="currency">$</span></p>
  
                    <h3 className="product__title">
                      <button className="product__detail">Classic</button>
                    </h3>
  
                    <p className="product__weight">450g</p>
  
                    <button className="product__add" type="button">Add</button>
                  </article>
                </li>
  
                <li className="catalog__item">
                  <article className="product">
                    <img src="img/photo-4.jpg" alt="Italian" className="product__image"/>
  
                    <p className="product__price">560<span className="currency">$</span></p>
  
                    <h3 className="product__title">
                      <button className="product__detail">Italian</button>
                    </h3>
  
                    <p className="product__weight">510g</p>
  
                    <button className="product__add" type="button">Add</button>
                  </article>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
    )
}