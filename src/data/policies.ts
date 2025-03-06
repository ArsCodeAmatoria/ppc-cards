import { CategoryData } from '../types/policy';

export const categories: CategoryData[] = [
  {
    id: 'gov-politics',
    title: 'Government & Politics',
    description: 'Core governmental policies and political reform initiatives',
    icon: 'landmark',
    subcategories: [
      {
        id: 'electoral-reform',
        title: 'Electoral Reform',
        description: 'Policies regarding voting systems and democratic processes',
        icon: 'vote',
        policies: [
          {
            id: 'electoral-reform-1',
            title: 'First Past the Post',
            category: 'Government & Politics',
            description: 'Supporting the current electoral system',
            content: [
              'Maintain the current First Past the Post system',
              'Ensure stable majority governments',
              'Preserve direct local representation'
            ],
            icon: 'check-square',
            sources: ['https://www.peoplespartyofcanada.ca/electoral-reform'],
            subcategory: 'Electoral Reform'
          }
        ]
      }
    ]
  },
  {
    id: 'economy',
    title: 'Economy & Taxation',
    description: 'Economic policies and tax reform proposals',
    icon: 'dollar-sign',
    subcategories: [
      {
        id: 'taxation',
        title: 'Taxation',
        description: 'Tax reduction and simplification policies',
        icon: 'calculator',
        policies: [
          {
            id: 'tax-reform-1',
            title: 'Tax Reduction',
            category: 'Economy & Taxation',
            description: 'Comprehensive tax reduction plan',
            content: [
              'Lower personal income taxes',
              'Simplify the tax bracket system',
              'Support small businesses through tax incentives'
            ],
            icon: 'trending-down',
            sources: ['https://www.peoplespartyofcanada.ca/tax-reform'],
            subcategory: 'Taxation'
          }
        ]
      }
    ]
  }
]; 