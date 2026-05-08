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