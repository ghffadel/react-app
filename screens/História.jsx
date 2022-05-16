import { SafeAreaView } from 'react-native'
import { Button } from 'react-native-web'
import styled from 'styled-components/native'

const StyledText = styled.Text`
    color: red;
`
const História = ({navigation}) => {
  return (
    <SafeAreaView>
      <StyledText>História</StyledText>
      <Button onPress={() => {
        navigation.navigate('Equipe')
      }}/>
    </SafeAreaView>
  )
}

export default História