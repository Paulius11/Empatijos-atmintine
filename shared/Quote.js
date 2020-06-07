import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


// Basic assumptions
const basicAssumptions = [
    { assumption: "Visi žmonės turi tuos pačius esminius poreikius.", description: "" },
    { assumption: "Visi veiksmai yra bandymai patenkinti poreikius.", description: "" },
    { assumption: "Jausmai nurodo į tai, kad poreikiai yra patenkinti arba nepatenkinti.", description: "" },
    { assumption: "Tiesiausias kelias į vidinę taiką yra per ryšį su savimi.", description: "" },
    { assumption: "Pasirinkimas yra vidinis procesas.", description: "" },
    { assumption: "Visi žmonės gali atjausti.", description: "" },
    { assumption: "Žmonės mėgsta dalintis.", description: "" },
    { assumption: "Per tarpusavio santykius žmonės tenkina poreikius.", description: "" },
    { assumption: "Mūsų pasaulyje yra pakankamai išteklių poreikių patenkinimui.", description: "" },
    { assumption: "Žmonės keičiasi.", description: "" },
  ];



  const getQuote = (quoteList) => {
    return quoteList[Math.floor(Math.random()*quoteList.length)];
  }

  const getSubElement = (quoteList) => {
    return getQuote(quoteList).assumption
  }


const Quote = () => {

    return (
        <View style={styles.card}>
        <View style={styles.cardContent}>
          <Text style={styles.quote}>{getSubElement(basicAssumptions)}</Text>
          <Text style={styles.author}>- NVC prielaidos</Text>
        </View>
      </View>
    )
}

export default Quote

const styles = StyleSheet.create({

    card: {
        borderRadius: 6,
        elevation: 5,
        backgroundColor: '#feff99',
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
        marginBottom: 24
    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 10,
        alignItems: 'center',

    },
    quote: {
        marginBottom: 5

    },
    author: {
        fontStyle: 'italic',
    }

})
