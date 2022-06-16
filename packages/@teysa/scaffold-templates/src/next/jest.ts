// Global
import type { TeysaCli } from '@teysa/cli-shared';

export const testTemplate: TeysaCli.Template<TeysaCli.TemplateArgs> = ({
  name,
}) => `// Global
import { render } from '@testing-library/react';
// Local
import ${name} from './${name}/${name}';

const createComponent = (props) => render(<${name} {...props} />);

it('renders correctly', () => {
  const component = createComponent({});
  expect(component.container.firstChild).toMatchSnapshot();
});
`;
