export const baseTheme = {
    colors: {
      primary: '#313237',
      secondary: '#89939A',
      green: '#27AE60',
      red: '#EB5757 ',
      icons: '#B4BDC3 ',
      elements: '#E2E6E9 ',
      hover_BG: '#FAFBFC ',
      white: '#FFFFFF ',
      
      bg: '#E5E4E8',
      font: '#19191B',
    },
  
    media: {
      extraLarge: '(max-width: 1140px)',
      large: '(max-width: 960px)',
      medium: '(max-width: 720px)',
      small: '(max-width: 540px)',
    },
  
    // in px
    sizes: {
      header: { height: "64px" },
      container: { width: "1200px" },
      footer: { height: "96px" },
      modal: { width: "540px" },
    },
  
    // in ms
    durations: {
      ms300: 300,
    },
  
    // z-index
    order: {
      header: 50,
      modal: 100,
    },

    font: {
      bold: {
        fontFamily: 'Montserrat, Bold',
        fontSize: {
          large: '32px',
          medium: '22px',
          small: '12px',
        },
        lineHeight: {
          large: '41px',
          medium: '31px',
          small: '11px',
        },
        letterSpacing: {
          large: '-0.01em',
          medium: '0em',
          small: '0.04em',
        },
      },
      semiBold: {
        fontFamily: 'Montserrat, SemiBold',
        fontSize: {
          medium: '20px',
          small: '14px',
          tiny: '12px',
        },
        lineHeight: {
          medium: '26px',
          small: '21px',
          tiny: '15px',
        },
        letterSpacing: {
          medium: '0',
          small: '0',
        },
      },
      regular: {
        fontFamly: 'Montserrat, Regular',
        fontSize: '14px',
        lineHeight: '21px',
        letterSpacing: '0',
      },
    }
    

    // font-family: 'Mont', sans-serif;
  }