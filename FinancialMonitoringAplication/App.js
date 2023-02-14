import React, {useEffect, useRef} from 'react';
import Navigate from './src/navigation/Navigate';
import {Notification} from 'react-native-in-app-message';
import {Provider} from 'react-redux';
import store from './src/redux/store/index';
import {
  NotificftionListner,
  requestUserPermission,
} from './src/utils/pushnotification_helper';

const App = () => {
  const notifRef = useRef(null);

  useEffect(() => {
    requestUserPermission();
    NotificftionListner();
  }, []);

  return (
    <Provider store={store}>
      <Navigate notifRef={notifRef} />
      <Notification text={'Добавлено!'} ref={notifRef} textColor={'black'} />
    </Provider>
  );
};

export default App;
