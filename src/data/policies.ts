export interface Policy {
  id: string;
  title: string;
  description: string;
  icon?: string;
  content?: string[];
  details?: {
    keyPoints?: string[];
    sections?: {
      title: string;
      content: string;
    }[];
  };
}

export interface Subcategory {
  id: string;
  title: string;
  description: string;
  policies: Policy[];
}

export interface Category {
  id: string;
  title: string;
  description: string;
  subcategories: Subcategory[];
}

export const categories: Category[] = [
  {
    id: 'governance',
    title: 'Governance',
    description: 'Policies related to government reform and democratic processes',
    subcategories: [
      {
        id: 'media-reform',
        title: 'Media Reform',
        description: 'Ending government interference in news media',
        policies: [
          {
            id: 'defund-cbc',
            title: 'Defund CBC',
            description: 'End taxpayer funding of the CBC and other media',
            icon: 'Radio',
            content: [
              'The CBC receives over $1 billion in taxpayer funding annually',
              'CBC viewership has declined dramatically in recent years',
              'Private broadcasters must compete against a taxpayer-funded entity',
              'The CBC has shown clear political bias in its reporting'
            ],
            details: {
              keyPoints: [
                'End all taxpayer funding to the CBC',
                'Privatize CBC assets and operations',
                'Ensure a level playing field for all media companies',
                'Promote media diversity and competition'
              ],
              sections: [
                {
                  title: 'The Problem',
                  content: 'The Canadian Broadcasting Corporation receives over $1 billion in taxpayer funding annually, despite declining viewership and clear political bias in its reporting. This creates an unfair market advantage over private broadcasters who must compete against a government-funded entity.'
                },
                {
                  title: 'The Solution',
                  content: 'A PPC government would end all taxpayer funding to the CBC and privatize its assets and operations. This would save taxpayers money, ensure a level playing field for all media companies, and promote media diversity and competition.'
                },
                {
                  title: 'Implementation',
                  content: 'The privatization process would be conducted in a transparent manner, with assets sold to the highest bidders. Employees would be given the opportunity to purchase shares in the privatized entity. The transition would be completed within the first term of a PPC government.'
                }
              ]
            }
          },
          {
            id: 'media-neutrality',
            title: 'Media Neutrality',
            description: 'Ensure fair and balanced reporting in Canadian media',
            icon: 'FileText',
            content: [
              'Many Canadian media outlets receive government subsidies',
              'This creates a conflict of interest in reporting on government',
              'Media should be independent of government influence',
              'Taxpayers should not fund media that promotes government narratives'
            ],
            details: {
              keyPoints: [
                'End all media subsidies and bailouts',
                'Repeal Bill C-11 and other media control legislation',
                'Promote independent journalism',
                'Ensure Canadians have access to diverse viewpoints'
              ],
              sections: [
                {
                  title: 'The Problem',
                  content: 'Many Canadian media outlets receive government subsidies and bailouts, creating a conflict of interest in their reporting on government activities. This has led to a decline in journalistic independence and a narrowing of the range of perspectives available to Canadians.'
                },
                {
                  title: 'The Solution',
                  content: 'A PPC government would end all media subsidies and bailouts, repeal Bill C-11 and other legislation that gives the government control over media content, and promote independent journalism that is free from government influence.'
                },
                {
                  title: 'Benefits',
                  content: 'This approach would save taxpayer money, restore trust in media, ensure Canadians have access to diverse viewpoints, and strengthen our democracy through a truly free press that can hold the government accountable.'
                }
              ]
            }
          }
        ]
      },
      {
        id: 'immigration',
        title: 'Immigration Reform',
        description: 'A principled approach to immigration that puts Canadians first',
        policies: [
          {
            id: 'reduce-numbers',
            title: 'Reduce Immigration Numbers',
            description: 'Substantially reduce the total number of immigrants and refugees Canada accepts',
            icon: 'Users',
            details: {
              keyPoints: [
                'Reduce immigration to 100,000-150,000 per year',
                'Focus on economic immigrants who meet Canada\'s needs',
                'End chain migration and focus on nuclear family reunification',
                'Prioritize persecuted groups for refugee acceptance'
              ],
              sections: [
                {
                  title: 'Current Situation',
                  content: 'Canada currently accepts over 400,000 immigrants per year, one of the highest per-capita rates in the world. This rapid population growth has contributed to housing shortages, strained infrastructure, and wage suppression.'
                },
                {
                  title: 'Proposed Changes',
                  content: 'A PPC government would reduce immigration to 100,000-150,000 per year, focusing on economic immigrants who meet Canada\'s labor market needs. Family reunification would be limited to spouses and dependent children.'
                },
                {
                  title: 'Benefits',
                  content: 'This approach would alleviate pressure on housing, infrastructure, and services, while ensuring that newcomers can successfully integrate into Canadian society and contribute to our economy.'
                }
              ]
            }
          },
          {
            id: 'end-illegal-crossings',
            title: 'End Illegal Border Crossings',
            description: 'Take measures to prevent illegal entries at the Canada-US border',
            icon: 'Shield',
            details: {
              keyPoints: [
                'End the Safe Third Country Agreement loophole',
                'Turn back illegal border crossers to the US',
                'Increase border security resources',
                'Expedite deportation of those entering illegally'
              ],
              sections: [
                {
                  title: 'The Problem',
                  content: 'Thousands of migrants have crossed illegally into Canada from the US at unofficial points of entry, particularly at Roxham Road in Quebec. This circumvents the Safe Third Country Agreement and allows migrants to claim asylum in Canada despite coming from a safe country.'
                },
                {
                  title: 'The Solution',
                  content: 'A PPC government would declare the entire Canada-US border an official port of entry for the purposes of the Safe Third Country Agreement, allowing border officials to turn back anyone trying to enter Canada illegally from the US.'
                },
                {
                  title: 'Implementation',
                  content: 'This would require renegotiating the Safe Third Country Agreement with the US, increasing resources for border security, and establishing a more efficient system for processing and deporting those who enter illegally.'
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    id: 'economy',
    title: 'Economy',
    description: 'Economic policies focused on prosperity and fiscal responsibility',
    subcategories: [
      {
        id: 'taxation',
        title: 'Taxation Reform',
        description: 'Simplifying the tax system and reducing the burden on Canadians',
        policies: [
          {
            id: 'income-tax-cuts',
            title: 'Income Tax Cuts',
            description: 'Reduce income tax rates for all Canadians',
            icon: 'PiggyBank',
            details: {
              keyPoints: [
                'Raise the personal exemption to $15,000',
                'Establish two tax brackets: 15% and 25%',
                'Eliminate special tax breaks that benefit specific groups',
                'Gradually reduce the corporate tax rate to 10%'
              ],
              sections: [
                {
                  title: 'Current System',
                  content: 'Canada\'s tax system is complex, with multiple brackets and numerous deductions and credits that benefit specific groups. This creates inefficiencies and requires significant resources for compliance and administration.'
                },
                {
                  title: 'Proposed Changes',
                  content: 'A PPC government would simplify the tax system by establishing just two tax brackets: 15% for income between $15,000 and $100,000, and 25% for income above $100,000. This would be accompanied by the elimination of most special tax breaks.'
                },
                {
                  title: 'Benefits',
                  content: 'This approach would leave more money in Canadians\' pockets, simplify tax filing, reduce compliance costs, and create a more efficient and fair system that treats all Canadians equally.'
                }
              ]
            }
          },
          {
            id: 'eliminate-capital-gains',
            title: 'Eliminate Capital Gains Tax',
            description: 'Remove taxes on investment gains to encourage economic growth',
            icon: 'TrendingUp',
            details: {
              keyPoints: [
                'Abolish the capital gains tax',
                'Encourage investment in Canadian businesses',
                'Attract foreign capital to Canada',
                'Boost economic growth and job creation'
              ],
              sections: [
                {
                  title: 'Current Situation',
                  content: 'Currently, 50% of capital gains are taxable in Canada, which discourages investment and entrepreneurship. This puts Canada at a disadvantage compared to countries with more favorable investment tax regimes.'
                },
                {
                  title: 'Proposed Changes',
                  content: 'A PPC government would abolish the capital gains tax by setting the inclusion rate at 0%. This would encourage Canadians to save and invest, and would attract foreign capital to Canada.'
                },
                {
                  title: 'Economic Impact',
                  content: 'Eliminating the capital gains tax would lead to increased investment in Canadian businesses, job creation, and economic growth. It would also simplify the tax system and reduce the resources needed for compliance and administration.'
                }
              ]
            }
          }
        ]
      }
    ]
  }
]; 