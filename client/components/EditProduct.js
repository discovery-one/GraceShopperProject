import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchEditProduct } from '../store/redux/singleProduct';

export class EditProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: 0,
      shortDescription: '',
      longDescription: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.editProduct({ ...this.props.product, ...this.state });
  }

  render() {
    console.log(this.props);
    const { name, price, shortDescription, longDescription } = this.state;
    const { handleSubmit, handleChange } = this;
    return (
      <div className="admin-product-container">
        <h3>Edit Product</h3>
        <form id="editProduct" onSubmit={handleSubmit}>
          <label>Product Name:</label>
          <input name="name" onChange={handleChange} value={name} />
          <p>
            <label>Price:</label>
            <input name="price" onSubmit={handleSubmit} value={price * 100} />
          </p>
          <label>Short Description:</label>
          <p>
            <textarea
              name="shortDescription"
              onChange={handleChange}
              value={shortDescription}
            />
          </p>
          <label>Long Description:</label>
          <p>
            <textarea
              name="longDescription"
              onChange={handleChange}
              value={longDescription}
            />
          </p>
          <div className="admin-button-container">
            <div className="edit-cta">
              <button type="submit" className="single-add-to-cart">
                Submit
              </button>
            </div>
            <div className="edit-cta">
              <a href="/products">Cancel</a>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.product,
  };
};

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    editProduct: (product) => dispatch(fetchEditProduct(product, history)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProduct);
