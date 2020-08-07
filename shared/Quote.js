import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from "accordion-collapse-react-native";

import { MaterialIcons } from "@expo/vector-icons";

// Basic assumptions
const basicAssumptions = [
  {
    assumption: "Visi žmonės turi tuos pačius esminius poreikius.",
    description:
      "Mes visi turim tuos pačius poreikius, nors strategijos, kurias naudojam, kad patenkintume tuos poreikius, gali skirtis. Konfliktai nutinka strategijų, o ne poreikių lygmeny.",
  },
  {
    assumption: "Visi veiksmai yra bandymai patenkinti poreikius.",
    description:
      "Mūsų troškimas patenkinti poreikius, sąmoningas ar ne, yra visų mūsų veiksmų pagrindas. Mes pasitelkiame smurtą ar kitokius veiksmus neatitinkančius (mūsų ar kitų žmonių) poreikių tik tada, kai neatpažįstame veiksmingesnių strategijų.",
  },
  {
    assumption:
      "Jausmai nurodo į tai, kad poreikiai yra patenkinti arba nepatenkinti.",
    description:
      "Kitų žmonių veiksmai gali aktyvuoti jausmus, bet jie nėra jausmų priežastis. Jausmai kyla tiesiogiai iš to, ar mums mūsų poreikiai atrodo patenkinti ar ne. Mūsų poreikių patenkinimo įvertinimas, beveik visada, yra paremtas interpretacija ar įsitikinimu. Kai mūsų poreikiai patenkinti, mes galime jaustis laimingi, patenkinti, ramūs ir t.t. Kai jie nepatenkinti, mes galime jaustis liūdni, išsigandę, nusivylę ir t.t.",
  },
  {
    assumption: "Tiesiausias kelias į vidinę taiką yra per ryšį su savimi.",
    description:
      "Mūsų gebėjimas pasiekti vidinę taiką nepriklauso nuo mūsų poreikių patenkinimo. Net tada, kai daugelis poreikių nepatenkinti, vidinei taikai gali pakakti, jei užmegsim ryšį su savimi.",
  },
  {
    assumption: "Pasirinkimas yra vidinis procesas.",
    description:
      "Nepriklausomai nuo aplinkybių, mes galime patenkinti savo autonomijos poreikį, darydami sąmoningą pasirinkimą, pagrįstą poreikių suvokimu.",
  },
  {
    assumption: "Visi žmonės gali atjausti.",
    description:
      "Mes turime įgimtą atjautos gebėjimą, nors ne visada žinome, kaip jį pasiekti. Kai mums atjaučia ir gerbia mūsų pasirinkimo laisvei, mums tampa lengviau atjausti ir save, ir kitus. Auganti atjauta tiesiogiai prisideda prie mūsų gebėjimo tenkinti poreikius taikiai.",
  },
  {
    assumption: "Žmonės mėgsta dalintis.",
    description:
      "Mes iš prigimties mėgstame padėti kitiems, kai esam užmezgę ryšį su savo ir kitų poreikiais ir suvokiame, kad patys pasirenkame duoti.",
  },
  {
    assumption: "Per tarpusavio santykius žmonės tenkina poreikius.",
    description:
      "Mes tenkiname daugybę mūsų poreikių per santykius su kitais žmonėmis ir su gamta, nors dalis poreikių iš esmės yra patenkinami per mūsų santykį su savimi, o kai kurie kiti per dvasinio gyvenimo aspektus. Kai kitų poreikiai nepatenkinami, dalis mūsų poreikių taip pat lieka nepatenkinti.",
  },
  {
    assumption: "Mūsų pasaulyje yra pakankamai išteklių poreikių patenkinimui.",
    description:
      "Kai žmonės bus pasiryžę vertinti kiekvieno poreikius ir bus atgavę ryšio palaikymo bei kūrybiško išteklių dalijimosi įgūdžius, galėsime įveikti mūsų dabartinę vaizduotės krizę ir rasti būdų, kaip atsižvelgti į kiekvieno pagrindinius poreikius.",
  },
  {
    assumption: "Žmonės keičiasi.",
    description:
      " Tiek mūsų poreikiai, tiek ir jų tenkinimo strategijos laikui bėgant keičiasi. Kur mes bebūtume dabartiniu metu, atskirai ar kartu, visi žmonės geba augti ir keistis.",
  },
];

const getQuote = (quoteList) => {
  return quoteList[Math.floor(Math.random() * quoteList.length)];
};

const getSubElement = (quoteList) => {
  return [getQuote(quoteList).assumption, getQuote(quoteList).description];
};

const Quote = () => {
  const [randQuate, setRandQuate] = useState(getSubElement(basicAssumptions));

  return (
    <View>
      <TouchableOpacity
        onPress={() => setRandQuate(getSubElement(basicAssumptions))}
        style={styles.cardContent}
      >
        <Text style={styles.author}>- NVC prielaidos</Text>

        <MaterialIcons name="refresh" size={15} />
      </TouchableOpacity>
      <View style={styles.card}>
        <Collapse>
          <CollapseHeader>
            <View style={styles.mainText}>
              <Text style={styles.quote}>{randQuate[0]}</Text>
              <MaterialIcons name="more-horiz" size={29} />
            </View>
          </CollapseHeader>
          <CollapseBody>
            <View style={styles.subCard}>
              <View style={styles.cardContent}>
                <Text style={styles.quote}>{randQuate[1]}</Text>
              </View>
            </View>
          </CollapseBody>
        </Collapse>
      </View>
    </View>
  );
};

export default Quote;

const styles = StyleSheet.create({
  card: {
    borderRadius: 4,
    backgroundColor: "#feff99",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    // marginHorizontal: 4,
    // marginVertical: 6,
    marginBottom: 24,
    shadowRadius: 3.84,
    elevation: 5,
  },

  subCard: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "black",
    borderStyle: "dashed",
    backgroundColor: "#99cbff",
  },

  mainText: {
    margin: 15,
    alignItems: "center",
  },
  cardContent: {
    flexDirection: "row",
    marginHorizontal: 18,
    marginVertical: 8,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  quote: {
    marginBottom: 5,
    textAlign: "justify",
    letterSpacing: 1,
  },
  author: {
    fontStyle: "italic",
  },
});
