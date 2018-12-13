import React, { Component, Fragment } from 'react';

class Debug extends Component {

  render() {

      // const options = this.props.options;


      return (
        <Fragment>
          <div>
            One - {this.props.a}
          </div>
          <div>
            Two - {this.props.b}
          </div>
        </Fragment>
      );

  }



};

export default Debug;
