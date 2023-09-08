import styled from '@emotion/styled';

export const BoardListItem = styled.li(props => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor:
    props.isActive && props.theme.palette.background.activeBoardItem,
  padding: '0 24px',

  '& + &': {
    marginTop: '4px',
  },

  ...(props.isActive && {
    '&::after': {
      content: "''",
      position: 'absolute',
      top: 0,
      right: 0,
      height: '100%',
      width: '4px',
      backgroundColor: props.theme.palette.icon.signOut,
      borderRadius: '4px 0px 0px 4px',
    },
  }),
}));

export const BoardName = styled.h2(props => ({
  fontSize: '14px',
  fontWeight: 500,
  lineHeight: 1.25,
  letterSpacing: '-0.28px',
  textAlign: 'left',
  color: props.isActive
    ? props.theme.palette.text.sidebarPrimary
    : props.theme.palette.text.sidebarSecondary,
}));

export const BoardIdentificationItem = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 20px 0;
  cursor: pointer;
`;

export const BoardItemControl = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
