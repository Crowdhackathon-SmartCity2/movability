[![N|Solid](https://zogasmybio.000webhostapp.com/Movability/sLogo.png)](https://zogasmybio.000webhostapp.com/Movability/)

Το movability είναι μία εφαρμογή που δημιουργηθηκε για τη διευκόλυση της μετακίνησης των πολιτών με κινητικές δυσκολίες όπως:
  - ΑμεΑ
  - Γονείς με παιδιά (που κυκλοφορούν με παιδικό-καροτσάκι)
  - Ηλικιωμένοι
# Λίγα λόγια για το project
Το project αυτό έχει αναπτυχθεί με την τεχνολογία React Native, έχει χρησιμοποιειθεί javascript, Google maps API καθώς και ένα [API](https://github.com/Crowdhackathon-SmartCity2/movability-webpage/tree/master/Desktop/gitporject/ReactAPI) που αναπτύξαμε για την καταχώρηση διαφόρων στοιχείων

# Πώς μπορεί να τρέξει (For Windows)

1. Κατεβάζουμε την [node](https://nodejs.org/en/download/) και την εγκαθηστούμε
2. Τοποθετούμε τα αρχεία σε έναν φάκελο πχ.MyReactProjects
3. Ανοίγουμε το cmd και ανακατευθυνόμαστε στον φάκελο που έχουμε φτιάξει
```
cd MyReactProjects
```
4. Τρέχουμε την εντολή 
```
npm install -g create-react-native-app
```
5. Τέλος Τρέχουμε τον παρακάτω κώδικα γραμμή γραμμή
```
npm install react-native-table-component
npm i react-native-swiper --save
npm i react-native-swipe-gestures
npm install react-native-maps-directions
npm install react-native-maps
npm install react-navigation --save
npm install react-native-simple-table --save
npm install react-native-table-component
```
6. Εγκαθηστούμε στο κινιτό μας το [expo](https://expo.io)
7. Τρέχουμε στον φάκελο που δημιουργήσαμε πριν την εντολή
```
npm start
```
[![N|Solid](https://user-images.githubusercontent.com/14971968/30291220-c6fdef38-96f7-11e7-98d3-3b5952f56bfd.png)](https://user-images.githubusercontent.com/14971968/30291220-c6fdef38-96f7-11e7-98d3-3b5952f56bfd.png)
8. Μέσω της εφαρμογής σκανάρουμε το Qbarcode και περιμένουμε να κάνει build (Τόσο ο υπολογιστής όσο και το κινιτό πρέπει να είναι συνδεμένα στο ίδιο δύκτιο)
Πολλές φορές στα Windows χρειάζεται να απενεργοποιηθεί και το WindowsDiffender

# Τι κάνει η εφαρμογή;
Η εφαρμογή περιέχει 6 κύριες οθόνες (Την οθόνη καλωσορίσματος, την οθόνη προβολής ραμπών πάνω στον χάρτη, την οθόνη αναφοράς ραμπας που έχει πρόβλημα ο χρήστης, την Πλοήγηση, την κατάταξη των πόλεων και την εισαγωγή νέας ράμπας) όπως απεικονίζονται παρακάτω
### Oθόνες Kαλωσορίσματος
[![N|Solid](http://zogasmybio.000webhostapp.com/Screenshots/1.jpg)](http://zogasmybio.000webhostapp.com/Screenshots/1.jpg)

[![N|Solid](http://zogasmybio.000webhostapp.com/Screenshots/2.jpg)](http://zogasmybio.000webhostapp.com/Screenshots/2.jpg)

[![N|Solid](http://zogasmybio.000webhostapp.com/Screenshots/3.jpg)](http://zogasmybio.000webhostapp.com/Screenshots/3.jpg)

[![N|Solid](http://zogasmybio.000webhostapp.com/Screenshots/4.jpg)](http://zogasmybio.000webhostapp.com/Screenshots/4.jpg)

[![N|Solid](http://zogasmybio.000webhostapp.com/Screenshots/5.jpg)](http://zogasmybio.000webhostapp.com/Screenshots/5.jpg)

### Οθόνη προβολής ραμπών πάνω στον χάρτη

[![N|Solid](http://zogasmybio.000webhostapp.com/Screenshots/6.jpg)](http://zogasmybio.000webhostapp.com/Screenshots/6.jpg)

### Οθόνη αναφοράς ραμπας που έχει πρόβλημα ο χρήστης

[![N|Solid](http://zogasmybio.000webhostapp.com/Screenshots/7.jpg)](http://zogasmybio.000webhostapp.com/Screenshots/7.jpg)

### Πλοήγηση

[![N|Solid](http://zogasmybio.000webhostapp.com/Screenshots/12.jpg)](http://zogasmybio.000webhostapp.com/Screenshots/12.jpg)

### Κατάταξη των πόλεων και την εισαγωγή νέας ράμπας

[![N|Solid](http://zogasmybio.000webhostapp.com/Screenshots/13.jpg)](http://zogasmybio.000webhostapp.com/Screenshots/13.jpg)

### Εισαγωγή νέας ράμπας

[![N|Solid](http://zogasmybio.000webhostapp.com/Screenshots/14.jpg)](http://zogasmybio.000webhostapp.com/Screenshots/14.jpg)

# Μπορεί κάποιος να χρησιμοποιήσει τον κώδικα;
Φυσικά! Η εφαρμογή μπορεί να έχει μερικά προβλήματα τα οποία μπορεί κάποιος να θέλει να τα λύσει ή να χρησιμοποιήσει τον κώδικα για την ανάπτυξη ενος νέου project με επιπλέον δυνατότητες

# Περιθώρια ανάπτυξης

- Πλοήγηση χρηστών με βάση την δυσκολία των ραμπών
- Εμφάνιση εναλακτικών διαδρομών
- Λήψη φωτογραφία κατα την αναφορά
- Αναφορά συγκεκριμένης Ράμπας έπειτα απο επιλογή στον χάρτη
