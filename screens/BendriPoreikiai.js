import React from 'react'
import { SafeAreaView, View, ScrollView, StyleSheet, Text } from 'react-native';

import { globalStyles } from "./styles";
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from "accordion-collapse-react-native";

const NEEDS = [
    { title: 'Fizinė gerovė', elements: ['Oras', 'Šviesa', 'Mityba', 'Vanduo', 'Šiluma', 'Poilsis', 'Miegas', 'Sveikata', 'Pastogė', 'Prieglobstis', 'Judėjimas', 'Fiziniai pratimai' ]  },
    { title: 'Prisilietimas', elements: ['Seksualinė išraiška', 'Saugumas', 'Komfortas', 'Emocinis saugumas', 'Apsauga nuo skausmo', 'Išsaugojimas', 'Tausojimas' ]  },
    { title: 'Harmonija', elements: ['Taika', 'Grožis', 'Ramybė', 'Rimtis', 'Pusiausvyra', 'Atsipalaidavimas', 'Tyla', 'Tvarka', 'Lengvumas', 'Tvarumas', 'Darna', 'Kongruencija', 'Lygybė', 'Balansas', 'Stabilumas' ,'Integracija', 'Suvokimas', 'Vientisumas', 'Užbaigtumas', 'Nuspėjamumas', 'Familiarumas', 'Teisingumas', 'Sąžiningumas'  ]  },
    { title: 'Ryšys', elements: ['Meilė', 'Meilė sau', 'Rūpestis', 'Rūpestis savimi', 'Priklausymas', 'Artumas', 'Intymumas', 'Prieraišumas', 'Empatija', 'Atjauta', 'Dėkingumas', 'Įvertinimas', 'Pripažinimas', 'Priėmimas', 'Nuraminimas', 'Dėmesys', 'Atvirumas', 'Pasitikėjimas', 'Komunikacija', 'Pagarba', 'Dalijimasis', 'Mainai', 'Davimas', 'Gavimas', 'Švelnumas', 'Meilumas' , 'Jautrumas' , 'Gerumas', 'Matyti ir būti matomu', 'Girdėti ir būti išgirstu', 'Suprasti ir būti suprastu', 'Mano poreikių pripažinimas', 'Atidumas', 'Puoselėjimas', 'Dalyvavimas', 'Įsitraukimas', 'Parama', 'Pagalba', 'Savitarpiškumas', 'Bendradarbiavimas', 'Partnerystė', 'Bendrystė', 'Bičiulystė', 'Draugystė', 'Abipusiškumas', 'Nuoseklumas', 'Tęstinumas'  ]  },
    { title: 'Prasmė', elements: ['Gyvenimo praturtinimas', 'Buvimas', 'Susitelkimas', 'Ryšys su savimi', 'Susikaupimas', 'Viltis', 'Vizija', 'Svajojimas', 'Tikėjimas', 'Aiškumas', 'Žinojimas (realybės matymas)', 'Mokymasis', 'Suvokimas', 'Sąmoningumas', 'Paprastumas', 'Įkvėpimas', 'Kūrybiškumas', 'Iššūkis', 'Stimuliacija', 'Augimas', 'Evoliucija', 'Progresas', 'Pažanga', 'Plėtra', 'Vystymas', 'Tyrinėjimas', 'Jėga', '(Vidinė) Stiprybė', 'Kompetencija', 'Gebėjimas', 'Įgalinimas', 'Savivertė', 'Orumas', 'Pasitikėjimas savimi', 'Savigarba', 'Efektyvumas', 'Veiksmingumas', 'Rūpėti', 'Dalyvauti', 'Tikslas', 'Turėti savo vietą pasaulyje', 'Dvasingumas', 'Išsilaisvinimas', 'Transformacija', 'Virsmas', 'Tarpusavio susiejimas', 'Šventimas', 'Gedėjimas'  ]  },
    { title: 'Atvirumas', elements: ['Autentiškumas', 'Saviraiška', 'Vientisumas', 'Skaidrumas', 'Tikrumas', 'Tiesa']  },
    { title: 'Žaidimas', elements: ['Gyvumas', 'Žvalumas', 'Gyvybingumas', 'Judrumas', 'Tekmė', 'Aistra', 'Linksmybės', 'Spontaniškumas', 'Lengvumas', 'Humoras', 'Juokas', 'Įvairovė', 'Atradimas', 'Nuotykis', 'Atsinaujinimas', 'Atgaiva']  },
  ];




  const elementItem = (item) => {
    return (
      <View style={globalStyles.cardContent}   key={item}>
        <Text style={styles.titleSubSub} >{item}</Text>
      </View>

    )
   
  };

  const renderItem = (item) => (
    <Collapse key={item.title}>
  
      <CollapseHeader  >
      <View style={globalStyles.card}>
        <View style={globalStyles.cardContent}  >
          <Text style={globalStyles.titleText} >{item.title}</Text>
        </View>
        </View>
      </CollapseHeader>
      <CollapseBody  >
            {item.elements.map((el) => elementItem(el) )}
      </CollapseBody>
    </Collapse>
  );

export default function BendriPoreikiai() {
    return (
      <View style={globalStyles.container}>
      <ScrollView>
             {NEEDS.map(renderItem)}
        </ScrollView>
        </View>
      );
}

const styles = StyleSheet.create({
  titleSub: {
    fontSize: 17,
        fontFamily: 'nunito-regular',

  },
  titleSubSub: {
    fontSize: 17,
    marginBottom: 4,
    borderColor: 'black',
    borderStyle: 'dashed',
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    fontFamily: 'nunito-regular'
  },
});

