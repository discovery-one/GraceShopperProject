import React from 'react';
import { fetchCreateProduct } from '../store/redux/products';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class CreateProduct extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      price: 0,
      shortDescription: '',
      longDescription: '',
      category: '',
      soldAs: '',
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
    this.props.createProduct({ ...this.state });
  }

  render() {
    const {
      name,
      price,
      shortDescription,
      longDescription,
      category,
      soldAs,
    } = this.state;
    const { handleSubmit, handleChange } = this;
    return (
      <div>
        <div className="admin-create-product-container">
          <h3>Create New Product</h3>
          <form id="createProduct" onSubmit={handleSubmit}>
            <label>Product Name:</label>
            <input name="name" onChange={handleChange} value={name} />
            <p>
              <label>Price:</label>
              <input name="price" onChange={handleChange} value={price} />
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
            <label>Category:</label>
            <select name="category" onChange={handleChange} value={category}>
              <option value="chooseOne">Choose One</option>
              <option value="cookies">Cookies</option>
              <option value="cake">Cake</option>
              <option value="confections">Confections</option>
            </select>
            <label>Sold As:</label>
            <select name="soldAs" onChange={handleChange} value={soldAs}>
              <option value="chooseOne">Choose One</option>
              <option value="bulk">By the dozen</option>
              <option value="singular">Singuar item</option>
            </select>
          </form>
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
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, { history }) => ({
  createProduct: (product) => dispatch(fetchCreateProduct(product, history)),
});

export default connect(null, mapDispatchToProps)(CreateProduct);
