const cart=[];
  let cartTotal = 0;
  function addTocart(productId,productName,price)
  {
    const cartObject = { productId, productName,price};
    cart.push(cartObject);
    console.log(cart.length);
    cartTotal += price;
    window.alert( productName +" is  added to cart.\n Total - \u20B9"+cartTotal);

  }