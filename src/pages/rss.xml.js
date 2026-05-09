import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const guides = [
    {
      title: 'Como Elegir el Mejor Secador de Pelo en 2026',
      description: 'Todo lo que necesitas saber para elegir el secador perfecto. Potencia, tecnologia ionica, difusor, peso y precio. Comparativa de los 10 mejores.',
      pubDate: new Date('2026-05-01'),
      link: '/guias/guia-comprar-secador',
    },
    {
      title: 'Como Elegir la Mejor Plancha de Pelo en 2026',
      description: 'Todo lo que necesitas saber para elegir la plancha de pelo perfecta. Tecnologias de placas, temperaturas, marcas y comparativas.',
      pubDate: new Date('2026-05-01'),
      link: '/guias/guia-comprar-plancha',
    },
    {
      title: 'Como Elegir el Mejor Rizador de Pelo en 2026',
      description: 'Todo lo que necesitas saber para elegir el rizador perfecto. Tipos de barril, temperaturas, marcas y comparativas.',
      pubDate: new Date('2026-05-01'),
      link: '/guias/guia-comprar-rizador',
    },
    {
      title: 'Como Elegir el Mejor Cepillo Secador en 2026',
      description: 'Todo lo que necesitas saber para elegir el cepillo secador perfecto. REVLON vs TYMO vs Dyson, tecnologias y comparativas.',
      pubDate: new Date('2026-05-01'),
      link: '/guias/guia-comprar-cepillo',
    },
    {
      title: 'REVLON One-Step Volumizer Review 2026',
      description: 'Review completa del REVLON One-Step Volumizer. El cepillo secador mas vendido en Amazon.es. Analisis honesto: pros, contras y comparativa.',
      pubDate: new Date('2026-05-05'),
      link: '/productos/revlon-one-step-review',
    },
    {
      title: 'Remington Shine Therapy Review 2026',
      description: 'Review completa de la Remington Shine Therapy. Plancha de pelo con infusion de Argan Oil y Keratina. Analisis honesto, pros y contras.',
      pubDate: new Date('2026-05-05'),
      link: '/productos/remington-shine-therapy-review',
    },
    {
      title: 'TYMO CURLPRO Plus Review 2026',
      description: 'Review completa del TYMO CURLPRO Plus. 500M iones, rotativo automatico, 4 temperaturas. Analisis honesto y comparativa con alternativas.',
      pubDate: new Date('2026-05-05'),
      link: '/productos/tymo-curlpro-review',
    },
    {
      title: 'StyleVibe 6-en-1 Air Styler Review 2026',
      description: 'Review completa del StyleVibe 6-en-1 Air Styler. Secador con 6 accesorios magneticos: cepillo, rizador, difusor y mas.',
      pubDate: new Date('2026-05-08'),
      link: '/productos/stylevibe-air-styler-review',
    },
    {
      title: 'Ufesa Secador X-Treme Shine 2600W Review 2026',
      description: 'Review completa del Ufesa Secador X-Treme Shine 2600W. Motor AC, tecnologia ionica y 2600W de potencia para secado rapido.',
      pubDate: new Date('2026-05-08'),
      link: '/productos/ufesa-xtreme-shine-2600w-review',
    },
    {
      title: 'Cecotec Bamba IoniCare Radiance 2500W Review 2026',
      description: 'Review completa del Cecotec Secador Bamba IoniCare Radiance 2500W. Secador Cecotec con tecnologia ionica al mejor precio.',
      pubDate: new Date('2026-05-08'),
      link: '/productos/cecotec-bamba-ionicare-radiance-review',
    },
    {
      title: 'Remington Shine Therapy Plancha Review 2026',
      description: 'Review completa de la Remington Shine Therapy con placas de ceramico infusionadas en argan oil y keratina.',
      pubDate: new Date('2026-05-08'),
      link: '/productos/remington-shine-therapy-plancha-review',
    },
    {
      title: 'ghd Gold Plancha Profesional Review 2026',
      description: 'Review completa de la ghd Gold. La plancha de pelo profesional usada en peluquerias de todo el mundo. Placas ceramicas, temperatura optima 185C.',
      pubDate: new Date('2026-05-08'),
      link: '/productos/ghd-gold-plancha-review',
    },
    {
      title: 'TYMO CurlPro Plus Review 2026',
      description: 'Review completa del TYMO CurlPro Plus. Rizador automatico con barril de 25mm para cabello largo. Tecnologia automatica que riza sin tecnica.',
      pubDate: new Date('2026-05-08'),
      link: '/productos/tymo-curlpro-plus-review',
    },
    {
      title: 'TYMO 4.0 Review 2026 - Cepillo Secador 5-en-1',
      description: 'Review completa del TYMO 4.0. Cepillo secador 5-en-1 con motor de 110,000 RPM y 4 cabezales interchangeables.',
      pubDate: new Date('2026-05-08'),
      link: '/productos/tymo-4-review',
    },
    {
      title: 'Cecotec Cepillo de Aire 10in1 CeramicCare AirBrush Review 2026',
      description: 'Review completa del Cecotec Cepillo de Aire 10in1 CeramicCare AirBrush. 10 accesorios, motor 1200W, tecnologia CeramicCare.',
      pubDate: new Date('2026-05-08'),
      link: '/productos/cecotec-cepillo-10in1-airbrush-review',
    },
    {
      title: 'REVLON Compact Hair Dryer 1875W Review 2026',
      description: 'Review completa del REVLON Compact Hair Dryer. Secador ligero de 1875W ideal para viaje. 4.6 estrellas, mejor precio.',
      pubDate: new Date('2026-05-08'),
      link: '/productos/revlon-compact-hairdryer-review',
    },
    {
      title: 'Slopehill Secador Profesional 1800W Review 2026',
      description: 'Review completa del Slopehill Secador Profesional. 1800W, bajo ruido, dise\u00f1o de salon. Analisis honesto y comparativa.',
      pubDate: new Date('2026-05-08'),
      link: '/productos/slopehill-secador-profesional-review',
    },
    {
      title: 'Remington Secador Profesional Silk Review 2026',
      description: 'Review completa del Remington Secador Profesional Silk. Rejilla ceramica sedosa, tecnologia ionica. Analisis y comparativa.',
      pubDate: new Date('2026-05-08'),
      link: '/productos/remington-silk-secador-review',
    },
    {
      title: 'Cecotec Bamba IoniCare 5200 Aura Black Review 2026',
      description: 'Review completa del Cecotec Bamba IoniCare 5200 Aura Black. 2300W, tecnologia ionica, 3 temperaturas. Analisis honesto.',
      pubDate: new Date('2026-05-08'),
      link: '/productos/cecotec-bamba-ionicare-5200-review',
    },
    {
      title: 'Laifen Neo Secador Review 2026',
      description: 'Review completa del Laifen Neo. Motor brushless 110,000 RPM, 4 temperaturas, doble voltaje. Secador premium a buen precio.',
      pubDate: new Date('2026-05-08'),
      link: '/productos/laifen-neo-secador-review',
    },
    {
      title: 'Remington Professional ONE Secador Review 2026',
      description: 'Review completa del Remington Professional ONE. Sensor Thermacare, 2400W, tecnologia ionica. Analisis y guia de compra.',
      pubDate: new Date('2026-05-08'),
      link: '/productos/remington-professional-one-review',
    },
    {
      title: 'Valera Swiss Light Fold-Away 5400 Review 2026',
      description: 'Review completa del Valera Swiss Light Fold-Away 5400. Secador profesional compacto de fabricacion suiza, plegable, doble voltaje.',
      pubDate: new Date('2026-05-08'),
      link: '/productos/valera-swiss-light-review',
    },
    {
      title: 'Dryhsip Cepillo Secador 5-en-1 Review 2026',
      description: 'Review completa del Dryhsip Cepillo Secador 5-en-1. 5 accesorios interchangeables, tecnologia ionica, ~420g. Analisis honesto.',
      pubDate: new Date('2026-05-08'),
      link: '/productos/dryhsip-cepillo-secador-5en1-review',
    },
    {
      title: 'Hair Dryer Brush 8-en-1 Review 2026',
      description: 'Review completa del Hair Dryer Brush 8-en-1. Motor 110,000 RPM, 8 funciones, dual voltage. Secador multi-funcion. Analisis honesto.',
      pubDate: new Date('2026-05-08'),
      link: '/productos/hair-dryer-brush-8en1-review',
    },
    {
      title: 'Quico Plancha Viaje 110-240V Review 2026',
      description: 'Review completa de la Quico Plancha Viaje. Voltaje automatico, 15s calentamiento, placa 25mm, ceramic tourmaline. Mejor precio.',
      pubDate: new Date('2026-05-08'),
      link: '/productos/quico-plancha-viaje-review',
    },
    {
      title: 'Annlary Plancha + Rizador 2-en-1 Review 2026',
      description: 'Review completa del Annlary Plancha + Rizador 2-en-1. Titanium ceramic ionic, 150-230C, 30s calentamiento. Versatil y funcional.',
      pubDate: new Date('2026-05-08'),
      link: '/productos/annlary-plancha-rizador-2en1-review',
    },
    {
      title: 'Remington Plancha Digital 160-230C Review 2026',
      description: 'Review completa de la Remington Plancha Digital. Pantalla LED, sensor proteccion, 160-230C, advanced ceramic. Analisis honesto.',
      pubDate: new Date('2026-05-08'),
      link: '/productos/remington-digital-plancha-review',
    },
    {
      title: 'BaByliss Super Smooth Plancha Review 2026',
      description: 'Review completa de la BaByliss Super Smooth. Tecnologia ionica, placas titanio, 235C fija, anti frizz. Analisis y comparativa.',
      pubDate: new Date('2026-05-08'),
      link: '/productos/babyliss-super-smooth-plancha-review',
    },
    {
      title: 'Philips Rizador Automatico Moisture Protect Review 2026',
      description: 'Review completa del Philips Rizador Automatico. Tecnologia Moisture Protect, sensor de humedad, iones. Premium y completo.',
      pubDate: new Date('2026-05-08'),
      link: '/productos/philips-rizador-automatico-review',
    },
    {
      title: 'Cecotec Rizador SurfCare Magic Waves Review 2026',
      description: 'Review completa del Cecotec Rizador SurfCare Magic Waves. Tecnologia plasma, 41W, 2 temperaturas. Mejor valor en rizadores.',
      pubDate: new Date('2026-05-08'),
      link: '/productos/cecotec-rizador-surfcare-review',
    },
    {
      title: 'Remington Keratin Protect Rizador Review 2026',
      description: 'Review completa del Remington Keratin Protect. Queratina y aceite de almendras, ceramica avanzada, apagado automatico. Analisis.',
      pubDate: new Date('2026-05-08'),
      link: '/productos/remington-keratin-protect-review',
    },
    {
      title: 'Hair Curling Wand Profesional Review 2026',
      description: 'Review completa del Hair Curling Wand. Rizador de barril profesional a precio economico. Ceramica, guante termico, 200C.',
      pubDate: new Date('2026-05-08'),
      link: '/productos/hair-curling-wand-review',
    },
    {
      title: 'TYMO ROVY 25mm Beach Waves Review 2026',
      description: 'Review completa del TYMO ROVY 25mm. Rizador de ondas con barril de 25mm para cabello medio. Beach waves a buen precio.',
      pubDate: new Date('2026-05-08'),
      link: '/productos/tymo-rovy-25mm-review',
    },
    {
      title: 'TYMO ROVY 32mm Beach Waves Review 2026',
      description: 'Review completa del TYMO ROVY 32mm. Rizador de ondas con barril de 32mm para cabello largo. Beach waves grandes y naturales.',
      pubDate: new Date('2026-05-08'),
      link: '/productos/tymo-rovy-32mm-review',
    },
    {
      title: 'Multi Hair Styler 6-en-1 Review 2026',
      description: 'Review completa del Multi Hair Styler 6-en-1. Secador, cepillo y rizador con motor 110,000 RPM y doble voltaje. Ideal para viaje.',
      pubDate: new Date('2026-05-08'),
      link: '/productos/multi-hair-styler-6en1-review',
    },
    {
      title: 'Wavytalk Thermal Brush 1.5 Pulgadas Review 2026',
      description: 'Review completa del Wavytalk Thermal Brush. Cepillo termico de ceramica tourmaline, ionico, 1.5 pulgadas. Analisis honesto.',
      pubDate: new Date('2026-05-08'),
      link: '/productos/wavytalk-thermal-brush-review',
    },
  ];

  return rss({
    title: 'StyleCraft',
    description: 'Tu guia experta en herramientas de estilismo capilar. Reviews, comparativas y guias de compra de los mejores secadores, planchas y rizadores.',
    site: context.site,
    items: guides.map(g => ({
      title: g.title,
      description: g.description,
      pubDate: g.pubDate,
      link: g.link,
    })),
    customData: '<language>es-ES</language>',
    stylesheet: false,
  });
}