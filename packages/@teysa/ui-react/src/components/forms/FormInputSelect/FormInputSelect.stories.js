// Global
import { Formik } from 'formik';
// Local
import FormInputSelect from './FormInputSelect';

export default {
  title: 'Forms/FormInputSelect',
  component: FormInputSelect,
};

const Template = (props) => (
  <Formik onSubmit={() => {}} initialValues={{ format: '' }}>
    <FormInputSelect {...props} />
  </Formik>
);

export const Default = Template.bind({});
Default.args = {
  name: 'format',
  label: 'Format',
  options: [
    { name: 'Commander', value: 'commander' },
    { name: 'Modern', value: 'modern' },
    { name: 'Explorer', value: 'explorer' },
  ],
};
