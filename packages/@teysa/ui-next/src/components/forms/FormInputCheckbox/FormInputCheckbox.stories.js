// Global
import { Formik } from 'formik';
// Local
import { FormInputCheckbox } from './FormInputCheckbox';

export default {
  title: 'Forms/FormInputCheckbox',
  component: FormInputCheckbox,
};

const Template = props => (
  <Formik onSubmit={() => {}} initialValues={{ teysa: '' }}>
    <FormInputCheckbox {...props} />
  </Formik>
);

export const Default = Template.bind({});
Default.args = {
  name: 'teysa',
  label: 'Teysa Karlov',
  type: 'checkbox',
  value: 'teysa',
};
