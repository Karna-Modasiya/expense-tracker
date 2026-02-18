import Svg, { Path } from 'react-native-svg';

export function EntertainmentIcon() {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M7 3L5 7V17C5 18.1046 5.89543 19 7 19H17C18.1046 19 19 18.1046 19 17V7L17 3H7Z"
        stroke="#ec4899"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14 8L12 10L10 8"
        stroke="#ec4899"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5 7H19"
        stroke="#ec4899"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </Svg>
  );
}