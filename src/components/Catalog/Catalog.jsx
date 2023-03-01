import { useDispatch, useSelector } from "react-redux";
import { CatalogProduct } from "../CatalogProduct/CatalogProduct";
import { Container } from "../Container/Container";
import { Order } from "../Order/Order";
import style  from "./Catalog.module.css";
import { productRequestAsync } from "../../store/product/productSlice";
import { useEffect } from "react";
//import "./product.css"; 

// temporary catalog
/* const goodsList = [
  { title: 'Meat Bomb' },
  { title: 'Super Cheesie' },
  { title: 'Satisfying' },
  { title: 'Italian' },
  { title: 'Classic' },
  { title: 'Heavy Blow' },
]; */

export const Catalog = () => {

  const { products } = useSelector(state => state.product);
  const dispatch = useDispatch();
  const {category, activeCategory} = useSelector(state => state.category);

  useEffect(() => {
    if (category.length) {
      dispatch(productRequestAsync(category[activeCategory].title));
    }
    
  }, [category, activeCategory])

    return (
        <section className={style.catalog}>
        <Container className={style.container}>
        
        <Order />
  
          <div className={style.wrapper}>
            <h2 className={style.title}>{category[activeCategory]?.en}</h2>
  
            <div className={style.wrap_list}>
              <ul className={style.list}>

              {products.map(item => (
                <li key={item.id} className={style.item}>
                <CatalogProduct item={item} />
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