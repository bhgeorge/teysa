// Global
import * as Formik from 'formik';
// Local
import { FormInputDatepicker } from './FormInputDatepicker';

export default {
  title: 'Forms/FormInputDatepicker',
  component: FormInputDatepicker,
};

const Template = props => (
  <Formik.Formik onSubmit={() => {}} initialValues={{ format: '' }}>
    <FormInputDatepicker {...props} />
  </Formik.Formik>
);

export const Default = Template.bind({});
Default.args = {
  name: 'date',
  label: 'Date',
};
