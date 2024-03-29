import React, {useState} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import {PromptStyles} from './PromptStyles';

interface PromptProps {
  name: string;
  submit: (value: string | undefined) => void;
  exit: () => void;
  backgroundOpacity?: number;
}

const Prompt = ({name, submit, exit, backgroundOpacity = 0.5}: PromptProps) => {
  const [text, setText] = useState<string>();

  return (
    <TouchableWithoutFeedback onPress={exit}>
      <View style={PromptStyles.container(backgroundOpacity)}>
        <TouchableWithoutFeedback>
          <View style={PromptStyles.modal}>
            <View style={PromptStyles.partContainer}>
              <Text style={PromptStyles.textBold}>{name}</Text>
            </View>
            <View style={PromptStyles.textInputPart}>
              <View style={PromptStyles.textInputContainer}>
                <TextInput
                  onChangeText={setText}
                  style={PromptStyles.textInput}
                />
              </View>
            </View>
            <View style={PromptStyles.buttonsContainer}>
              <TouchableOpacity style={PromptStyles.button} onPress={exit}>
                <Text>Cancel</Text>
              </TouchableOpacity>
              <View style={PromptStyles.divider} />
              <TouchableOpacity
                style={PromptStyles.button}
                onPress={() => submit(text)}
              >
                <Text>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Prompt;
