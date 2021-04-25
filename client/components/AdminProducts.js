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
              <div key={product.id}>
                <Link to={`/products/${product.id}`}>
                  <div>
                    <h2>{product.name}</h2>
                    <img className="product-image" src={product.imageUrl} />
                    <p>{product.shortDescription}</p>
                    {product.soldAs === 'bulk' ? (
                      <div>${product.price / 100} per dozen</div>
                    ) : (
                      <div>${product.price / 100}</div>
                    )}
                  </div>
                </Link>
                <button
                  type="button"
                  onClick={() => this.props.deleteProduct(product.id)}
                >
                  Delete Product
                </button>
              </div>
            );
          })}
        </ul>
        <div>
          <h2>Add a New Product</h2>
          <CreateProduct />
        </div>
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
