// Storybook
import ContentMock from '../../../../.storybook/components/ContentMock';
// Local
import { Container } from './Container';

export default {
  title: 'Layout/Container',
  component: Container,
};

const Template = props => (
  <Container {...props}>
    <ContentMock />
  </Container>
);

export const Default = Template.bind({});
