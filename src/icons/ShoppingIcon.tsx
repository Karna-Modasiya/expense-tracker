import Svg, { Path } from 'react-native-svg';

export function ShoppingIcon() {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M9 2L7 6M17 2L19 6M6 6H20L19 20H7L6 6Z"
        stroke="#9333ea"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}