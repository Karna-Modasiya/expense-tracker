import Svg, { Path, Circle } from 'react-native-svg';

export function SalaryIcon() {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Circle
        cx="12"
        cy="12"
        r="10"
        stroke="#10b981"
        strokeWidth="2"
      />
      <Path
        d="M12 6V18M9 9.5C9 8.67157 9.67157 8 10.5 8H13.5C14.3284 8 15 8.67157 15 9.5C15 10.3284 14.3284 11 13.5 11H10.5C9.67157 11 9 11.6716 9 12.5C9 13.3284 9.67157 14 10.5 14H13.5C14.3284 14 15 14.6716 15 15.5C15 16.3284 14.3284 17 13.5 17H10.5C9.67157 17 9 16.3284 9 15.5"
        stroke="#10b981"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </Svg>
  );
}