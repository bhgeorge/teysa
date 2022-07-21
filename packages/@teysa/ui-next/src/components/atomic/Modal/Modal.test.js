// Global
import { render } from '@testing-library/react';
// Local
import Modal from './Modal';

const createComponent = (props) => render(<Modal {...props} />);

it('renders correctly', () => {
  const component = createComponent({});
  expect(component.container.firstChild).toMatchSnapshot();
});
