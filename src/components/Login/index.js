import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useFormik } from "formik";
import { bindActionCreators } from "redux";
import { Creators as AuthActions } from "../../store/ducks/authSauce";

function Login(props) {
  useEffect(() => {
    if (props.token) props.history.push("/");
  }, [props.token]);

  const { getFieldProps, handleSubmit } = useFormik({
    initialValues: {
      email: "brunorossini@live.com",
      password: "123456"
    },
    validate: values => {
      const err = {};
      const message = "Campo obrigatório";
      if (!values.email) err.email = message;
      if (!values.password) err.password = message;
      return err;
    },
    onSubmit: (values, bag) => {
      // console.log(values);
      props.loginRequest(values);
    }
  });

  const [email, metadataEmail] = getFieldProps("email", "text");
  const [password, metadataPassword] = getFieldProps("password", "text");

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="E-mail" {...email} />
      <input placeholder="Password" type="password" {...password} />
      <button>Enviar</button>
    </form>
  );
}

const mapStateToProps = state => ({
  loading: state.authState.loading,
  token: state.authState.token
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(AuthActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
