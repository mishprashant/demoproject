import React, { memo } from 'react'
import { TouchableOpacity, Text, View, Image, StyleSheet } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import Utils from "../utils";
import { vh, vw } from "../utils/dimension";
interface Props {
    container ?: Object;
    onPress: Function;
    buttonText: string;
    isDisabled?: boolean;
    images?: any;
}

export default memo(function CustomButton(props: Props) {

    function renderGradient(container: Object) {
        return (
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['rgb(240, 150, 60)', 'rgb(245, 186, 127)']} style={[styles.container,container]}>
                {props.images &&
                    <Image style={styles.scannerIconStyle}
                        source={props.images} />
                }
                <Text style={styles.buttonText}>
                    {props.buttonText}
                </Text>
            </LinearGradient>
        )
    }

    function renderDisabled(container: Object) {
        return (
            <View style={[styles.container, styles.disabledStyle, container]}>
                <Text style={styles.buttonText}>
                    {props.buttonText}
                </Text>
            </View>
        )
    }
    function handleAction() {
        props.onPress();
    }
    return (
        <TouchableOpacity
            disabled={props.isDisabled}
            onPress={handleAction}
            activeOpacity={0.8}
            style={{width: "100%"}}
        >
            {
                props.isDisabled ?
                    renderDisabled(props.container)
                    :
                    renderGradient(props.container)
            }
        </TouchableOpacity>
    )
})

export const styles = StyleSheet.create({
    container: {
        height: vh(45),
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 20,
        marginBottom: 20,
        flexDirection: 'row'
    },
    stepperContainer: {
        height: vh(50),
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 20,
        marginBottom: 20,
        flexDirection: 'row'
    },
    disabledStyle: {
        backgroundColor: Utils.color.disableColor,
    },
    buttonText: {
        fontSize: 16,
        color: Utils.color.white,
        fontFamily: Utils.constant.fontFamily.muliBold,
    },
    buttonTextStepper: {
        fontSize: 16,
        color: Utils.color.white,
        fontFamily: Utils.constant.fontFamily.muliBold,
        paddingLeft: vw(20),
        paddingRight: vw(7.5)
    },
    buttonTextTotal: {
        fontSize: 12,
        color: Utils.color.white,
        justifyContent: 'flex-end',
        fontFamily: Utils.constant.fontFamily.Muli,
    },
    textContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingRight: vw(20)
    },
    arrowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    scannerIconStyle: {
        width: vw(15),
        height: vw(15),
        marginRight: vw(9.5),
    },
})