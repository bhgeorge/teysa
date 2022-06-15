// Global
import { Formik } from 'formik';
// Local
import FormInputText from './FormInputText';

export default {
  title: 'Forms/FormInputText',
  component: FormInputText,
};

const Template = (props) => (
  <Formik onSubmit={() => {}} initialValues={{ firstName: '' }}>
    <FormInputText {...props} />
  </Formik>
);

export const Default = Template.bind({});
Default.args = {
  name: 'firstName',
  label: 'First name',
  placeholder: 'Teysa',
};
