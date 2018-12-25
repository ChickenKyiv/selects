import React, { Component, Fragment } from 'react';

import { GroupedElements } from '@groceristar/select-component';

// import GroupedElements from './GroupedElements';


class FormElementsLayout extends Component {

  constructor(props) {
    super(props);

    // this.state = {
    //   // name       : ( (props.flag) ? 'allowed' : 'excluded' ) + props.placeholder,
    //   name       : 'the_  name',
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

      const options = this.props.options;


      return (
        <GroupedElements type={false} options={options} />
      );

  }



};

export default FormElementsLayout;
// https://ant.design/components/select/#components-select-demo-select-users
// @TODO add tests so we cannot pass an empty array to options
