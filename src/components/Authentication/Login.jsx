import React from "react";
import { Div } from "glamorous";
import { LocalForm } from "react-redux-form";
import { Auth } from "aws-amplify";
import Input from "../form/Input";

import Button from "../form/Button";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmit = async form => {
    this.setState({ loading: true });
    const {
      authProps: { userHasAuthenticated }
    } = this.props;
    try {
      await Auth.signIn(form.user, form.pass);
      userHasAuthenticated(true);
      this.setState({ loading: false });

      this.props.history.push("/home");
    } catch (e) {
      userHasAuthenticated(false);
      this.setState({ loading: false });
    }
  };

  render() {
    const { loading } = this.state;
    return (
      <Div
        display="flex"
        minHeight="100%"
        height="100%"
        alignSelf="center"
        alignContent="center"
        justifyContent="center"
        width={400}
        marginTop={100}
        alignItems="stretch"
      >
        <Div>Login</Div>
        <LocalForm onSubmit={values => this.handleSubmit(values)}>
          <Input label="Username" model=".user" />
          <Input label="Password" type="password" model=".pass" />
          <Button
            type="submit"
            loading={loading}
            loadingText="Logging in..."
            text="Submit"
          />
        </LocalForm>
      </Div>
    );
  }
}

export default Login;
