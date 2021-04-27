import React from 'react';
import { connect } from 'react-redux';
import { fetchSingleProduct } from '../store/redux/singleProduct';
import { Link } from 'react-router-dom';
import EditProduct from './EditProduct';

export class SingleProduct extends React.Component {
  componentDidMount() {
    this.props.getProduct(this.props.match.params.id);
  }

  render() {
    const product = this.props.product;
    const price = this.props.product.price / 100;
    return (
      <div>
        <div className="single-product-card">
          <div className="admin-product-container">
            <img src={product.imageUrl} className="single-product-image" />
          </div>
          <div className="admin-product-container">
            <h2 className="single-product-name">{product.name}</h2>
            {product.soldAs === 'bulk' ? (
              <div className="single-product-price">${price} per dozen</div>
            ) : (
              <div className="single-product-price">${price}</div>
            )}
            <p className="long-desc">{product.longDescription}</p>
          </div>
        </div>
        <div>
          <EditProduct />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.product,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProduct: (id) => dispatch(fetchSingleProduct(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
