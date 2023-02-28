import style from "./CatalogProduct.module.css";


export const CatalogProduct = (props) => (

    <article className={style.product}>
    {/* <img src="img/photo-5.jpg" alt="Meat Bomb" className={style.image}/> */}
    <img src="img/photo-5.jpg" alt={props.title} className={style.image}/>

    <p className={style.price}>689<span className="currency">$</span></p>

    <h3 className={style.title}>
      {/* <button className={style.detail}>Meat Bomb</button> */}
      <button className={style.detail}>{props.title}</button>
    </h3>

    <p className={style.weight}>520g</p>

    <button className={style.add} type="button">Add</button>
  </article>
);