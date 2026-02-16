import { Dimensions } from 'react-native';
import Svg, { Path, Circle, Rect, G, Text as SvgText } from 'react-native-svg';

const { width } = Dimensions.get('window');

export function ExpenseTrackerIllustration() {
  return (
    <Svg width={width * 0.7} height={200} viewBox="0 0 300 200">
      {/* Wallet */}
      <G>
        <Rect x="40" y="80" width="100" height="70" rx="8" fill="#6366f1" />
        <Rect x="45" y="85" width="90" height="20" rx="4" fill="#818cf8" />
        <Circle cx="120" cy="125" r="8" fill="#a5b4fc" />
        <Path d="M55 105 L70 105" stroke="#a5b4fc" strokeWidth="2" />
        <Path d="M55 115 L85 115" stroke="#a5b4fc" strokeWidth="2" />
      </G>
      
      {/* Coins */}
      <Circle cx="170" cy="60" r="20" fill="#fbbf24" opacity="0.9" />
      <Circle cx="185" cy="75" r="20" fill="#fbbf24" opacity="0.7" />
      <Circle cx="200" cy="60" r="20" fill="#fbbf24" opacity="0.8" />
      <SvgText x="163" y="67" fontSize="16" fill="#92400e" fontWeight="bold">$</SvgText>
      <SvgText x="193" y="67" fontSize="16" fill="#92400e" fontWeight="bold">$</SvgText>
      
      {/* Chart Card */}
      <G>
        <Rect x="160" y="100" width="110" height="80" rx="6" fill="#ffffff" />
        
        {/* Line Chart */}
        <Path
          d="M170 160 L190 145 L210 150 L230 135 L250 140"
          stroke="#10b981"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Circle cx="170" cy="160" r="3" fill="#10b981" />
        <Circle cx="190" cy="145" r="3" fill="#10b981" />
        <Circle cx="210" cy="150" r="3" fill="#10b981" />
        <Circle cx="230" cy="135" r="3" fill="#10b981" />
        <Circle cx="250" cy="140" r="3" fill="#10b981" />
        
        {/* Bar Chart */}
        <Rect x="175" y="155" width="8" height="20" rx="2" fill="#e0e7ff" />
        <Rect x="195" y="145" width="8" height="30" rx="2" fill="#c7d2fe" />
        <Rect x="215" y="150" width="8" height="25" rx="2" fill="#e0e7ff" />
        <Rect x="235" y="140" width="8" height="35" rx="2" fill="#a5b4fc" />
      </G>
      
      {/* Decorative Dollar Signs */}
      <SvgText x="50" y="50" fontSize="24" fill="#10b981" fontWeight="bold">$</SvgText>
      <SvgText x="240" y="90" fontSize="20" fill="#10b981" fontWeight="bold">$</SvgText>
      <Circle cx="45" cy="60" r="3" fill="#fbbf24" />
      <Circle cx="250" cy="50" r="2" fill="#6366f1" />
    </Svg>
  );
}