import React, { Component, Fragment } from 'react';

class Debug extends Component {

  constructor(props) {
    super(props);

    // this.state = {
    //   // name       : ( (props.flag) ? 'allowed' : 'excluded' ) + props.placeholder,
    //   name       : 'the_name',
    //   placeholder: props.placeholder
    // }
    // // console.log(props.placeholder)
    // this.handleChange  = this.handleChange.bind(this);


  }

  // handleChange(items) {
  //   // console.log(items);
  //   this.props.onChange(items)
  // }


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
        <Fragment />
      );

  }



};

export default Debug;
