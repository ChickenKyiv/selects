import React, { Component, Fragment } from 'react';

import { GroupedElements, ReactSelectWrapper } from '@groceristar/select-component';

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
    this.handleChange  = this.handleChange.bind(this);


  }

  handleChange(items) {
    console.log(items);
    // this.props.onChange(items)
  }


  render() {

      const options1 = this.props.options1;
      const options2 = this.props.options2;


      return (
        <Fragment>

          <GroupedElements type={false} options1={options1} options2={options2} />

          <hr />
          {/*
          <ReactSelectWrapper
            options={options}
            onChange={this.handleChange}
            value={options[0]}
            onBlur={this.handleChange}
            />
            */}
        </Fragment>

      );

  }



};

export default FormElementsLayout;

// https://ant.design/components/select/#components-select-demo-select-users
// @TODO add tests so we cannot pass an empty array to options
