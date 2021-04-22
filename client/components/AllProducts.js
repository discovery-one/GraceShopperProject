import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../store/redux/products';
import { Link } from 'react-router-dom';

class AllProducts extends React.Component {
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
                    <img src={product.imageUrl} />
                    <p>{product.shortDescription}</p>
                    <h6>{product.price}</h6>
                  </div>
                </Link>
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

const mapDispatchToProps = (dispatch) => ({
  loadProducts: () => dispatch(fetchProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts);
