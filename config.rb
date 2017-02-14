{
  "models": [
    {
      "name": "Committee",
      "associations": {
        "associations": [

        ]
      },
      "field_relationships": [
        {
          "ar_field": "abbrev",
          "api_field": "abbrev",
          "api_path": [

          ]
        },
        {
          "ar_field": "code",
          "api_field": "code",
          "api_path": [

          ]
        },
        {
          "ar_field": "committee",
          "api_field": "committee",
          "api_path": [

          ]
        },
        {
          "ar_field": "committee_type",
          "api_field": "committee_type",
          "api_path": [

          ]
        },
        {
          "ar_field": "committee_type_label",
          "api_field": "committee_type_label",
          "api_path": [

          ]
        },
        {
          "ar_field": "id",
          "api_field": "id",
          "api_path": [

          ]
        },
        {
          "ar_field": "jurisdiction",
          "api_field": "jurisdiction",
          "api_path": [

          ]
        },
        {
          "ar_field": "jurisdiction_link",
          "api_field": "jurisdiction_link",
          "api_path": [

          ]
        },
        {
          "ar_field": "name",
          "api_field": "name",
          "api_path": [

          ]
        },
        {
          "ar_field": "obsolete",
          "api_field": "obsolete",
          "api_path": [

          ]
        },
        {
          "ar_field": "url",
          "api_field": "url",
          "api_path": [

          ]
        },
        {
          "ar_field": "created_at",
          "api_field": "created_at",
          "api_path": [

          ]
        },
        {
          "ar_field": "updated_at",
          "api_field": "updated_at",
          "api_path": [

          ]
        }
      ]
    },
    {
      "name": "CommitteeLegislator",
      "associations": {
        "associations": [
          {
            "name": "person",
            "ass_type": "belongs_to",
            "model_obj": "Person"
          }
        ]
      },
      "field_relationships": [
        {
          "ar_field": "committee_id",
          "api_field": "committee_id",
          "api_path": [

          ]
        },
        {
          "ar_field": "person_id",
          "api_field": "person_id",
          "api_path": [

          ]
        },
        {
          "ar_field": "role",
          "api_field": "role",
          "api_path": [

          ]
        },
        {
          "ar_field": "role_label",
          "api_field": "role_label",
          "api_path": [

          ]
        },
        {
          "ar_field": "created_at",
          "api_field": "created_at",
          "api_path": [

          ]
        },
        {
          "ar_field": "updated_at",
          "api_field": "updated_at",
          "api_path": [

          ]
        }
      ]
    },
    {
      "name": "Legislator",
      "associations": {
        "associations": [

        ]
      },
      "field_relationships": [
        {
          "ar_field": "id",
          "api_field": "id",
          "api_path": [

          ]
        },
        {
          "ar_field": "thomas_id",
          "api_field": "thomas_id",
          "api_path": [

          ]
        },
        {
          "ar_field": "api_uri",
          "api_field": "api_uri",
          "api_path": [

          ]
        },
        {
          "ar_field": "first_name",
          "api_field": "first_name",
          "api_path": [

          ]
        },
        {
          "ar_field": "middle_name",
          "api_field": "middle_name",
          "api_path": [

          ]
        },
        {
          "ar_field": "last_name",
          "api_field": "last_name",
          "api_path": [

          ]
        },
        {
          "ar_field": "party",
          "api_field": "party",
          "api_path": [

          ]
        },
        {
          "ar_field": "twitter_account",
          "api_field": "twitter_account",
          "api_path": [

          ]
        },
        {
          "ar_field": "facebook_account",
          "api_field": "facebook_account",
          "api_path": [

          ]
        },
        {
          "ar_field": "facebook_id",
          "api_field": "facebook_id",
          "api_path": [

          ]
        },
        {
          "ar_field": "google_entity_id",
          "api_field": "google_entity_id",
          "api_path": [

          ]
        },
        {
          "ar_field": "url",
          "api_field": "url",
          "api_path": [

          ]
        },
        {
          "ar_field": "rss_url",
          "api_field": "rss_url",
          "api_path": [

          ]
        },
        {
          "ar_field": "domain",
          "api_field": "domain",
          "api_path": [

          ]
        },
        {
          "ar_field": "dw_nominate",
          "api_field": "dw_nominate",
          "api_path": [

          ]
        },
        {
          "ar_field": "ideal_point",
          "api_field": "ideal_point",
          "api_path": [

          ]
        },
        {
          "ar_field": "seniority",
          "api_field": "seniority",
          "api_path": [

          ]
        },
        {
          "ar_field": "next_election",
          "api_field": "next_election",
          "api_path": [

          ]
        },
        {
          "ar_field": "total_votes",
          "api_field": "total_votes",
          "api_path": [

          ]
        },
        {
          "ar_field": "missed_votes",
          "api_field": "missed_votes",
          "api_path": [

          ]
        },
        {
          "ar_field": "total_present",
          "api_field": "total_present",
          "api_path": [

          ]
        },
        {
          "ar_field": "state",
          "api_field": "state",
          "api_path": [

          ]
        },
        {
          "ar_field": "district",
          "api_field": "district",
          "api_path": [

          ]
        },
        {
          "ar_field": "missed_votes_pct",
          "api_field": "missed_votes_pct",
          "api_path": [

          ]
        },
        {
          "ar_field": "votes_with_party_pct",
          "api_field": "votes_with_party_pct",
          "api_path": [

          ]
        },
        {
          "ar_field": "created_at",
          "api_field": "created_at",
          "api_path": [

          ]
        },
        {
          "ar_field": "updated_at",
          "api_field": "updated_at",
          "api_path": [

          ]
        }
      ]
    },
    {
      "name": "Person",
      "associations": {
        "associations": [
          {
            "name": "roles",
            "ass_type": "has_many",
            "model_obj": "Role"
          },
          {
            "name": "committee_legislators",
            "ass_type": "has_many",
            "model_obj": "CommitteeLegislator"
          }
        ]
      },
      "field_relationships": [
        {
          "ar_field": "person_id",
          "api_field": "person_id",
          "api_path": [

          ]
        },
        {
          "ar_field": "bioguideid",
          "api_field": "bioguideid",
          "api_path": [

          ]
        },
        {
          "ar_field": "birthday",
          "api_field": "birthday",
          "api_path": [

          ]
        },
        {
          "ar_field": "cspanid",
          "api_field": "cspanid",
          "api_path": [

          ]
        },
        {
          "ar_field": "firstname",
          "api_field": "firstname",
          "api_path": [

          ]
        },
        {
          "ar_field": "gender",
          "api_field": "gender",
          "api_path": [

          ]
        },
        {
          "ar_field": "gender_label",
          "api_field": "gender_label",
          "api_path": [

          ]
        },
        {
          "ar_field": "lastname",
          "api_field": "lastname",
          "api_path": [

          ]
        },
        {
          "ar_field": "link",
          "api_field": "link",
          "api_path": [

          ]
        },
        {
          "ar_field": "middlename",
          "api_field": "middlename",
          "api_path": [

          ]
        },
        {
          "ar_field": "name",
          "api_field": "name",
          "api_path": [

          ]
        },
        {
          "ar_field": "namemod",
          "api_field": "namemod",
          "api_path": [

          ]
        },
        {
          "ar_field": "nickname",
          "api_field": "nickname",
          "api_path": [

          ]
        },
        {
          "ar_field": "osid",
          "api_field": "osid",
          "api_path": [

          ]
        },
        {
          "ar_field": "pvsid",
          "api_field": "pvsid",
          "api_path": [

          ]
        },
        {
          "ar_field": "sortname",
          "api_field": "sortname",
          "api_path": [

          ]
        },
        {
          "ar_field": "twitterid",
          "api_field": "twitterid",
          "api_path": [

          ]
        },
        {
          "ar_field": "youtubeid",
          "api_field": "youtubeid",
          "api_path": [

          ]
        },
        {
          "ar_field": "created_at",
          "api_field": "created_at",
          "api_path": [

          ]
        },
        {
          "ar_field": "updated_at",
          "api_field": "updated_at",
          "api_path": [

          ]
        }
      ]
    },
    {
      "name": "Role",
      "associations": {
        "associations": [
          {
            "name": "person",
            "ass_type": "belongs_to",
            "model_obj": "Person"
          }
        ]
      },
      "field_relationships": [
        {
          "ar_field": "role_id",
          "api_field": "role_id",
          "api_path": [

          ]
        },
        {
          "ar_field": "caucus",
          "api_field": "caucus",
          "api_path": [

          ]
        },
        {
          "ar_field": "congress_numbers",
          "api_field": "congress_numbers",
          "api_path": [

          ]
        },
        {
          "ar_field": "current",
          "api_field": "current",
          "api_path": [

          ]
        },
        {
          "ar_field": "description",
          "api_field": "description",
          "api_path": [

          ]
        },
        {
          "ar_field": "district",
          "api_field": "district",
          "api_path": [

          ]
        },
        {
          "ar_field": "enddate",
          "api_field": "enddate",
          "api_path": [

          ]
        },
        {
          "ar_field": "address",
          "api_field": "address",
          "api_path": [

          ]
        },
        {
          "ar_field": "contact_form",
          "api_field": "contact_form",
          "api_path": [

          ]
        },
        {
          "ar_field": "fax",
          "api_field": "fax",
          "api_path": [

          ]
        },
        {
          "ar_field": "office",
          "api_field": "office",
          "api_path": [

          ]
        },
        {
          "ar_field": "rss_url",
          "api_field": "rss_url",
          "api_path": [

          ]
        },
        {
          "ar_field": "how",
          "api_field": "how",
          "api_path": [

          ]
        },
        {
          "ar_field": "leadership_title",
          "api_field": "leadership_title",
          "api_path": [

          ]
        },
        {
          "ar_field": "party",
          "api_field": "party",
          "api_path": [

          ]
        },
        {
          "ar_field": "person_id",
          "api_field": "person_id",
          "api_path": [

          ]
        },
        {
          "ar_field": "phone",
          "api_field": "phone",
          "api_path": [

          ]
        },
        {
          "ar_field": "role_type",
          "api_field": "role_type",
          "api_path": [

          ]
        },
        {
          "ar_field": "role_type_label",
          "api_field": "role_type_label",
          "api_path": [

          ]
        },
        {
          "ar_field": "senator_class",
          "api_field": "senator_class",
          "api_path": [

          ]
        },
        {
          "ar_field": "senator_rank",
          "api_field": "senator_rank",
          "api_path": [

          ]
        },
        {
          "ar_field": "startdate",
          "api_field": "startdate",
          "api_path": [

          ]
        },
        {
          "ar_field": "state",
          "api_field": "state",
          "api_path": [

          ]
        },
        {
          "ar_field": "title",
          "api_field": "title",
          "api_path": [

          ]
        },
        {
          "ar_field": "title_long",
          "api_field": "title_long",
          "api_path": [

          ]
        },
        {
          "ar_field": "website",
          "api_field": "website",
          "api_path": [

          ]
        },
        {
          "ar_field": "created_at",
          "api_field": "created_at",
          "api_path": [

          ]
        },
        {
          "ar_field": "updated_at",
          "api_field": "updated_at",
          "api_path": [

          ]
        }
      ]
    }
  ],
  "groups": [
    {
      "members": [
        "Person",
        "Role",
        "CommitteeLegislator"
      ],
      "api_path": "https://www.govtrack.us/api/v2/person/",
      "api_calls": [
        300002,
        400432,
        412582,
        412573,
        412556,
        412554,
        412545,
        412542,
        412391,
        412281,
        412251,
        412248,
        412247,
        412246,
        412244,
        412243,
        412242,
        412223,
        412218,
        412205,
        412200,
        412194,
        300093,
        300078,
        300052,
        300043,
        300019,
        300018,
        400357,
        400272,
        400134,
        400064,
        400050,
        400013,
        300023,
        300025,
        300027,
        300038,
        300041,
        300047,
        300055,
        300072,
        300081,
        300083,
        400061,
        400253,
        400413,
        412269,
        412305,
        412671,
        412321,
        412322,
        412323,
        412325,
        412378,
        412390,
        412406,
        412508,
        412549,
        412598,
        412665,
        412666,
        412667,
        412668,
        412669,
        300087,
        412330,
        412492,
        412494,
        400230,
        300030,
        300048,
        300065,
        300071,
        300075,
        300076,
        300089,
        300100,
        400004,
        400018,
        400029,
        400030,
        400032,
        400033,
        400034,
        400040,
        400041,
        400046,
        400047,
        400052,
        400054,
        400057,
        400063,
        400068,
        400071,
        400074,
        400075,
        400077,
        400080,
        400081,
        400087,
        400089,
        400090,
        400093,
        400097,
        400100,
        400101,
        400103,
        400108,
        400111,
        400114,
        400116,
        400122,
        400124,
        400141,
        400142,
        400154,
        400157,
        400158,
        400160,
        400162,
        400163,
        400170,
        400175,
        400189,
        400194,
        400196,
        400199,
        400204,
        400206,
        400209,
        400211,
        400218,
        400219,
        400220,
        400232,
        400233,
        400237,
        400238,
        400240,
        400244,
        400245,
        400246,
        400247,
        400249,
        400251,
        400259,
        400263,
        400271,
        400284,
        400285,
        400289,
        400290,
        400291,
        400295,
        400297,
        400308,
        400309,
        400313,
        400314,
        400316,
        400325,
        400326,
        400340,
        400341,
        400343,
        400344,
        400347,
        400348,
        400349,
        400350,
        400351,
        400352,
        400355,
        400360,
        400361,
        400363,
        400364,
        400365,
        400366,
        400367,
        400371,
        400373,
        400376,
        400378,
        400379,
        400380,
        400381,
        400402,
        400403,
        400404,
        400406,
        400408,
        400411,
        400414,
        400415,
        400416,
        400417,
        400419,
        400422,
        400433,
        400440,
        400546,
        400607,
        400616,
        400618,
        400623,
        400626,
        400630,
        400639,
        400640,
        400641,
        400643,
        400644,
        400648,
        400651,
        400652,
        400653,
        400654,
        400655,
        400656,
        400657,
        400659,
        400660,
        400661,
        400663,
        408211,
        409888,
        412186,
        412189,
        412190,
        412191,
        412192,
        412193,
        412195,
        412196,
        412199,
        412202,
        412209,
        412211,
        412212,
        412213,
        412214,
        412215,
        412217,
        412219,
        412221,
        412226,
        412236,
        412239,
        412250,
        412254,
        412255,
        412256,
        412257,
        412258,
        412259,
        412261,
        412270,
        412271,
        412272,
        412278,
        412280,
        412282,
        412283,
        412284,
        412290,
        412292,
        412293,
        412295,
        412302,
        412303,
        412307,
        412308,
        412309,
        412310,
        412311,
        412312,
        412315,
        412317,
        412318,
        412319,
        412327,
        412331,
        412379,
        412382,
        412385,
        412388,
        412393,
        412394,
        412395,
        412396,
        412397,
        412399,
        412400,
        412402,
        412403,
        412404,
        412405,
        412410,
        412411,
        412412,
        412416,
        412417,
        412418,
        412419,
        412421,
        412422,
        412426,
        412427,
        412428,
        412430,
        412432,
        412434,
        412435,
        412437,
        412438,
        412443,
        412444,
        412445,
        412460,
        412461,
        412462,
        412463,
        412464,
        412465,
        412466,
        412468,
        412469,
        412470,
        412471,
        412472,
        412473,
        412474,
        412475,
        412476,
        412477,
        412478,
        412480,
        412482,
        412485,
        412486,
        412487,
        412488,
        412490,
        412491,
        412495,
        412496,
        412500,
        412501,
        412503,
        412505,
        412506,
        412507,
        412509,
        412510,
        412511,
        412512,
        412513,
        412514,
        412515,
        412516,
        412517,
        412519,
        412520,
        412521,
        412522,
        412523,
        412524,
        412525,
        412526,
        412529,
        412531,
        412532,
        412533,
        412534,
        412536,
        412537,
        412538,
        412539,
        412540,
        412541,
        412543,
        412544,
        412546,
        412548,
        412550,
        412551,
        412552,
        412553,
        412555,
        412557,
        412558,
        412560,
        412561,
        412562,
        412563,
        412564,
        412565,
        412566,
        412567,
        412568,
        412569,
        412570,
        412571,
        412572,
        412574,
        412575,
        412576,
        412578,
        412579,
        412580,
        412581,
        412583,
        412584,
        412585,
        412595,
        412596,
        412600,
        412601,
        412605,
        412606,
        412607,
        412608,
        412609,
        412610,
        412611,
        412612,
        412613,
        412614,
        412615,
        412616,
        412617,
        412618,
        412619,
        412621,
        412622,
        412623,
        412624,
        412625,
        412627,
        412628,
        412629,
        412630,
        412631,
        412632,
        412633,
        412634,
        412635,
        412636,
        412637,
        412638,
        412639,
        412640,
        412641,
        412643,
        412644,
        412646,
        412647,
        412648,
        412649,
        412650,
        412651,
        412652,
        412653,
        412654,
        412655,
        412656,
        412657,
        412658,
        412659,
        412660,
        412661,
        412662,
        412663,
        412664,
        412670,
        412672,
        412673,
        412674,
        412675,
        412676,
        412677,
        412678,
        412679,
        412680,
        412681,
        412682,
        412683,
        412684,
        412685,
        412686,
        412687,
        412688,
        412689,
        412690,
        412691,
        412692,
        412693,
        412694,
        412695,
        412696,
        412697,
        412698,
        412699,
        412700,
        412701,
        412702,
        412703,
        412704,
        412705,
        412706,
        412707,
        412708,
        412709,
        412710,
        412711,
        412712,
        412713,
        412714,
        412715,
        412716,
        412717,
        412718,
        412719,
        412720,
        412721,
        412722,
        412723,
        412724,
        412725,
        412726,
        412727,
        412728,
        412729,
        412730,
        412731,
        412732,
        400315,
        412733,
        412734
      ]
    }
  ]
}