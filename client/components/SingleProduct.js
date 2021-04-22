import React from 'react';
import { connect } from 'react-redux';
import { fetchSingleProduct } from '../store/redux/singleProduct';
import { Link } from 'react-router-dom';

export class SingleProduct extends React.Component {
  componentDidMount() {
    this.props.getProduct(this.props.match.params.id);
  }

  render() {
    const product = this.props.product;
    const price = this.props.product.price / 100;
    return (
      <div>
        <h2>{product.name}</h2>
        <br></br>
        <div>
          <img src={product.imageUrl} />
        </div>
        <div>{product.longDescription}</div>
        {product.soldAs === 'bulk' ? (
          <div>${price} per dozen</div>
        ) : (
          <div>${price}</div>
        )}
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
