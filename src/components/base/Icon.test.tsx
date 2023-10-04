import React from 'react';

import {render} from '@testing-library/react-native';
import FullMockComponent from '__mocks__/@components';
import renderer from 'react-test-renderer';

import {Icon} from './Icon';
describe('Icon Component', () => {
  const TestComponent = () => {
    return (
      <FullMockComponent>
        <Icon name="home" />
      </FullMockComponent>
    );
  };

  test('Icon render correctly', () => {
    render(<TestComponent />);
  });

  test('Icon snapshot', () => {
    const wrapper = renderer.create(<TestComponent />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
