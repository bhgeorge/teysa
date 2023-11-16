// Local
import { SearchInput } from './SearchInput';

export default {
  title: 'Atomic/SearchInput',
  component: SearchInput,
};

const TOKENS = ['Demon', 'Spirit', 'Human', 'Skeleton', 'Treasure', 'Zombie'];

const Template = props => {
  const [suggestions, setSuggestions] = React.useState([]);

  const onSearch = query => {
    if (!query) {
      setSuggestions([]);
      return;
    }

    const res = [];

    for (let i = 0; i < TOKENS.length; i++) {
      const token = TOKENS[i];
      if (token.startsWith(query)) {
        res.push({ name: token, id: token });
      }
    }

    setSuggestions(res);
  };

  const onSelectSuggestion = s => {
    // TODO: Something;
    setSuggestions([]);
  };

  return (
    <SearchInput
      {...props}
      onSearch={onSearch}
      onSelectSuggestion={onSelectSuggestion}
      suggestions={suggestions}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'Tokens',
  placeholder: 'Spirit, Treasure, Zombie',
};
