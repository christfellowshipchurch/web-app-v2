/* eslint-disable react/forbid-foreign-prop-types */

import {
  compose,
  style,

  // Core
  color,
  fontSize,
  space,
  width,

  // Typography
  fontFamily,
  fontStyle,
  fontWeight,
  letterSpacing,
  lineHeight,
  textAlign,

  // Layout
  display,
  height,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  size,
  verticalAlign,

  // Flexbox
  alignContent,
  alignItems,
  alignSelf,
  flex,
  flexBasis,
  flexDirection,
  flexGrow,
  flexWrap,
  justifyContent,
  justifySelf,
  order,

  // Grid Layout
  gridArea,
  gridAutoColumns,
  gridAutoFlow,
  gridAutoRows,
  gridColumn,
  gridColumnGap,
  gridGap,
  gridRow,
  gridRowGap,
  gridTemplateAreas,
  gridTemplateColumns,
  gridTemplateRows,

  // Borders
  border,
  borderBottom,
  borderColor,
  borderLeft,
  borderRadius,
  borderRight,
  borderStyle,
  borderTop,
  borderWidth,

  // Position
  bottom,
  left,
  position,
  right,
  top,
  zIndex,

  // Misc.
  background,
  backgroundImage,
  backgroundPosition,
  backgroundRepeat,
  backgroundSize,
  boxShadow,
  opacity,
  overflow,
} from 'styled-system';

const textDecoration = style({
  prop: 'textDecoration',
  cssProperty: 'text-decoration',
});

const textTransform = style({
  prop: 'textTransform',
  cssProperty: 'text-transform',
});

const cursor = style({
  prop: 'cursor',
  cssProperty: 'cursor',
});

export const core = compose(color, fontSize, space, width);

export const typography = compose(
  fontFamily,
  fontStyle,
  fontWeight,
  letterSpacing,
  lineHeight,
  textAlign,
  textDecoration,
  textTransform
);

export const layout = compose(
  display,
  height,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  size
);

export const flexbox = compose(
  alignContent,
  alignItems,
  alignSelf,
  flex,
  flexBasis,
  flexDirection,
  flexGrow,
  flexWrap,
  justifyContent,
  justifySelf,
  order
);

export const gridLayout = compose(
  gridArea,
  gridAutoColumns,
  gridAutoFlow,
  gridAutoRows,
  gridColumn,
  gridColumnGap,
  gridGap,
  gridRow,
  gridRowGap,
  gridTemplateAreas,
  gridTemplateColumns,
  gridTemplateRows
);

export const borders = compose(
  border,
  borderBottom,
  borderColor,
  borderLeft,
  borderRadius,
  borderRight,
  borderStyle,
  borderTop,
  borderWidth
);

export const positioning = compose(bottom, left, position, right, top, zIndex);

export const misc = compose(
  background,
  backgroundImage,
  backgroundPosition,
  backgroundRepeat,
  backgroundSize,
  boxShadow,
  cursor,
  opacity,
  overflow
);

export const system = compose(
  core,
  typography,
  layout,
  flexbox,
  gridLayout,
  borders,
  positioning,
  misc
);

export const propTypes = {
  // Core
  ...color.propTypes,
  ...fontSize.propTypes,
  ...space.propTypes,
  ...width.propTypes,

  // Typography
  ...fontFamily.propTypes,
  ...fontStyle.propTypes,
  ...fontWeight.propTypes,
  ...letterSpacing.propTypes,
  ...lineHeight.propTypes,
  ...textAlign.propTypes,
  ...textDecoration.propTypes,
  ...textTransform.propTypes,

  // Layout
  ...display.propTypes,
  ...height.propTypes,
  ...maxHeight.propTypes,
  ...maxWidth.propTypes,
  ...minHeight.propTypes,
  ...minWidth.propTypes,
  ...size.propTypes,
  ...verticalAlign.propTypes,

  // Flexbox
  ...alignContent.propTypes,
  ...alignItems.propTypes,
  ...alignSelf.propTypes,
  ...flex.propTypes,
  ...flexBasis.propTypes,
  ...flexDirection.propTypes,
  ...flexGrow.propTypes,
  ...flexWrap.propTypes,
  ...justifyContent.propTypes,
  ...justifySelf.propTypes,
  ...order.propTypes,

  // Grid Layout
  ...gridArea.propTypes,
  ...gridAutoColumns.propTypes,
  ...gridAutoFlow.propTypes,
  ...gridAutoRows.propTypes,
  ...gridColumn.propTypes,
  ...gridColumnGap.propTypes,
  ...gridGap.propTypes,
  ...gridRow.propTypes,
  ...gridRowGap.propTypes,
  ...gridTemplateAreas.propTypes,
  ...gridTemplateColumns.propTypes,
  ...gridTemplateRows.propTypes,

  // Borders
  ...border.propTypes,
  ...borderBottom.propTypes,
  ...borderColor.propTypes,
  ...borderLeft.propTypes,
  ...borderRadius.propTypes,
  ...borderRight.propTypes,
  ...borderStyle.propTypes,
  ...borderTop.propTypes,
  ...borderWidth.propTypes,

  // Position
  ...bottom.propTypes,
  ...left.propTypes,
  ...position.propTypes,
  ...right.propTypes,
  ...top.propTypes,
  ...zIndex.propTypes,

  // Misc.
  ...background.propTypes,
  ...backgroundImage.propTypes,
  ...backgroundPosition.propTypes,
  ...backgroundRepeat.propTypes,
  ...backgroundSize.propTypes,
  ...boxShadow.propTypes,
  ...opacity.propTypes,
  ...overflow.propTypes,
};
