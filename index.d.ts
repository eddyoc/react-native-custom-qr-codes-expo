import { FC } from "react"
import { ImageSourcePropType } from "react-native"

export const QRCode: FC<{
  content: string,
  size?: number,
  padding?: number,
  color?: string,
  linearGradient?: string[],
  gradientDirection?: number[],
  backgroundColor?: string,
  innerEyeStyle?: 'square' | 'circle' | 'diamond'
  outerEyeStyle?: 'square' | 'circle' | 'diamond'
  codeStyle?: 'square' | 'circle' | 'diamond' | 'dot' | 'ninja' | 'sharp'
  logo?: ImageSourcePropType,
  backgroundImage?: ImageSourcePropType,
  logoSize?: number,
  ecl?: 'L' | 'M' | 'Q' | 'H'
}>
