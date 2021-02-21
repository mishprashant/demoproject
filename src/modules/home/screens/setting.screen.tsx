import * as React from 'react';
import { View, StyleSheet, Text, ScrollView, Image } from 'react-native';
import Utils from "../../../utils";
import { connect } from "react-redux";
import { StackActions, NavigationActions } from 'react-navigation';
import { handleLogOut } from "../../home";
import { vh, vw } from '../../../utils/dimension';
import { Switch } from "react-native-switch";
export interface SettingProps {
  name: string;
  navigation: any;
  handleLogOut: Function;
}

class Setting extends React.PureComponent<SettingProps, any> {
  static navigationOptions = (props: { navigation: any }) => {
    return {
      gestureEnabled: false,
      title: "Setting",
      headerStyle: styles.headerStyle,
      headerTintColor: "#ffffff"

    }
  };
  constructor(props: SettingProps) {
    super(props);
  }

  handleLogout = () => {
    this.props.handleLogOut()
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Auth' })],
    });
    this.props.navigation.dispatch(resetAction);
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.profileInfo}>
          <Text style={styles.infoText}>{this.props.name}</Text>
        </View>
        <View style={styles.profileInfo}>
          <Text style={styles.heading}>Setting</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Utils.color.white,

  },
  headerStyle: {
    backgroundColor: Utils.color.primaryColor,
  },
  profileInfo: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: vw(20),
    paddingVertical: vh(15),
    borderBottomColor: Utils.color.borderColor,
    borderBottomWidth: 1,
  },
  heading: {
    marginTop: 5,
    fontSize: vw(20),
    fontFamily: Utils.constant.fontFamily.muliBold,
    textAlign: 'left',
    width: "100%",
  },
  infoText: {
    marginTop: 5,
    fontSize: vw(18),
    fontFamily: Utils.constant.fontFamily.muliBold,
    width: "100%",
    textAlign: 'center'
  },
  grid: {
    flexDirection: 'row',
    marginTop: vh(10),
  },
  column: {
    flex: 1,
    
  },
  columnHeading: {
    fontSize: vw(16),
    fontFamily: Utils.constant.fontFamily.muliSemiBold
  },
  columnText: {
    flex: 1,
    fontSize: vw(14),
    fontFamily: Utils.constant.fontFamily.muliSemiBold
  }
})


function mapStateToProps(state: any) {
  const { name } = state.authReducer;
  return {
    name
  }
}

function mapDispatchToProps(dispatch: any) {
  return (
    {
      handleLogOut: () => dispatch(handleLogOut()),
    }
  )
}

export const SettingScreen = connect(mapStateToProps, mapDispatchToProps)(Setting) 
