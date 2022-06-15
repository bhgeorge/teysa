// Global
import { Formik } from 'formik';
// Local
import FormInputDatepicker from './FormInputDatepicker';

export default {
  title: 'Forms/FormInputDatepicker',
  component: FormInputDatepicker,
};

const Template = (props) => (
  <Formik onSubmit={() => {}} initialValues={{ format: '' }}>
    <FormInputDatepicker {...props} />
  </Formik>
);

export const Default = Template.bind({});
Default.args = {
  name: 'date',
  label: 'Date',
};
