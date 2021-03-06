import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, {shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { SearchForm } from '../component/SearchForm/SearchForm';

Enzyme.configure({ adapter: new Adapter() });

describe('<SearchForm />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Attribute />, div);
    });
});
