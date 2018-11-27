
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
        // <Select mode="multiple"
        //         style={{ width: '100%' }}
        //         onChange={this.handleChange}
        //         placeholder={this.state.placeholder}>
        //       {OptionsList(options)}
        // </Select>
      );

  }



};

export default SelectContainer;
// https://ant.design/components/select/#components-select-demo-select-users
// @TODO add tests so we cannot pass an empty array to options
