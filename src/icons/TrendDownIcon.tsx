import Svg, { Path } from 'react-native-svg';

export function TrendDownIcon() {
  return (
    <Svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <Path
        d="M23 18L13.5 8.5L8.5 13.5L1 6"
        stroke="#f43f5e"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17 18H23V12"
        stroke="#f43f5e"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}