// Storybook
import ContentMock from '../../../../.storybook/components/ContentMock';
// Local
import { VerticalGroup } from './VerticalGroup';

export default {
  title: 'Layout/VerticalGroup',
  component: VerticalGroup,
};

const Template = props => (
  <VerticalGroup {...props}>
    {[0, 1, 2].map(i => (
      <ContentMock key={i} />
    ))}
  </VerticalGroup>
);

export const Default = Template.bind({});
