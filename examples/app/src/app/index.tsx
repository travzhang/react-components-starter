import { Token } from 'react-components-starter'
import {View} from "react-native";

export default function T1Screen() {
    return (
        <View style={{
            paddingTop:200
        }}>
            <Token token={{
                text:'111',
                pos:'xx',
                start:1,
                end:2
            }} />
        </View>
    )
}
