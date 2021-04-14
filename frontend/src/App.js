import {
  ColorModeProvider,
  CSSReset, theme, ThemeProvider
} from "@chakra-ui/core";

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Users from './Containers/Users';
import Login from './Containers/Homepage';
import Register from './Containers/RegisterUser';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
      <CSSReset />
    <Router>
      <Route path='/' component={Register} exact/>
      <Route path='/login' component={Login} exact/>
      <Route path='/users' component={Users} />
    </Router>
    </ColorModeProvider>
    </ThemeProvider>
  );
}

export default App;
