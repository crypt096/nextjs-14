export default function OrderProduct() {
  const handleClick = () => {
    console.log('Placing your order');
  }

  return (
    <>
      <h1>Order Product</h1>
      <button onClick={handleClick}>Place order</button>
    </>
  )
}
