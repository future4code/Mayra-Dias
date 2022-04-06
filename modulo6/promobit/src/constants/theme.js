import { createTheme } from '@material-ui/core/styles';
import { primaryColor, Color } from './color'

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: "white"
    },
    text: {
        primary: Color
    }
  },
});

export default theme;