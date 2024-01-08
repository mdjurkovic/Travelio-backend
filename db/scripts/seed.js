import { connection } from "mongoose";
import connectDB from "../";
import {
  Continent,
  Country,
  Destination,
  DestinationType,
  Excursion,
  Guider,
  Tour,
} from "../models";

const seed = async () => {
  console.log("Cleaning database");

  await connectDB();
  await connection.dropDatabase();

  console.log("Database clean");

  const Continents = [
    new Continent({ name: "Africa", code: "af" }),
    new Continent({ name: "Asia", code: "as" }),
    new Continent({ name: "Europe", code: "eu" }),
    new Continent({ name: "South America", code: "sa" }),
    new Continent({ name: "North America", code: "na" }),
    new Continent({ name: "Oceania", code: "oc" }),
  ];

  const CountriesMap = new Map([
    ["Afghanistan", new Country({ name: "Afghanistan", continent: "as" })],
    ["Albania", new Country({ name: "Albania", continent: "eu" })],
    ["Algeria", new Country({ name: "Algeria", continent: "af" })],
    ["Andorra", new Country({ name: "Andorra", continent: "eu" })],
    ["Angola", new Country({ name: "Angola", continent: "af" })],
    [
      "Antigua and Barbuda",
      new Country({ name: "Antigua and Barbuda", continent: "na" }),
    ],
    ["Argentina", new Country({ name: "Argentina", continent: "sa" })],
    ["Armenia", new Country({ name: "Armenia", continent: "as" })],
    ["Aruba", new Country({ name: "Aruba", continent: "na" })],
    ["Australia", new Country({ name: "Australia", continent: "oc" })],
    ["Austria", new Country({ name: "Austria", continent: "eu" })],
    ["Azerbaijan", new Country({ name: "Azerbaijan", continent: "as" })],
    ["Bahamas", new Country({ name: "Bahamas", continent: "na" })],
    ["Bahrain", new Country({ name: "Bahrain", continent: "as" })],
    ["Bangladesh", new Country({ name: "Bangladesh", continent: "as" })],
    ["Barbados", new Country({ name: "Barbados", continent: "na" })],
    ["Belarus", new Country({ name: "Belarus", continent: "eu" })],
    ["Belgium", new Country({ name: "Belgium", continent: "eu" })],
    ["Belize", new Country({ name: "Belize", continent: "na" })],
    ["Benin", new Country({ name: "Benin", continent: "af" })],
    ["Bermuda", new Country({ name: "Bermuda", continent: "na" })],
    ["Bhutan", new Country({ name: "Bhutan", continent: "as" })],
    ["Bolivia", new Country({ name: "Bolivia", continent: "sa" })],
    [
      "Bosnia and Herzegovina",
      new Country({ name: "Bosnia and Herzegovina", continent: "eu" }),
    ],
    ["Botswana", new Country({ name: "Botswana", continent: "af" })],
    ["Brazil", new Country({ name: "Brazil", continent: "sa" })],
    ["Brunei", new Country({ name: "Brunei", continent: "as" })],
    ["Bulgaria", new Country({ name: "Bulgaria", continent: "eu" })],
    ["Burkina Faso", new Country({ name: "Burkina Faso", continent: "af" })],
    ["Burundi", new Country({ name: "Burundi", continent: "af" })],
    ["Cambodia", new Country({ name: "Cambodia", continent: "as" })],
    ["Cameroon", new Country({ name: "Cameroon", continent: "af" })],
    ["Canada", new Country({ name: "Canada", continent: "na" })],
    ["Cape Verde", new Country({ name: "Cape Verde", continent: "af" })],
    [
      "Central African Republic",
      new Country({ name: "Central African Republic", continent: "af" }),
    ],
    ["Chad", new Country({ name: "Chad", continent: "af" })],
    ["Chile", new Country({ name: "Chile", continent: "sa" })],
    ["China", new Country({ name: "China", continent: "as" })],
    ["Colombia", new Country({ name: "Colombia", continent: "sa" })],
    ["Comoros", new Country({ name: "Comoros", continent: "af" })],
    ["Congo", new Country({ name: "Congo", continent: "af" })],
    ["Costa Rica", new Country({ name: "Costa Rica", continent: "na" })],
    ["Croatia", new Country({ name: "Croatia", continent: "eu" })],
    ["Cuba", new Country({ name: "Cuba", continent: "na" })],
    ["Cyprus", new Country({ name: "Cyprus", continent: "as" })],
    [
      "Czech Republic",
      new Country({ name: "Czech Republic", continent: "eu" }),
    ],
    ["Denmark", new Country({ name: "Denmark", continent: "eu" })],
    ["Djibouti", new Country({ name: "Djibouti", continent: "af" })],
    ["Dominica", new Country({ name: "Dominica", continent: "na" })],
    [
      "Dominican Republic",
      new Country({ name: "Dominican Republic", continent: "na" }),
    ],
    ["East Timor", new Country({ name: "East Timor", continent: "as" })],
    ["Ecuador", new Country({ name: "Ecuador", continent: "sa" })],
    ["Egypt", new Country({ name: "Egypt", continent: "af" })],
    ["El Salvador", new Country({ name: "El Salvador", continent: "na" })],
    ["England", new Country({ name: "England", continent: "eu" })],
    [
      "Equatorial Guinea",
      new Country({ name: "Equatorial Guinea", continent: "af" }),
    ],
    ["Eritrea", new Country({ name: "Eritrea", continent: "af" })],
    ["Estonia", new Country({ name: "Estonia", continent: "eu" })],
    ["Ethiopia", new Country({ name: "Ethiopia", continent: "af" })],
    [
      "Falkland Islands",
      new Country({ name: "Falkland Islands", continent: "sa" }),
    ],
    ["Faroe Islands", new Country({ name: "Faroe Islands", continent: "eu" })],
    ["Fiji Islands", new Country({ name: "Fiji Islands", continent: "oc" })],
    ["Finland", new Country({ name: "Finland", continent: "eu" })],
    ["France", new Country({ name: "France", continent: "eu" })],
    ["French Guiana", new Country({ name: "French Guiana", continent: "sa" })],
    [
      "French Polynesia",
      new Country({ name: "French Polynesia", continent: "oc" }),
    ],
    ["Gabon", new Country({ name: "Gabon", continent: "af" })],
    ["Gambia", new Country({ name: "Gambia", continent: "af" })],
    ["Georgia", new Country({ name: "Georgia", continent: "as" })],
    ["Germany", new Country({ name: "Germany", continent: "eu" })],
    ["Ghana", new Country({ name: "Ghana", continent: "af" })],
    ["Gibraltar", new Country({ name: "Gibraltar", continent: "eu" })],
    ["Greece", new Country({ name: "Greece", continent: "eu" })],
    ["Greenland", new Country({ name: "Greenland", continent: "na" })],
    ["Grenada", new Country({ name: "Grenada", continent: "na" })],
    ["Guadeloupe", new Country({ name: "Guadeloupe", continent: "na" })],
    ["Guam", new Country({ name: "Guam", continent: "oc" })],
    ["Guatemala", new Country({ name: "Guatemala", continent: "na" })],
    ["Guinea", new Country({ name: "Guinea", continent: "af" })],
    ["Guinea-Bissau", new Country({ name: "Guinea-Bissau", continent: "af" })],
    ["Guyana", new Country({ name: "Guyana", continent: "sa" })],
    ["Haiti", new Country({ name: "Haiti", continent: "na" })],
    ["Honduras", new Country({ name: "Honduras", continent: "na" })],
    ["Hong Kong", new Country({ name: "Hong Kong", continent: "as" })],
    ["Hungary", new Country({ name: "Hungary", continent: "eu" })],
    ["Iceland", new Country({ name: "Iceland", continent: "eu" })],
    ["India", new Country({ name: "India", continent: "as" })],
    ["Indonesia", new Country({ name: "Indonesia", continent: "as" })],
    ["Iran", new Country({ name: "Iran", continent: "as" })],
    ["Iraq", new Country({ name: "Iraq", continent: "as" })],
    ["Ireland", new Country({ name: "Ireland", continent: "eu" })],
    ["Israel", new Country({ name: "Israel", continent: "as" })],
    ["Italy", new Country({ name: "Italy", continent: "eu" })],
    ["Ivory Coast", new Country({ name: "Ivory Coast", continent: "af" })],
    ["Jamaica", new Country({ name: "Jamaica", continent: "na" })],
    ["Japan", new Country({ name: "Japan", continent: "as" })],
    ["Jordan", new Country({ name: "Jordan", continent: "as" })],
    ["Kazakhstan", new Country({ name: "Kazakhstan", continent: "as" })],
    ["Kenya", new Country({ name: "Kenya", continent: "af" })],
    ["Kiribati", new Country({ name: "Kiribati", continent: "oc" })],
    ["Kuwait", new Country({ name: "Kuwait", continent: "as" })],
    ["Kyrgyzstan", new Country({ name: "Kyrgyzstan", continent: "as" })],
    ["Laos", new Country({ name: "Laos", continent: "as" })],
    ["Latvia", new Country({ name: "Latvia", continent: "eu" })],
    ["Lebanon", new Country({ name: "Lebanon", continent: "as" })],
    ["Lesotho", new Country({ name: "Lesotho", continent: "af" })],
    ["Liberia", new Country({ name: "Liberia", continent: "af" })],
    ["Libya", new Country({ name: "Libya", continent: "af" })],
    ["Liechtenstein", new Country({ name: "Liechtenstein", continent: "eu" })],
    ["Lithuania", new Country({ name: "Lithuania", continent: "eu" })],
    ["Luxembourg", new Country({ name: "Luxembourg", continent: "eu" })],
    ["Macao", new Country({ name: "Macao", continent: "as" })],
    [
      "North Macedonia",
      new Country({ name: "North Macedonia", continent: "eu" }),
    ],
    ["Madagascar", new Country({ name: "Madagascar", continent: "af" })],
    ["Malawi", new Country({ name: "Malawi", continent: "af" })],
    ["Malaysia", new Country({ name: "Malaysia", continent: "as" })],
    ["Maldives", new Country({ name: "Maldives", continent: "as" })],
    ["Mali", new Country({ name: "Mali", continent: "af" })],
    ["Malta", new Country({ name: "Malta", continent: "eu" })],
    [
      "Marshall Islands",
      new Country({ name: "Marshall Islands", continent: "oc" }),
    ],
    ["Mauritania", new Country({ name: "Mauritania", continent: "af" })],
    ["Mauritius", new Country({ name: "Mauritius", continent: "af" })],
    ["Mexico", new Country({ name: "Mexico", continent: "na" })],
    ["Micronesia", new Country({ name: "Micronesia", continent: "oc" })],
    ["Moldova", new Country({ name: "Moldova", continent: "eu" })],
    ["Monaco", new Country({ name: "Monaco", continent: "eu" })],
    ["Mongolia", new Country({ name: "Mongolia", continent: "as" })],
    ["Montenegro", new Country({ name: "Montenegro", continent: "eu" })],
    ["Montserrat", new Country({ name: "Montserrat", continent: "na" })],
    ["Morocco", new Country({ name: "Morocco", continent: "af" })],
    ["Mozambique", new Country({ name: "Mozambique", continent: "af" })],
    ["Myanmar", new Country({ name: "Myanmar", continent: "as" })],
    ["Namibia", new Country({ name: "Namibia", continent: "af" })],
    ["Nauru", new Country({ name: "Nauru", continent: "oc" })],
    ["Nepal", new Country({ name: "Nepal", continent: "as" })],
    ["Netherlands", new Country({ name: "Netherlands", continent: "eu" })],
    [
      "Netherlands Antilles",
      new Country({ name: "Netherlands Antilles", continent: "na" }),
    ],
    ["New Caledonia", new Country({ name: "New Caledonia", continent: "oc" })],
    ["New Zealand", new Country({ name: "New Zealand", continent: "oc" })],
    ["Nicaragua", new Country({ name: "Nicaragua", continent: "na" })],
    ["Niger", new Country({ name: "Niger", continent: "af" })],
    ["Nigeria", new Country({ name: "Nigeria", continent: "af" })],
    ["North Korea", new Country({ name: "North Korea", continent: "as" })],
    [
      "Northern Ireland",
      new Country({ name: "Northern Ireland", continent: "eu" }),
    ],
    ["Norway", new Country({ name: "Norway", continent: "eu" })],
    ["Oman", new Country({ name: "Oman", continent: "as" })],
    ["Pakistan", new Country({ name: "Pakistan", continent: "as" })],
    ["Palau", new Country({ name: "Palau", continent: "oc" })],
    ["Palestine", new Country({ name: "Palestine", continent: "as" })],
    ["Panama", new Country({ name: "Panama", continent: "na" })],
    [
      "Papua New Guinea",
      new Country({ name: "Papua New Guinea", continent: "oc" }),
    ],
    ["Paraguay", new Country({ name: "Paraguay", continent: "sa" })],
    ["Peru", new Country({ name: "Peru", continent: "sa" })],
    ["Philippines", new Country({ name: "Philippines", continent: "as" })],
    ["Pitcairn", new Country({ name: "Pitcairn", continent: "oc" })],
    ["Poland", new Country({ name: "Poland", continent: "eu" })],
    ["Portugal", new Country({ name: "Portugal", continent: "eu" })],
    ["Puerto Rico", new Country({ name: "Puerto Rico", continent: "na" })],
    ["Qatar", new Country({ name: "Qatar", continent: "as" })],
    ["Reunion", new Country({ name: "Reunion", continent: "af" })],
    ["Romania", new Country({ name: "Romania", continent: "eu" })],
    [
      "Russian Federation",
      new Country({ name: "Russian Federation", continent: "eu" }),
    ],
    ["Rwanda", new Country({ name: "Rwanda", continent: "af" })],
    ["Saint Helena", new Country({ name: "Saint Helena", continent: "af" })],
    [
      "Saint Kitts and Nevis",
      new Country({ name: "Saint Kitts and Nevis", continent: "na" }),
    ],
    ["Saint Lucia", new Country({ name: "Saint Lucia", continent: "na" })],
    ["Samoa", new Country({ name: "Samoa", continent: "oc" })],
    ["San Marino", new Country({ name: "San Marino", continent: "eu" })],
    [
      "Sao Tome and Principe",
      new Country({ name: "Sao Tome and Principe", continent: "af" }),
    ],
    ["Saudi Arabia", new Country({ name: "Saudi Arabia", continent: "as" })],
    ["Scotland", new Country({ name: "Scotland", continent: "eu" })],
    ["Senegal", new Country({ name: "Senegal", continent: "af" })],
    ["Serbia", new Country({ name: "Serbia", continent: "eu" })],
    ["Seychelles", new Country({ name: "Seychelles", continent: "af" })],
    ["Sierra Leone", new Country({ name: "Sierra Leone", continent: "af" })],
    ["Singapore", new Country({ name: "Singapore", continent: "as" })],
    ["Slovakia", new Country({ name: "Slovakia", continent: "eu" })],
    ["Slovenia", new Country({ name: "Slovenia", continent: "eu" })],
    [
      "Solomon Islands",
      new Country({ name: "Solomon Islands", continent: "oc" }),
    ],
    ["Somalia", new Country({ name: "Somalia", continent: "af" })],
    ["South Africa", new Country({ name: "South Africa", continent: "af" })],
    ["South Korea", new Country({ name: "South Korea", continent: "as" })],
    ["South Sudan", new Country({ name: "South Sudan", continent: "af" })],
    ["Spain", new Country({ name: "Spain", continent: "eu" })],
    ["Sri Lanka", new Country({ name: "Sri Lanka", continent: "as" })],
    ["Sudan", new Country({ name: "Sudan", continent: "af" })],
    ["Suriname", new Country({ name: "Suriname", continent: "sa" })],
    ["Swaziland", new Country({ name: "Swaziland", continent: "af" })],
    ["Sweden", new Country({ name: "Sweden", continent: "eu" })],
    ["Switzerland", new Country({ name: "Switzerland", continent: "eu" })],
    ["Syria", new Country({ name: "Syria", continent: "as" })],
    ["Tajikistan", new Country({ name: "Tajikistan", continent: "as" })],
    ["Tanzania", new Country({ name: "Tanzania", continent: "af" })],
    ["Thailand", new Country({ name: "Thailand", continent: "as" })],
    ["DR Congo", new Country({ name: "DR Congo", continent: "af" })],
    ["Togo", new Country({ name: "Togo", continent: "af" })],
    ["Tonga", new Country({ name: "Tonga", continent: "oc" })],
    [
      "Trinidad and Tobago",
      new Country({ name: "Trinidad and Tobago", continent: "na" }),
    ],
    ["Tunisia", new Country({ name: "Tunisia", continent: "af" })],
    ["Turkey", new Country({ name: "Turkey", continent: "as" })],
    ["Turkmenistan", new Country({ name: "Turkmenistan", continent: "as" })],
    ["Tuvalu", new Country({ name: "Tuvalu", continent: "oc" })],
    ["Uganda", new Country({ name: "Uganda", continent: "af" })],
    ["Ukraine", new Country({ name: "Ukraine", continent: "eu" })],
    [
      "United Arab Emirates",
      new Country({ name: "United Arab Emirates", continent: "as" }),
    ],
    [
      "United Kingdom",
      new Country({ name: "United Kingdom", continent: "eu" }),
    ],
    ["United States", new Country({ name: "United States", continent: "na" })],
    ["Uruguay", new Country({ name: "Uruguay", continent: "sa" })],
    ["Uzbekistan", new Country({ name: "Uzbekistan", continent: "as" })],
    ["Vanuatu", new Country({ name: "Vanuatu", continent: "oc" })],
    ["Venezuela", new Country({ name: "Venezuela", continent: "sa" })],
    ["Vietnam", new Country({ name: "Vietnam", continent: "as" })],
    ["Wales", new Country({ name: "Wales", continent: "eu" })],
    [
      "Western Sahara",
      new Country({ name: "Western Sahara", continent: "af" }),
    ],
    ["Yemen", new Country({ name: "Yemen", continent: "as" })],
    ["Zambia", new Country({ name: "Zambia", continent: "af" })],
    ["Zimbabwe", new Country({ name: "Zimbabwe", continent: "af" })],
  ]);

  const Countries = Array.from(CountriesMap, ([, value]) => value);

  const DestinationTypes = [
    new DestinationType({ label: "Adventure" }),
    new DestinationType({ label: "Summer vacation" }),
    new DestinationType({ label: "New year" }),
    new DestinationType({ label: "Casual" }),
    new DestinationType({ label: "Cruise" }),
  ];

  const Destinations = [
    new Destination({
      name: "Zanzibar",
      country: CountriesMap.get("Tanzania"),
      type: [DestinationTypes[1], DestinationTypes[2]],
      image: "Zanzibar.jpeg",
    }),
    new Destination({
      name: "Kapadokija",
      country: CountriesMap.get("Turkey"),
      type: [DestinationTypes[0], DestinationTypes[2]],
      image: "Kapadokija.jpeg",
    }),
    new Destination({
      name: "Japan",
      country: CountriesMap.get("Japan"),
      type: [DestinationTypes[0], DestinationTypes[2]],
      image: "Japan.jpeg",
    }),
    new Destination({
      name: "Peru",
      country: CountriesMap.get("Peru"),
      type: [DestinationTypes[0]],
      image: "Peru.jpeg",
    }),
    new Destination({
      name: "Lisabon",
      country: CountriesMap.get("Portugal"),
      type: [DestinationTypes[2], DestinationTypes[3], DestinationTypes[4]],
    }),
    new Destination({
      name: "Tenerife",
      country: CountriesMap.get("Spain"),
      type: [DestinationTypes[1], DestinationTypes[2], DestinationTypes[4]],
    }),
  ];

  const Excursions = [
    new Excursion({
      name: "Stone town, Prison Island, Nakupenda",
      description:
        "Pre podne krećemo na fakultativni izlet – obilazak Stoun Tauna i istraživanje najzanimljivijih atrakcija – kuća u kojoj je živeo Fredi Merkjuri (Freddie Mercury), male i živahne ulice i trgovi, Stara tvrđava, Palata čuda, muzeji, lokalna pijaca, zvuci, boje i mirisi Afrike! Ime Stoun Taun na svahiliju znači „Stari grad”. Grad se nalazi na UNESCO-voj listi Svetske baštine od 2000. godine. Zatim idemo do Prizn Ajlenda (Prison Island) iliti Ostrva zatvor, koji se nalazi severno od Stoun Tauna, a dobio je ime po mestu gde su se nekada držali zarobljenici i robovi. Danas je to mirno mesto gde ćemo uživati u kupanju i druženju sa džinovskim kornjačama koje su prenete na ovo mesto u 19. veku sa Sejšela. Neke od kornjača stare su preko 100 godina, a mi ćemo imati prilike da ih hranimo i mazimo. Dan završavamo posetom Nakupenda plaži, koja zapravo predstavlja peščani sprud u sred okeana. Uživamo na vrućem pesku i plivamo u tirkiznoj vodi tanzanijske obale. Povratak u smeštaj.",
      price: "50 USD",
      destination: Destinations[0],
    }),
    new Excursion({
      name: "Blue safari",
      description: "desc",
      price: "60 USD",
      destination: Destinations[0],
    }),
    new Excursion({
      name: "Kendwa plaža i Nungwi Mnarani Aquarium",
      description: "desc",
      price: "40 USD",
      destination: Destinations[0],
    }),
    new Excursion({
      name: "Let balonom",
      description: "desc",
      price: "140 do 170 EUR",
      destination: Destinations[0],
    }),
    new Excursion({
      name: "Jahanje konja",
      description: "desc",
      price: "30 EUR",
      destination: Destinations[0],
    }),
    new Excursion({
      name: "Tradicionalno tursko veče",
      description: "desc",
      price: "25 EUR",
      destination: Destinations[0],
    }),
    new Excursion({
      name: "Green tour",
      description: "desc",
      price: "40 EUR",
      destination: Destinations[0],
    }),
  ];

  const Guiders = [
    new Guider({
      name: "Vodic 1",
      preferences: [
        DestinationTypes[0],
        DestinationTypes[1],
        DestinationTypes[2],
      ],
    }),
    new Guider({ name: "Vodic 2" }),
    new Guider({ name: "Vodic 3", preferences: [DestinationTypes[1]] }),
    new Guider({ name: "Vodic 4", preferences: [DestinationTypes[1]] }),
  ];

  const Tours = [
    new Tour({
      name: "Zanzibar letovanje",
      destination: Destinations[0]._id,
      price: 1000,
      guider: Guiders[2]._id,
      departureDate: new Date("2024-04-12"),
      returnDate: new Date("2024-04-28"),
      maxPassengers: 30,
      minPassengers: 10,
      image: "Zanzibar.jpeg",
    }),
    new Tour({
      name: "Zanzibar nova godina",
      description:
        "Provedimo nezaboravnu novu godinu na rajskom ostrvu uz tropsko voce i toplo more!",
      price: 1200,
      destination: Destinations[0]._id,
      guider: Guiders[2]._id,
      departureDate: new Date("2023-12-29"),
      returnDate: new Date("2024-01-15"),
      maxPassengers: 40,
      minPassengers: 20,
      image: "Zanzibar-nova-godina.jpeg",
    }),
    new Tour({
      name: "Kapadokija avio",
      destination: Destinations[1]._id,
      price: 450,
      guider: Guiders[0]._id,
      departureDate: new Date("2024-01-09"),
      returnDate: new Date("2024-01-15"),
      maxPassengers: 30,
      minPassengers: 15,
      image: "Kapadokija.jpeg",
    }),
    new Tour({
      name: "Kapadokija bus",
      destination: Destinations[1]._id,
      price: 350,
      guider: Guiders[1]._id,
      departureDate: new Date("2024-01-08"),
      returnDate: new Date("2024-01-16"),
      maxPassengers: 50,
      minPassengers: 25,
      image: "Kapadokija.jpeg",
    }),
    new Tour({
      name: "Japan prolece",
      destination: Destinations[2]._id,
      price: 1500,
      guider: Guiders[1]._id,
      departureDate: new Date("2024-04-09"),
      returnDate: new Date("2024-04-19"),
      maxPassengers: 50,
      minPassengers: 25,
      image: "Japan-prolece.png",
    }),
    new Tour({
      name: "Japan nova godina",
      destination: Destinations[2]._id,
      price: 1500,
      guider: Guiders[1]._id,
      departureDate: new Date("2024-04-09"),
      returnDate: new Date("2024-04-19"),
      maxPassengers: 50,
      minPassengers: 25,
      image: "Japan-nova-godina.jpeg",
    }),
    new Tour({
      name: "Peru ekspedicija",
      destination: Destinations[3]._id,
      price: 2500,
      guider: Guiders[0]._id,
      departureDate: new Date("2024-07-09"),
      returnDate: new Date("2024-07-29"),
      maxPassengers: 25,
      minPassengers: 15,
      image: "Peru.jpeg",
    }),
    new Tour({
      name: "Lisabon avio",
      destination: Destinations[4]._id,
      price: 650,
      guider: Guiders[3]._id,
      departureDate: new Date("2024-07-09"),
      returnDate: new Date("2024-07-18"),
      maxPassengers: 25,
      minPassengers: 15,
    }),
  ];

  const savings = [
    ...Continents.map((continent) => continent.save()),
    ...Countries.map((country) => country.save()),
    ...Destinations.map((destination) => destination.save()),
    ...DestinationTypes.map((dt) => dt.save()),
    ...Excursions.map((excursion) => excursion.save()),
    ...Guiders.map((guider) => guider.save()),
    ...Tours.map((tour) => tour.save()),
  ];

  await Promise.all(savings);

  console.log("Database seeded");

  connection.close();
};
seed();
