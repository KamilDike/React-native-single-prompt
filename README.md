# React-native-single-prompt

[![badge](https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/100px-Npm-logo.svg.png)](https://www.npmjs.com/package/react-native-single-prompt)

Prompt component with single input field

```
import Prompt from 'react-native-single-prompt';
```

<p float="left">
<img width="298" alt="image" src="https://user-images.githubusercontent.com/40762724/173159583-09aba265-8973-4a86-a1e3-278b5ad480a5.png">
<img width="298" alt="image" src="https://user-images.githubusercontent.com/40762724/173159176-6e44bb35-0c3c-4708-ad1a-13be5b85aaf1.png">
</p>

![Simulator Screen Recording - iPhone 13 - 2022-06-11 at 08 42 46](https://user-images.githubusercontent.com/40762724/173176817-f32165d1-c668-4afc-ae64-e3e9775e7931.gif)
![Simulator Screen Recording - iPhone 13 - 2022-06-11 at 11 32 20](https://user-images.githubusercontent.com/40762724/173182389-2fc87d29-50cc-47b1-a5ba-39828ee5f169.gif)

Usage

1. <b>Installation</b>

```
yarn add react-native-single-prompt
```

or

```
npm i react-native-single-prompt
```

2. <b>Code sample</b><br>
   I highely advise controlling prompt with <b>Modal</b> from core react-native API

```
import Prompt from 'react-native-single-prompt';
import {Modal} from 'react-native';

const App = () => {
  const [isPromptActive, setIsPromptActive] = useState(false);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Modal transparent={true} visible={isPromptActive} animationType="fade">
        <Prompt
          exit={() => setIsPromptActive(false)}
          callback={value => Alert.alert('Prompt confirmed', value)}
          name="iOS"
        />
      </Modal>
      <Button title="Activate prompt" onPress={() => setIsPromptActive(true)} />
    </SafeAreaView>
  );
};
```

3. <b>Optional props</b><br/>
   **backgroundOpacity**={value: number}, value in range: **<0;1>**, default = **0.5**
