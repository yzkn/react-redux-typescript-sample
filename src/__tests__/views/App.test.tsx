import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../views/App';

Enzyme.configure({ adapter: new Adapter() });

describe('Appコンポーネント', () => {
  it('エラーなく初期表示されること', () => {
    const wrapper = shallow(<App />);
  });
  it('ボタンクリック時にプロパティが呼ばれること', () => {
    const mock = jest.fn();
    const wrapper = shallow(<App fetchAdvice={mock} />);
    wrapper.find('button.adviceButton').simulate('click');
    expect(mock).toBeCalled();
  });
});
