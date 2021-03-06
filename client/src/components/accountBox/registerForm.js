import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Select from "react-select";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import { withRouter } from 'react-router-dom';
import { Marginer } from '../marginer'
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from './common'

class RegisterForm extends Component {
    constructor() {
        super();
        this.state = {
          first_name: "",
          last_name: "",
          username: "",
          email: "",
          password: "",
          password2: "",
          phone: "",
          address: "",
          post_code: "",
          city: "",
          province: "",
          user_type: "",
          dateOfBirth: "",
          profilePicture: "",
          gender: "",
          service_description: "",
          languages: [],
          documents: [],
          errors: {}
      };
      }
      componentDidMount() {
        // If logged in and user navigates to Register page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
          this.props.history.push("/profile");
        }
      }
      componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
          this.setState({
            errors: nextProps.errors
          });
        }
      }
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
      };
    onSubmit = e => {
        e.preventDefault();
        const newUser = this.state.user_type === 'instructor' ? {
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          username: this.state.username,
          email: this.state.email,
          password: this.state.password,
          password2: this.state.password2,
          phone: this.state.phone,
          address: this.state.address,
          post_code: this.state.post_code,
          city: this.state.city,
          province: this.state.province,
          user_type: this.state.user_type,
          dateOfBirth: this.state.dateOfBirth,
          profilePicture: this.state.profilePicture,
          gender: this.state.gender,
          service_description: this.state.service_description,
          languages: this.state.languages,
          documents: this.state.documents,
      } : {
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          username: this.state.username,
          email: this.state.email,
          password: this.state.password,
          password2: this.state.password2,
          phone: this.state.phone,
          address: this.state.address,
          post_code: this.state.post_code,
          city: this.state.city,
          dateOfBirth: this.state.dateOfBirth,
          province: this.state.province,
          user_type: this.state.user_type
      };
        this.props.registerUser(newUser, this.props.history); 
      };
    render() {
        const { errors } = this.state;
    return <BoxContainer>
        <FormContainer noValidate onSubmit={this.onSubmit}>
            <Input 
                  onChange={this.onChange}
                  value={this.state.first_name}
                  error={errors.first_name}
                  id="first_name"
                  type="text"
                  placeholder="First Name" 
                  className={classnames("", {
                    invalid: errors.first_name
                  })}

            />
            <Input 
                  onChange={this.onChange}
                  value={this.state.last_name}
                  error={errors.last_name}
                  id="last_name"
                  type="text"
                  placeholder="Last Name" 
                  className={classnames("", {
                    invalid: errors.last_name
                  })}
            />
            <Input 
                  onChange={this.onChange}
                  value={this.state.username}
                  error={errors.username}
                  id="username"
                  type="text"
                  placeholder="Username" 
                  className={classnames("", {
                    invalid: errors.username
                  })}
            />
            <Input 
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  placeholder="Email" 
                  className={classnames("", {
                    invalid: errors.email
                  })}
            />
            <Input 
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  placeholder="Password" 
                  className={classnames("", {
                    invalid: errors.password
                  })}
            />
            <Input 
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  type="password"
                  placeholder="Confirm Password" 
                  className={classnames("", {
                    invalid: errors.password2
                  })}
            />
            <Input 
                  onChange={this.onChange}
                  value={this.state.phone}
                  error={errors.phone}
                  id="phone"
                  type="text"
                  placeholder="Phone Number" 
                  className={classnames("", {
                    invalid: errors.phone
                  })}
            />
            <Input 
                  onChange={this.onChange}
                  value={this.state.address}
                  error={errors.address}
                  id="address"
                  type="text"
                  placeholder="Address" 
                  className={classnames("", {
                    invalid: errors.address
                  })}
            />
            <Input 
                  onChange={this.onChange}
                  value={this.state.city}
                  error={errors.city}
                  id="city"
                  type="text"
                  placeholder="City" 
                  className={classnames("", {
                    invalid: errors.city
                  })}
            />
            <Input 
                  onChange={this.onChange}
                  value={this.state.province}
                  error={errors.province}
                  id="province"
                  type="text"
                  placeholder="Province" 
                  className={classnames("", {
                    invalid: errors.province
                  })}
            />  
            <Input 
                  onChange={this.onChange}
                  value={this.state.post_code}
                  error={errors.post_code}
                  id="post_code"
                  type="text"
                  placeholder="Postal Code" 
                  className={classnames("", {
                    invalid: errors.post_code
                  })}
            /> 
            <Input
              type="date"
              onChange={this.onChange}
              value={this.state.dateOfBirth}
              error={errors.dateOfBirth}
              id="dateOfBirth"
              placeholder="Date of birth" 
              className={classnames("", {
                invalid: errors.dateOfBirth
              })}
            />
            <Select 
              onChange={(e)=>{this.setState({gender: e.value})}}
              error={errors.gender}
              id="gender"
              type="text"
              placeholder="Gender" 
              clearable={false}
              options={[
                { value: 'Male', label: 'Male' },
                { value: 'Female', label: 'Female' },
                { value: 'Rather not say', label: 'Rather not say' },
              ]}
              className={classnames("", {
                invalid: errors.gender
              })}
            />
            <Select 
                  onChange={(e)=>{this.setState({user_type: e.value})}}
                  error={errors.user_type}
                  id="user_type"
                  type="text"
                  placeholder="User Type" 
                  clearable={false}
                  options={[
                    { value: 'license', label: 'License Applicant' },
                    { value: 'instructor', label: 'Instructor Applicant' }
                  ]}
                  className={classnames("", {
                    invalid: errors.user_type
                  })}
             /> 
             
             {this.state.user_type === "instructor" ? 
             [
             
            <Input 
              onChange={this.onChange}
              value={this.state.service_description}
              error={errors.service_description}
              id="service_description"
              type="text"
              placeholder="Service Description" 
              className={classnames("", {
                invalid: errors.service_description
              })}
            /> 
    ]
             : null}
        <Marginer direction="vertical" margin={20} />
        <SubmitButton type="submit">Sign-up</SubmitButton>
        <Marginer direction="vertical" margin="1em" />
        <MutedLink href="#">Already have an account? <BoldLink href="/customer/access/signin">Sign-in</BoldLink></MutedLink>
        </FormContainer>
    </BoxContainer>
    }
}

RegisterForm.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });
  export default withRouter(connect(
    mapStateToProps,
    { registerUser }
  )(RegisterForm));