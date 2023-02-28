import { CatalogProduct } from "../CatalogProduct/CatalogProduct";
import { Container } from "../Container/Container";
import { Order } from "../Order/Order";
import style  from "./Catalog.module.css";
//import "./product.css"; 

// temporary catalog
const goodsList = [
  { title: 'Meat Bomb' },
  { title: 'Super Cheesie' },
  { title: 'Satisfying' },
  { title: 'Italian' },
  { title: 'Classic' },
  { title: 'Heavy Blow' },
];

export const Catalog = () => {

    return (
        <section className={style.catalog}>
        <Container className={style.container}>
        
         <Order />
  
          <div className={style.wrapper}>
            <h2 className={style.title}>Burgers</h2>
  
            <div className={style.wrap_list}>
              <ul className={style.list}>

              {goodsList.map((item, i) => (
                <li key={i} className={style.item}>
                <CatalogProduct title={item.title} />
                {/* {item.title} */}
                 {/* article moved to CatalogProduct.jsx */}
                </li>
              ))}
                
  
{/*    --canceled block-left only one li look up!             <li className="item"> 
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
  
                <li className="item">
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
  
                <li className="item">
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
  
                <li className="item">
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
  
                <li className="item">
                  <article className="product">
                    <img src="img/photo-4.jpg" alt="Italian" className="product__image"/>
  
                    <p className="product__price">560<span className="currency">$</span></p>
  
                    <h3 className="product__title">
                      <button className="product__detail">Italian</button>
                    </h3>
  
                    <p className="product__weight">510g</p>
  
                    <button className="product__add" type="button">Add</button>
                  </article>
                </li> */}
              </ul>
            </div>
          </div>
        </Container>
      </section>
    )
}