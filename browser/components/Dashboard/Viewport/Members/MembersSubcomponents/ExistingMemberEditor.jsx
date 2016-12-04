import React, { Component } from 'react';
import axios from 'axios';

class ExistingMemberEditor extends Component {

  constructor(props) {
    super(props);

    this.state = {
      memberId: null,
      memberName: '',
      memberEmail: '',
      memberImgUrl: '',

      dataLoaded: false,
    }
  }

  componentDidMount(){
    // axios.get(`/userInfo/${this.memberId}`)
  }

  render() {

    const {currentMemberId, closeForm} = this.props;

    return(

      <div>
        <div className='pt-dialog-header'>
          <span className="pt-icon-large pt-icon-person"></span>
          <h5>Edit Member</h5>
          <button aria-label="Close"
                  className="pt-dialog-close-button pt-icon-small-cross"
                  onClick={() => closeForm()}></button>

        </div>

        <div className='pt-dialog-body'>

          Current Member ID: {currentMemberId}

        </div>
      </div>
    )
  }

};

export default ExistingMemberEditor;
