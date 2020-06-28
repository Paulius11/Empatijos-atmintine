import React, { useState } from "react";
import { View, Text, StyleSheet, Modal, TouchableOpacity } from "react-native";
import {
  AntDesign,
  MaterialCommunityIcons,
  Entypo,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";
import { globalStyles } from "./styles";
import Card from "../shared/Card";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

function NVCModel() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalText, setModalText] = useState("");

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="slide" transparent={true}>
        <View style={{ ...globalStyles.container, ...{} }}>
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              // backgroundColor: 'blue'
            }}
            onPress={() => setModalOpen(false)}
          ></TouchableOpacity>

          <View
            style={{
              flex: 1.5,
              // alignItems: 'center',
              justifyContent: "flex-start",
              // backgroundColor: 'red'
            }}
          >
            <MaterialIcons
              name="close"
              size={29}
              style={{
                ...styles.modalToggle,
                ...{
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 22,
                },
              }}
              onPress={() => setModalOpen(false)}
            />
            <Text style={styles.modalText}>{modalText}</Text>
          </View>
        </View>
      </Modal>

      <TouchableOpacity
        onPress={() => {
          setModalOpen(true);
          setModalText(
            "Kas įvyko, be prielaidų ar interpretacijų - kitaip tariant realybės suvokimas per pojūčius. Kokia buvo vaizdinė, garsinė, jausminė, skonio ar lytėjimo informacija.  "
          );
        }}
      >
        <Card title="Pastebėjimas">
          <AntDesign name="eye" size={24} color="black" />
        </Card>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setModalOpen(true);
          setModalText(
            "Atsakas/reakciją į tai, kas įvyko, kurią pavadinkime judančia energija emociniame kūne."
          );
        }}
      >
        <Card title="Jausmas">
          <MaterialCommunityIcons
            name="heart-multiple"
            size={24}
            color="black"
          />
        </Card>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setModalOpen(true);
          setModalText(
            "Vidiniai norai, troškimai, kurie siekia pasireikšti ar būti pripažintais - kitaip tariant mūsų vidinės priežastys veikti."
          );
        }}
      >
        <Card title="Poreikis">
          <Entypo name="direction" size={24} color="black" />
        </Card>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setModalOpen(true);
          setModalText(
            "Pasiūlymas imtis konkrečių veiksmų, kurie patenkintų svarbius poreikius."
          );
        }}
      >
        <Card title="Prašymas">
          <FontAwesome5 name="praying-hands" size={24} color="black" />
        </Card>
      </TouchableOpacity>
    </View>
  );
}

function Blocks() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalText, setModalText] = useState("");
  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="slide" transparent={true}>
        <View style={{ ...globalStyles.container, ...{} }}>
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              // backgroundColor: 'blue'
            }}
            onPress={() => setModalOpen(false)}
          ></TouchableOpacity>

          <View
            style={{
              flex: 1.5,
              // alignItems: 'center',
              justifyContent: "flex-start",
              // backgroundColor: 'red'
            }}
          >
            <MaterialIcons
              name="close"
              size={29}
              style={{
                ...styles.modalToggle,
                ...{
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 22,
                },
              }}
              onPress={() => setModalOpen(false)}
            />
            <Text style={styles.modalText}>{modalText}</Text>
          </View>
        </View>
      </Modal>

      <TouchableOpacity
        onPress={() => {
          setModalOpen(true);
          setModalText(
            "Kaltinimai, Įžeidinėjimai, Etikėčiu klijavimas, Kritika, Vertinimas."
          );
        }}
      >
        <Card title="Vertinimas">
          <AntDesign
            name={["dislike2", "like2"][Math.round(Math.random())]}
            size={24}
            color="black"
          />
        </Card>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setModalOpen(true);
          setModalText(
            "Mes kiekvienas esame atsakingi už savo mintis, jausmus ir veiksmus."
          );
        }}
      >
        <Card title="Atsakomybės neprisiimimas">
          <Entypo name="users" size={24} color="black" />
        </Card>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setModalOpen(true);
          setModalText(
            "Prielaida, kad tam tikri veiksmai nusipelno būti apdavanoti, o kiti nubausti."
          );
        }}
      >
        <Card title="Nuopelnais nukreipta kalba">
          <MaterialCommunityIcons
            name="diamond-stone"
            size={24}
            color="black"
          />
        </Card>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setModalOpen(true);
          setModalText(
            "Prielaida, kad nėra kito pasirinkimo. Tokie žodžiai kaip: turi, privalai, būtina...."
          );
        }}
      >
        <Card title="Reikalavimai">
          <FontAwesome5 name="hand-point-right" size={24} color="black" />
        </Card>
      </TouchableOpacity>
    </View>
  );
}

function Log() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Log!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

export default function Modelis() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator>
        <Tab.Screen
          name="NVCModel"
          component={NVCModel}
          options={{
            tabBarLabel: "NVC Modelis",
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="smileo" size={size} color="green" />
            ),
          }}
        />

        <Tab.Screen
          name="Blocks"
          component={Blocks}
          options={{
            tabBarLabel: "Blokai",
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="frowno" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    alignSelf: "center",
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 15,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 5,
    elevation: 2,
  },
  modalText: {
    fontSize: 17,
    textAlign: "justify",
    lineHeight: 25,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
