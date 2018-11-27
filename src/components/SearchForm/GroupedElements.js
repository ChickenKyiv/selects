import React, { Component, Fragment } from 'react';
import Debug from './Debug';

import SelectContainer from './SelectContainer';

class GroupedElements extends Component {

  constructor(props) {
    super(props);


    this.state = {
      selectedOption1: [],
      selectedOption2: [],

      options1: options,
      options2: options
    }

    this.handleChange2       = this.handleChange2.bind(this);
    this.handleChange1       = this.handleChange1.bind(this);



  }
  //
  // handleChange(items) {
  //   // console.log(items);
  //   this.props.onChange(items)
  // }


  handleChange1 = (selected) => {

    // really bored, and making names badly. @TODO change it, ple A se
    var clone_of_state_2 = this.state.options2;


      var kle = _.map(clone_of_state_2, (item) => {

        console.log( selected.includes(item.value) )
        if( selected.includes(item.value) ){
          item.isDisabled = true;
        }
      })


    this.setState({ selectedOption1: selected });

  }

  handleChange2 = (selected) => {

    var clone_of_state_1 = this.state.options1;

    var kle = _.map(clone_of_state_1, (item) => {

      console.log( selected.includes(item.value) )
      if( selected.includes(item.value) ){
        item.isDisabled = true;
      }

    })


    this.setState({ selectedOption2: selected });
  }

  render() {

      // const options = this.props.options;
      const  selectedOption1  = this.state.selectedOption1;
      const  selectedOption2  = this.state.selectedOption2;

      const { options1, options2 } = this.state;

      return (
        <Fragment>
          <SelectContainer
            options={options1}
            onChange={this.handleChange1} />

          <SelectContainer
            options={options2}
            onChange={this.handleChange2} />

          <Debug a={this.state.selectedOption1} b={this.state.selectedOption2} />
        </Fragment>
      );

  }



};

export default GroupedElements;
