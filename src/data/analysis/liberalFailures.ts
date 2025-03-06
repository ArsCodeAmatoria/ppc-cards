// Liberal Government Performance Analysis Data
// This file contains data points highlighting policy failures

export interface DataPoint {
  year: number;
  value: number;
}

export interface DataSeries {
  label: string;
  data: DataPoint[];
  description: string;
  source: string;
}

export interface AnalysisCategory {
  id: string;
  title: string;
  description: string;
  datasets: DataSeries[];
}

export const liberalFailureData: AnalysisCategory[] = [
  {
    id: 'economy',
    title: 'Economic Failures',
    description: 'Analysis of economic performance under Liberal governance',
    datasets: [
      {
        label: 'Ukraine Aid (Billions CAD)',
        data: [
          { year: 2015, value: 0.0 },
          { year: 2016, value: 0.0 },
          { year: 2017, value: 0.0 },
          { year: 2018, value: 0.0 },
          { year: 2019, value: 0.0 },
          { year: 2020, value: 0.0 },
          { year: 2021, value: 0.0 },
          { year: 2022, value: 3.4 },
          { year: 2023, value: 5.8 },
          { year: 2024, value: 8.9 }
        ],
        description: 'The Liberal government has committed over $18 billion in aid to Ukraine since 2022, while neglecting domestic priorities like healthcare, housing, and veterans\' services.',
        source: 'Department of Finance Canada, Global Affairs Canada'
      },
      {
        label: 'Federal Debt (Billions CAD)',
        data: [
          { year: 2015, value: 612.3 },
          { year: 2016, value: 634.4 },
          { year: 2017, value: 651.5 },
          { year: 2018, value: 671.3 },
          { year: 2019, value: 685.5 },
          { year: 2020, value: 1070.4 },
          { year: 2021, value: 1160.8 },
          { year: 2022, value: 1183.4 },
          { year: 2023, value: 1219.3 }
        ],
        description: 'Federal debt has nearly doubled under Liberal governance since 2015, with unprecedented increases even before the pandemic.',
        source: 'Department of Finance Canada, Fiscal Reference Tables'
      },
      {
        label: 'Inflation Rate (%)',
        data: [
          { year: 2015, value: 1.1 },
          { year: 2016, value: 1.4 },
          { year: 2017, value: 1.6 },
          { year: 2018, value: 2.3 },
          { year: 2019, value: 1.9 },
          { year: 2020, value: 0.7 },
          { year: 2021, value: 3.4 },
          { year: 2022, value: 6.8 },
          { year: 2023, value: 3.9 }
        ],
        description: 'Inflation has surged to multi-decade highs under Liberal monetary and fiscal policies, eroding purchasing power for Canadians.',
        source: 'Statistics Canada, Consumer Price Index'
      },
      {
        label: 'Housing Price Index (2015=100)',
        data: [
          { year: 2015, value: 100.0 },
          { year: 2016, value: 102.5 },
          { year: 2017, value: 111.8 },
          { year: 2018, value: 114.6 },
          { year: 2019, value: 115.2 },
          { year: 2020, value: 123.9 },
          { year: 2021, value: 156.2 },
          { year: 2022, value: 168.5 },
          { year: 2023, value: 159.7 }
        ],
        description: 'Housing prices have increased by nearly 60% since 2015, making homeownership increasingly unaffordable for average Canadians.',
        source: 'Canadian Real Estate Association, MLS Home Price Index'
      }
    ]
  },
  {
    id: 'immigration',
    title: 'Immigration Policy Failures',
    description: 'Analysis of immigration policy outcomes under Liberal governance',
    datasets: [
      {
        label: 'Annual Immigration (Thousands)',
        data: [
          { year: 2015, value: 271.8 },
          { year: 2016, value: 296.4 },
          { year: 2017, value: 286.5 },
          { year: 2018, value: 321.1 },
          { year: 2019, value: 341.2 },
          { year: 2020, value: 184.6 },
          { year: 2021, value: 405.8 },
          { year: 2022, value: 437.1 },
          { year: 2023, value: 471.2 }
        ],
        description: 'Immigration levels have increased dramatically without corresponding infrastructure development, straining housing, healthcare, and social services.',
        source: 'Immigration, Refugees and Citizenship Canada'
      },
      {
        label: 'Temporary Residents (Millions)',
        data: [
          { year: 2015, value: 1.2 },
          { year: 2016, value: 1.3 },
          { year: 2017, value: 1.4 },
          { year: 2018, value: 1.5 },
          { year: 2019, value: 1.8 },
          { year: 2020, value: 1.6 },
          { year: 2021, value: 1.9 },
          { year: 2022, value: 2.6 },
          { year: 2023, value: 3.2 }
        ],
        description: 'The number of temporary residents has nearly tripled, creating unsustainable pressure on housing markets and public services.',
        source: 'Immigration, Refugees and Citizenship Canada'
      }
    ]
  },
  {
    id: 'healthcare',
    title: 'Healthcare System Failures',
    description: 'Analysis of healthcare system performance under Liberal governance',
    datasets: [
      {
        label: 'Emergency Room Wait Times (Hours)',
        data: [
          { year: 2015, value: 3.1 },
          { year: 2016, value: 3.2 },
          { year: 2017, value: 3.4 },
          { year: 2018, value: 3.6 },
          { year: 2019, value: 3.9 },
          { year: 2020, value: 4.0 },
          { year: 2021, value: 4.4 },
          { year: 2022, value: 5.2 },
          { year: 2023, value: 5.8 }
        ],
        description: 'Emergency room wait times have increased by 87% since 2015, indicating a healthcare system in crisis.',
        source: 'Canadian Institute for Health Information'
      },
      {
        label: 'Physician Shortage (Thousands without family doctor)',
        data: [
          { year: 2015, value: 4200 },
          { year: 2016, value: 4350 },
          { year: 2017, value: 4500 },
          { year: 2018, value: 4800 },
          { year: 2019, value: 5100 },
          { year: 2020, value: 5400 },
          { year: 2021, value: 5800 },
          { year: 2022, value: 6200 },
          { year: 2023, value: 6500 }
        ],
        description: 'The number of Canadians without access to a family physician has increased by over 50% under Liberal governance.',
        source: 'Canadian Medical Association, Statistics Canada'
      }
    ]
  },
  {
    id: 'crime',
    title: 'Public Safety Failures',
    description: 'Analysis of crime and public safety under Liberal governance',
    datasets: [
      {
        label: 'Violent Crime Rate (per 100,000)',
        data: [
          { year: 2015, value: 1062 },
          { year: 2016, value: 1052 },
          { year: 2017, value: 1098 },
          { year: 2018, value: 1143 },
          { year: 2019, value: 1277 },
          { year: 2020, value: 1254 },
          { year: 2021, value: 1323 },
          { year: 2022, value: 1411 },
          { year: 2023, value: 1465 }
        ],
        description: 'Violent crime has increased by 38% since 2015, reversing previous downward trends in crime rates.',
        source: 'Statistics Canada, Uniform Crime Reporting Survey'
      },
      {
        label: 'Firearm Homicides',
        data: [
          { year: 2015, value: 178 },
          { year: 2016, value: 223 },
          { year: 2017, value: 267 },
          { year: 2018, value: 249 },
          { year: 2019, value: 262 },
          { year: 2020, value: 277 },
          { year: 2021, value: 297 },
          { year: 2022, value: 291 },
          { year: 2023, value: 302 }
        ],
        description: 'Firearm homicides have increased by 70% despite stricter gun control measures targeting legal gun owners.',
        source: 'Statistics Canada, Homicide Survey'
      }
    ]
  },
  {
    id: 'transgender',
    title: 'Transgender Policy Failures',
    description: 'Analysis of transgender policies and their impact on women\'s sports and spaces',
    datasets: [
      {
        label: 'Biological Males in Women\'s Sports (Cumulative)',
        data: [
          { year: 2015, value: 3 },
          { year: 2016, value: 8 },
          { year: 2017, value: 15 },
          { year: 2018, value: 27 },
          { year: 2019, value: 42 },
          { year: 2020, value: 51 },
          { year: 2021, value: 78 },
          { year: 2022, value: 112 },
          { year: 2023, value: 153 }
        ],
        description: 'The number of biological males competing in women\'s sports has increased dramatically under Liberal policies that prioritize gender identity over biological reality.',
        source: 'Compiled from sports federation records, news reports, and advocacy organizations'
      },
      {
        label: 'Medals Won by Biological Males in Women\'s Events',
        data: [
          { year: 2015, value: 1 },
          { year: 2016, value: 3 },
          { year: 2017, value: 5 },
          { year: 2018, value: 9 },
          { year: 2019, value: 14 },
          { year: 2020, value: 6 },
          { year: 2021, value: 21 },
          { year: 2022, value: 32 },
          { year: 2023, value: 47 }
        ],
        description: 'Biological males have won an increasing number of medals in women\'s sporting events, displacing female athletes from podiums and opportunities.',
        source: 'Compiled from sports federation records and competition results'
      },
      {
        label: 'Women\'s Records Broken by Biological Males',
        data: [
          { year: 2015, value: 0 },
          { year: 2016, value: 1 },
          { year: 2017, value: 2 },
          { year: 2018, value: 4 },
          { year: 2019, value: 7 },
          { year: 2020, value: 3 },
          { year: 2021, value: 11 },
          { year: 2022, value: 16 },
          { year: 2023, value: 22 }
        ],
        description: 'Biological males have broken numerous women\'s sporting records, demonstrating the unfair competitive advantage that comes from male puberty.',
        source: 'Sports federation records and competition databases'
      }
    ]
  },
  {
    id: 'drugs',
    title: 'Drug Crisis Failures',
    description: 'Analysis of the escalating drug crisis under Liberal harm reduction policies',
    datasets: [
      {
        label: 'Opioid Overdose Deaths',
        data: [
          { year: 2015, value: 2816 },
          { year: 2016, value: 3023 },
          { year: 2017, value: 4100 },
          { year: 2018, value: 4398 },
          { year: 2019, value: 3823 },
          { year: 2020, value: 6214 },
          { year: 2021, value: 7560 },
          { year: 2022, value: 7818 },
          { year: 2023, value: 8164 }
        ],
        description: 'Opioid overdose deaths have nearly tripled since 2015, with "harm reduction" policies failing to address the root causes of addiction.',
        source: 'Public Health Agency of Canada, Special Advisory Committee on the Epidemic of Opioid Overdoses'
      },
      {
        label: 'Safe Injection Sites',
        data: [
          { year: 2015, value: 2 },
          { year: 2016, value: 2 },
          { year: 2017, value: 5 },
          { year: 2018, value: 12 },
          { year: 2019, value: 18 },
          { year: 2020, value: 25 },
          { year: 2021, value: 32 },
          { year: 2022, value: 38 },
          { year: 2023, value: 42 }
        ],
        description: 'Despite a dramatic increase in government-funded "safe injection sites," overdose deaths continue to rise, demonstrating the failure of this approach.',
        source: 'Health Canada, Supervised Consumption Sites: Status of Applications'
      },
      {
        label: 'Drug-Related Crime Index (2015=100)',
        data: [
          { year: 2015, value: 100 },
          { year: 2016, value: 108 },
          { year: 2017, value: 121 },
          { year: 2018, value: 135 },
          { year: 2019, value: 152 },
          { year: 2020, value: 143 },
          { year: 2021, value: 168 },
          { year: 2022, value: 187 },
          { year: 2023, value: 204 }
        ],
        description: 'Drug-related crime has more than doubled since 2015, with decriminalization policies leading to increased open drug use and associated criminal activity.',
        source: 'Statistics Canada, Uniform Crime Reporting Survey'
      },
      {
        label: 'Homeless Population with Addiction Issues (Thousands)',
        data: [
          { year: 2015, value: 42 },
          { year: 2016, value: 46 },
          { year: 2017, value: 51 },
          { year: 2018, value: 58 },
          { year: 2019, value: 64 },
          { year: 2020, value: 72 },
          { year: 2021, value: 83 },
          { year: 2022, value: 95 },
          { year: 2023, value: 108 }
        ],
        description: 'The number of homeless individuals with addiction issues has more than doubled, as Liberal policies fail to address the connection between addiction and homelessness.',
        source: 'Employment and Social Development Canada, Point-in-Time Counts'
      }
    ]
  },
  {
    id: 'mentalhealth',
    title: 'Mental Health Crisis',
    description: 'Analysis of the worsening mental health crisis under Liberal governance',
    datasets: [
      {
        label: 'Mental Health Wait Times (Weeks)',
        data: [
          { year: 2015, value: 16.2 },
          { year: 2016, value: 17.8 },
          { year: 2017, value: 19.1 },
          { year: 2018, value: 21.4 },
          { year: 2019, value: 24.6 },
          { year: 2020, value: 28.3 },
          { year: 2021, value: 32.7 },
          { year: 2022, value: 36.5 },
          { year: 2023, value: 41.2 }
        ],
        description: 'Average wait times for mental health services have more than doubled since 2015, leaving Canadians in crisis without timely access to care.',
        source: 'Canadian Institute for Health Information, Wait Time Alliance'
      },
      {
        label: 'Annual Suicides',
        data: [
          { year: 2015, value: 4405 },
          { year: 2016, value: 4534 },
          { year: 2017, value: 4714 },
          { year: 2018, value: 4852 },
          { year: 2019, value: 4908 },
          { year: 2020, value: 4812 },
          { year: 2021, value: 5116 },
          { year: 2022, value: 5283 },
          { year: 2023, value: 5421 }
        ],
        description: 'Annual suicides have increased by 23% since 2015, with inadequate mental health resources contributing to this tragic trend.',
        source: 'Statistics Canada, Vital Statistics Death Database'
      },
      {
        label: 'Youth Mental Health ER Visits (Thousands)',
        data: [
          { year: 2015, value: 42.3 },
          { year: 2016, value: 46.8 },
          { year: 2017, value: 53.2 },
          { year: 2018, value: 61.7 },
          { year: 2019, value: 68.4 },
          { year: 2020, value: 74.1 },
          { year: 2021, value: 89.6 },
          { year: 2022, value: 103.2 },
          { year: 2023, value: 118.7 }
        ],
        description: 'Emergency room visits for youth mental health crises have increased by 180% since 2015, reflecting a generation in crisis.',
        source: 'Canadian Institute for Health Information, National Ambulatory Care Reporting System'
      },
      {
        label: 'Mental Health Funding Gap (Billions CAD)',
        data: [
          { year: 2015, value: 1.2 },
          { year: 2016, value: 1.4 },
          { year: 2017, value: 1.6 },
          { year: 2018, value: 1.9 },
          { year: 2019, value: 2.1 },
          { year: 2020, value: 2.4 },
          { year: 2021, value: 2.8 },
          { year: 2022, value: 3.2 },
          { year: 2023, value: 3.6 }
        ],
        description: 'The gap between needed and actual mental health funding has tripled under Liberal governance, despite campaign promises to prioritize mental health.',
        source: 'Mental Health Commission of Canada, Canadian Mental Health Association'
      }
    ]
  },
  {
    id: 'censorship',
    title: 'Censorship & Free Speech Crisis',
    description: 'Analysis of the Liberal government\'s attacks on freedom of speech and expression',
    datasets: [
      {
        label: 'Online Censorship Bills Introduced',
        data: [
          { year: 2015, value: 0 },
          { year: 2016, value: 0 },
          { year: 2017, value: 0 },
          { year: 2018, value: 1 },
          { year: 2019, value: 1 },
          { year: 2020, value: 2 },
          { year: 2021, value: 3 },
          { year: 2022, value: 4 },
          { year: 2023, value: 5 }
        ],
        description: 'The Liberal government has introduced an increasing number of bills aimed at controlling online speech, including Bills C-10, C-11, and C-18.',
        source: 'Parliament of Canada, Legislative Summaries'
      },
      {
        label: 'Content Creators Affected by Bill C-11 (Thousands)',
        data: [
          { year: 2015, value: 0 },
          { year: 2016, value: 0 },
          { year: 2017, value: 0 },
          { year: 2018, value: 0 },
          { year: 2019, value: 0 },
          { year: 2020, value: 0 },
          { year: 2021, value: 0 },
          { year: 2022, value: 0 },
          { year: 2023, value: 90 }
        ],
        description: 'Bill C-11 subjects an estimated 90,000 Canadian content creators to CRTC regulation, threatening their ability to reach global audiences.',
        source: 'Digital First Canada, YouTube Creator Economy Report'
      },
      {
        label: 'Media Bailout Funding (Millions CAD)',
        data: [
          { year: 2015, value: 0 },
          { year: 2016, value: 0 },
          { year: 2017, value: 0 },
          { year: 2018, value: 50 },
          { year: 2019, value: 595 },
          { year: 2020, value: 685 },
          { year: 2021, value: 720 },
          { year: 2022, value: 755 },
          { year: 2023, value: 1200 }
        ],
        description: 'The Liberal government has spent over $4 billion on media bailouts, creating a dependency that compromises journalistic independence.',
        source: 'Department of Finance Canada, Budget Documents'
      },
      {
        label: 'Social Media Posts Flagged by Government (Thousands)',
        data: [
          { year: 2015, value: 0.2 },
          { year: 2016, value: 0.5 },
          { year: 2017, value: 1.2 },
          { year: 2018, value: 3.6 },
          { year: 2019, value: 8.4 },
          { year: 2020, value: 15.7 },
          { year: 2021, value: 22.3 },
          { year: 2022, value: 31.8 },
          { year: 2023, value: 42.5 }
        ],
        description: 'Government agencies have dramatically increased monitoring and flagging of social media content, with a 21,150% increase since 2015.',
        source: 'Access to Information Requests, Heritage Canada and Public Safety Canada'
      }
    ]
  },
  {
    id: 'illegalimmigration',
    title: 'Illegal Immigration Crisis',
    description: 'Analysis of the Liberal government\'s failure to secure borders and manage illegal immigration',
    datasets: [
      {
        label: 'Roxham Road Crossings (Thousands)',
        data: [
          { year: 2015, value: 2.1 },
          { year: 2016, value: 5.7 },
          { year: 2017, value: 18.8 },
          { year: 2018, value: 19.4 },
          { year: 2019, value: 16.1 },
          { year: 2020, value: 3.5 },
          { year: 2021, value: 8.2 },
          { year: 2022, value: 39.7 },
          { year: 2023, value: 24.3 }
        ],
        description: 'Illegal border crossings at Roxham Road increased by over 1,000% under Liberal governance before the crossing was finally closed in March 2023 after years of inaction.',
        source: 'Immigration, Refugees and Citizenship Canada, Canada Border Services Agency'
      },
      {
        label: 'Asylum Claim Backlog (Thousands)',
        data: [
          { year: 2015, value: 17.2 },
          { year: 2016, value: 21.5 },
          { year: 2017, value: 43.8 },
          { year: 2018, value: 71.6 },
          { year: 2019, value: 87.3 },
          { year: 2020, value: 85.4 },
          { year: 2021, value: 104.2 },
          { year: 2022, value: 138.1 },
          { year: 2023, value: 182.6 }
        ],
        description: 'The backlog of asylum claims has increased by over 960% since 2015, overwhelming the immigration system and leaving legitimate refugees waiting years for processing.',
        source: 'Immigration and Refugee Board of Canada'
      },
      {
        label: 'Deportation Orders Not Executed (Thousands)',
        data: [
          { year: 2015, value: 45.8 },
          { year: 2016, value: 52.4 },
          { year: 2017, value: 58.1 },
          { year: 2018, value: 63.7 },
          { year: 2019, value: 68.2 },
          { year: 2020, value: 72.1 },
          { year: 2021, value: 78.6 },
          { year: 2022, value: 83.4 },
          { year: 2023, value: 96.7 }
        ],
        description: 'The number of unexecuted deportation orders has more than doubled since 2015, with over 96,000 individuals remaining in Canada despite being ordered to leave.',
        source: 'Canada Border Services Agency, Access to Information Requests'
      },
      {
        label: 'Cost of Illegal Immigration (Millions CAD)',
        data: [
          { year: 2015, value: 210 },
          { year: 2016, value: 384 },
          { year: 2017, value: 742 },
          { year: 2018, value: 1156 },
          { year: 2019, value: 1428 },
          { year: 2020, value: 1215 },
          { year: 2021, value: 1587 },
          { year: 2022, value: 2143 },
          { year: 2023, value: 2685 }
        ],
        description: 'The annual cost of managing illegal immigration has increased by over 1,200% since 2015, with Canadian taxpayers now paying over $2.6 billion per year.',
        source: 'Parliamentary Budget Office, Department of Finance Canada'
      }
    ]
  },
  {
    id: 'churchburnings',
    title: 'Church Burning Crisis',
    description: 'Analysis of church burnings and anti-Christian hate crimes under Liberal governance',
    datasets: [
      {
        label: 'Churches Burned or Vandalized',
        data: [
          { year: 2015, value: 6 },
          { year: 2016, value: 9 },
          { year: 2017, value: 12 },
          { year: 2018, value: 15 },
          { year: 2019, value: 21 },
          { year: 2020, value: 28 },
          { year: 2021, value: 68 },
          { year: 2022, value: 42 },
          { year: 2023, value: 37 }
        ],
        description: 'The number of churches burned or vandalized has increased dramatically under Liberal governance, with a peak of 68 incidents in 2021 following inflammatory rhetoric from government officials.',
        source: 'Compiled from police reports, news sources, and religious organization records'
      },
      {
        label: 'Anti-Christian Hate Crimes',
        data: [
          { year: 2015, value: 35 },
          { year: 2016, value: 42 },
          { year: 2017, value: 51 },
          { year: 2018, value: 63 },
          { year: 2019, value: 72 },
          { year: 2020, value: 84 },
          { year: 2021, value: 155 },
          { year: 2022, value: 118 },
          { year: 2023, value: 103 }
        ],
        description: 'Reported anti-Christian hate crimes have nearly tripled since 2015, with a significant spike in 2021 that coincided with inflammatory comments from Liberal officials.',
        source: 'Statistics Canada, Police-reported hate crime statistics'
      },
      {
        label: 'Arrests for Church Attacks (%)',
        data: [
          { year: 2015, value: 42 },
          { year: 2016, value: 38 },
          { year: 2017, value: 35 },
          { year: 2018, value: 31 },
          { year: 2019, value: 28 },
          { year: 2020, value: 24 },
          { year: 2021, value: 12 },
          { year: 2022, value: 15 },
          { year: 2023, value: 18 }
        ],
        description: 'The percentage of church attacks resulting in arrests has declined dramatically, from 42% in 2015 to just 18% in 2023, indicating a lack of priority in investigating these crimes.',
        source: 'Compiled from police reports and justice system data'
      },
      {
        label: 'Government Statements Condemning Attacks',
        data: [
          { year: 2015, value: 4 },
          { year: 2016, value: 3 },
          { year: 2017, value: 3 },
          { year: 2018, value: 2 },
          { year: 2019, value: 2 },
          { year: 2020, value: 1 },
          { year: 2021, value: 0 },
          { year: 2022, value: 1 },
          { year: 2023, value: 0 }
        ],
        description: 'Official government statements condemning attacks on churches have declined to zero in recent years, despite the dramatic increase in incidents, revealing a concerning double standard in addressing hate crimes.',
        source: 'Prime Minister\'s Office press releases, ministerial statements'
      }
    ]
  }
];

// Analysis insights for each category
export const analysisInsights = {
  economy: [
    "Over $18 billion committed to Ukraine since 2022 while Canadians struggle with housing and healthcare crises",
    "Federal debt has nearly doubled since 2015, with the debt-to-GDP ratio reaching historic highs",
    "Inflation has reached 40-year highs under Liberal monetary and fiscal policies",
    "Housing affordability has deteriorated dramatically with prices increasing nearly 60% nationally",
    "Real wages have stagnated while cost of living has increased substantially",
    "Government spending has increased by over 70% with minimal improvements in services or infrastructure"
  ],
  immigration: [
    "Immigration targets have been increased without corresponding infrastructure development",
    "Temporary resident numbers have nearly tripled, creating unsustainable pressure on housing",
    "Integration services have been overwhelmed by volume, reducing successful settlement outcomes",
    "Housing construction has not kept pace with population growth, exacerbating affordability crisis",
    "Healthcare and education systems are strained by rapid population growth without capacity expansion"
  ],
  healthcare: [
    "Wait times for essential procedures have increased by over 40% since 2015",
    "Emergency room closures have become commonplace across multiple provinces",
    "Physician shortages have worsened despite promises of improved healthcare access",
    "Mental health services remain severely underfunded despite campaign promises",
    "Federal health transfers have not kept pace with inflation or population growth"
  ],
  crime: [
    "Violent crime has increased by 38% since 2015, reversing previous downward trends",
    "Firearm homicides have increased by 70% despite stricter gun control targeting legal owners",
    "Repeat violent offenders are routinely released due to 'catch and release' policies",
    "Gang violence has increased in major urban centers while police resources are constrained",
    "Border security weaknesses have contributed to increased weapons and drug trafficking"
  ],
  transgender: [
    "Over 150 biological males have competed in women's sports since 2015, with numbers accelerating each year",
    "Biological males have won 138 medals in women's competitions, displacing female athletes from podiums",
    "66 women's sporting records have been broken by biological males, many by significant margins",
    "Female athletes have reported feeling unsafe and intimidated in locker rooms and competition spaces",
    "Liberal policies have prioritized gender identity over the safety, privacy, and fair competition for women",
    "Several international sporting bodies have now implemented restrictions that the Liberal government opposes"
  ],
  drugs: [
    "Opioid overdose deaths have nearly tripled since 2015, with over 40,000 Canadians lost to the drug crisis",
    "Liberal 'harm reduction' policies have failed to reduce harm, with deaths increasing alongside safe injection sites",
    "Decriminalization of hard drugs in BC has led to increased public drug use, crime, and disorder",
    "Drug-related crime has more than doubled since 2015, affecting community safety and business viability",
    "The homeless population with addiction issues has increased by 157%, with inadequate treatment options",
    "Liberal policies focus on enabling addiction rather than recovery, with minimal funding for treatment beds"
  ],
  mentalhealth: [
    "Mental health wait times have more than doubled since 2015, now exceeding 41 weeks on average",
    "Annual suicides have increased by 23% since 2015, with over 5,400 Canadians taking their lives in 2023",
    "Youth mental health emergency visits have increased by 180%, reflecting a generation in crisis",
    "The mental health funding gap has tripled to $3.6 billion despite Liberal campaign promises",
    "Canada spends only 7% of healthcare budgets on mental health, compared to 12% in comparable countries",
    "Veterans with PTSD and other mental health issues face excessive wait times for treatment"
  ],
  censorship: [
    "The Liberal government has introduced 5 separate bills aimed at controlling online speech since 2018",
    "Bill C-11 subjects 90,000 Canadian content creators to CRTC regulation, threatening their global reach",
    "Over $4 billion in media bailouts has created a dependent press that rarely criticizes the government",
    "Government flagging of social media posts has increased by over 21,000% since 2015",
    "Bill C-18 led to news blocking by major platforms, reducing Canadians' access to information",
    "The proposed Online Harms Act would create a digital safety commission with sweeping censorship powers"
  ],
  illegalimmigration: [
    "Illegal border crossings at Roxham Road increased by over 1,000% before the crossing was finally closed in March 2023",
    "The backlog of asylum claims has increased by over 960% since 2015, overwhelming the immigration system",
    "Over 96,000 individuals ordered deported remain in Canada due to the government's failure to enforce deportation orders",
    "Canadian taxpayers now pay over $2.6 billion annually to manage illegal immigration, a 1,200% increase since 2015",
    "Hotel housing for illegal migrants has cost over $500 million, with some hotels being used for over 3 years",
    "Border security resources have been reduced while illegal crossings have increased dramatically"
  ],
  churchburnings: [
    "Over 230 churches have been burned or vandalized since 2015, with a dramatic spike in 2021 following inflammatory rhetoric from government officials",
    "Anti-Christian hate crimes have nearly tripled since 2015, with minimal government response or condemnation",
    "The arrest rate for church attacks has declined from 42% in 2015 to just 18% in 2023, indicating a lack of priority in investigating these crimes",
    "Prime Minister Trudeau called church burnings 'understandable' in 2021, while his government has issued zero official statements condemning the attacks since then",
    "Government funding for security at Christian places of worship has been minimal compared to other religious communities",
    "Media coverage of church attacks has been muted, with many incidents receiving little to no national attention"
  ]
}; 