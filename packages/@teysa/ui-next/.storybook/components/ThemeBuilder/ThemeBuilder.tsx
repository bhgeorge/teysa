// Components
import { Container } from '../../../src/components/layout/Container/Container';
import { VerticalGroup } from '../../../src/components/layout/VerticalGroup/VerticalGroup';
import { Heading } from '../../../src/components/atomic/Heading/Heading';
import { Button } from '../../../src/components/atomic/Button/Button';
import { Chip } from '../../../src/components/atomic/Chip/Chip';
import { Link } from '../../../src/components/atomic/Link/Link';
import { Toast } from '../../../src/components/atomic/Toast/Toast';

type ThemeVarKey =
  | 'text'
  | 'text_alt'
  | 'bg'
  | 'bg_alt'
  | 'error'
  | 'success'
  | 'warning'
  | 'interact'
  | 'interact_hover';
type Hex = string;
type RGB = { r: number; g: number; b: number };
type ContrastCheck = {
  key: ThemeVarKey;
  ratio: 3 | 4.5;
};
type TestFailureDisplay = {
  key: ThemeVarKey;
  contrast: number;
};

// Only write in tests for text -> bg, no need to double up
const contrastTestMap: Record<ThemeVarKey, ContrastCheck[]> = {
  text: [
    { key: 'bg', ratio: 4.5 },
    { key: 'bg_alt', ratio: 4.5 },
  ],
  text_alt: [
    { key: 'bg', ratio: 4.5 },
    { key: 'bg_alt', ratio: 4.5 },
  ],
  bg: [],
  bg_alt: [],
  error: [
    { key: 'bg', ratio: 3 },
    { key: 'bg_alt', ratio: 3 },
  ],
  success: [
    { key: 'bg', ratio: 3 },
    { key: 'bg_alt', ratio: 3 },
  ],
  warning: [
    { key: 'bg', ratio: 3 },
    { key: 'bg_alt', ratio: 3 },
  ],
  interact: [
    { key: 'bg', ratio: 4.5 },
    { key: 'bg_alt', ratio: 4.5 },
  ],
  interact_hover: [
    { key: 'bg', ratio: 4.5 },
    { key: 'bg_alt', ratio: 4.5 },
  ],
};

const hexToRGB = (hex: Hex): RGB => {
  const res = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  if (!res) {
    return { r: 0, g: 0, b: 0 };
  }

  return {
    r: parseInt(res[1], 16),
    g: parseInt(res[2], 16),
    b: parseInt(res[3], 16),
  };
};

const getLuminance = ({ r, g, b }: RGB) => {
  const a = [r, g, b].map(function(v) {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });

  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
};

const ThemeBuilder = (themeVars: Record<ThemeVarKey, Hex>) => {
  const testContrast = (
    keyA: ThemeVarKey,
    keyB: ThemeVarKey,
    ratio: number
  ) => {
    const hexA = themeVars[keyA];
    const hexB = themeVars[keyB];

    // Pass if we're currently changing everything
    if (!hexA || !hexB) {
      return { pass: true, contrast: 100 };
    }

    const rgbA = hexToRGB(hexA);
    const rgbB = hexToRGB(hexB);

    const lumA = getLuminance(rgbA);
    const lumB = getLuminance(rgbB);

    const brightest = Math.max(lumA, lumB);
    const darkest = Math.min(lumA, lumB);

    const contrast = (brightest + 0.05) / (darkest + 0.05);

    return {
      pass: contrast >= ratio,
      contrast,
    };
  };

  const styleObj = {};
  const contrastObj: Record<string, TestFailureDisplay[]> = {};
  Object.entries(themeVars).forEach(([key, val]) => {
    const asCSSKey = key.replace('_', '-');
    styleObj[`--theme-${asCSSKey}`] = val;

    if (contrastTestMap[key].length > 0) {
      const testFailures: TestFailureDisplay[] = [];
      contrastTestMap[key].forEach(({ key: keyB, ratio }) => {
        console.log(keyB);
        const res = testContrast(key as ThemeVarKey, keyB, ratio);
        if (!res.pass) {
          testFailures.push({ key: keyB, contrast: res.contrast });
        }
      });

      if (testFailures.length > 0) {
        contrastObj[key] = testFailures;
      }
    }
  });

  const hasFailures = Object.keys(contrastObj).length > 0;

  return (
    <>
      <div className="px-4 py-8 text-theme-text bg-theme-bg" style={styleObj}>
        {/* Preview */}
        <Container>
          <VerticalGroup size="sm">
            <div>
              <Heading>Theme builder</Heading>
              <Chip text="Teysa Karlov" />
              <p className="my-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                quasi, maiores omnis <Link href="/">ducimus ipsa</Link>{' '}
                blanditiis dolore similique, eos fuga corporis explicabo
                repellat illo earum hic possimus et inventore sit fugiat.
              </p>
              <div className="flex gap-2 mb-4">
                <Button onClick={() => {}}>Draw</Button>
                <Button onClick={() => {}} variant="secondary">
                  Discard
                </Button>
              </div>
              <p className="p-4 bg-theme-bg-alt text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                sapiente sequi suscipit quae velit esse consequuntur, ut
                similique fugiat quod ipsum ducimus, rem est laboriosam labore
                fuga? Repellat, deleniti at!
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <Toast
                text="On death triggers an additional time"
                variant="success"
              />
              <Toast text="Exile target creature" variant="warning" />
              <Toast text="Tokens you control have vigilance" variant="error" />
            </div>
          </VerticalGroup>
        </Container>
      </div>
      {/* Contrast Check */}
      {hasFailures && (
        <div className="p-4 theme-orzhov text-theme-text bg-theme-bg absolute top-4 left-4 border border-theme-bg-alt">
          <Heading size="sm">Test failures</Heading>
          <ul className="flex flex-wrap gap-6">
            {Object.entries(contrastObj).map(([key, val]) => (
              <li key={key}>
                <p>{key}</p>
                <ul>
                  {val.map(({ key: keyB, contrast }) => (
                    <li>
                      <p>
                        <strong>{keyB}:</strong>{' '}
                        {Math.round(contrast * 100) / 100}
                      </p>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default ThemeBuilder;
