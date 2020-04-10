import { styled } from '../../../config/theme';

export const DarkPageContainer = styled('div', ({$theme}) => ({
  ...$theme.flex.row,
  ...$theme.flex.centered,
  width: '100%',
  height: '100%',
  backgroundColor: $theme.colors.dark01,
}));

export const Header = styled('div', ({ $theme }) => ({
  ...$theme.typography.font1000,
  color: $theme.colors.light01,
}));
