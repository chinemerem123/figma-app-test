import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Button, Icon } from "@ui-kitten/components";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Onboarding = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.onboarding}>
      <Text
        style={[styles.getStarted, styles.getStartedFlexBox]}
        numberOfLines={1}
      >
        Get started
      </Text>
      <Text
        style={[styles.welcomeToToys, styles.welcomeToToysPosition]}
      >{`Welcome to 
toys delivery`}</Text>
      <Text style={[styles.giveYourBeloved, styles.welcomeToToysPosition]}>
        Give your beloved one a smile within a few hours.
      </Text>
      <Button
        style={[styles.continueButton, styles.continueLayout]}
        size="small"
        status="control"
        appearance="filled"
        accessoryRight={<Icon name="arrow-right" pack="material" />}
        onPress={() => navigation.navigate("Home")}
      >
        <View
          style={[styles.continueButtonChild, styles.rectangleParentPosition]}
        />
        <Image
          style={styles.combinedShapeIcon}
          contentFit="cover"
          source={require("../assets/combined-shape.png")}
        />
      </Button>
      <View style={[styles.rectangleParent, styles.rectangleParentPosition]}>
        <View style={styles.groupChild} />
        <Image
          style={[styles.rectangleParent, styles.rectangleParentPosition]}
          contentFit="cover"
          source={require("../assets/deliver.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  getStartedFlexBox: {
    alignItems: "center",
    display: "flex",
  },
  welcomeToToysPosition: {
    left: 39,
    textAlign: "left",
    color: Color.colorGray_200,
    fontFamily: FontFamily.poppins,
    position: "absolute",
  },
  continueLayout: {
    height: 70,
    width: 67,
  },
  rectangleParentPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  getStarted: {
    top: 806,
    left: 40,
    fontSize: FontSize.size_xl,
    width: 132,
    textAlign: "left",
    color: Color.colorGray_200,
    fontFamily: FontFamily.poppins,
    alignItems: "center",
    display: "flex",
    fontWeight: "300",
    position: "absolute",
  },
  welcomeToToys: {
    top: 572,
    fontSize: 32,
    lineHeight: 40,
    fontWeight: "500",
    width: 335,
    alignItems: "center",
    display: "flex",
  },
  giveYourBeloved: {
    top: 672,
    fontSize: 16,
    lineHeight: 20,
    width: 247,
    fontWeight: "300",
    left: 39,
  },
  continueButtonChild: {
    borderRadius: Border.br_xl,
    backgroundColor: "#a69cf1",
    height: 70,
    width: 67,
  },
  combinedShapeIcon: {
    height: "32.9%",
    width: "41.79%",
    top: "34.33%",
    right: "28.36%",
    bottom: "32.76%",
    left: "29.85%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  continueButton: {
    top: 786,
    left: 307,
    position: "absolute",
  },
  groupChild: {
    top: 16,
    left: 16,
    borderRadius: 26,
    backgroundColor: "#e5d7f9",
    width: 382,
    height: 453,
    position: "absolute",
  },
  rectangleParent: {
    width: 414,
    height: 542,
  },
  onboarding: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default Onboarding;
