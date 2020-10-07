export const theme = {
  fontFamily: '\'Nunito Sans\', sans-serif',
  color: {
    primary: {
      main: '#2A9D8F'
    },
    secondary: {
      main: '#E9C46A'
    },
    background: {
      main: '#060C0E',
      surface: '#1F3D47'
    },
    text: {
      primary: '#F3E2EC',
      secondary: '#E76F51'
    },
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      A100: '#d5d5d5',
      A200: '#aaaaaa',
      A400: '#303030',
      A700: '#616161'
    }
  },
  spacing: (v = 1, h = v) => `${v}rem ${h}rem`,
  shape: {
    borderRadius: '4px'
  }
};
