import 'styled-components';

import type { MainTheme } from '../theme';

/**
 * Tipa o `theme` das template literals a partir do próprio objeto do tema.
 * Token inexistente vira erro de build em vez de `undefined` silencioso no CSS.
 */
declare module 'styled-components' {
  export interface DefaultTheme extends MainTheme {}
}
