import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
} from "react-native";
import {
  AntDesign,
  MaterialCommunityIcons,
  Entypo,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";
import { globalStyles } from "./styles";
import Card from "../shared/Card";

export default function Modelis() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalText, setModalText] = useState("");

//   const data = [
//     {
//       title: "Pastebėjimas",
//       description:
//         "Kas įvyko, be prielaidų ar interpretacijų - kitaip tariant realybės suvokimas per pojūčius. Kokia buvo vaizdinė, garsinė, jausminė, skonio ar lytėjimo informacija.",
//     },
//     {
//         title: "Jausmas",
//         description:
//         "Atsakas/reakciją į tai, kas įvyko, kurią pavadinkime judančia energija emociniame kūne "    
//       },
//       {
//         title: "Poreikis",
//         description:
//         "Vidiniai norai, troškimai, kurie siekia pasireikšti ar būti pripažintais - kitaip tariant mūsų vidinės priežastys veikti."
//       },
//       {
//         title: "Prašymas",
//         description:
//         "Pasiūlymas imtis konkrečių veiksmų, kurie patenkintų svarbius poreikius."   
//       },
//   ];


  return (

    <View style={globalStyles.container}>
      
      <Modal 
        visible={modalOpen}   
        animationType='slide'
        transparent={true}
      >
        <View style={{...globalStyles.container, ...{}}}>
          
        <TouchableOpacity style={{
            flex: 1, 
            alignItems: 'center',
            justifyContent: 'center', 
            // backgroundColor: 'blue'
           }} onPress={() => setModalOpen(false)}> 
        </TouchableOpacity>

          <View style={{
            flex: 1.5, 
            // alignItems: 'center',
            justifyContent: 'flex-start', 
            // backgroundColor: 'red'
           }}>
             <MaterialIcons
            name="close"
            size={29}
            style={{ ...styles.modalToggle, ...{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 22

            }}}
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
    elevation: 2
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
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
});
