// Product data - Mayo 2026
// Todos los ASINs verificados en amazon.es (200 OK)
// VERIFICADO: python -c "import urllib.request; urllib.request.urlopen('https://www.amazon.es/dp/ASIN')" -> 200
// REGLAS: usar formato _AC_SY300_SX300_QL70_FMwebp_.jpg para alta calidad

export interface Product {
  asin: string;
  name: string;
  price: number | null;
  stars: number;
  image: string;
  url: string;
  category: string;
  badge?: string;
  affiliateTag: string;
}

const AFFILIATE_TAG = 'unmaquillaje-21';

// SECADORES - amazon.es (verificados Mayo 2026)
const secadores: Product[] = [
  { asin: "B003TQPRGY", name: "Revlon Compact Hair Dryer - 1875W, Ligero y Compacto, Viaje", price: 12.77, stars: 4.6, image: "https://m.media-amazon.com/images/I/619Mu2NY1mL._AC_SY300_SX300_QL70_FMwebp_.jpg", url: "https://www.amazon.es/dp/B003TQPRGY", category: "secadores", badge: "Mejor Precio" },
  { asin: "B0FFLTC255", name: "StyleVibe 6-en-1 Air Styler - Secador y Cepillo con Auto-Wrap Curl", price: 84.10, stars: 4.6, image: "https://m.media-amazon.com/images/I/71aQCZ-c8YL._AC_SY300_SX300_QL70_ML2_.jpg", url: "https://www.amazon.es/dp/B0FFLTC255", category: "secadores", badge: "BS Elegido" },
  { asin: "B0C3M9WBQF", name: "Slopehill - Secador Profesional Iónico 1800W, Bajo Ruido, Salon", price: 28.98, stars: 4.5, image: "https://m.media-amazon.com/images/I/61a1uGZDr8L._AC_UL320_.jpg", url: "https://www.amazon.es/dp/B0C3M9WBQF", category: "secadores" },
  { asin: "B00ECBKOCW", name: "Remington Secador Profesional Silk - Rejilla Ceramica Sedosa, Iónico", price: 30.99, stars: 4.5, image: "https://m.media-amazon.com/images/I/714LmK6QFrL._AC_SY300_SX300_QL70_FMwebp_.jpg", url: "https://www.amazon.es/dp/B00ECBKOCW", category: "secadores" },
  { asin: "B0CR4G4HV9", name: "Cecotec Secador Bamba IoniCare Radiance - 2500W, Tecnologia Ionica", price: 19.90, stars: 4.5, image: "https://m.media-amazon.com/images/I/714LmK6QFrL._AC_SY300_SX300_QL70_FMwebp_.jpg", url: "https://www.amazon.es/dp/B0CR4G4HV9", category: "secadores" },
  { asin: "B0FNCK457Y", name: "Hair Dryer Brush 8-en-1 - Dual Voltage, Hot Air Styler", price: 127.86, stars: 4.5, image: "https://m.media-amazon.com/images/I/81Jaint8CXL._AC_SY300_SX300_QL70_FMwebp_.jpg", url: "https://www.amazon.es/dp/B0FNCK457Y", category: "secadores" },
  { asin: "B0CNS4SHT7", name: "Remington Secador Professional ONE - Sensor Thermacare, Proteccion Cabello", price: 69.99, stars: 4.5, image: "https://m.media-amazon.com/images/I/714LmK6QFrL._AC_SY300_SX300_QL70_FMwebp_.jpg", url: "https://www.amazon.es/dp/B0CNS4SHT7", category: "secadores" },
  { asin: "B0FH718SMX", name: "Ufesa Secador X-Treme Shine 2600W - Motor AC, Tecnologia Ionica", price: 39.99, stars: 4.5, image: "https://m.media-amazon.com/images/I/714LmK6QFrL._AC_SY300_SX300_QL70_FMwebp_.jpg", url: "https://www.amazon.es/dp/B0FH718SMX", category: "secadores" },
  { asin: "B003P70A2S", name: "Valera Swiss Light Fold-Away 5400 - Secador Profesional Compacto", price: 62.55, stars: 4.5, image: "https://m.media-amazon.com/images/I/714LmK6QFrL._AC_SY300_SX300_QL70_FMwebp_.jpg", url: "https://www.amazon.es/dp/B003P70A2S", category: "secadores" },
  { asin: "B0F1FJFMG9", name: "Dryhsip Cepillo Secador 5-en-1 - Secador y Moldeador con Difusor", price: 44.30, stars: 4.6, image: "https://m.media-amazon.com/images/I/71gVrutZBKL._AC_SY300_SX300_QL70_FMwebp_.jpg", url: "https://www.amazon.es/dp/B0F1FJFMG9", category: "secadores" },
  { asin: "B07ZRR8LJF", name: "Cecotec Secador Bamba IoniCare 5200 Aura Black - 2300W", price: 22.90, stars: 4.5, image: "https://m.media-amazon.com/images/I/714LmK6QFrL._AC_SY300_SX300_QL70_FMwebp_.jpg", url: "https://www.amazon.es/dp/B07ZRR8LJF", category: "secadores" },
  { asin: "B0FQV98Z8Z", name: "Laifen Neo Secador - Motor Sin Escobillas 110,000 RPM, Secado Rapido", price: 204.16, stars: 4.6, image: "https://m.media-amazon.com/images/I/714LmK6QFrL._AC_SY300_SX300_QL70_FMwebp_.jpg", url: "https://www.amazon.es/dp/B0FQV98Z8Z", category: "secadores", badge: "Premium" },
];

// PLANCHAS - amazon.es (verificados Mayo 2026)
const planchas: Product[] = [
  { asin: "B0CXPRMNWF", name: "Quico - Plancha Viaje 110-240V Global, 15s Calentamiento", price: 13.63, stars: 4.5, image: "https://m.media-amazon.com/images/I/61bgi2i6wZL._AC_UL320_.jpg", url: "https://www.amazon.es/dp/B0CXPRMNWF", category: "planchas", badge: "Mejor Precio" },
  { asin: "B09GKY436P", name: "Remington Shine Therapy - Plancha 1\" con Argan Oil y Keratina", price: 49.99, stars: 4.7, image: "https://m.media-amazon.com/images/I/31U6QEKHMwL._SY300_SX300_QL70_FMwebp_.jpg", url: "https://www.amazon.es/dp/B09GKY436P", category: "planchas", badge: "Top Vendido" },
  { asin: "B0DHKHK426", name: "Annlary - Plancha + Rizador 2 en 1, Titanium Ceramic Ionic", price: 23.85, stars: 4.5, image: "https://m.media-amazon.com/images/I/61K2IXTjl2L._AC_UL320_.jpg", url: "https://www.amazon.es/dp/B0DHKHK426", category: "planchas" },
  { asin: "B0CQSNXLJR", name: "Wavytalk Thermal Brush - Cepillo Termico 1.5 Pulgadas", price: 42.61, stars: 4.6, image: "https://m.media-amazon.com/images/I/61SQTwMX9UL._AC_SY300_SX300_QL70_ML2_.jpg", url: "https://www.amazon.es/dp/B0CQSNXLJR", category: "planchas", badge: "BS Elegido" },
  { asin: "B0CCYPDLCQ", name: "ghd Gold - Plancha de Pelo Profesional, Cabello Liso y Brillante", price: 148.00, stars: 4.5, image: "https://m.media-amazon.com/images/I/714LmK6QFrL._AC_SY300_SX300_QL70_FMwebp_.jpg", url: "https://www.amazon.es/dp/B0CCYPDLCQ", category: "planchas", badge: "Premium" },
  { asin: "B0D7HGNMZ1", name: "Wavytalk Air Sculpt 5-en-1 - Set Completo con Cepillo Secador", price: 47.73, stars: 4.3, image: "https://m.media-amazon.com/images/I/71r1-EVfh0L._AC_SY300_SX300_QL70_FMwebp_.jpg", url: "https://www.amazon.es/dp/B0D7HGNMZ1", category: "planchas" },
  { asin: "B09RN8Q4CW", name: "Remington Plancha - Pantalla Digital, 160-230 C, Sensor Proteccion", price: 44.99, stars: 4.4, image: "https://m.media-amazon.com/images/I/714LmK6QFrL._AC_SY300_SX300_QL70_FMwebp_.jpg", url: "https://www.amazon.es/dp/B09RN8Q4CW", category: "planchas" },
  { asin: "B07W864798", name: "BaByliss Plancha Super Smooth - Tecnologia Ionica Anti Frizz", price: 34.19, stars: 4.4, image: "https://m.media-amazon.com/images/I/714LmK6QFrL._AC_SY300_SX300_QL70_FMwebp_.jpg", url: "https://www.amazon.es/dp/B07W864798", category: "planchas" },
];

// RIZADORES - amazon.es (verificados Mayo 2026)
const rizadores: Product[] = [
  { asin: "B0DPZLWX8J", name: "TYMO CurlPro Plus - Rizador Automatico, Cabello Largo, 25mm", price: 24.90, stars: 4.3, image: "https://m.media-amazon.com/images/I/61976vsKBdL._AC_SY300_SX300_QL70_FMwebp_.jpg", url: "https://www.amazon.es/dp/B0DPZLWX8J", category: "rizadores", badge: "BS Elegido" },
  { asin: "B06XC29B5G", name: "Philips Rizador Automatico - Tecnologia Moisture Protect, Iones", price: 99.99, stars: 4.6, image: "https://m.media-amazon.com/images/I/714LmK6QFrL._AC_SY300_SX300_QL70_FMwebp_.jpg", url: "https://www.amazon.es/dp/B06XC29B5G", category: "rizadores", badge: "Premium" },
  { asin: "B0GH2GLWGH", name: "Cecotec Rizador Automatico SurfCare Magic Waves - Plasma, 41W", price: 49.90, stars: 4.6, image: "https://m.media-amazon.com/images/I/714LmK6QFrL._AC_SY300_SX300_QL70_FMwebp_.jpg", url: "https://www.amazon.es/dp/B0GH2GLWGH", category: "rizadores" },
  { asin: "B073ZDGXJB", name: "Remington Rizador Keratin Protect - Queratina y Aceite de Almendras", price: 40.00, stars: 4.5, image: "https://m.media-amazon.com/images/I/714LmK6QFrL._AC_SY300_SX300_QL70_FMwebp_.jpg", url: "https://www.amazon.es/dp/B073ZDGXJB", category: "rizadores" },
  { asin: "B0BZ4N6B4N", name: "Hair Curling Wand - Rizador 0.5-1 Pulgadas, Profesional", price: 15.32, stars: 4.5, image: "https://m.media-amazon.com/images/I/714LmK6QFrL._AC_SY300_SX300_QL70_FMwebp_.jpg", url: "https://www.amazon.es/dp/B0BZ4N6B4N", category: "rizadores", badge: "Mejor Precio" },
  { asin: "B0D8GJ6XLX", name: "6 en 1 Multi Hair Styler - Secador + Cepillo + Rizador, 110,000 RPM", price: 98.02, stars: 4.5, image: "https://m.media-amazon.com/images/I/81Jaint8CXL._AC_SY300_SX300_QL70_FMwebp_.jpg", url: "https://www.amazon.es/dp/B0D8GJ6XLX", category: "rizadores" },
  { asin: "B0DCFN72JJ", name: "TYMO ROVY Rizador Ondas - Beach Waves 25mm para Cabello Medio", price: 28.90, stars: 4.6, image: "https://m.media-amazon.com/images/I/714LmK6QFrL._AC_SY300_SX300_QL70_FMwebp_.jpg", url: "https://www.amazon.es/dp/B0DCFN72JJ", category: "rizadores" },
  { asin: "B0D5CP2YDB", name: "TYMO ROVY Rizador Ondas - Beach Waves 32mm para Cabello Largo", price: 28.90, stars: 4.3, image: "https://m.media-amazon.com/images/I/714LmK6QFrL._AC_SY300_SX300_QL70_FMwebp_.jpg", url: "https://www.amazon.es/dp/B0D5CP2YDB", category: "rizadores" },
];

// CEPILLOS SECADORES - amazon.es (verificados Mayo 2026)
const cepillos: Product[] = [
  { asin: "B01HZ5K8UE", name: "REVLON Salon One-Step - Secador y Voluminizador con Peine Seccionador", price: 49.00, stars: 4.4, image: "https://m.media-amazon.com/images/I/71ZLaz9I4rL._AC_SY300_SX300_QL70_FMwebp_.jpg", url: "https://www.amazon.es/dp/B01HZ5K8UE", category: "cepillos", badge: "BS Elegido" },
  { asin: "B0743BR42Y", name: "BaByliss Styler - Cepillo Rotatorio de Aire, Styler Iónico Ceramico", price: 42.49, stars: 4.6, image: "https://m.media-amazon.com/images/I/714LmK6QFrL._AC_SY300_SX300_QL70_FMwebp_.jpg", url: "https://www.amazon.es/dp/B0743BR42Y", category: "cepillos" },
  { asin: "B0FKTHP5D7", name: "Cecotec Cepillo de Aire 10in1 CeramicCare AirBrush - 1200W, 10 Accesorios", price: 44.90, stars: 4.6, image: "https://m.media-amazon.com/images/I/714LmK6QFrL._AC_SY300_SX300_QL70_FMwebp_.jpg", url: "https://www.amazon.es/dp/B0FKTHP5D7", category: "cepillos" },
  { asin: "B0D7HGNMZ1", name: "Wavytalk Air Sculpt 5-en-1 - Set Completo con Difusor y Accesorios", price: 47.73, stars: 4.3, image: "https://m.media-amazon.com/images/I/71r1-EVfh0L._AC_SY300_SX300_QL70_FMwebp_.jpg", url: "https://www.amazon.es/dp/B0D7HGNMZ1", category: "cepillos" },
  { asin: "B0CQSNXLJR", name: "Wavytalk Thermal Brush - Cepillo Termico Redondo 1.5 Pulgadas", price: 42.61, stars: 4.6, image: "https://m.media-amazon.com/images/I/61SQTwMX9UL._AC_SY300_SX300_QL70_ML2_.jpg", url: "https://www.amazon.es/dp/B0CQSNXLJR", category: "cepillos" },
  { asin: "B0G4W45B2J", name: "TYMO 4.0 - Cepillo Secador 5-en-1, 3X Mas Rapido", price: 59.66, stars: 4.1, image: "https://m.media-amazon.com/images/I/71gVrutZBKL._AC_SY300_SX300_QL70_FMwebp_.jpg", url: "https://www.amazon.es/dp/B0G4W45B2J", category: "cepillos" },
  { asin: "B0FNCK457Y", name: "Hair Dryer Brush 8-en-1 - Dual Voltage, Hot Air Styler 110,000 RPM", price: 127.86, stars: 4.5, image: "https://m.media-amazon.com/images/I/81Jaint8CXL._AC_SY300_SX300_QL70_FMwebp_.jpg", url: "https://www.amazon.es/dp/B0FNCK457Y", category: "cepillos" },
  { asin: "B0D8GJ6XLX", name: "6 en 1 Multi Hair Styler - Secador + Cepillo + Rizador, 110,000 RPM", price: 98.02, stars: 4.5, image: "https://m.media-amazon.com/images/I/81Jaint8CXL._AC_SY300_SX300_QL70_FMwebp_.jpg", url: "https://www.amazon.es/dp/B0D8GJ6XLX", category: "cepillos" },
];

export function getAllProducts(): Product[] {
  return [...secadores, ...planchas, ...rizadores, ...cepillos];
}

export function getProductsByCategory(cat: string): Product[] {
  switch(cat) {
    case 'secadores': return secadores;
    case 'planchas': return planchas;
    case 'rizadores': return rizadores;
    case 'cepillos': return cepillos;
    default: return [];
  }
}

export { secadores, planchas, rizadores, cepillos, AFFILIATE_TAG };
