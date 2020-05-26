import Header from './components/Header';
import Header from './components/User';

import './scss/app.scss';

const app = async () => {
    document.getElementById('header').innerHTML = Header();
    document.getElementById('user').innerHTML = await User();
}

//Init app
app();


