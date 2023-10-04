import React from 'react';

import {render} from '@testing-library/react-native';
import FullMockComponent from '__mocks__/@components';
import renderer from 'react-test-renderer';

import AppScreen from './AppScreen';
describe('AppScreen Component', () => {
  const TestComponent = () => {
    return (
      <FullMockComponent>
        <AppScreen />
      </FullMockComponent>
    );
  };

  test('AppScreen render correctly', () => {
    render(<TestComponent />);
  });

  test('AppScreen snapshot', () => {
    const wrapper = renderer.create(<TestComponent />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
