import styled from '@emotion/styled';

import { typography, units, colors } from '@app/theme';

const backgroundColor = (color) => {
  switch (color) {
    case 'light':
      return colors.gray['200'];
    case 'primary':
      return colors.primary;
    case 'dark':
      return colors.gray['900'];
    default:
  }
};

const fontColor = (color) => {
  switch (color) {
    case 'light':
      return colors.primary;
    case 'primary':
      return colors.gray['100'];
    case 'dark':
      return colors.gray['100'];
    default:
  }
};

export const BadgeWrapper = styled('div')(({ variant, colorScheme }) => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: backgroundColor(colorScheme),
  color: fontColor(colorScheme),
  cursor: variant === 'rounded' ? 'default' : 'pointer',
  fontSize: typography.small,
  overflow: 'hidden',
  lineHeight: 1,
  minHeight: 26,
  fontWeight: colorScheme === 'light' && 700,
  borderRadius: units.xxsmall,

  '&:hover': {
    backgroundColor: variant === 'basic' && colors.primary,
    color: variant === 'basic' && colors.gray['200'],
  },
}));

export const BadgeText = styled('span')({
  padding: `${units.xsmall} ${units.small}`,
  fontSize: typography.xsmall,
});

export const BadgeCloseWrapper = styled('div')({
  width: units.large,
  backgroundColor: colors.primary,
  color: colors.gray['100'],
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  alignSelf: 'stretch',

  '&:hover': {
    backgroundColor: colors.gray['900'],
  },
});

export const BadgeClose = styled('span')({
  fontSize: typography.medium,
});
