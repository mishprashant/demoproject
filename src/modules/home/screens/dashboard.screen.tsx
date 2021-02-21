import * as React from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import Utils from "../../../utils";
import { connect } from "react-redux";
import { menu } from "../../../utils/menu";
import { vh, vw } from '../../../utils/dimension';
import FloatingLabelInput from "../../../component/FloatingLabelInput";
import CustomButton, { } from "../../../component/customButton";
export interface HomeProps {
  navigation: any;
}

class Home extends React.PureComponent<HomeProps, any> {
  static navigationOptions = (props: { navigation: any }) => {
    return {
      gestureEnabled: false,
      title: "Home",
      headerStyle: styles.headerStyle,
      headerTintColor: "#ffffff"

    }
  };
  constructor(props: HomeProps) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: {
        emailHasError: false,
        passwordHasError: false,
      },
      loginDisable: true,
      val:false
    }
  }
  handleNavigation = (route: string) => () => {
    this.props.navigation.navigate(route)
  }
  renderCard = (rowData: any) => {
    const { item, index } = rowData;
    return (
      <TouchableOpacity onPress={this.handleNavigation(item.link)} style={styles.cardContainer}>
        <Image source={item.icon} style={styles.icon} />
        <Text style={styles.menuName}>{item.name}</Text>
      </TouchableOpacity>
    )
  }
  handleFiledUpdate = (key: string, value: string) => {
    let error = this.handleValidation(key, value, this.state.error);
    //@ts-ignore
    this.setState({ [key]: value, error: Object.assign(this.state.error, error), loginDisable: (error.emailHasError || error.passwordHasError) || (this.state.email == "" || this.state.password == "") ? true : false })
  }
  handleValidation = (key: string, value: string, error: any) => {
    error[`${key}HasError`] = false;
    if (key == 'email') {
      if (!value) {
        error.emailHasError = true;
      }
      else if (!Utils.constant.emailRegex.test(value)) {
        error.emailHasError = true;
      }
      else {
        error.emailHasError = false;
      }
    } else {
      if (!value) {
        error.passwordHasError = true;
      } else if (value.length < 6) {
        error.passwordHasError = true;
      }
      else {
        error.passwordHasError = false;
      }
    }
    return error;
  }
  doLogin = () => {
    const { email, password, loginDisable } = this.state;
    this.setState({val:!this.state.val})
  }
  render() {
    return (
      <View style={styles.container}>

        {this.state.val && <Text style={{fontSize:20}}>{this.state.email}</Text>}
        <FloatingLabelInput
          ref={"email"}
          value={this.state.email}
          onChangeText={(value) =>{this.setState({email:value})}}
          fieldName={""}
          placeholder={"Enter Normal text"}
          //returnKeyType={'next'}
         // hasError={this.state.error.emailHasError}
          //@ts-ignore
          //onSubmitEditing={() => this.refs.password.refs.FloatingLabelInput.focus()}
        />
        <CustomButton
          onPress={this.doLogin}
          buttonText={Utils.i18n.t("submit")}
          isDisabled={this.state.false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Utils.color.white,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: vw(1),
    paddingVertical: vw(10),
    padding:10
  },
  headerStyle: {
    backgroundColor: Utils.color.primaryColor,

  },
  cardContainer: {
    width: vw(118),
    height: vw(118),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Utils.color.white,
    marginHorizontal: vw(2.5),
    marginVertical: vw(2.5),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  icon: {
    width: vw(20),
    height: vw(20),
    marginBottom: 10
  },
  menuName: {
    fontFamily: Utils.constant.fontFamily.muliBold,
    fontSize: vw(14)
  }
})


function mapStateToProps(state: any) {
  return {

  }
}

function mapDispatchToProps(dispatch: any) {
  return (
    {

    }
  )
}

export const HomeScreen = connect(mapStateToProps, mapDispatchToProps)(Home) 
