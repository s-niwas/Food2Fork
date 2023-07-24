import React from "react";
import { Svg,Path } from "react-native-svg";

const SearchIcon: React.FC<{size?: number; color?: string}> = ({
    size = 24,
    color = '#A9A9A9',
  }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M15.5 13H14.71L14.43 12.73C15.41 11.57 16 10.07 16 8.5C16 4.91 13.09 2 9.5 2C5.91 2 3 4.91 3 8.5C3 12.09 5.91 15 9.5 15C11.07 15 12.57 14.41 13.73 13.43L14 13.71V14.5L18.5 19L19 18.5L15.5 15V14.21L15.29 14L15.5 13ZM9.5 13C7.01 13 5 10.99 5 8.5C5 6.01 7.01 4 9.5 4C11.99 4 14 6.01 14 8.5C14 10.99 11.99 13 9.5 13Z"
        fill={color}
      />
    </Svg>
  );

  export default SearchIcon;