import React, { Component } from 'react';
import { connect } from 'react-redux';

import Profile from '../../../../components/Home/Student/Profile';

class ProfileContainer extends Component {
  state = {
    firstName: this.props.user.firstName,
    lastName: this.props.user.lastName,
    phone: this.props.user.phone,
    address: this.props.user.address,
    coverLetter : this.props.user.coverLetter,
    gender : this.props.user.gender,
  };

  render() {
    const { firstName, lastName, phone,address,coverLetter,gender } = this.state;

    return <Profile firstName={firstName} lastName={lastName} phone={phone}  address={address} coverLetter= {coverLetter} gender={gender}
   />;
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps)(ProfileContainer);
