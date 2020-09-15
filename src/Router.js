// import React from 'react';
// import {Scene, Router, Actions} from 'react-native-router-flux';
// import {SafeAreaView} from 'react-native';
// import LoginForm from './components/LoginForm';
// import ContactList from './components/ContactList';
// import ContactCreate from './components/ContactCreate';
// import ContactEdit from './components/ContactEdit';
// import firebase from './firebase/config';

// const RouterComponent = () => {
//   return (
//     <Router sceneStyle={{paddingTop: 30}}>
//       <Scene key="root">
//         <Scene key="auth">
//           <Scene
//             key="login"
//             component={LoginForm}
//             title="Please Login"
//             navigationBarStyle={{height: 80, paddingTop: 15}}
//             initial
//           />
//         </Scene>

//         <Scene key="main">
//           <Scene
//             rightTitle="Add"
//             onRight={() => {
//               Actions.contactCreate();
//             }}
//             key="contactList"
//             component={ContactList}
//             title="Contacts"
//             navigationBarStyle={{height: 80, paddingTop: 15}}
//             initial
//           />
//           <Scene
//             key="contactCreate"
//             component={ContactCreate}
//             title="Create Contact"
//             navigationBarStyle={{height: 80, paddingTop: 15}}
//           />
//           <Scene
//             key="contactEdit"
//             component={ContactEdit}
//             title="Edit Contact"
//             navigationBarStyle={{height: 80, paddingTop: 15}}
//           />
//         </Scene>
//       </Scene>
//     </Router>
//   );
// };

// export default RouterComponent;
