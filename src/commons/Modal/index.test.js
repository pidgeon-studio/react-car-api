import React from 'react';
import Modal from './';
import renderer from 'react-test-renderer';

it('Modal renders correctly', () => {
  const tree = renderer
    .create(<Modal isOpen={true} title="Modal title" close={() => {}}>
      <p key="body">Body content</p>
      <button key="submit">Submit</button>
      <button key="close">Close</button>
    </Modal>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});