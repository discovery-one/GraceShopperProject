import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, deleteCart, editCartThunk } from '../store/redux/cart.js';

class EditCart extends React.Component {
  constructor(props) {
    super(props);
    this.incrementHandler = this.incrementHandler.bind(this);
    this.decrementHandler = this.decrementHandler.bind(this);
    this.removeHandler = this.removeHandler.bind(this);
    const thisCart = this.props.cart.map((item) => item.product);
    const thisQuantity = this.props.cart.map((item) => item.quantity);
    this.state = {
      thisCart: thisCart,
      thisQuantity: thisQuantity,
    };
  }

  incrementHandler(productId) {
    let prodIndx = this.state.thisCart.findIndex(
      (item) => item.id === productId
    );
    let newQuantity = this.state.thisQuantity.map((item, index) => {
      if (index === prodIndx) {
        return item + 1;
      }
      return item;
    });
    this.props.addToCart({
      product: this.state.thisCart[prodIndx],
      quantity: this.state.thisQuantity[prodIndx] + 1,
    });
    this.setState({ thisQuantity: newQuantity });
  }
  decrementHandler(productId) {
    let prodIndx = this.state.thisCart.findIndex((item) => {
      return item.id === productId;
    });
    let delProd = this.state.thisCart[prodIndx];
    if (this.state.thisQuantity[prodIndx] === 1) {
      let newQuantity = this.state.thisQuantity.filter((item, index) => {
        return index != prodIndx;
      });
      let newCart = this.state.thisCart.filter((item, index) => {
        return index != prodIndx;
      });
      this.props.deleteCart(delProd);
      this.setState({ thisCart: newCart, thisQuantity: newQuantity });
    } else {
      let newQuantity = this.state.thisQuantity.map((item, index) => {
        if (index === prodIndx) {
          item -= 1;
          return item;
        }
        return item;
      });
      this.props.addToCart({
        product: this.state.thisCart[prodIndx],
        quantity: this.state.thisQuantity[prodIndx] - 1,
      });
      this.setState({ thisQuantity: newQuantity });
    }
  }

  removeHandler(productId) {
    let prodIndx = this.state.thisCart.findIndex((item) => {
      return item.id === productId;
    });
    let delProd = this.state.thisCart[prodIndx];
    let newQuantity = this.state.thisQuantity.filter((item, index) => {
      return index != prodIndx;
    });
    let newCart = this.state.thisCart.filter((item, index) => {
      return index != prodIndx;
    });
    this.props.deleteCart(delProd);
    this.setState({ thisCart: newCart, thisQuantity: newQuantity });
  }

  render() {
    const checkOut = (
      <div>
        <button
          type='button'
          id='checkout'
          onClick={() =>
            this.props
              .checkout
              /*this.state.thisCart,
              this.state.thisQuantity*/
              ()
          }
        >
          Got To Checkout
        </button>
      </div>
    );
    const products = this.state.thisCart;

    return (
      <div>
        <h1>Your Shopping Cart</h1>
        <div>
          {products !== undefined && products.length > 0 ? (
            <div>
              {checkOut}
              <ul className='all-product-view'>
                {products.map((product, index) => {
                  return (
                    <div key={product.id}>
                      <div>
                        <div className='single-product-container'>
                          <Link to={`/products/${product.id}`}>
                            <img
                              className='cart-product-image'
                              src={product.imageUrl}
                            />
                          </Link>
                        </div>
                        <div className='single-product-container'>
                          <h2>{product.name}</h2>
                          <p className='cart-short-desc'>
                            {product.shortDescription}
                          </p>
                          <h6>${product.price / 100}</h6>
                          <h6
                            key={
                              product.id + '-' + this.state.thisQuantity[index]
                            }
                          >
                            Quantity: {this.state.thisQuantity[index]}
                          </h6>
                        </div>

                        <button
                          className='cart-cta'
                          type='button'
                          onClick={() => this.incrementHandler(product.id)}
                        >
                          {' '}
                          +{' '}
                        </button>
                        <button
                          className='cart-cta'
                          type='button'
                          onClick={() => this.decrementHandler(product.id)}
                        >
                          -
                        </button>
                        <button
                          className='cart-cta'
                          type='button'
                          onClick={() => this.removeHandler(product.id)}
                        >
                          Remove Item
                        </button>
                      </div>
                    </div>
                  );
                })}
              </ul>
            </div>
          ) : (
            <h2>your cart is empty :(</h2>
          )}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addToCart: (cartItem) => dispatch(editCartThunk(cartItem)),
  deleteCart: (product) => dispatch(deleteCart(product)),
});

export default connect(null, mapDispatchToProps)(EditCart);
