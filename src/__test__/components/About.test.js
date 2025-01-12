import React from 'react';
import { shallow } from 'enzyme';
import About from '../../components/About';
import db from '../../../data.json';

describe('<About />', () => {
  const about = shallow(<About data={db.data} />);

  test('About render', () => {
    expect(about.length).toEqual(1);
  });

  test('About title', () => {
    expect(about.find('.About-title').length).toEqual(1);
  });

  test('About has 3 items', () => {
    expect(about.find('.About-item').length).toBeGreaterThan(2);
  });

});
