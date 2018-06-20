import {
    StackNavigator,
    TabNavigator
} from 'react-navigation';
import login from './src/view/login';
import user_center from './src/view/user_center';

// const Tab = TabNavigator({
//         login: {screen: login},
//         user_center: {screen: user_center},
//     }
//     ,{
//         //screen模式才可以隐藏导航header,none为全局隐藏
//         headerMode: 'none'
//     });

const App = StackNavigator({
    login: {screen: login},
    user_center: {screen: user_center},
}
,{
    //screen模式才可以隐藏导航header,none为全局隐藏
    headerMode: 'none'
});

export default App;