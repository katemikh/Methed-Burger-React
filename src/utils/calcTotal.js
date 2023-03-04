export const calcTotal = orderGoods => 
orderGoods.reduce(
    ([totalCount, totalPrice], item) => {
       const sumCount = totalCount + item.count;
       const sumPrice = totalPrice + item.price * item.count;

    return[sumCount,totalPrice];
    },
    [0, 0],
 ); 