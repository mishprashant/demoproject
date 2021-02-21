import React, { Component } from "react";
import { View, TextInput, Text, Animated, TouchableOpacity, StyleSheet } from "react-native";
import Utils from "../utils";
import { vh, vw } from "../utils/dimension";

interface Props {
    container?: Object;
    textInputStyle?: Object;
    label?: string;
    value: string;
    fieldName: string;
    placeholder?: string;
    onBlur?: Function;
    onFocus?: Function;
    onChangeText: Function;
    hasError?: boolean;
    secureTextEntry?: boolean;
    keyboardType?: any;
    returnKeyType?: any;
    returnKeyLabel?: string;
    onSubmitEditing?: Function;
    autoCapitalize ?: boolean;
    ref?: any;
    infoMessage?: string;
    hasInfoIcon?: boolean;
    maxLength?: number;
    editable ?: boolean;
}
interface State {
    isFieldActive: boolean,
    toggleShow: boolean,
    secureTextEntry: any,
}
export default class FloatingLabelInput extends React.PureComponent<Props, State>{
    private position: any;
    public static defaultProps = {
        ref: 'TextInputFloat',
        returnKeyType: "next",
        keyboardType: "default",
        autoCapitalize: false,
        returnKeyLabel: 'next',
        hasError: false,
        onBlur: () => { },
        onFocus: () => { },
        onSubmitEditing: () => { }

    };
    constructor(props: Props) {
        super(props);
        const { value } = this.props;
        this.position = new Animated.Value(value ? 1 : 0);
        this.state = {
            isFieldActive: false,
            toggleShow: false,
            secureTextEntry: false,
        }
        this.handleChangeText = this.handleChangeText.bind(this);
    }

    componentDidMount() {
        this.setState({ secureTextEntry: this.props.secureTextEntry })
    }
    /**
     * handle placeholder animation
     */
    _returnAnimatedTitleStyles = () => {
        const { isFieldActive } = this.state;
        return {
            top: this.position.interpolate({
                inputRange: [0, 1],
                outputRange: [15, -17],
            }),
            fontSize: isFieldActive ? 18 : 15,
            color: isFieldActive ? 'black' : 'dimgrey',
        }
    }
    _handleFocus = () => {
        if (!this.state.isFieldActive) {
            this.setState({ isFieldActive: true });
            Animated.timing(this.position, {
                toValue: 1,
                duration: 150,
            }).start();
        }
        if (this.props.onFocus) {
            this.props.onFocus()
        }
    }

    _handleBlur = () => {
        if (this.state.isFieldActive && !this.props.value) {
            this.setState({ isFieldActive: false });
            Animated.timing(this.position, {
                toValue: 0,
                duration: 150,
            }).start();
        }
        if (this.props.onBlur) {
            this.props.onBlur(this.props.fieldName)
        }

    }

    renderLabel = () => (
        <Animated.Text
            style={[Style.textInputLabel, this._returnAnimatedTitleStyles()]}
        >
            {this.props.placeholder}
        </Animated.Text>
    )
    renderPasswordToggle = () => (
        <TouchableOpacity
            onPress={this.handleToggleText}
        >
            <Text
                style={this.state.toggleShow ? Style.hideText : Style.showText}

            >
                {this.state.toggleShow ? "Hide" : "Show"}
            </Text>
        </TouchableOpacity>
    )
    handleOnSubmitEditing = () => {
        if (this.props.onSubmitEditing)
            this.props.onSubmitEditing()
    }
    handleChangeText(val: string) {
        this.props.onChangeText(this.props.fieldName, Utils.constant.removeEmojis(val))
    }
    handleToggleText = () => {
        this.setState({ toggleShow: !this.state.toggleShow, secureTextEntry: !this.state.secureTextEntry })
    }

    render() {
        const { container, textInputStyle } = this.props;
        const errorStyle = this.props.hasError ? Style.errorStyle : {}
        return (
            <View style={[Style.container, container, errorStyle]}>
                {
                    this.renderLabel()
                }

                <TextInput
                    maxLength={this.props.maxLength}
                    ref={"FloatingLabelInput"}
                    autoCapitalize={ this.props.autoCapitalize ? "words": "none"}
                    //placeholder={this.props.placeholder}
                    returnKeyType={this.props.returnKeyType || 'next'}
                    value={this.props.value}
                    onChangeText={this.props.onChangeText}
                    onBlur={this._handleBlur}
                    selectionColor={Utils.color.primaryColor}
                    onFocus={this._handleFocus}
                    style={[Style.textInput, textInputStyle]}
                    keyboardType={this.props.keyboardType}
                    onSubmitEditing={this.handleOnSubmitEditing}
                    secureTextEntry={this.state.secureTextEntry}
                    editable={!this.props.editable}
                />
                {
                    this.props.secureTextEntry &&
                    this.renderPasswordToggle()
                }
          
            </View>
        );
    }

}

export const Style = StyleSheet.create({
    container: {
        width: "100%",
        height: 60,
        paddingLeft: 10,
        paddingRight: 10,
        borderWidth: 1,
        borderColor: Utils.color.borderColor,
        borderRadius: 5,
        marginTop: 20,
        marginBottom: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        height: 10,
        width: 10
    },
    textInput: {
        fontSize: 14,
        color: Utils.color.black,
        fontFamily: Utils.constant.fontFamily.Muli,
        marginLeft: 10,
        marginRight: 10,
        height: 30,
        flex: 8,
    },
    textInputLabel: {
        position: 'absolute',
        paddingLeft: 10,
        paddingRight: 10,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#fff',
        alignSelf: 'flex-start',
        color: Utils.color.placeholderColor,
        fontFamily: Utils.constant.fontFamily.muliSemiBold,
        fontSize: 11,
    },
    errorStyle: {
        borderColor: "red",
        borderWidth: 1,
    },
    showText: {
        color: Utils.color.disableColor,
        fontSize: 12,
        //fontFamily: Utils.constant.fontFamily.googleSansMedium,
    },
    hideText: {
        color: Utils.color.primaryColor,
        fontSize: 12,
        //fontFamily: Utils.constant.fontFamily.googleSansMedium,
    }
})