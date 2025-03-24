import { Component } from "react";
import { GlobalStyle } from "../Material/GlobalStyle";
import { LoginForm } from "./LoginForm";
import { ProductReviewForm } from "./ProductReviewForm/ProductReviewForm";

export class FormsWithFormik extends Component {
  render() {
    return (
      <>
        {/* <LoginForm /> */}
        <ProductReviewForm />
      </>
    );
  }
}
