import { agencies } from './agencies';

// Get all unique cities from agencies
export const getAllCities = (): string[] => {
  return [...new Set(agencies.map(agency => agency.ville))].sort();
};

// City name translations from French to Arabic
// This is a comprehensive mapping of major Moroccan cities
export const cityTranslations: Record<string, string> = {
  // Major cities
  "CASABLANCA": "الدار البيضاء",
  "RABAT": "الرباط",
  "MARRAKECH": "مراكش",
  "FES": "فاس",
  "TANGER": "طنجة",
  "AGADIR": "أكادير",
  "MEKNES": "مكناس",
  "OUJDA": "وجدة",
  "KENITRA": "القنيطرة",
  "TETOUAN": "تطوان",
  "SAFI": "آسفي",
  "MOHAMMEDIA": "المحمدية",
  "KHOURIBGA": "خريبكة",
  "BENI MELLAL": "بني ملال",
  "BERKANE": "بركان",
  "TAZA": "تازة",
  "EL JADIDA": "الجديدة",
  "NADOR": "الناظور",
  "SETTAT": "سطات",
  "LARACHE": "العرائش",
  "KSAR EL KEBIR": "القصر الكبير",
  "BERRECHID": "برشيد",
  "BOUJNIBA": "بوجنيبة",
  "AZROU": "أزرو",
  "MIDELT": "مدلت",
  "ERRACHIDIA": "الرشيدية",
  "OUARZAZATE": "ورزازات",
  "TAROUDANT": "تارودانت",
  "ESSAOUIRA": "الصويرة",
  "IFRANE": "إفران",
  "BENSLIMANE": "بنسليمان",
  "BOUZNIKA": "بوزنيقة",
  "TIFLET": "تيفلت",
  "SIDI KACEM": "سيدي قاسم",
  "SIDI SLIMANE": "سيدي سليمان",
  "SIDI BENNOUR": "سيدي بنور",
  "YOUSSOUFIA": "اليوسفية",
  "BERRECHID": "برشيد",
  "BEN GUERIR": "بنجرير",
  "BENGUERIR": "بنجرير",
  "CHICHAOUA": "شيشاوة",
  "EL KELAA DES SRAGHNA": "قلعة السراغنة",
  "EL KELAA": "قلعة السراغنة",
  "KHEMISSET": "الخميسات",
  "SKHIRAT": "الصخيرات",
  "TEMARA": "تمارة",
  "SALE": "سلا",
  "SKHIRAT": "الصخيرات",
  "AIN HARROUDA": "عين حرودة",
  "DEROUA": "الدار البيضاء",
  "HAY RYAD": "حي الرياض",
  "AL HOUCEIMA": "الحسيمة",
  "AL HOCEIMA": "الحسيمة",
  "IMZOUREN": "إمزورن",
  "BENI ANSAR": "بني أنصار",
  "BERKANE": "بركان",
  "NADOR": "الناظور",
  "ZAIO": "زاييو",
  "AHFIR": "أحفير",
  "BNI BOUAYACH": "بني بوعياش",
  "DRIOUCH": "دريوش",
  "MIDAR": "ميدار",
  "SELOUANE": "سلوان",
  "TAOURIRT": "تاوريرت",
  "TIZNIT": "تيزنيت",
  "GUELMIM": "كلميم",
  "TAN TAN": "طانطان",
  "LAÂYOUNE": "العيون",
  "DAKHLA": "الداخلة",
  "SMARA": "السمارة",
  "BOUDJDOUR": "بوجدور",
  "TARFAYA": "الطرفاية",
  "ASSAHRIJ": "آسا",
  "ZAGORA": "زاكورة",
  "TINGHIR": "تنغير",
  "ERRACHIDIA": "الرشيدية",
  "MIDELT": "مدلت",
  "AZILAL": "أزيلال",
  "KHEMIFRA": "خميسة",
  "KHENIFRA": "خنيفرة",
  "BENI MELLAL": "بني ملال",
  "KASBA TADLA": "قصبة تادلة",
  "FQUIH BEN SALAH": "الفقيه بن صالح",
  "SEBT AIT RAHOU": "سبت آيت رحو",
  "OUED ZEM": "وادي زم",
  "BOUJNIBA": "بوجنيبة",
  "KHOURIBGA": "خريبكة",
  "YOUSSOUFIA": "اليوسفية",
  "SIDI BENNOUR": "سيدي بنور",
  "EL JADIDA": "الجديدة",
  "AZEMMOUR": "أزمور",
  "SAFI": "آسفي",
  "ESSAOUIRA": "الصويرة",
  "TAROUDANT": "تارودانت",
  "TIZNIT": "تيزنيت",
  "AGADIR": "أكادير",
  "AIT MELLOUL": "آيت ملول",
  "BIOUGRA": "بيوكرة",
  "OULAD TEIMA": "أولاد تايمة",
  "INEZGANE": "إنزكان",
  "DCHIRA": "الدشيرة",
  "GUELMIM": "كلميم",
  "TAN TAN": "طانطان",
  "SIDI IFNI": "سيدي إفني",
  "TATA": "طاطا",
  "FOU ZARET": "فزاز",
  "AKKA": "أكّا",
  "TAFRAOUT": "تافراوت",
  "TIZNIT": "تيزنيت",
  "BIOUGRA": "بيوكرة",
  "AOURIR": "أورير",
  "BIOUGRA": "بيوكرة",
  "ANZA": "أنزا",
  "AGADIR": "أكادير",
  "HAY AL WAFA": "حي الوفا",
  "HAY SALAM": "حي السلام",
  "FOUNTY": "فونتي",
  "BENSERGAO": "بن سيرقاو",
  "TIKIOUINE": "تيكيوين",
  "HAY MOHAMMADI": "حي المحمدي",
  "TALBORJ": "تالبرج",
  "HAY ANASS": "حي أنس",
  "HAY AL AMAL": "حي الأمل",
  "HAY AL INBIAT": "حي الإنبعاث",
  "HAY AL HASSANI": "حي الحسني",
  "HAY AL MAARIF": "حي المعارف",
  "HAY AL FATH": "حي الفتح",
  "HAY AL QODS": "حي القدس",
  "HAY AL HAY AL MASSIRA": "حي المسيرة",
  "HAY AL HAY AL MASSIRA 2": "حي المسيرة 2",
  "HAY AL HAY AL MASSIRA 3": "حي المسيرة 3",
  "HAY AL HAY AL MASSIRA 4": "حي المسيرة 4",
  "HAY AL HAY AL MASSIRA 5": "حي المسيرة 5",
  "HAY AL HAY AL MASSIRA 6": "حي المسيرة 6",
  "HAY AL HAY AL MASSIRA 7": "حي المسيرة 7",
  "HAY AL HAY AL MASSIRA 8": "حي المسيرة 8",
  "HAY AL HAY AL MASSIRA 9": "حي المسيرة 9",
  "HAY AL HAY AL MASSIRA 10": "حي المسيرة 10",
  
  // Additional cities - comprehensive list
  "AFOURAR": "أفورار",
  "AGDZ": "أكدز",
  "AGHBALA": "أغبالة",
  "AGHBALOU": "أغبالو",
  "AGOuiM": "أكوييم",
  "AGOURAI": "أكوراي",
  "AGUELMOUS": "أكلموس",
  "AHFIR": "أحفير",
  "AIN AOUDA": "عين عودة",
  "AIN AICHA": "عين عيشة",
  "AIN ATIG": "عين أتيغ",
  "AIN CHEGGAG": "عين شقاق",
  "AIN DORIJ": "عين دوريج",
  "AIN EL AOUDA": "عين العودة",
  "AIN SBIT": "عين سبيت",
  "AIN TAOUJDATE": "عين تاوجطات",
  "AIN ZOHRA": "عين زهرة",
  "AIT AATAB ( CERCLE DE BZOU )": "آيت عطاب ( دائرة بزو)",
  "AIT AMIRA": "آيت عميرة",
  "AIT BAHA": "آيت باها",
  "AIT BELFAA": "آيت بلفاع",
  "AIT DAOUD": "آيت داود",
  "AIT ERKHA": "آيت الرخا",
  "AIT HANI": "آيت هاني",
  "AIT IMOUR": "آيت إيمور",
  "AIT ISHAK": "آيت إسحاق",
  "AIT ISSA OU BRAHIM": "آيت عيسى أو إبراهيم",
  "AIT KAMRA": "آيت كمرة",
  "AIT MHAMED": "آيت محمد",
  "AIT MILK": "آيت ملك",
  "AIT OURIR": "آيت أورير",
  "AIT YADINE": "آيت يادين",
  "AKLIM": "أكليم",
  "AL AAOUAMRA": "العوامرة",
  "AL AAROui": "العروي",
  "AL MANSOURIA": "المنصورية",
  "AL OUATIA": "العوامية",
  "ALNIF": "النيف",
  "AMIZMIZ": "أمizmيز",
  "AMK ASSURANCES": "أم ك للتأمين",
  "ANZA": "أنزا",
  "AOUFOUS": "أوفوس",
  "AOULOUZ": "أولوز",
  "ARAZANE": "أرزان",
  "ARBAA AIT BOUTAYEB": "أربعاء آيت بوتايب",
  "ARBAA AOUNATE": "أربعاء أونات",
  "ARBAA IMATEN": "أربعاء إيماتن",
  "ARBAA SAHEL": "أربعاء الساحل",
  "ARBAOUA": "أربعاء",
  "ARFOUD": "أرفود",
  "ASNI": "أسني",
  "ASSA": "آسا",
  "ASSAKI": "آساكي",
  "ASSILAH": "أصيلة",
  "BAB MARZOUKA": "باب مرزوقة",
  "BAB TAZA": "باب تازة",
  "BAB TAZA TRANSFERT": "باب تازة للتحويل",
  "BAHRAOUIN": "بهراوين",
  "BEJAAD": "بجعد",
  "BEN AHMED": "بن أحمد",
  "BEN TAIEB": "بن طيب",
  "BENI AHMED EL GHARBIA": "بني أحمد الغربية",
  "BENI AROUSS": "بني عروس",
  "BENI DRAR": "بني درار",
  "BENI HASSANE": "بني حسان",
  "BENI YAKHLEF": "بني يخلف",
  "BENIZOULI": "بني زولي",
  "BHALIL": "بهليل",
  "BIR GANDOUZ": "بئر كندوز",
  "BIR JDID": "بئر الجديد",
  "BIR TAM TAM": "بئر تم تم",
  "BNI AYAT": "بني آيت",
  "BNI HADIFA": "بني حذيفة",
  "BNI KHLOUG": "بني خلوق",
  "BNI OULID": "بني أوليد",
  "BNI RZIN": "بني رزين",
  "BOU AHMED": "بو أحمد",
  "BOUANANE": "بو عنان",
  "BOUARFA": "بوعرفة",
  "BOUDNIB": "بودنيب",
  "BOUFAKRANE": "بوفكران",
  "BOUIZAKARANE": "بويزكاران",
  "BOUJDOUR": "بوجدور",
  "BOULANOUARE": "بولانوار",
  "BOULAOUANE": "بولعوان",
  "BOULEMANE": "بولمان",
  "BOULMANE": "بولمان",
  "BOUMALEN DADES": "بومالن دادس",
  "BOUMIA": "بومية",
  "BOUSKOURA": "بوسكورة",
  "BRADIA": "برادية",
  "CHTOUKA AIT BAHA": "شتوكة آيت باها",
  "DEMNATE": "دمنات",
  "EL HAJEB": "الحاجب",
  "EL KELAA": "قلعة السراغنة",
  "ERRICH": "أريش",
  "FIGUIG": "فجيج",
  "FQUIH BEN SALAH": "الفقيه بن صالح",
  "GHAFSAI": "غفساي",
  "GUERCIF": "كورسيف",
  "HAD SOUALEM": "حد السوالم",
  "HADJ KADDOUR": "الحاج قدور",
  "HAY HASSANI": "حي الحسني",
  "HAY MOHAMMADI": "حي المحمدي",
  "IFRANE": "إفران",
  "IMILCHIL": "إيميلشيل",
  "IMINTANOUT": "إيمنتانوت",
  "INEZGANE": "إنزكان",
  "JERADA": "جرادة",
  "JORF": "جرف",
  "KASBA TADLA": "قصبة تادلة",
  "KHEMISSET": "الخميسات",
  "KHENIFRA": "خنيفرة",
  "KHOURIBGA": "خريبكة",
  "KSAR EL KEBIR": "القصر الكبير",
  "LAAYOUNE": "العيون",
  "LARACHE": "العرائش",
  "MARTIL": "مرتيل",
  "MDIQ": "المضيق",
  "MEKNES": "مكناس",
  "MELILLA": "مليلية",
  "MIDELT": "مدلت",
  "MOHAMMEDIA": "المحمدية",
  "NADOR": "الناظور",
  "OUARZAZATE": "ورزازات",
  "OUED ZEM": "وادي زم",
  "OUED ZEM": "وادي زم",
  "OUJDA": "وجدة",
  "OULAD AYAD": "أولاد عياد",
  "OULAD FREJ": "أولاد فرج",
  "OULAD M'BAREK": "أولاد مبارك",
  "OULAD TEIMA": "أولاد تايمة",
  "OULAD YAHIA": "أولاد يحيى",
  "OULMES": "أولماس",
  "OUZIOUA": "أوزيوة",
  "RABAT": "الرباط",
  "RICH": "ريش",
  "ROMMANI": "الرماني",
  "SAAIDIA": "السعيدية",
  "SAFI": "آسفي",
  "SALE": "سلا",
  "SEBT AIT RAHOU": "سبت آيت رحو",
  "SEFROU": "صفرو",
  "SEGANGANE": "سكانغان",
  "SELOUANE": "سلوان",
  "SETTAT": "سطات",
  "SIDI ALLAL TAZI": "سيدي علال التازي",
  "SIDI BENNOUR": "سيدي بنور",
  "SIDI IFNI": "سيدي إفني",
  "SIDI KACEM": "سيدي قاسم",
  "SIDI RAHHAL": "سيدي رحال",
  "SIDI SLIMANE": "سيدي سليمان",
  "SIDI YAHIA": "سيدي يحيى",
  "SKHIRAT": "الصخيرات",
  "SMARA": "السمارة",
  "SOUK EL ARBAA": "سوق الأربعاء",
  "SOUK SEBT": "سوق السبت",
  "TADLA": "تادلة",
  "TAFRAOUT": "تافراوت",
  "TAGHAZOUT": "تاغازوت",
  "TAHLA": "تاهلة",
  "TALIOUINE": "تاليوين",
  "TAMANAR": "تمنار",
  "TAMAZIRT": "تمزيرت",
  "TAMESLOHT": "تمسلوط",
  "TAN TAN": "طانطان",
  "TANGER": "طنجة",
  "TAOUNATE": "تاونات",
  "TAOURIRT": "تاوريرت",
  "TARFAYA": "الطرفاية",
  "TAROUDANT": "تارودانت",
  "TATA": "طاطا",
  "TAZA": "تازة",
  "TEMARA": "تمارة",
  "TETOUAN": "تطوان",
  "TIFLET": "تيفلت",
  "TIKIOUINE": "تيكيوين",
  "TINGHIR": "تنغير",
  "TIZNIT": "تيزنيت",
  "TIZTOUT": "تيزتوت",
  "YOUSSOUFIA": "اليوسفية",
  "ZAGORA": "زاكورة",
  "ZAIO": "زاييو",
  "ZAOUIAT CHEIKH": "زاوية الشيخ",
  "ZEGANGANE": "زكانغان",
  "ZERARDA": "زراردة",
  "ZGHANGHANE": "زكانغان",
  "ZHILIGA": "زيلغة",
  "ZMAMRA": "زمامرة",
  "ZOUMI": "زومي",
  
  // Add neighborhoods and districts
  "Ain El Aouda": "عين العودة",
  "HAY RYAD": "حي الرياض",
  "HAY SALAM": "حي السلام",
  "HAY AL WAFA": "حي الوفا",
};

// Function to transliterate French city names to Arabic (basic transliteration)
const transliterateToArabic = (cityName: string): string => {
  // Basic transliteration map for common French characters to Arabic
  const transliterationMap: Record<string, string> = {
    'A': 'أ', 'B': 'ب', 'C': 'ك', 'D': 'د', 'E': 'ي', 'F': 'ف', 'G': 'ج',
    'H': 'ه', 'I': 'ي', 'J': 'ج', 'K': 'ك', 'L': 'ل', 'M': 'م', 'N': 'ن',
    'O': 'و', 'P': 'ب', 'Q': 'ق', 'R': 'ر', 'S': 'س', 'T': 'ت', 'U': 'و',
    'V': 'ف', 'W': 'و', 'X': 'كس', 'Y': 'ي', 'Z': 'ز'
  };
  
  // This is a simplified transliteration - for better results, we should use explicit translations
  // For now, return the city name as-is if no translation exists, but we'll filter it out
  return cityName;
};

// Function to get city name in Arabic
export const getCityNameArabic = (cityName: string): string => {
  const normalized = cityName.toUpperCase().trim();
  // Check if translation exists
  if (cityTranslations[normalized]) {
    return cityTranslations[normalized];
  }
  // If no explicit translation exists, return the French name
  // This ensures all cities are shown, but we'll prioritize those with translations
  // In practice, you should add translations for all cities
  return cityName;
};

// Function to get all cities for dropdown, sorted alphabetically
export const getCitiesForDropdown = (language: 'fr' | 'ar'): Array<{value: string, label: string}> => {
  const cities = getAllCities();
  // Filter out any potential duplicates by normalizing and using a Map
  const cityMap = new Map<string, string>();
  
  cities.forEach(city => {
    const normalized = city.toUpperCase().trim();
    // Keep the first occurrence (original case)
    if (!cityMap.has(normalized)) {
      cityMap.set(normalized, city);
    }
  });
  
  // Convert to array and create dropdown items
  const dropdownItems = Array.from(cityMap.entries()).map(([normalized, originalCity]) => {
    let label: string;
    
    if (language === 'ar') {
      const arabicName = getCityNameArabic(originalCity);
      // Use Arabic translation if available, otherwise use French (but filter out French-only in Arabic mode)
      // Check if this city has an explicit translation (not just the French name)
      const hasTranslation = cityTranslations[normalized] !== undefined;
      if (!hasTranslation) {
        return null; // Filter out cities without explicit Arabic translations
      }
      label = arabicName;
    } else {
      label = originalCity;
    }
    
    return {
      value: originalCity, // Keep original value for form submission
      label: label // Use translated label for display
    };
  }).filter((item): item is {value: string, label: string} => item !== null);
  
  // Remove any duplicates based on label (in case translation creates duplicates)
  const uniqueLabels = new Map<string, {value: string, label: string}>();
  dropdownItems.forEach(item => {
    if (!uniqueLabels.has(item.label)) {
      uniqueLabels.set(item.label, item);
    }
  });
  
  // Sort by label in the selected language
  return Array.from(uniqueLabels.values()).sort((a, b) => {
    return a.label.localeCompare(b.label, language === 'ar' ? 'ar' : 'fr', { sensitivity: 'base' });
  });
};

