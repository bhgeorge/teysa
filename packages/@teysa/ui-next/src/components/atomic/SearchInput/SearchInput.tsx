// Global
import classNames from 'classnames';
import React, { useRef } from 'react';
import { getInputClasses } from '../../forms/form-input-base';
import { clamp } from '../../../utils/clamp';

type SearchSuggestion = {
  name: string;
  id: string;
};

type SearchInputProps = {
  label: string;
  /**
   * Callback to be run when a query is updated
   *
   * This is not throttled or debounced
   */
  onSearch: (query: string) => void;
  /**
   * Runs on user selection of a `suggestion`
   */
  onSelectSuggestion?: (suggestion: SearchSuggestion) => void;
  placeholder?: string;
  /**
   * Suggested queries or items for a user to select
   */
  suggestions?: SearchSuggestion[];
};

export function SearchInput({
  label,
  onSearch,
  onSelectSuggestion,
  placeholder,
  suggestions,
}: SearchInputProps) {
  const id = React.useId();

  const inputEl = useRef<HTMLInputElement>(null);

  const [query, setQuery] = React.useState<string>('');
  const [sIndex, setSIndex] = React.useState<number>(NaN);

  const handleSelectSuggestion = (s: SearchSuggestion) => {
    if (onSelectSuggestion) {
      onSelectSuggestion(s);
      setQuery('');
      setSIndex(NaN);

      if (inputEl.current) {
        inputEl.current.focus();
      }
    }
  };

  const handleKeydown: React.KeyboardEventHandler<HTMLInputElement> = e => {
    if (!suggestions) {
      return;
    }

    const moveSIndex = (dir: 1 | -1) => {
      if (isNaN(sIndex)) {
        setSIndex(0);
        return;
      }
      setSIndex(clamp(sIndex + dir, 0, suggestions.length - 1));
    };

    const keyActions: Record<string, () => void> = {
      ArrowUp: () => {
        moveSIndex(-1);
      },
      ArrowDown: () => {
        moveSIndex(1);
      },
      Enter: () => {
        const s = suggestions[sIndex];
        if (s) {
          handleSelectSuggestion(s);
        }
      },
    };

    const act = keyActions[e.key];
    if (act) {
      e.preventDefault();
      act();
    }
  };

  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = e => {
    const val = e.target.value;

    setQuery(val);
    onSearch(val);
  };

  const hasNoSuggestions = !suggestions || suggestions.length === 0;

  return (
    <div className="relative">
      <label htmlFor={id}>{label}</label>
      <input
        className={getInputClasses(false)}
        id={id}
        name="search"
        onChange={handleSearch}
        onKeyDown={handleKeydown}
        placeholder={placeholder}
        ref={inputEl}
        type="search"
        value={query}
      />
      <ul
        className={classNames(
          'absolute',
          'border',
          'border-theme-text-alt',
          'left-0',
          'right-0',
          'top-full',
          {
            hidden: hasNoSuggestions,
          }
        )}
      >
        {suggestions?.map((s, i) => (
          <li key={s.id}>
            <button
              className={classNames(
                'bg-theme-bg-alt',
                'hover:bg-theme-bg',
                'hover:text-theme-text',
                'p-2',
                'text-left',
                'w-full',
                {
                  [classNames('bg-theme-interact', 'text-theme-bg')]:
                    i === sIndex,
                }
              )}
              type="button"
              onClick={() => {
                handleSelectSuggestion(s);
              }}
            >
              {s.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
