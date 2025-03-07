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
        id: 'indigenous-policy',
        title: 'Indigenous Policy',
        description: 'Evidence-based approach to Indigenous issues',
        policies: [
          {
            id: 'truth-reconciliation',
            title: 'Truth in Reconciliation',
            description: 'Ensuring factual accuracy in discussions of Indigenous issues',
            icon: 'FileSearch',
            content: [
              'Many claims about residential schools have been exaggerated or misrepresented',
              'Ground-penetrating radar findings were misreported as "mass graves"',
              'Subsequent excavations have found no human remains in many alleged grave sites',
              'Public policy should be based on verified facts, not unsubstantiated claims'
            ],
            details: {
              keyPoints: [
                'Establish an independent commission to verify claims about residential schools',
                'Require evidence-based reporting on Indigenous issues',
                'Ensure that reconciliation efforts are based on documented facts',
                'Promote honest dialogue about Canada\'s history with Indigenous peoples'
              ],
              sections: [
                {
                  title: 'The Unmarked Graves Controversy',
                  content: 'In 2021, claims of discovering "mass graves" at former residential schools made international headlines. Ground-penetrating radar identified soil disturbances that were immediately characterized as containing the remains of hundreds of children. However, subsequent excavations at multiple sites have failed to uncover any human remains. Despite this, the government continues to allocate millions of dollars based on these unverified claims.'
                },
                {
                  title: 'Media Misrepresentation',
                  content: 'The media widely reported these findings as confirmed graves without waiting for excavation or forensic evidence. This led to church burnings and vandalism across Canada. When excavations found no bodies, these findings received minimal coverage, allowing the original narrative to persist in public consciousness despite being contradicted by the evidence.'
                },
                {
                  title: 'Policy Proposal',
                  content: 'A PPC government would establish an independent historical commission to investigate claims about residential schools and other Indigenous issues, ensuring that public policy is based on verified historical facts rather than politically motivated narratives. This commission would include Indigenous and non-Indigenous historians, archaeologists, and other relevant experts.'
                },
                {
                  title: 'Benefits',
                  content: 'This approach would ensure that reconciliation efforts are based on truth and that public resources are allocated based on verified needs rather than sensationalized claims. It would also help heal divisions by establishing a common understanding of historical facts that all Canadians can acknowledge, regardless of political affiliation.'
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
      },
      {
        id: 'foreign-policy',
        title: 'Foreign Policy',
        description: 'Canada-first approach to international relations',
        policies: [
          {
            id: 'no-foreign-wars',
            title: 'End Foreign War Funding',
            description: 'Stop sending Canadian tax dollars to foreign conflicts',
            icon: 'Shield',
            content: [
              'Canada has sent billions to Ukraine with little accountability',
              'Foreign conflicts drain resources needed for domestic priorities',
              'Military aid often prolongs conflicts rather than resolving them',
              'Canadian taxpayers should not fund foreign wars'
            ],
            details: {
              keyPoints: [
                'End all financial and military aid to Ukraine and other foreign conflicts',
                'Redirect funds to domestic priorities like healthcare and infrastructure',
                'Maintain a position of armed neutrality in global affairs',
                'Focus on diplomatic solutions rather than military interventions'
              ],
              sections: [
                {
                  title: 'The Problem',
                  content: 'Canada has committed billions of dollars to Ukraine and other foreign conflicts, despite facing significant domestic challenges. These funds are often sent with minimal oversight or accountability, and there is little evidence that they are achieving their stated objectives. Meanwhile, Canadians struggle with rising costs of living, healthcare shortages, and crumbling infrastructure.'
                },
                {
                  title: 'The Solution',
                  content: 'A PPC government would immediately end all financial and military aid to Ukraine and other foreign conflicts. We would redirect these funds to address pressing domestic needs and adopt a policy of armed neutrality in global affairs, focusing on diplomatic solutions rather than military interventions.'
                },
                {
                  title: 'Benefits',
                  content: 'This approach would save Canadian taxpayers billions of dollars, allow us to focus on solving domestic problems, reduce our involvement in conflicts that do not directly threaten our security, and restore our reputation as a peaceful nation that respects the sovereignty of other countries.'
                }
              ]
            }
          }
        ]
      },
      {
        id: 'government-reform',
        title: 'Government Reform',
        description: 'Making government smaller, more efficient, and accountable',
        policies: [
          {
            id: 'department-efficiency',
            title: 'Department of Government Efficiency (DOGE)',
            description: 'Creating a new department to reduce bureaucracy and waste',
            icon: 'Scissors',
            content: [
              'Government bureaucracy has grown exponentially in recent decades',
              'Overlapping departments and agencies waste taxpayer money',
              'Inefficient processes create unnecessary red tape for citizens and businesses',
              'A dedicated department is needed to streamline government operations'
            ],
            details: {
              keyPoints: [
                'Establish the Department of Government Efficiency (DOGE)',
                'Mandate 10% annual reduction in bureaucracy and regulations',
                'Eliminate redundant departments and agencies',
                'Implement performance metrics for all government services'
              ],
              sections: [
                {
                  title: 'The Problem',
                  content: 'The Canadian federal government has grown into a bloated bureaucracy with hundreds of departments, agencies, and crown corporations, many with overlapping mandates. This has led to inefficiency, waste, and a regulatory burden that stifles economic growth and innovation. Taxpayers are funding a government that has become too large, too complex, and too expensive.'
                },
                {
                  title: 'The Solution',
                  content: 'A PPC government would establish the Department of Government Efficiency (DOGE), with a mandate to reduce the size and cost of government. DOGE would conduct comprehensive audits of all federal departments, eliminate redundancies, streamline processes, and cut unnecessary regulations. It would be required to achieve a minimum 10% reduction in government spending and regulations annually.'
                },
                {
                  title: 'Implementation',
                  content: 'DOGE would be staffed by efficiency experts from the private sector, not career bureaucrats. It would report directly to the Prime Minister and have the authority to recommend the elimination or consolidation of any government entity. All departments would be required to justify their budgets and staffing levels annually, with a zero-based budgeting approach.'
                },
                {
                  title: 'Benefits',
                  content: 'This initiative would save taxpayers billions of dollars, reduce the regulatory burden on citizens and businesses, improve service delivery, and create a more responsive and accountable government. By cutting waste and bureaucracy, we can reduce taxes while maintaining essential services.'
                }
              ]
            }
          },
          {
            id: 'reduce-socialism',
            title: 'Reducing Socialist Policies',
            description: 'Limiting government intervention in the economy and society',
            icon: 'TrendingDown',
            content: [
              'Socialist policies have expanded government control over the economy',
              'High taxes and regulations stifle economic growth and personal freedom',
              'Government dependency has replaced self-reliance for many Canadians',
              'Free markets and individual responsibility create prosperity'
            ],
            details: {
              keyPoints: [
                'Reduce government spending as a percentage of GDP',
                'Lower taxes for all Canadians and businesses',
                'Privatize crown corporations and government services where possible',
                'Eliminate corporate welfare and industry subsidies'
              ],
              sections: [
                {
                  title: 'The Problem',
                  content: 'Canada has gradually adopted more socialist policies over the decades, with government spending now representing a large percentage of GDP. High taxes, extensive regulations, and government intervention in nearly every aspect of the economy have reduced economic freedom, stifled innovation, and created a culture of dependency rather than self-reliance.'
                },
                {
                  title: 'The Solution',
                  content: 'A PPC government would implement a comprehensive plan to reduce socialist policies and restore free market principles. This would include significant tax cuts, privatization of crown corporations, elimination of corporate welfare and industry subsidies, and a systematic reduction in the size and scope of government.'
                },
                {
                  title: 'Implementation',
                  content: 'We would set a target to reduce government spending as a percentage of GDP by 5% in our first term. We would implement a flat tax system, privatize CBC, Canada Post, and other crown corporations, end all business subsidies, and return responsibility for many programs to the provinces or the private sector.'
                },
                {
                  title: 'Benefits',
                  content: 'Reducing socialist policies would lead to stronger economic growth, more job creation, greater innovation, lower costs for goods and services, and a restoration of the values of personal responsibility and self-reliance that built Canada. It would also reduce government debt and ensure fiscal sustainability for future generations.'
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
  },
  {
    id: 'social-issues',
    title: 'Social Issues',
    description: 'Policies addressing cultural and social challenges',
    subcategories: [
      {
        id: 'identity-politics',
        title: 'Identity Politics',
        description: 'Opposing divisive ideologies and promoting national unity',
        policies: [
          {
            id: 'end-dei-funding',
            title: 'End DEI Funding',
            description: 'Eliminating taxpayer funding for diversity, equity, and inclusion programs',
            icon: 'Ban',
            content: [
              'DEI programs promote division based on immutable characteristics',
              'Billions of taxpayer dollars are spent on ineffective DEI initiatives',
              'Merit and individual achievement should be the basis for advancement',
              'True equality means equal treatment, not special treatment'
            ],
            details: {
              keyPoints: [
                'End all government funding for DEI programs and departments',
                'Eliminate DEI requirements for government grants and contracts',
                'Prohibit racial and gender quotas in public institutions',
                'Promote a merit-based approach in all government operations'
              ],
              sections: [
                {
                  title: 'The Problem',
                  content: 'The federal government spends billions of dollars annually on diversity, equity, and inclusion (DEI) programs that promote division rather than unity. These programs categorize Canadians based on immutable characteristics like race and gender, creating a hierarchy of victimhood that undermines social cohesion. DEI initiatives have infiltrated every level of government, education, and even private businesses through government mandates.'
                },
                {
                  title: 'The Solution',
                  content: 'A PPC government would immediately end all federal funding for DEI programs, departments, and initiatives. We would eliminate DEI requirements for government grants, contracts, and funding. We would prohibit the use of racial and gender quotas in hiring, promotion, and admissions in all public institutions and government-funded organizations.'
                },
                {
                  title: 'Implementation',
                  content: 'We would audit all federal departments to identify and eliminate DEI spending, disband the Department of Women and Gender Equality, remove DEI criteria from all government funding applications, and implement strict merit-based hiring practices across the federal government.'
                },
                {
                  title: 'Benefits',
                  content: 'This policy would save taxpayers billions of dollars, promote national unity by treating all Canadians equally, restore merit as the basis for advancement, and end the divisive practice of categorizing citizens by race, gender, and other immutable characteristics. It would also improve efficiency and effectiveness in government by ensuring the most qualified people are hired and promoted.'
                }
              ]
            }
          },
          {
            id: 'end-trans-funding',
            title: 'End Transgender Programming Funding',
            description: 'Stopping taxpayer funding for gender ideology promotion',
            icon: 'Slash',
            content: [
              'Millions of taxpayer dollars fund transgender ideology promotion',
              'Children are being influenced by government-funded gender programs',
              'Biological reality should be recognized in government policy',
              'Parents should determine what values their children are taught'
            ],
            details: {
              keyPoints: [
                'End all government funding for transgender programming and advocacy',
                'Remove gender ideology from school curricula and public institutions',
                'Protect children from irreversible medical interventions',
                'Defend parents\' rights to raise their children according to their values'
              ],
              sections: [
                {
                  title: 'The Problem',
                  content: 'The federal government spends millions of dollars promoting transgender ideology through various programs, grants, and initiatives. This includes funding for advocacy organizations, educational materials that present gender ideology as fact, and medical interventions that can have irreversible effects, particularly on children. These programs often operate without parental knowledge or consent.'
                },
                {
                  title: 'The Solution',
                  content: 'A PPC government would end all federal funding for transgender programming, advocacy, and medical interventions. We would ensure that government policies recognize biological reality and protect children from harmful ideologies and irreversible medical procedures. We would defend parents\' rights to determine what values their children are taught.'
                },
                {
                  title: 'Implementation',
                  content: 'We would audit all federal departments to identify and eliminate funding for transgender programming, remove gender ideology from federal educational materials and guidelines, prohibit the use of federal funds for gender-related medical interventions for minors, and implement policies that respect biological differences in areas such as sports, prisons, and shelters.'
                },
                {
                  title: 'Benefits',
                  content: 'This policy would protect children from harmful ideologies and medical interventions, respect the role of parents in raising their children, save taxpayer money, and ensure that government policies are based on biological reality rather than ideology. It would also help preserve women\'s spaces, sports, and rights that are being eroded by gender ideology.'
                }
              ]
            }
          }
        ]
      },
      {
        id: 'gun-rights',
        title: 'Gun Rights',
        description: 'Protecting the rights of law-abiding gun owners',
        policies: [
          {
            id: 'reverse-gun-control',
            title: 'Reverse Extreme Gun Control Laws',
            description: 'Repeal ineffective gun bans and respect the rights of legal gun owners',
            icon: 'Shield',
            content: [
              'Liberal gun bans target law-abiding citizens, not criminals',
              'Over $1 billion wasted on gun buyback programs that don\'t reduce crime',
              'Rural Canadians and indigenous communities rely on firearms for hunting and protection',
              'Evidence shows that legal gun ownership does not increase violent crime'
            ],
            details: {
              keyPoints: [
                'Repeal Bill C-21 and all "assault-style" weapon bans',
                'End the wasteful gun buyback program',
                'Simplify the firearms classification system',
                'Focus law enforcement resources on illegal guns and gang violence'
              ],
              sections: [
                {
                  title: 'The Problem',
                  content: 'The Liberal government has implemented increasingly restrictive gun control measures that primarily affect law-abiding gun owners while doing nothing to address the real sources of gun violence. Bills C-21 and C-71, along with Order in Council bans, have prohibited thousands of firearms based on their appearance rather than function, turning law-abiding citizens into criminals overnight and wasting billions on ineffective buyback programs.'
                },
                {
                  title: 'The Solution',
                  content: 'A PPC government would immediately repeal Bill C-21 and all "assault-style" weapon bans. We would end the wasteful gun buyback program and redirect those resources to border security to stop illegal gun smuggling and to law enforcement efforts targeting gang violence. We would simplify the firearms classification system to focus on function rather than appearance and streamline the licensing process while maintaining necessary safety checks.'
                },
                {
                  title: 'Implementation',
                  content: 'We would introduce legislation to repeal Bills C-21 and C-71, cancel the Order in Council prohibitions, and establish a simplified classification system developed in consultation with firearms experts, sport shooters, hunters, and law enforcement. We would also create a Firearms Owners Advisory Committee to ensure that future firearms legislation is evidence-based and respects the rights of legal gun owners.'
                },
                {
                  title: 'Benefits',
                  content: 'This approach would respect the rights of over 2.2 million licensed gun owners in Canada, save billions in taxpayer money, preserve important cultural and recreational activities, protect the livelihoods of those who depend on hunting, and allow law enforcement to focus on the real sources of gun violence: illegal firearms, gangs, and criminals. It would also restore property rights and due process for law-abiding Canadians.'
                }
              ]
            }
          }
        ]
      }
    ]
  }
]; 