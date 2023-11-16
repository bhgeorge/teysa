// Global
import * as Formik from 'formik';
import * as Yup from 'yup';
// Local
import { FormInputText } from './FormInputText';

export default {
  title: 'Forms/FormInputText',
  component: FormInputText,
};

const FormSchema = Yup.object().shape({
  firstName: Yup.string().required('This field is required'),
});

const Template = props => (
  <Formik.Formik
    onSubmit={() => {}}
    initialValues={{ firstName: '' }}
    validationSchema={FormSchema}
  >
    <FormInputText {...props} />
  </Formik.Formik>
);

export const Default = Template.bind({});
Default.args = {
  name: 'firstName',
  label: 'First name',
  placeholder: 'Teysa',
  id: 'first-name',
  required: true,
};
