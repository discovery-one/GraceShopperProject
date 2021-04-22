import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../store/redux/products';
import { Link } from 'react-router-dom';

class AllProducts extends React.Component {
  constructor() {
    super();
    this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidMount() {
    this.props.loadProducts();
  }

  // clickHandler(productId) {
  //   this.props.addToCart()
  // }

  render() {
    const products = this.props.products;
    return (
      <div>
        <h1>Shop All Galaxy Sweets</h1>
        <ul className="all-product-view">
          {products.map((product) => {
            return (
              <div key={product.id}>
                <Link to={`/products/${product.id}`}>
                  <div>
                    <h2>{product.name}</h2>
                    <img className="product-image" src={product.imageUrl} />
                    <p>{product.shortDescription}</p>
                    <h6>${product.price / 100}</h6>
                  </div>
                </Link>
                <button
                  type="button"
                  onClick={() => this.addToCart(product.id)}
                >
                  Add To Cart
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = (dispatch, { history }) => ({
  loadProducts: () => dispatch(fetchProducts()),
  addToCart: (productId) => dispatch(addToCartThunk(productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts);
