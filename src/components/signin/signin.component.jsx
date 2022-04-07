import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

// css
import "./signin.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefaults();
    this.setState({ email: "", password: "" });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="signin">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            type="email"
            name="email"
            required
          />
          <FormInput
            handleChange={this.handleChange}
            value={this.state.password}
            type="password"
            name="password"
            label="Password"
            required
          />

          {/* submit */}
          <CustomButton type="submit"> Sign In</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
