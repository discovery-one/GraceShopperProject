import React from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../store/redux/products";
import { Link } from "react-router-dom";
import {
  getCart,
  addToCart,
  emptyCart,
  checkoutCartThunk,
} from "../store/redux/cart";
import EditCart from "./EditCart.js";

class AllProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderStatus: "products",
    };
    this.addToMyCart = this.addToMyCart.bind(this);
    this.editCart = this.editCart.bind(this);
    this.changeStatus = this.changeStatus(this);
    this.checkoutCartHandler = this.checkoutCartHandler.bind(this);
  }
  componentDidMount() {
    this.props.loadProducts();
    this.props.emptyCart();
  }

  changeStatus(cartItems, qty) {
    for (let i = 0; i < cartItems.length; i++) {
      let newObj = {
        product: cartItems[i],
        quantity: qty[i],
      };
      this.props.addToCart(newObj, 1);
    }
    this.setState({ orderStatus: "products" });
  }

  addToMyCart(product) {
    this.props.addToCart({
      product: product,
      quantity: 1,
    });
    this.props.getCart();
  }

  editToMyCart(product) {
    this.props.edit;
  }

  editCart() {
    this.setState({ orderStatus: "cart" });
  }
  checkoutCartHandler() {
    this.props.checkoutCart(this.props.cart, 2);
    this.setState({ orderStatus: "products" });
    this.props.emptyCart();
  }

  render() {
    const products = this.props.products;
    console.log(products);
    if (this.state.orderStatus === "products") {
      return (
        <div>
          <h1>Shop All Galaxy Sweets</h1>
          <button type="button" onClick={() => this.editCart()}>
            Visit Cart
          </button>
          <ul className="all-product-view">
            {products.map((product) => {
              return (
                <div key={product.id} className="all-products">
                  <a
                    href={`/products/${product.id}`}
                    className="all-product-card"
                  >
                    <div>
                      <img
                        className="all-product-image"
                        src={product.imageUrl}
                      />
                      <h4 className="all-product-name">{product.name}</h4>

                      <p className="all-product-desc">
                        {product.shortDescription}
                      </p>
                      {product.soldAs === "bulk" ? (
                        <div className="all-product-price">
                          ${product.price / 100} per dozen
                        </div>
                      ) : (
                        <div className="all-product-price">
                          ${product.price / 100}
                        </div>
                      )}
                    </div>
                  </a>
                  <div className="all-button-container">
                    <button
                      type="button"
                      onClick={() => this.addToMyCart(product)}
                      className="all-add-to-cart"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </ul>
        </div>
      );
    } else {
      console.log("Cart rendering.");
      return (
        <div>
          <EditCart
            cart={this.props.cart}
            checkout={this.checkoutCartHandler}
          />
        </div>
      );
    }
  }
}
const mapStateToProps = (state) => ({
  products: state.products,
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) => ({
  loadProducts: () => dispatch(fetchProducts()),
  getCart: () => dispatch(getCart()),
  emptyCart: () => dispatch(emptyCart()),
  addToCart: (cartItem) => dispatch(addToCart(cartItem)),
  checkoutCart: (cart, userId) => dispatch(checkoutCartThunk(cart, userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts);
