import Svg, { Path } from 'react-native-svg';

export function WalletIcon() {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M21 12V7H5C3.89543 7 3 6.10457 3 5C3 3.89543 3.89543 3 5 3H19V5M5 7H18.25C19.7688 7 21 8.23122 21 9.75V12M21 12V16M21 12H18C16.8954 12 16 12.8954 16 14C16 15.1046 16.8954 16 18 16H21M21 16V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V7"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}