export const source = [
  {
    title: 'Division Gold',
    sid: 1,
    description: 'the best team',
    season: 'Summer Season',
    type: 'division',
    teams: [
      {
        title: 'the power',
        sid: 24,
        description: 'dision team',
        season: 'Winter Season',
        type: 'team'
      },
      {
        title: 'nyc fc',
        sid: 44,
        description: 'dision team',
        season: 'Winter Season',
        type: 'team'
      },
      {
        title: 'red bulls',
        sid: 98,
        description: 'dision team',
        season: 'Winter Season',
        type: 'team'
      },
      {
        title: 'chicago fire',
        sid: 55,
        description: 'dision team',
        season: 'Winter Season',
        type: 'team'
      },
      {
        title: 'barcelona',
        sid: 32,
        description: 'dision team',
        season: 'Winter Season',
        type: 'team'
      },      
    ]
  },
  {
    title: 'Division Premier',
    sid: 2,
    description: 'the best team',
    season: 'Summer Season',
    type: 'division',
    teams: [
      {
        title: 'abc123',
        sid: 59,
        description: 'dision team',
        season: 'Winter Season',
        type: 'team'
      },
      {
        title: 'nyc united',
        sid: 69,
        description: 'dision team',
        season: 'Winter Season',
        type: 'team'
      },
      {
        title: 'best guys',
        sid: 73,
        description: 'dision team',
        season: 'Winter Season',
        type: 'team'
      },
      {
        title: 'team fire',
        sid: 91,
        description: 'dision team',
        season: 'Winter Season',
        type: 'team'
      },
      {
        title: 'athletic',
        sid: 84,
        description: 'dision team',
        season: 'Winter Season',
        type: 'team'
      },      
    ]
  },
  {
    title: 'Team Eagles',
    sid: 6,
    description: 'the best team',
    season: 'Summer Season',
    type: 'team'
  },
  {
    title: 'Team Tiger',
    sid: 7,
    description: 'the best team',
    season: 'Summer Season',
    type: 'team'
  },
  {
    title: 'Team Blue',
    sid: 77,
    description: 'the best team',
    season: 'Summer Season',
    type: 'team'
  },
  {
    title: 'Team Red',
    sid: 8,
    description: 'the best team',
    season: 'Summer Season',
    type: 'team'
  },
  {
    title: 'Team Black',
    sid: 9,
    description: 'the best team',
    season: 'Summer Season',
    type: 'team'
  },
  {
    title: 'Team White',
    sid: 10,
    description: 'the best team',
    season: 'Summer Season',
    type: 'team'
  },
  {
    title: 'Team Panther',
    sid: 11,
    description: 'the best team',
    season: 'Summer Season',
    type: 'team'
  },
  {
    title: 'Team Crown',
    sid: 12,
    description: 'the best team',
    season: 'Summer Season',
    type: 'team'
  },
  {
    title: 'Enzo Ames',
    sid: 13,
    description: 'the best athlete',
    season: 'Summer Season',
    type: 'athlete'
  },
  {
    title: 'Kris Sighn',
    sid: 14,
    description: 'the best athlete',
    season: 'Summer Season',
    type: 'athlete'
  },
  {
    title: 'Akbar Mirza',
    sid: 15,
    description: 'the best athlete',
    season: 'Summer Season',
    type: 'athlete'
  },
  {
    title: 'Abu Butt',
    sid: 16,
    description: 'the best athlete',
    season: 'Summer Season',
    type: 'athlete'
  },
  {
    title: 'Jay AbrahamJay',
    sid: 17,
    description: 'the best athlete',
    season: 'Summer Season',
    type: 'athlete'
  }
];



export const filterdata = [
  {
    name: 'Cosmopolita Soccer League',
    description: 'best league in nyc',
    id: 1,
    season: 'spring',
    team_reg_price: 1500,
    ind_reg_price: 200,
    goal_size: 'official',
    field_size: 'official'
  },
  {
    name: 'Soccer League 2',
    description: 'best league in nyc',
    id: 2,
    season: 'spring',
    team_reg_price: 1500,
    ind_reg_price: 200,
    goal_size: 'official',
    field_size: 'official'
  },
  {
    name: 'Soccer League 3',
    description: 'best league in nyc',
    id: 3,
    season: 'spring',
    team_reg_price: 1500,
    ind_reg_price: 200,
    goal_size: 'official',
    field_size: 'official'
  },
  {
    name: 'Soccer League 4',
    description: 'best league in nyc',
    id: 4,
    season: 'spring',
    team_reg_price: 1500,
    ind_reg_price: 200,
    goal_size: 'official',
    field_size: 'official'
  },

]

export const filterSet = [
  { 
    type: 'league',
    check_boxes: [
      {
        label: 'Type',
        boxes: ['Coed', 'Male', 'Female']
      },
      {
        label: 'Field size',
        boxes: ['official', 'half-field', '60 yards', '80 yards']
      },
      {
        label: 'Season',
        boxes: ['spring', 'summer', 'fall', 'winter']
      },
      {
        label: 'Goal size',
        boxes: ['official', '6 yards', '4 yards', '2 yards', 'other']
      },
      {
        label: 'Facility',
        boxes: ['outdoor', 'indoor']
      },
      {
        label: 'Team registration',
        boxes: ['$10,000 & above', '$6,000 to $10,000', '$2,000 to $6,000', 'Free to $2,000']
      },
      {
        label: 'Players on field',
        boxes: ['11', '8-10', '4-7']
      },
    ]
  },
  { 
    type: 'team',
    check_boxes: [
      {
        label: 'Average player registration',
        boxes: ['~$800 and above', '$600 to $800', '$400 to $600', 'Free to $200']
      },
    ]
  },
  { 
    type: 'athlete',
    check_boxes: [
      {
        label: 'Athlete',
        boxes: ['Athlete of the month', 'Most goals this month', 'Goalie of the month', 'Best sportsmanship', 'Looking for a teams']
      },
    ]
  },
]

export const states = [
  {
    name: 'Alabama',
    abbreviation: 'AL'
  },
  {
    name: 'Alaska',
    abbreviation: 'AK'
  },
  {
    name: 'American Samoa',
    abbreviation: 'AS'
  },
  {
    name: 'Arizona',
    abbreviation: 'AZ'
  },
  {
    name: 'Arkansas',
    abbreviation: 'AR'
  },
  {
    name: 'California',
    abbreviation: 'CA'
  },
  {
    name: 'Colorado',
    abbreviation: 'CO'
  },
  {
    name: 'Connecticut',
    abbreviation: 'CT'
  },
  {
    name: 'Delaware',
    abbreviation: 'DE'
  },
  {
    name: 'District Of Columbia',
    abbreviation: 'DC'
  },
  {
    name: 'Federated States Of Micronesia',
    abbreviation: 'FM'
  },
  {
    name: 'Florida',
    abbreviation: 'FL'
  },
  {
    name: 'Georgia',
    abbreviation: 'GA'
  },
  {
    name: 'Guam',
    abbreviation: 'GU'
  },
  {
    name: 'Hawaii',
    abbreviation: 'HI'
  },
  {
    name: 'Idaho',
    abbreviation: 'ID'
  },
  {
    name: 'Illinois',
    abbreviation: 'IL'
  },
  {
    name: 'Indiana',
    abbreviation: 'IN'
  },
  {
    name: 'Iowa',
    abbreviation: 'IA'
  },
  {
    name: 'Kansas',
    abbreviation: 'KS'
  },
  {
    name: 'Kentucky',
    abbreviation: 'KY'
  },
  {
    name: 'Louisiana',
    abbreviation: 'LA'
  },
  {
    name: 'Maine',
    abbreviation: 'ME'
  },
  {
    name: 'Marshall Islands',
    abbreviation: 'MH'
  },
  {
    name: 'Maryland',
    abbreviation: 'MD'
  },
  {
    name: 'Massachusetts',
    abbreviation: 'MA'
  },
  {
    name: 'Michigan',
    abbreviation: 'MI'
  },
  {
    name: 'Minnesota',
    abbreviation: 'MN'
  },
  {
    name: 'Mississippi',
    abbreviation: 'MS'
  },
  {
    name: 'Missouri',
    abbreviation: 'MO'
  },
  {
    name: 'Montana',
    abbreviation: 'MT'
  },
  {
    name: 'Nebraska',
    abbreviation: 'NE'
  },
  {
    name: 'Nevada',
    abbreviation: 'NV'
  },
  {
    name: 'New Hampshire',
    abbreviation: 'NH'
  },
  {
    name: 'New Jersey',
    abbreviation: 'NJ'
  },
  {
    name: 'New Mexico',
    abbreviation: 'NM'
  },
  {
    name: 'New York',
    abbreviation: 'NY'
  },
  {
    name: 'North Carolina',
    abbreviation: 'NC'
  },
  {
    name: 'North Dakota',
    abbreviation: 'ND'
  },
  {
    name: 'Northern Mariana Islands',
    abbreviation: 'MP'
  },
  {
    name: 'Ohio',
    abbreviation: 'OH'
  },
  {
    name: 'Oklahoma',
    abbreviation: 'OK'
  },
  {
    name: 'Oregon',
    abbreviation: 'OR'
  },
  {
    name: 'Palau',
    abbreviation: 'PW'
  },
  {
    name: 'Pennsylvania',
    abbreviation: 'PA'
  },
  {
    name: 'Puerto Rico',
    abbreviation: 'PR'
  },
  {
    name: 'Rhode Island',
    abbreviation: 'RI'
  },
  {
    name: 'South Carolina',
    abbreviation: 'SC'
  },
  {
    name: 'South Dakota',
    abbreviation: 'SD'
  },
  {
    name: 'Tennessee',
    abbreviation: 'TN'
  },
  {
    name: 'Texas',
    abbreviation: 'TX'
  },
  {
    name: 'Utah',
    abbreviation: 'UT'
  },
  {
    name: 'Vermont',
    abbreviation: 'VT'
  },
  {
    name: 'Virgin Islands',
    abbreviation: 'VI'
  },
  {
    name: 'Virginia',
    abbreviation: 'VA'
  },
  {
    name: 'Washington',
    abbreviation: 'WA'
  },
  {
    name: 'West Virginia',
    abbreviation: 'WV'
  },
  {
    name: 'Wisconsin',
    abbreviation: 'WI'
  },
  {
    name: 'Wyoming',
    abbreviation: 'WY'
  }
]





















