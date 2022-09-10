const Button = {
  baseStyle: {
    // bgColor: 'corn !important',
    border: '1px solid #cda351',
    _hover: {
      color: 'main.500',
      bgColor: 'gold.500',
    },
  },
  defaultStyle: {
    bgColor: 'corn',
  },
  variants: {
    base: {
      bg: 'corn',
    },
    main: {
      bg: 'black',
      color: 'gold.600',
      border: '1px solid #CDA351',
      fontWeight: '700',
      fontSize: '18px',
      lineHeight: '26px',
      letterSpacing: '0.01em',
      p: '15px 30px',
      transition: '.5s',
      _hover: {
        bgColor: '#CDA35170',
        bgGradient: 'linear(to-l, #ffdf91, #cda351)',
        color: 'main.500',
      },
    },
    secondary: {},
    fixedWidth: {
      width: '295px',
      h: '65px',
      fontSize: '18px',
      lineHeight: '26px',
      bg: 'corn',
      border: '4px solid #000',
      fontWeight: '700',
      letterSpacing: '0.01em',
      borderRadius: '15px',
    },
  },
};

export default Button;
