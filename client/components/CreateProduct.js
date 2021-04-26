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
        <button type="submit">Submit</button>
        <Link to="/">Cancel</Link>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch, { history }) => ({
  createProduct: (product) => dispatch(fetchCreateProduct(product, history)),
});

export default connect(null, mapDispatchToProps)(CreateProduct);
