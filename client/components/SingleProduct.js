import React from 'react';
import { connect } from 'react-redux';
import { fetchSingleProduct } from '../store/singleProduct';
import { Link } from 'react-router-dom';

export class SingleProduct extends React.Component {
  componentDidMount() {
    this.props.getProduct(this.props.match.params.id);
  }

  render() {
    const product = this.props.product;
    return (
      <div>
        <h2>{product.name}</h2>
        <br></br>
        <div className="imageBox" data-aos="flip-up">
          <img src={product.imageUrl} />
        </div>
        <div className="tierBox" data-aos="zoom-out-up">
          {product.longDescription}
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
