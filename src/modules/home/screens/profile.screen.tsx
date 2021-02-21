import * as React from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import Utils from "../../../utils";
import { connect } from "react-redux"
import { vh, vw } from '../../../utils/dimension';

interface ProfileProps {
    name : string;
    experience : string;
    specialities : string; 
    language : string;
    photo : string;
    description : string;
    table : string;
}

class Profile extends React.PureComponent<ProfileProps, any> {
    static navigationOptions = (props: { navigation: any }) => {
        return {
            gestureEnabled: false,
            title: "Profile",
            headerStyle: styles.headerStyle,
            headerTintColor: "#ffffff"
            
        }
    };
  constructor(props: ProfileProps) {
    super(props);
  }

  public render() {
    return (
      <ScrollView style={styles.container}>
         <View style={styles.profileInfo}>
            <View style={styles.info}>
                <Text style={styles.infoText}>{this.props.name}</Text>
                <Text style={styles.infoSubText}>{this.props.experience}</Text>
            </View>
         </View>
         <Text style={[styles.infoSubText,{marginTop: 20}]}><Text  style={{fontFamily: Utils.constant.fontFamily.muliBold}}>Profile Screen:</Text> {this.props.specialities}</Text>
      </ScrollView>
    );
  }
}

const styles= StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: Utils.color.white,
      paddingHorizontal: vw(20),
      paddingVertical: vh(20)
    },
    headerStyle: {
      backgroundColor: Utils.color.primaryColor,
  
    },
    profileInfo:{
        flexDirection: 'row',
        
    },
    info:{
        marginHorizontal: 20,
        flex: 1,
        flexWrap: "wrap",
        width: "100%",
        flexDirection:'row'
    },
    infoText:{
        fontSize: 18,
        fontFamily: Utils.constant.fontFamily.muliBold,
        width: "100%"
    },
    infoSubText:{
        fontSize: 16,
        fontFamily: Utils.constant.fontFamily.muliSemiBold
    }
  })

function mapStateToProps(state: any){
    const { name, experience, specialities, language, photo, description, table } = state.authReducer;
    return{
        name, 
        experience, 
        specialities, 
        language, 
        photo, 
        description, 
        table
    }
  }
  
  function mapDispatchToProps(dispatch: any){
    return(
      {
        
      }
    )
}
  
export const ProfileScreen = connect( mapStateToProps, mapDispatchToProps)(Profile) 
