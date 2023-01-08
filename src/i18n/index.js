import Vue from 'vue'

import VueI18n from 'vue-i18n';
Vue.use(VueI18n);

const messages = {
  sk: {
    header: {
      pos1: 'O mne',
      pos2: 'Vzdelanie',
      pos3: 'Znalosti a zručnosti',
      pos4: 'Záľuby',
      pos5: 'Portfólio',
      pos6: 'Kontakt',
      smtoolbar: {
        t1: 'Pár informácií o mne',
        t2: 'Dosiahnuté vzdelanie',
        t3: 'Môj skill',
        t4: 'Moje koníčky',
        t5: 'Moje práce',
        t6: 'Pošli mi správu',
      },
      cv: {
        t1: 'Otvoriť CV',
        t2: 'Stiahnúť CV',
      },
      theme: {
        t1: 'Vypnúť svetlo',
        t2: 'Zapnúť svetlo'
      }
    },
    section1: {
      title: ''
    },
    section2: {
      title: 'Vzdelanie',
      schools: {
        first: {
          type: 'Vysokoškolské vzdelanie II. stupňa',
          name: 'Technická univerzita v Košiciach, Fakulta elektrotechniky a informatiky',
          study_department: 'Študijný odbor: Informatika',
          type_of_work: 'Diplomová práca: Decentralizovaná sociálna sieť',
        },
        second: {
          type: 'Vysokoškolské vzdelanie I. stupňa',
          name: 'Technická univerzita v Košiciach, Fakulta elektrotechniky a informatiky',
          study_department: 'Študijný odbor: Informatika',
          type_of_work: 'Bakalárska práca:  Teplomer s monitorovacou aplikáciou pre Android'
        },
        third: {
          type: 'Stredoškolské vzdelanie',
          name: 'Stredná priemyselná škola elektrotechnická v Košiciach',
          study_department: 'Študijný odbor: Technické lýceum',
          type_of_work: 'SOČ: Inteligentný dom s web rozhraním'
        },
      }
    },
    section3: {
      title: 'Znalosti a zručnosti',
      second: {
        skills1: 'Anglický jazyk',
        skills2: 'Nemecký jazyk',
        skills3: 'Vodičský preukaz'
      },
      third: {
        skills1: 'Komunikačné schopnosti',
        skills2: 'Kreativita',
        skills3: 'Flexibilita',
        skills4: 'Medziľudské vzťahy',
        skills5: 'Zodpovednosť',
        skills6: 'Tímová práca',
        skills7: 'Riadenie času',
      }
    },
    section4: {
      title: 'Záľuby',
      first: {
        number1: 'videohry',
        number2: 'Hudba',
        number3: 'Filmy a seriály',
      },
      second: {
        number1: 'Futbal',
        number2: 'Posilňovanie',
        number3: 'Korčuľovanie',
      },
      third: {
        number1: 'Rybolov',
        number2: 'Plávanie',
        number3: 'Bicyklovanie',
      },
      fourth: {
        number1: 'Varenie',
        number2: 'Pestovanie',
        number3: 'Turistika',
      },
    },
    section5: {
      title: 'Portfólio',
      text: 'Viac informácií',
      dialog1: {
        text: 'Decentralizovaná sociálna sieť',
      },
      dialog2: {
        text: 'Byšta',
      },
      dialog3: {
        text: 'OpenLab',
      },
      dialog4: {
        text: 'Parser',
      },
    },
    section6: {
      title: 'Kontakt',
      form: {
        name: 'Meno',
        email: 'E-mail',
        msg: 'Správa',
        validate: {
          name: {
            n1: 'Meno je povinné',
            n2: 'Meno musí byť kratšie ako 20 znakov',
          },
          email: {
            n1: 'E-mail je povinný',
            n2: 'E-mail musí mať platný tvar',
          },
          msg: {
            n1: 'Správa je povinná',
            n2: 'Správa môže obsahovať maximálne 1000 znakov',
          }
        }
      },
      buttons: {
        n1: 'Odoslať formulár',
        n2: 'Resetovať formulár'
      },
      snackbar: {
        succ: 'Správa bola úspešne odoslaná.',
        err: 'Niečo sa pokazilo.',
      },
      bottompart: {
        t1: 'Vytvorené',
        t2: '',
        t3: 'Jaroslavom Balentom'
      },
      dialog: {
        title: 'Je zadaný email správny?',
        t1: 'Vážený',
        t2: 'prosím Vás, aby Ste si skontrolovali správnosť emailovej adresy',
        t3: 'zadanej vo formulári. Ak je zadaná emailová adresa správna, potvrďte to kliknutím na tlačidlo "Potvrdiť". Ak zadaná emailová adresa nie je správna, prosím o úpravu kliknutím na tlačidlo "Upraviť"".',
        t4: 'V prípade zadania nesprávnej emailovej adresy nebude možné odpovedať na Vašu správu!',
        buttons: {
          n1: 'Upraviť',
          n2: 'Potvrdiť'
        },
      },
    },
  },

  en: {
    header: {
      pos1: 'About me',
      pos2: 'Education',
      pos3: 'Knowledge and skills',
      pos4: 'Hobbies',
      pos5: 'Portfolio',
      pos6: 'Contact',
      smtoolbar: {
        t1: 'Some information about me',
        t2: 'Achieved education',
        t3: 'My skill',
        t4: 'My hobbies',
        t5: 'My work',
        t6: 'Send me a message',
      },
      cv: {
        t1: 'Open CV',
        t2: 'Download CV',
      },
      theme: {
        t1: 'Turn off the light',
        t2: 'Turn on the light'
      }
    },
    section1: {
      title: ''
    },
    section2: {
      title: 'Education',
      schools: {
        first: {
          type: 'Higher education II. degree',
          name: 'Technical University of Košice, Faculty of Electrical Engineering and Informatics',
          study_department: 'Study Department: Computer Science',
          type_of_work: 'Thesis: Decentralized Social Network',
        },
        second: {
          type: 'First degree university education',
          name: 'Technical University of Košice, Faculty of Electrical Engineering and Informatics',
          study_department: 'Study Department: Computer Science',
          type_of_work: 'Bachelor thesis: Thermometer with monitoring application for Android'
        },
        third: {
          type: 'Secondary education',
          name: 'Secondary Industrial School of Electrical Engineering in Košice',
          study_department: 'Study Department: Technical Lyceum',
          type_of_work: 'SPA: Intelligent house with web interface'
        },
      }
    },
    section3: {
      title: 'Knowledge and skills',
      second: {
        skills1: 'English language',
        skills2: 'German language',
        skills3: 'Driving license'
      },
      third: {
        skills1: 'Communication skills',
        skills2: 'Creativity',
        skills3: 'Flexibility',
        skills4: 'Interpersonal relations',
        skills5: 'Responsibility',
        skills6: 'Teamwork',
        skills7: 'Time management',
      }
    },
    section4: {
      title: 'Hobbies',
      first: {
        number1: 'video games',
        number2: 'Music',
        number3: 'Movies and series',
      },
      second: {
        number1: 'Football',
        number2: 'Strengthening',
        number3: 'Skating',
      },
      third: {
        number1: 'Fishing',
        number2: 'Swimming',
        number3: 'Cycling',
      },
      fourth: {
        number1: 'Cooking',
        number2: 'Cultivation',
        number3: 'Tourism',
      },
    },
    section5: {
      title: 'Portfolio',
      text: 'More information',
      dialog1: {
        text: 'Decentralized social network',
      },
      dialog2: {
        text: 'Byšta',
      },
      dialog3: {
        text: 'OpenLab',
      },
      dialog4: {
        text: 'Parser',
      },
    },
    section6: {
      title: 'Contact',
      form: {
        name: 'Name',
        email: 'E-mail',
        msg: 'Message',
        validate: {
          name: {
            n1: 'Name is required',
            n2: 'Name must be shorter than 20 characters',
          },
          email: {
            n1: 'E-mail is required',
            n2: 'E-mail must have a valid form',
          },
          msg: {
            n1: 'Message is mandatory',
            n2: 'Message can contain a maximum of 1000 characters',
          }
        }
      },
      buttons: {
        n1: 'Submit form',
        n2: 'Reset form'
      },
      snackbar: {
        succ: 'The message was sent successfully.',
        err: 'Something went wrong.',
      },
      bottompart: {
        t1: 'Made',
        t2: 'by',
        t3: 'Jaroslav Balent'
      },
      dialog: {
        title: 'Is the entered email correct?',
        t1: 'Dear',
        t2: 'please check the correctness of your email address',
        t3: 'entered in the form. If the entered email address is correct, confirm it by clicking the "Confirm" button. If the entered email address is incorrect, please edit it by clicking the "Edit" button.',
        t4: 'If you enter an incorrect email address, it will not be possible to reply to your message!',
        buttons: {
          n1: 'Edit',
          n2: 'Confirm'
        },
      }
    },
  }
};

const i18n = new VueI18n({
  locale: localStorage.getItem('language'),
  messages
});

export default i18n