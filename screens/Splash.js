import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Splash = () => {
  return (
    <View style={styles.splash}>
      <View style={styles.groupParent}>
        <Image
          style={styles.groupIcon}
          contentFit="cover"
          source={require("../assets/group.png")}
        />
        <Text style={styles.arizel}>Arizel</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupIcon: {
    width: 95,
    height: 47,
  },
  arizel: {
    fontSize: FontSize.size_21xl,
    fontWeight: "600",
    fontFamily: FontFamily.chillax,
    color: "#000",
    textAlign: "left",
    marginTop: 12,
  },
  groupParent: {
    alignItems: "center",
    justifyContent: "center",
  },
  splash: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
    paddingHorizontal: 151,
    paddingVertical: 0,
    justifyContent: "center",
  },
});

export default Splash;
