// Local
import { Formik } from 'formik';
import { FieldSet } from './FieldSet';

export default {
  title: 'Forms/FieldSet',
  component: FieldSet,
};

const Template = props => (
  <Formik onSubmit={() => {}} initialValues={{ teysa: '' }}>
    <FieldSet {...props} />
  </Formik>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Teysa',
  name: 'teysa',
  type: 'radio',
  options: [
    { value: 'karlov', label: 'Karlov' },
    { value: 'envoy', label: 'Envoy of Ghosts' },
    { value: 'scion', label: 'Orzhov Scion' },
  ],
};
