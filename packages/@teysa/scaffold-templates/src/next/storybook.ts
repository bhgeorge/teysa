// Global
import { TeysaCli } from '@teysa/cli-shared';

export const storybookTemplate: TeysaCli.Template<TeysaCli.TemplateArgs> = ({
  name,
  dir,
}) => `// Local
import ${name} from './${name}/${name}';

export default {
  title: '${dir.name}/${name}',
  component: ${name},
};

const Template = (props) => <${name} {...props} />;

export const Default = Template.bind({});
`;
