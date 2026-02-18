import Svg, { Path, Rect } from 'react-native-svg';

export function CategoryIcon() {
  return (
    <Svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <Rect x="3" y="3" width="8" height="8" rx="2" stroke="#6366f1" strokeWidth="2" />
      <Rect x="3" y="13" width="8" height="8" rx="2" stroke="#6366f1" strokeWidth="2" />
      <Rect x="13" y="3" width="8" height="8" rx="2" stroke="#6366f1" strokeWidth="2" />
      <Rect x="13" y="13" width="8" height="8" rx="2" stroke="#6366f1" strokeWidth="2" />
    </Svg>
  );
}