import style from "./Container.module.css";
import classNames from "classnames";

 export const Container = ({children, className}) => (
//     //console.log(`props: `, props);
     <div className={classNames(style.container, className)}> 
     {children}</div>
     );

// export const Container = ({ children }) => (
//     <div className={style.container}> 
//     {children}
//     </div>
// );