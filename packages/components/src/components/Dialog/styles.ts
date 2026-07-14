import { sva } from 'styled-system/css'

export const dialogStyles = sva({
  slots: ['overlay', 'content', 'header', 'titleWrap', 'title', 'description', 'close', 'body'],
  base: {
    overlay: {
      position: 'fixed',
      inset: '0',
      zIndex: '200',
      bg: 'rgba(0, 0, 0, .75)',
      backdropFilter: 'blur(20px)',
    },
    content: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: '300',
      width: 'calc(100% - 2rem)',
      maxWidth: '720px',
      maxHeight: 'min(90vh, 900px)',
      display: 'flex',
      flexDirection: 'column',
      bg: 'grey.black',
      border: '1px solid token(colors.grey.700)',
      borderRadius: 'lg',
      boxShadow: '0 0 24px rgba(0, 0, 0, .45)',
      outline: 'none',
      overflow: 'hidden',
      _light: {
        bg: 'white',
        borderColor: 'grey.200',
        boxShadow: '0 0 24px rgba(0, 0, 0, .12)',
      },
    },
    header: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 'md',
      p: 'xl',
      borderBottom: '1px solid token(colors.grey.700)',
      _light: {
        borderBottomColor: 'grey.200',
      },
    },
    titleWrap: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2xs',
      minW: '0',
    },
    title: {
      fontSize: 'lg',
      fontWeight: '700',
      textWrap: 'balance',
      color: 'neutral',
      _light: {
        color: 'grey.night',
      },
    },
    description: {
      fontSize: 'sm',
      color: 'grey.dawn',
      _light: {
        color: 'grey.600',
      },
    },
    close: {
      display: 'inline-flex',
      alignItems: 'center',
      cursor: 'pointer',
      flexShrink: 0,
      color: 'brand.pale',
      fontSize: 'lg',
      _light: {
        color: 'grey.night',
      },
    },
    body: {
      p: 'xl',
      overflow: 'auto',
      flex: '1',
      minH: '0',
    },
  },
})
