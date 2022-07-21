const nextComponent = ({ name }) => `// Global
import React from 'react';

interface ${name}Props {

}

export function ${name}({ }: ${name}Props) {
  return <></>;
}
`;

module.exports = nextComponent;
