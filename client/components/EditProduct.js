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
      <form id="editProduct" onSubmit={handleSubmit}>
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
        <button type="submit">Submit</button>
        <Link to="/products">Cancel</Link>
      </form>
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
