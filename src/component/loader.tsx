import React, { memo } from 'react';
import { View, ActivityIndicator, StyleSheet } from "react-native";
import Utils from "../utils";
export default memo(function loader() {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="small" color={Utils.color.primaryColor} />
        </View>
    )
})
const styles  = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: "center",
      alignItems: 'center',
      backgroundColor: Utils.color.transparent,
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    }
})
