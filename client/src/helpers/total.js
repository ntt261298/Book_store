export default function total(val) {
  console.log(val);
  return val.carts.reduce((acc, item) => { return acc + (item.count * item.price) }, 0);
}
