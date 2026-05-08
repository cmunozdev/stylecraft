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