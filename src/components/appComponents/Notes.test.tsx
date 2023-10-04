import React from 'react';

import {render} from '@testing-library/react-native';
import FullMockComponent from '__mocks__/@components';
import renderer from 'react-test-renderer';

import Notes from './Notes';

describe('Notes Component', () => {
  const TestComponent = () => {
    return (
      <FullMockComponent>
        <Notes
          id="id-1"
          notes="Lorem"
          title="title"
          date="2023-10-20 22:30:25"
        />
      </FullMockComponent>
    );
  };

  test('Notes render correctly', () => {
    render(<TestComponent />);
  });

  test('Notes snapshot', () => {
    const wrapper = renderer.create(<TestComponent />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
