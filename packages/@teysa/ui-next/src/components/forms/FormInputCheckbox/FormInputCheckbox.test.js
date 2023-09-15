// Global
import { render } from '@testing-library/react';
// Local
import FormInputCheckbox from './FormInputCheckbox';

const createComponent = (props) => render(<FormInputCheckbox {...props} />);

it('renders correctly', () => {
  const component = createComponent({});
  expect(component.container.firstChild).toMatchSnapshot();
});
