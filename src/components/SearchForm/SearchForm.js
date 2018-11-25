import React, { Component, Fragment } from 'react';
import {
  Form,
  Input,
  Col,
  Button,
  Select
} from 'antd';


import _ from 'lodash';
import SelectContainer from './SelectContainer';



//@TODO test it later with IDS instead of text at values

//@TODO update it with fetching data from server

//@TODO update for graphql work

const options = [
  { value: 'chocolate',  label: 'Chocolate'},
  { value: 'strawberry', label: 'Strawberry'},
  { value: 'vanilla',    label: 'Vanilla'  },
  { value: 'vanilla-ice',    label: 'Vanilla Ice'},
  { value: 'vanilla latte',    label: 'Vanilla Latte'},
  { value: 'vanilla Chino',    label: 'Vanilla Chino'},
  { value: 'vanilla double',    label: 'Vanilla Double' }
];



// @TODO this component can do better just by calling a different db queries for each of select.
// so it's not necessary to manipulate it in this way.

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
    // this.setState({ selectedOption2: values });

    this.setState({ selectedOption2: selected });
  }

 //  componentDidMount() {
 //   console.log('mount');
 // }


 componentDidUpdate(prevProps, prevState) {
   // console.log('update');




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
