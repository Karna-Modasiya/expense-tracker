import Svg, { Path, Circle } from 'react-native-svg';

export function TransportIcon() {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M5 11L7 3H17L19 11M5 11V16M5 11H19M19 11V16M5 16H19M5 16C5 17.1046 4.10457 18 3 18C1.89543 18 1 17.1046 1 16M19 16C19 17.1046 19.8954 18 21 18C22.1046 18 23 17.1046 23 16M8 7H16"
        stroke="#3b82f6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}