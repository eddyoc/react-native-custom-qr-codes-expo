  export function QRCode({
    content,
    size,
    padding,
    color,
    gradientDirection,
    backgroundColor,
    codeStyle,
    outerEyeStyle,
    innerEyeStyle,
    logoSize,
    ecl,
  }: {
    content?: string;
    size?: number;
    padding?: number;
    color?: string;
    gradientDirection?: Array<number>;
    backgroundColor?: string;
    codeStyle?: string;
    outerEyeStyle?: string;
    innerEyeStyle?: string;
    logoSize?: number;
    ecl?: string;
  });
