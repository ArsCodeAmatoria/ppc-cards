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
  ]
}; 