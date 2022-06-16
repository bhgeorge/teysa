// Global
import { TeysaCli } from '@teysa/cli-shared';

export const componentTemplate: TeysaCli.Template<TeysaCli.TemplateArgs> = ({
  name,
}) => `
interface ${name}Props {

}

const ${name} = ({}: ${name}Props) => {
  return <></>;
};

export default ${name};
`;
