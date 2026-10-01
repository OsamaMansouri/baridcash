
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Search } from "lucide-react";

const TransferLocationSection: React.FC = () => {
  const [service, setService] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  const cities = [
    "AFOURAR", "AGADIR", "AGDZ", "AGHBALA", "AGHBALOU", "AGOuiM", "AGOURAI", "AGUELMOUS", "AHFIR",
    "AIN AICHA", "AIN AOUDA", "AIN ATIG", "AIN BENI MATHAR", "AIN CHEGGAG", "AIN CHKEF", "AIN DORIJ",
    "AIN EL AOUDA", "AIN HARROUDA", "AIN LEUH", "AIN SBIT", "AIN TAOUJDATE", "AIN ZOHRA",
    "AIT AATAB ( CERCLE DE BZOU )", "AIT AISSA OU BRAHIM", "AIT AMIRA", "AIT BAHA", "AIT DAOUD",
    "AIT ERKHA", "AIT HANI", "AIT IMOUR", "AIT ISHAK", "AIT ISSA OU BRAHIM", "AIT MELLOUL",
    "AIT MHAMED", "AIT MILK", "AIT OURIR", "AIT YADINE", "AKKA", "AKLIM", "AKNOUL", "AL AAOUAMRA",
    "AL AAROui", "AL HOUCEIMA", "AL MANSOURIA", "AL OUATIA", "ALNIF", "AMIZMIZ", "AMK ASSURANCES",
    "ANZI", "AOUFOUS", "AOULOUZ", "AOURIR", "ARAZANE", "ARBAA AIT BOUTAYEB", "ARBAA AOUNATE",
    "ARBAA IMATEN", "ARBAOUA", "ASNI", "ASSA", "ASSAHRIJ", "ASSILAH", "AZEMMOUR", "AZILAL",
    "AZLA", "AZROU", "BAB MARZOUKA", "BAB BERRED", "BAB TAZA", "BAB TAZA TRANSFERT",
    "BASMASSEL SERVICES", "BD MOHAMED V BERKANE", "BEJAAD", "BELFAA", "BEN AHMED", "BEN SLIMANE",
    "BEN TAIEB", "BENGUERIR", "BENI ANSAR", "BENI AROUSS", "BENI DRAR", "BENI HASSANE",
    "BENI MELLAL", "BENI YAKHLEF", "BENIZOULI", "BERKANE", "BERRECHID", "BHALIL", "BIOUGRA",
    "BIR JDID", "BIR TAM TAM", "BNI AYAT", "BNI BOUAYACH", "BNI BOUNSAR", "BNI HADIFA",
    "BNI KHLOUG", "BNI OULID", "BNI RZIN", "BOU AHMED", "BOUANANE", "BOUARFA", "BOUAROUSS",
    "BOUDNIB", "BOUFAKRANE", "BOUJDOUR", "BOUJNIBA", "BOULANOUARE", "BOULAOUANE", "BOULEMANE",
    "BOUMALEN DADES", "BOUMIA", "BOUSKOURA", "BOUZMOU", "BOUZNIKA", "BRADIA", "BRAND CASH",
    "BV MED V BOUARFA", "BZOU", "CASABLANCA", "CENTRE BELAAGUID", "CENTRE BEN TIB",
    "CENTRE BENI HILAL", "CENTRE KSAR TIZGAGHINE", "CENTRE NOUAR", "CENTRE OUED MALHA",
    "CENTRE SIDI MOHAMMED BEN RAHAL", "CENTRE TISSA.TAOUNATE", "CHEFCHAOUEN", "CHEMAIA",
    "CHICHAOUA", "CHOuiTER", "COLLECTION 15 HAY EL JADID CHAMALI NUM 299 BENGUERIR",
    "COMMUNE RURALE AMTAR", "DAKHLA", "DAR BELAMRI", "DAR BOUAZZA", "DAR CHAFFAI", "DAR GUEDDARI",
    "DAR KEBDANI", "DAR OULED ZIDOUH", "DCHEIRA", "DEBDOU", "DEMNAT", "DEMNATE", "DEROUA",
    "DOUAR MANSOURA", "DOuiRANE", "DR AIT ELHABOUS", "DR BOUKALLAL", "DRARGA", "DRIOUCH",
    "E SERVICE CHBANATE", "EDDACHRA", "EL AAMRIA", "EL AGAGCHA", "EL AIOUN", "EL ATTAOuiA",
    "EL BROUJ", "EL GARA", "EL GHAFIANI TD", "EL HAJ KADDOUR", "EL HAJEB", "EL HANCHANE",
    "EL JADIDA", "EL KEBAB", "EL KELAA DES SRAGHNA", "EL KELAA M'GOUNA", "EL MAJD, TANGER",
    "EL MENZEH", "EL MENZEL", "ELMAZGHI ASSURANCES", "ERFOUD", "ERRACHIDIA", "ESSAOuiRA",
    "ESSEMARA", "EZZHILIGA", "FAHS ANJRA BAHRAOuiN", "FAM EL HISN", "FERKHANA", "FES",
    "FKIH BEN SALAH", "FNIDEK", "FOUM EL ANCEUR", "FOUM JEMAA", "FOUM-ZGUID", "FRAITA",
    "FREIJA", "GALAZ TAOUNATE", "GHMATE", "GOULMIMA", "GOURRAMA", "GUELMIM", "GUERCIF",
    "HAD BNI CHIKER", "HAD DRA", "HAD GHOUALEM", "HAD HARARA", "HAD KOURT", "HAD OULAD ZBAIR",
    "HAD SOUALEM", "HARHOURA", "HAY TADAMOUN ZAGORA", "IDELSANE", "IFNI", "IFRANE",
    "IFRANE ATLAS SAGHIR", "IGHIR TIRSAL", "IGHREM N'OUGDAL", "IGLI", "IKAOUEN", "IMILCHIL",
    "IMI-N-TANOUTE", "IMOUZZER", "IMOUZZER MARMOUCHA", "IMZOUREN", "INEZGANE", "ISSAGUEN",
    "ISSEN", "JABHA", "JEMAA IGHIL", "JEMAA N'TIGHIRTE", "JEMAA-SHAIM", "JERADA", "JORF",
    "JORF EL MALHA", "KAHF NSOUR", "KARIA BA MOHAMED", "KARIAT AREKMANE", "KASBA TADLA",
    "KATTARA", "KELAAT BOUQORRA", "KELLAT MEGOUNA", "KENITRA", "KHADAMAT BERRADI",
    "KHEMIS DES ZEMAMRA", "KHEMIS SAHEL", "KHEMIS TEMSAMANE", "KHEMISS DADES", "KHEMISS MDI'Q",
    "KHEMISSET", "KHENIFRA", "KHLALFA", "KHNICHET", "KHOURIBGA", "KSAR AIT TILICHT RICHE",
    "KSAR DOuiRA", "KSAR EL KEBIR", "KSAR SEGHIR", "KSIBIA DAR BEL AMRI", "KSSAR AIT YAHYA",
    "KSSAR MELLAB", "KSSAR TOUROUGUE", "KTAMA", "LAAOUNATE", "LAATTAOuiA", "LAAYOUNE",
    "LALLA MIMOUNA", "LALLA TAKERKOUST", "LARACHE", "LKSIBA", "LOUALIDIA", "LOUDAYA",
    "LOUNASSDA", "LQLIAA", "M'HAMID EL GHIZLANE", "MAAZIZ", "MADAGH", "MARRAKECH", "MARTIL",
    "MASSA", "MDIQ", "MECHRA BEL KSIRI", "MEDIOUNA", "MEJJAT", "MEKNES", "MELAAB", "M'HAYA",
    "MI TQAL FINANCING", "MIDAR", "MIDELT", "MIRLEFT", "MISSOUR", "MOHAMMEDIA", "MONTE ARRUI",
    "MOUL EL BERGHI", "MOULAY ABDELLAH", "MOULAY ABDELLAH AMGHAR", "MOULAY AISSA BEN DRISS",
    "MOULAY BOUSELHAM", "M'RIRT", "MTOUGGUA", "MY DRISS ZERHOUNE", "NADOR", "OUAOuiZARTH",
    "OUARZAZATE", "OUAZZANE", "OUED AMLIL", "OUED LAOU", "OUED ZEM", "OUJDA", "OULAD ABBOU",
    "OULAD AMRANE", "OULAD AYAD", "OULAD BELAAGUID", "OULAD BERHIL", "OULAD FREJ", "OULAD MTAA",
    "OULAD TAIMA", "OULAD TAYEB", "OULAD YACOUB", "OULAD YOUSSEF KASBA TADLA", "OULED ABBOU",
    "OULED AYAD", "OULED GHANEM", "OULED MBAREK", "OULED YAICHE", "OULED YOUSSEF", "OULED ZIDOUH",
    "OULED ZMAM", "OULMES", "OUNAGHA", "OURIKA", "OURTZAGH", "OUTABOUABANE", "OUTAT EL HAJ",
    "RABAT", "RAS EJJERY", "RAS EL AIN CHAOuiA", "RATBA", "RHAFSAI", "RIBAT EL KHEIR", "RICHE",
    "RISSANI", "ROMMANI", "SABAA AIYOUN", "SAFI", "SAHB EL OUARD", "SAIDIA", "SALE",
    "SEBT AIT RAHOU", "SEBT EL GUERDANE", "SEBT GZOULA", "SEBT JAHJOUH", "SEBT OULAD NEMMA",
    "SEFROU", "SELOUANE", "SETTAT", "SID EL YAMANI", "SIDI ABDELLAH GHIYAT", "SIDI ADDI",
    "SIDI ALI BENHAMDOUCH", "SIDI ALLAL EL BAHRAOui", "SIDI ALLAL TAZI", "SIDI BENNOUR",
    "SIDI BETTACH", "SIDI BIBI", "SIDI BOUATHMANE", "SIDI BOUHRIA", "SIDI BOUKNADEL",
    "SIDI BOUZID", "SIDI HAJJAJ", "SIDI IFNI", "SIDI ISMAIL", "SIDI KACEM", "SIDI LAAROUSSI",
    "SIDI LMOKHTAR", "SIDI MOHAMED LAHMAR", "SIDI MOUSSA EL HAMRI", "SIDI RAHAL", "SIDI REDOUANE",
    "SIDI SLIMANE", "SIDI TAIBI", "SIDI YAHIA", "SIDI YAHIA EL RHARB", "SIDI YAHIA ZAER",
    "SIDI YAHYA", "SIDI YOUSSEF BEN ALI", "SIDI ZIANE", "SKHIRATE", "SKHOUR RHAMNA",
    "SKOURA AHL LWAST", "SKOURA M'DAZ", "SMIMOU", "SNADA", "SOUK ARBAA EL RHARB",
    "SOUK LARBAA DU GHARB", "SOUK SEBT OLD NEMMA", "STEHAT", "STI FADMA", "TABANT", "TADDART",
    "TADIGHOUST", "TAFETACHTE", "TAFRAOUTE", "TAGADIRT", "TAGANTE", "TAGHBALT", "TAGHZIRT",
    "TAGHZOUTE N'AIT ATTA", "TAGMOUTE", "TAGOUNITE", "TAGUELEFT", "TAHANNAOUT", "TAHLA",
    "TAHNNAOUT", "TALIOuiNE", "TALMEST", "TALSINNT", "TAMALLALT", "TAMANARTE", "TAMANSOURT",
    "TAMELALT", "TAMESLOUHTE", "TAMOROTE", "TAMSENA", "TAN TAN", "TANGER", "TANTAN", "TAOUNATE",
    "TAOURIRT", "TARFAYA", "TARGUIST", "TARHJIJT", "TAROUBIA", "TAROUDANNT", "TASSAOUTE",
    "TASSHILAT MADAR", "TASSOULTANT", "TATA", "TAZA", "TAZARINE", "TAZNAKHT", "TELOUET",
    "TEMARA", "TEMSIA", "TENDRARA", "TEROUAL", "TETOUAN", "TIFELET", "TIGHASSALINE", "TIGHMI",
    "TIKIOuiNE", "TILOuiNE", "TIMAHDITE", "TIMOULILTE", "TINDITE", "TINEGHIR", "TINEJDAD",
    "TINZOULINE", "TISSA", "TISSINT", "TIT MELLIL", "TIZGUINE", "TIZI NISLI", "TIZI OUSLI",
    "TIZNIT", "TIZTOUTINE", "TLAT LOULAD", "TLAT N'YAAQOUB", "TLAT OULED HAMDANE", "TLATA AKHSASS",
    "TNIN CHTOUKA", "TNIN OUDAYA", "TNINE GHARBIA", "TNINE OURIKA", "TOUAMA", "TOUNDOUT",
    "TOUNFITE", "WAMATIF", "WESLANE SAVEURS", "YOUSSOUFIA", "ZAG", "ZAGORA", "ZAIDA", "ZAIO",
    "ZAOuiAT CHEIKH", "ZEGANGANE", "ZHILIGA", "ZMAMRA", "ZOUMI", "GUERGUERAT"
  ];

  return (
    <section className="relative bg-barid-orange py-16 overflow-hidden">
      <div className="container mx-auto px-4 pt-8">
        <div className="mb-10 flex flex-col md:flex-row md:items-center">
          <div className="md:flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-white uppercase mb-4">
              Localisez l'agence la plus proche
            </h2>
            <div className="w-32 h-1.5 bg-white my-6"></div>
          </div>
          <div className="md:flex-1">
            <p className="text-white/90 max-w-xl">
              Trouvez facilement l'agence Barid Cash la plus proche de chez vous offrant les services dont vous avez besoin.
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="shadow-lg border-0 overflow-hidden rounded-lg">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="md:w-1/3">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nos services
                  </label>
                  <Select value={service} onValueChange={setService}>
                    <SelectTrigger className="bg-barid-cream border-gray-200">
                      <SelectValue placeholder="Nos services" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Tous les services</SelectItem>
                      <SelectItem value="narsa">NARSA</SelectItem>
                      <SelectItem value="cnss">CNSS</SelectItem>
                      <SelectItem value="amana">AMANA</SelectItem>
                      <SelectItem value="change">CHANGE</SelectItem>
                      <SelectItem value="barid-e-sign">Barid E-Sign</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="md:w-1/3">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Ville
                  </label>
                  <Select value={city} onValueChange={setCity}>
                    <SelectTrigger className="bg-barid-cream border-gray-200">
                      <SelectValue placeholder="Choisir une ville" />
                    </SelectTrigger>
                    <SelectContent className="max-h-60">
                      {cities.map((cityName) => (
                        <SelectItem key={cityName} value={cityName}>
                          {cityName}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="md:w-1/3">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Localisation
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input 
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="Chercher Localisation"
                      className="pl-10 bg-barid-cream border-gray-200"
                    />
                  </div>
                </div>
              </div>

              <div className="w-full h-80 md:h-96 bg-gray-200 rounded-lg overflow-hidden">
                <div className="h-full w-full flex items-center justify-center bg-gray-100">
                  <div className="text-center text-gray-500">
                    <MapPin className="h-10 w-10 mx-auto text-barid-orange mb-2" />
                    <p>Carte interactive</p>
                    <p className="text-sm">(Intégration de carte à implémenter ici)</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TransferLocationSection;
