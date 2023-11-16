// Local
import * as Formik from 'formik';
import { FieldSet } from './FieldSet';

export default {
  title: 'Forms/FieldSet',
  component: FieldSet,
};

const Template = props => (
  <Formik.Formik onSubmit={() => {}} initialValues={{ teysa: '' }}>
    <FieldSet {...props} />
  </Formik.Formik>
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
