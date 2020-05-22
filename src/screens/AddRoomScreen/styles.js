import { StyleSheet } from 'react-native';

export default StyleSheet.create({
        container : {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        rootContainer: {
          flex: 1
        },
        closeButtonContainer: {
          position: 'absolute',
          top: 30,
          right: 0,
          zIndex: 1
        },
        innerContainer: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        },
        title: {
          fontSize: 24,
          marginBottom: 10
        },
        buttonLabel: {
          fontSize: 22
        }
});      