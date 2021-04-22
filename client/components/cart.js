import React from 'react';
import { connect } from 'react-redux';
import { getCartThunk } from '../store/redux/cart';
import { Link } from 'react-router-dom';

// + Product Name
// + Image
// + Price
// + Quantity
// + Update Buttons
// + Delete Button
// + Checkout Button

class Cart extends React.Component {
  componentDidMount() {
    this.props.getCart(this.props.match.params.id);
  }

  render() {
    const products = this.props.cart.products || [];
    return (
      <div>
        <h1>Shop All Galaxy Sweets</h1>
        <div>
          {products !== undefined && products.length > 0 ? (
            <ul className='all-product-view'>
              {products.map((product) => {
                return (
                  <div key={product.id}>
                    <Link to={`/products/${product.id}`}>
                      <div>
                        <h2>{product.name}</h2>
                        <img className='product-image' src={product.imageUrl} />
                        <p>{product.shortDescription}</p>
                        <h6>${product.price / 100}</h6>
                      </div>
                    </Link>
                    <button
                      type='button'
                      onClick={() => this.addToCart(product.id)}
                    >
                      Delete
                    </button>
                  </div>
                );
              })}
            </ul>
          ) : (
            <h2>your cart is empty :(</h2>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
  //   products: state.products,
});

const mapDispatchToProps = (dispatch) => ({
  getCart: (order) => dispatch(getCartThunk(order)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
