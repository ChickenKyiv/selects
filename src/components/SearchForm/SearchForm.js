import React, { Component, Fragment } from 'react';
import {
  Form,
  Input,
  Col,
  Button,
  Select
} from 'antd';

// import Select from 'react-select';
// import Animated from 'react-select/lib/animated';
import _ from 'lodash';
import SelectContainer from './SelectContainer';
// import _ from 'underscore';


//@TODO test it later with IDS instead of text at values
const options = [
  { value: 'chocolate',  label: 'Chocolate'},
  { value: 'strawberry', label: 'Strawberry'},
  { value: 'vanilla',    label: 'Vanilla'  },
  { value: 'vanilla-ice',    label: 'Vanilla Ice'},
  { value: 'vanilla latte',    label: 'Vanilla Latte'},
  { value: 'vanilla Chino',    label: 'Vanilla Chino'},
  { value: 'vanilla double',    label: 'Vanilla Double' }
];

// const options = [
//   { value: 'chocolate',  label: 'Chocolate',  isDisabled: true },
//   { value: 'strawberry', label: 'Strawberry', isDisabled: false },
//   { value: 'vanilla',    label: 'Vanilla',    isDisabled: false },
//   { value: 'vanilla-ice',    label: 'Vanilla Ice',    isDisabled: false },
//   { value: 'vanilla latte',    label: 'Vanilla Latte',    isDisabled: false },
//   { value: 'vanilla Chino',    label: 'Vanilla Chino',    isDisabled: false },
//   { value: 'vanilla double',    label: 'Vanilla Double',    isDisabled: false }
// ];

class SearchForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      selectedOption1: [],
      selectedOption2: [],

      options1: options,
      options2: options
    }

    this.handleChange2       = this.handleChange2.bind(this);
    this.handleChange1       = this.handleChange1.bind(this);

    this.proceedDisabledOptions = this.proceedDisabledOptions.bind(this);

    //@TODO move options array into a top of the search form. so we can pass it from one source.
    // from parent component into child component
  }

  handleChange1 = (selected) => {

    // _.map((options),(item) => {
    //
    //   // console.log(item)
    //   item.isDisabled = true;
    // });
    // really bored, and making names badly. @TODO change it, ple A se
    var clone_of_state_2 = this.state.options2;

    // _.map(selected, (item) => {
    //   // console.log(item);
    //   var option = _.find(clone_of_state_2, { 'value': item });
    //   console.log(option);
    //
    //
    // })
    //   console.log(options)

      // console.log(clone_of_state_2['value'][selected[0]]);
      var kle = _.map(clone_of_state_2, (item) => {

        console.log( _.find(selected, item.value) )  
        // _.mapValues(item, val => {
        //   console.log(val);
        // })
      })



    // var values = [];
    // _.map(options,(item) => {
    //   values.push({ 'value': item.value, 'label': item.label });
    // })
    // console.log(values)
    //

    this.setState({ selectedOption1: selected });
    // console.log(`Option selected:`, options);
  }

  handleChange2 = (options) => {

    // this.setState({ selectedOption2: values });

    this.setState({ selectedOption2: options });
    // console.log(`Option selected:`, options);
  }

  componentDidMount() {
   console.log('mount');
 }

 proceedDisabledOptions() {

   const { selectedOption1, selectedOption2, options1 } = this.state;


   // console.log(selectedOption1)
   // console.log(selectedOption2)


   _.map((options1),(item) => {

     // console.log(item)
     item.isDisabled = true;
   });

   console.log(options1);
 }

 componentDidUpdate(prevProps, prevState) {
   console.log('update');

   // this.proceedDisabledOptions() ;


 }

 // <SelectContainer options={options} onChange={this.handleChange1} />
 // <SelectContainer options={options} onChange={this.handleChange2} />

  render(){
    const  selectedOption1  = this.state.selectedOption1;
    const  selectedOption2  = this.state.selectedOption2;

    const { options1, options2 } = this.state;
    // const  = this.state.option2;

    // console.log(options1, options2);

    return (
      <Fragment>
        <Form onSubmit={this.handleSubmit}>

            <SelectContainer
              options={options1}
              onChange={this.handleChange1} />

            <SelectContainer
              options={options2}
              onChange={this.handleChange2} />

        </Form>

        <div>
          One - {this.state.selectedOption1}
        </div>
        <div>
          Two - {this.state.selectedOption2}
        </div>


      </Fragment>
    )
  }

}
export default SearchForm;
