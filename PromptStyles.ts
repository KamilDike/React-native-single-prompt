import {Dimensions, StyleSheet} from 'react-native';

const Colors = {
  gray: '#e7e7e7',
  darkGray: '#bebebe',
};

export const PromptStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modal: {
    width: '90%',
    height: Dimensions.get('window').width / 3,
    borderRadius: 10,
    backgroundColor: Colors.gray,
  },
  textInput: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  partContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputPart: {
    flex: 1.2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopColor: Colors.darkGray,
    borderTopWidth: 1,
  },
  divider: {
    height: '100%',
    backgroundColor: Colors.darkGray,
    width: 1,
  },
  textInputContainer: {
    borderColor: Colors.darkGray,
    borderWidth: 1,
    backgroundColor: 'white',
    width: '90%',
    flex: 1,
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 5,
  },
  textBold: {
    fontWeight: 'bold',
  },
});
