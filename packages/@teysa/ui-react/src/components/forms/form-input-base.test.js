// Local
import { getDescribedBy, getErrorId, getHelpTextId, getInputClasses } from './form-input-base';

const ID = 'field_0';

const BORDER_ERROR_CLASS = 'border-theme-error';

describe('inputClasses', () => {
  it('sets an error border on error', () => {
    const classes = getInputClasses(true);
    expect(classes.includes(BORDER_ERROR_CLASS)).toBe(true);
  });

  it('does not set an error border by default', () => {
    const classes = getInputClasses(false);
    expect(classes.includes(BORDER_ERROR_CLASS)).toBe(false);
  });
});

describe('getDescribedBy', () => {
  it('returns null if there is no additional context', () => {
    const describedBy = getDescribedBy(ID);
    expect(describedBy).toBe(null);
  });

  it('returns an error id if there is an error', () => {
    const describedBy = getDescribedBy(ID, 'First name is required');
    expect(describedBy).toBe(getErrorId(ID));
  });

  it('returns a help text id if there is help text', () => {
    const describedBy = getDescribedBy(ID, undefined, 'Passwords must be 12 characters in length.');
    expect(describedBy).toBe(getHelpTextId(ID));
  });

  it('returns both if there are both', () => {
    const describedBy = getDescribedBy(
      ID,
      'First name is required',
      'Passwords must be 12 characters in length.'
    );
    expect(describedBy).toBe(`${getErrorId(ID)} ${getHelpTextId(ID)}`);
  });
});
