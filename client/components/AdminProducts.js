import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts, fetchDeleteProduct } from '../store/redux/products';
import { Link } from 'react-router-dom';
import CreateProduct from './CreateProduct';

class AllProducts extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.loadProducts();
  }

  render() {
    const products = this.props.products;
    return (
      <div>
        <h1>Shop All Galaxy Sweets</h1>
        <ul className="all-product-view">
          {products.map((product) => {
            return (
              <div key={product.id} className="all-products">
                <a
                  href={`/products/${product.id}`}
                  className="all-product-card"
                >
                  <div>
                    <img className="all-product-image" src={product.imageUrl} />
                    <h3 className="all-product-name">{product.name}</h3>
                    <p className="short-desc">{product.shortDescription}</p>
                    {product.soldAs === 'bulk' ? (
                      <h5 className="all-product-price">
                        ${product.price / 100} per dozen
                      </h5>
                    ) : (
                      <h5 className="all-product-price">
                        ${product.price / 100}
                      </h5>
                    )}
                  </div>
                </a>
                <div className="all-button-container">
                  <button
                    type="button"
                    onClick={() => this.props.deleteProduct(product.id)}
                    className="all-add-to-cart"
                  >
                    Delete Product
                  </button>
                </div>
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
  deleteProduct: (productId) => dispatch(fetchDeleteProduct(productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts);
