// Global
import { render } from '@testing-library/react';
// Local
import FieldSet from './FieldSet';

const createComponent = (props) => render(<FieldSet {...props} />);

it('renders correctly', () => {
  const component = createComponent({});
  expect(component.container.firstChild).toMatchSnapshot();
});
