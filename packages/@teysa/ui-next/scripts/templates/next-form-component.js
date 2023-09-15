const nextComponent = ({ name }) => `// Global
import React from 'react';
// Local
import { FormInputBase } from '../form-input-base';
import { FormInputWrapper } from '../FormInputWrapper/FormInputWrapper';

interface ${name}Props extends FormInputBase {
  
}

export function ${name}({}: ${name}Props) {
  return <></>;
}
`;

module.exports = nextComponent;
