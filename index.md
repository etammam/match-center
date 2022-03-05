## Welcome to Match Center APIs

it's a free web scraped match schedule apis 
feel free to consume this apis into your own client
### Endpoints
this service provision two main apis to get a list of matches 
at a specific date or today as following

#### Get list of today's matches
* request
```curl
curl --location --request GET 'https://match-center-apis.herokuapp.com/matches'
```
* response
```json
[
    {
        "league": {
            "name": "دوري WE المصري",
            "logoUrl": "https://www.yallakora.com/pictures/tourlogo/epl110-12-2020-16-46-3.png"
        },
        "host": {
            "name": "المقاولون العرب",
            "logoUrl": "https://media.gemini.media/img/yallakora/iosteams/120/2018/7/24/almokawloon2018_7_24_13_31.jpg",
            "goals": []
        },
        "visitor": {
            "name": "بيراميدز",
            "logoUrl": "https://media.gemini.media/img/yallakora/iosteams/120/2020/12/17/pyramidsfc2020_12_17_17_30.jpg",
            "goals": [
                {
                    "player": "وليد الكرتي",
                    "time": "26"
                },
                {
                    "player": "إبراهيم عادل",
                    "time": "85"
                }
            ]
        },
        "matchTime": "17:30",
        "week": "الأسبوع الثاني عشر",
        "tvChannel": "Ontime sports 1"
    },
    {
        "league": {
            "name": "الدوري التركي",
            "logoUrl": "https://www.yallakora.com/pictures/tourlogo/super-lig113-2-2021-3-39-5.png"
        },
        "host": {
            "name": "مالاتياسبور",
            "logoUrl": "https://media.gemini.media/img/yallakora/iosteams/120/2021/7/15/malatyaspor2021_7_15_15_37.jpg",
            "goals": [
                {
                    "player": "منير شعير",
                    "time": "77"
                }
            ]
        },
        "visitor": {
            "name": "أضنة دمير سبور",
            "logoUrl": "https://media.gemini.media/img/yallakora/iosteams/120/2021/8/19/adanademirspor2021_8_19_15_38.jpg",
            "goals": []
        },
        "matchTime": "19:00",
        "week": "الأسبوع الثامن والعشرون",
        "tvChannel": ""
    },
    {
        "league": {
            "name": "الدوري الإسباني",
            "logoUrl": "https://www.yallakora.com/pictures/tourlogo/laliga30-7-2018-14-51-23.png"
        },
        "host": {
            "name": "ألافيس",
            "logoUrl": "https://media.gemini.media/img/yallakora/iosteams/120/2018/7/29/alaves2018_7_29_14_57.jpg",
            "goals": []
        },
        "visitor": {
            "name": "اشبيلية",
            "logoUrl": "https://media.gemini.media/img/yallakora/iosteams/120/2018/7/29/sevilla2018_7_29_14_45.jpg",
            "goals": []
        },
        "matchTime": "22:00",
        "week": "الأسبوع السابع والعشرون",
        "tvChannel": "بى ان سبورت 1HD"
    },
    {
        "league": {
            "name": "الدوري الإيطالي",
            "logoUrl": "https://www.yallakora.com/pictures/tourlogo/zktpcly9_400x4008-8-2021-19-27-36.jpg"
        },
        "host": {
            "name": "انترناسيونالي",
            "logoUrl": "https://media.gemini.media/img/yallakora/iosteams/120/2021/9/5/intermilan2021_9_5_16_40.jpg",
            "goals": [
                {
                    "player": "لاوتارو مارتينيز",
                    "time": "22"
                },
                {
                    "player": "لاوتارو مارتينيز",
                    "time": "40"
                },
                {
                    "player": "لاوتارو مارتينيز",
                    "time": "56"
                },
                {
                    "player": "إيدين دجيكو",
                    "time": "64"
                },
                {
                    "player": "إيدين دجيكو",
                    "time": "69"
                }
            ]
        },
        "visitor": {
            "name": "ساليرنيتانا",
            "logoUrl": "https://media.gemini.media/img/yallakora/iosteams/120/2021/7/15/salernitana2021_7_15_15_7.jpg",
            "goals": []
        },
        "matchTime": "21:45",
        "week": "الأسبوع الثامن والعشرون",
        "tvChannel": ""
    },
    {
        "league": {
            "name": "الدوري الفرنسي",
            "logoUrl": "https://www.yallakora.com/pictures/tourlogo/1200px-ligue_1_uber_eats8-8-2021-19-29-44.jpg"
        },
        "host": {
            "name": "لوريان",
            "logoUrl": "https://media.gemini.media/img/yallakora/iosteams/120/2015/3/23/lorient2015_3_23_18_7.jpg",
            "goals": [
                {
                    "player": "تاريم موفي",
                    "time": "57"
                }
            ]
        },
        "visitor": {
            "name": "ليون",
            "logoUrl": "https://media.gemini.media/img/yallakora/iosteams/120/2018/7/29/lyon2018_7_29_17_11.jpg",
            "goals": [
                {
                    "player": "رومان فيفر",
                    "time": "6"
                },
                {
                    "player": "موسى ديمبيلي",
                    "time": "26"
                },
                {
                    "player": "كارل توكو ايكامبى",
                    "time": "59"
                },
                {
                    "player": "رومان فيفر",
                    "time": "78"
                }
            ]
        },
        "matchTime": "22:00",
        "week": "الأسبوع السابع والعشرون",
        "tvChannel": "بى ان سبورت 2 HD"
    },
    {
        "league": {
            "name": "الدوري الألماني",
            "logoUrl": "https://www.yallakora.com/pictures/tourlogo/bundesliga30-7-2018-14-40-45.png"
        },
        "host": {
            "name": "ارمينيا بيليفيلت",
            "logoUrl": "https://media.gemini.media/img/yallakora/iosteams/120/2021/9/5/arminiabielefeld2021_9_5_18_37.jpg",
            "goals": []
        },
        "visitor": {
            "name": "أوجسبورج",
            "logoUrl": "https://media.gemini.media/img/yallakora/iosteams/120/2018/7/29/augsburg2018_7_29_16_8.jpg",
            "goals": [
                {
                    "player": "دانيال كاليجيري",
                    "time": "50"
                }
            ]
        },
        "matchTime": "21:30",
        "week": "الأسبوع الخامس والعشرون",
        "tvChannel": ""
    },
    {
        "league": {
            "name": "الدوري البرتغالي",
            "logoUrl": "https://www.yallakora.com/pictures/tourlogo/568-8-2021-19-32-46.jpg"
        },
        "host": {
            "name": "جل فيسنتي",
            "logoUrl": "https://media.gemini.media/img/yallakora/iosteams/120/2021/9/5/gilvicente2021_9_5_18_48.jpg",
            "goals": []
        },
        "visitor": {
            "name": "إستوريل",
            "logoUrl": "https://media.gemini.media/img/yallakora/iosteams/120/2015/3/23/estoril2015_3_23_18_36.jpg",
            "goals": []
        },
        "matchTime": "22:15",
        "week": "الأسبوع الخامس والعشرون",
        "tvChannel": ""
    },
    {
        "league": {
            "name": "الدوري السعودي",
            "logoUrl": "https://www.yallakora.com/pictures/tourlogo/saudileague0117-12-2018-18-42-43.png"
        },
        "host": {
            "name": "أبها",
            "logoUrl": "https://media.gemini.media/img/yallakora/iosteams/120/2021/9/7/abha2021_9_7_17_27.jpg",
            "goals": [
                {
                    "player": "أروس ماتيتش",
                    "time": "45"
                },
                {
                    "player": "مصطفى فتحي",
                    "time": "27"
                },
                {
                    "player": "نعيم السليتى",
                    "time": "19"
                }
            ]
        },
        "visitor": {
            "name": "الطــائي",
            "logoUrl": "https://media.gemini.media/img/yallakora/iosteams/120/2021/9/7/altaee2021_9_7_17_0.jpg",
            "goals": [
                {
                    "player": "فراس البريكان",
                    "time": "36"
                }
            ]
        },
        "matchTime": "15:15",
        "week": "الأسبوع الثالث والعشرون",
        "tvChannel": ""
    },
    {
        "league": {
            "name": "الدوري السعودي",
            "logoUrl": "https://www.yallakora.com/pictures/tourlogo/saudileague0117-12-2018-18-42-43.png"
        },
        "host": {
            "name": "التعاون",
            "logoUrl": "https://media.gemini.media/img/yallakora/iosteams/120/2021/9/7/altaawon2021_9_7_17_34.jpg",
            "goals": [
                {
                    "player": "أروس ماتيتش",
                    "time": "45"
                },
                {
                    "player": "مصطفى فتحي",
                    "time": "27"
                },
                {
                    "player": "نعيم السليتى",
                    "time": "19"
                }
            ]
        },
        "visitor": {
            "name": "الفتح",
            "logoUrl": "https://media.gemini.media/img/yallakora/iosteams/120/2018/7/25/alfateh2018_7_25_17_10.jpg",
            "goals": [
                {
                    "player": "فراس البريكان",
                    "time": "36"
                }
            ]
        },
        "matchTime": "17:45",
        "week": "الأسبوع الثالث والعشرون",
        "tvChannel": ""
    },
    {
        "league": {
            "name": "الدوري السعودي",
            "logoUrl": "https://www.yallakora.com/pictures/tourlogo/saudileague0117-12-2018-18-42-43.png"
        },
        "host": {
            "name": "الأتفـــــاق",
            "logoUrl": "https://media.gemini.media/img/yallakora/iosteams/120/2018/7/25/ettifaq2018_7_25_17_9.jpg",
            "goals": [
                {
                    "player": "أروس ماتيتش",
                    "time": "45"
                },
                {
                    "player": "مصطفى فتحي",
                    "time": "27"
                },
                {
                    "player": "نعيم السليتى",
                    "time": "19"
                }
            ]
        },
        "visitor": {
            "name": "أهلي جدة",
            "logoUrl": "https://media.gemini.media/img/yallakora/iosteams/120/2018/7/25/ahlijeddah2018_7_25_15_27.jpg",
            "goals": [
                {
                    "player": "فراس البريكان",
                    "time": "36"
                }
            ]
        },
        "matchTime": "19:45",
        "week": "الأسبوع الثالث والعشرون",
        "tvChannel": ""
    },
    {
        "league": {
            "name": "الدوري المغربي",
            "logoUrl": "https://www.yallakora.com/pictures/tourlogo/botolapro18-8-2021-19-38-13.jpg"
        },
        "host": {
            "name": "سريع وادي زم",
            "logoUrl": "https://media.gemini.media/img/yallakora/iosteams/120/2018/7/24/wadizam2018_7_24_17_56.jpg",
            "goals": [
                {
                    "player": "صالح السلامي",
                    "time": "84"
                }
            ]
        },
        "visitor": {
            "name": "أولمبيك آسفي",
            "logoUrl": "https://media.gemini.media/img/yallakora/iosteams/120/2018/7/24/olympicasfi2018_7_24_17_51.jpg",
            "goals": []
        },
        "matchTime": "19:15",
        "week": "الأسبوع العشرون",
        "tvChannel": ""
    },
    {
        "league": {
            "name": "الدوري المغربي",
            "logoUrl": "https://www.yallakora.com/pictures/tourlogo/botolapro18-8-2021-19-38-13.jpg"
        },
        "host": {
            "name": "يوسفية برشيد",
            "logoUrl": "https://media.gemini.media/img/yallakora/iosteams/120/2018/9/13/youssoufiaberrechid2018_9_13_13_9.jpg",
            "goals": [
                {
                    "player": "صالح السلامي",
                    "time": "84"
                }
            ]
        },
        "visitor": {
            "name": "المغرب الفاسي",
            "logoUrl": "https://media.gemini.media/img/yallakora/iosteams/120/2021/9/23/mas2021_9_23_16_16.jpg",
            "goals": []
        },
        "matchTime": "21:30",
        "week": "الأسبوع العشرون",
        "tvChannel": ""
    },
    {
        "league": {
            "name": "الدوري الإماراتي",
            "logoUrl": "https://www.yallakora.com/pictures/tourlogo/128-8-2021-19-44-4.jpg"
        },
        "host": {
            "name": "شباب الأهلي",
            "logoUrl": "https://media.gemini.media/img/yallakora/iosteams/120/2018/7/26/shababalahlidubai2018_7_26_11_51.jpg",
            "goals": [
                {
                    "player": "برونو دي أوليفيرا",
                    "time": "38"
                }
            ]
        },
        "visitor": {
            "name": "الوحـــدة",
            "logoUrl": "https://media.gemini.media/img/yallakora/iosteams/120/2019/3/12/alwahda2019_3_12_9_56.jpg",
            "goals": []
        },
        "matchTime": "15:45",
        "week": "الأسبوع الثامن عشر",
        "tvChannel": ""
    },
    {
        "league": {
            "name": "الدوري الإماراتي",
            "logoUrl": "https://www.yallakora.com/pictures/tourlogo/128-8-2021-19-44-4.jpg"
        },
        "host": {
            "name": "العين",
            "logoUrl": "https://media.gemini.media/img/yallakora/iosteams/120/2018/7/25/alain2018_7_25_14_58.jpg",
            "goals": [
                {
                    "player": "برونو دي أوليفيرا",
                    "time": "38"
                }
            ]
        },
        "visitor": {
            "name": "العروبة",
            "logoUrl": "https://media.gemini.media/img/yallakora/iosteams/120/2021/9/8/alurooba2021_9_8_10_26.jpg",
            "goals": []
        },
        "matchTime": "15:45",
        "week": "الأسبوع الثامن عشر",
        "tvChannel": ""
    },
    {
        "league": {
            "name": "الدوري الإماراتي",
            "logoUrl": "https://www.yallakora.com/pictures/tourlogo/128-8-2021-19-44-4.jpg"
        },
        "host": {
            "name": "الجــزيرة",
            "logoUrl": "https://media.gemini.media/img/yallakora/iosteams/120/2018/7/25/aljazira2018_7_25_14_59.jpg",
            "goals": [
                {
                    "player": "برونو دي أوليفيرا",
                    "time": "38"
                }
            ]
        },
        "visitor": {
            "name": "الشــارقة",
            "logoUrl": "https://media.gemini.media/img/yallakora/iosteams/120/2021/9/7/sharjahfc2021_9_7_11_29.jpg",
            "goals": []
        },
        "matchTime": "18:15",
        "week": "الأسبوع الثامن عشر",
        "tvChannel": ""
    }
]
```

#### Get list of a specific date matches
* prerequisites
  * make sure that your request data match this patter MM/dd/YYYY
* request
```curl
curl --location --request GET 'https://match-center-apis.herokuapp.com/matches?date=03/02/2022
```
* response
```json
[
  {
    "league": {
      "name": "دوري WE المصري",
      "logoUrl": "https://www.yallakora.com/pictures/tourlogo/epl110-12-2020-16-46-3.png"
    },
    "host": {
      "name": "الزمالك",
      "logoUrl": "https://media.gemini.media/img/yallakora/iosteams/120/2018/7/24/zamalek2018_7_24_13_31.jpg",
      "goals": [
        {
          "player": "أحمد سيد زيزو",
          "time": "17"
        },
        {
          "player": "أحمد سيد زيزو",
          "time": "49"
        },
        {
          "player": "محمد عبد الغني",
          "time": "90"
        }
      ]
    },
    "visitor": {
      "name": "فيوتشر اف سي",
      "logoUrl": "https://media.gemini.media/img/yallakora/iosteams/120/2021/10/26/futurefc2021_10_26_8_42.jpg",
      "goals": [
        {
          "player": "أحمد عاطف",
          "time": "3"
        },
        {
          "player": "أحمد رفعت",
          "time": "13"
        }
      ]
    },
    "matchTime": "20:00",
    "week": "الأسبوع العاشر",
    "tvChannel": "Ontime sports 1"
  },
  {
    "league": {
      "name": "الدوري الإسباني",
      "logoUrl": "https://www.yallakora.com/pictures/tourlogo/laliga30-7-2018-14-51-23.png"
    },
    "host": {
      "name": "مايوركا",
      "logoUrl": "https://media.gemini.media/img/yallakora/iosteams/120/2018/10/31/mallorca2018_10_31_12_20.jpg",
      "goals": []
    },
    "visitor": {
      "name": "ريال سوسيداد",
      "logoUrl": "https://media.gemini.media/img/yallakora/iosteams/120/2018/7/29/realsociedad2018_7_29_14_56.jpg",
      "goals": [
        {
          "player": "ديفيد سيلفا",
          "time": "36"
        },
        {
          "player": "مايكل ميرنو",
          "time": "62"
        }
      ]
    },
    "matchTime": "22:00",
    "week": "الأسبوع الحادي والعشرون",
    "tvChannel": ""
  },
  {
    "league": {
      "name": "كأس الاتحاد الإنجليزي",
      "logoUrl": "https://www.yallakora.com/pictures/tourlogo/facup30-7-2018-15-42-28.png"
    },
    "host": {
      "name": "لوتون تاون",
      "logoUrl": "https://media.gemini.media/img/yallakora/iosteams/120/2019/1/20/lutontown2019_1_20_14_21.jpg",
      "goals": []
    },
    "visitor": {
      "name": "تشيلسي",
      "logoUrl": "https://media.gemini.media/img/yallakora/iosteams/120/2018/7/29/chelsea2018_7_29_15_28.jpg",
      "goals": []
    },
    "matchTime": "21:15",
    "week": "دور الـ 16",
    "tvChannel": "بى ان سبورت بريميوم 2"
  },
  {
    "league": {
      "name": "كأس الاتحاد الإنجليزي",
      "logoUrl": "https://www.yallakora.com/pictures/tourlogo/facup30-7-2018-15-42-28.png"
    },
    "host": {
      "name": "ساوثامبتون",
      "logoUrl": "https://media.gemini.media/img/yallakora/iosteams/120/2018/7/29/southampton2018_7_29_15_30.jpg",
      "goals": []
    },
    "visitor": {
      "name": "وست هام يونايتد",
      "logoUrl": "https://media.gemini.media/img/yallakora/iosteams/120/2018/7/29/westham2018_7_29_15_29.jpg",
      "goals": []
    },
    "matchTime": "21:30",
    "week": "دور الـ 16",
    "tvChannel": "بى ان سبورت بريميوم 3"
  },
  {
    "league": {
      "name": "كأس الاتحاد الإنجليزي",
      "logoUrl": "https://www.yallakora.com/pictures/tourlogo/facup30-7-2018-15-42-28.png"
    },
    "host": {
      "name": "ليفربول",
      "logoUrl": "https://media.gemini.media/img/yallakora/iosteams/120/2018/7/29/liverpool2018_7_29_15_27.jpg",
      "goals": []
    },
    "visitor": {
      "name": "نورويتش سيتي",
      "logoUrl": "https://media.gemini.media/img/yallakora/iosteams/120/2021/11/23/untitled-12021_11_23_21_29.jpg",
      "goals": []
    },
    "matchTime": "22:15",
    "week": "دور الـ 16",
    "tvChannel": "بى ان سبورت بريميوم 1"
  },
  {
    "league": {
      "name": "كأس ملك أسبانيا",
      "logoUrl": "https://www.yallakora.com/pictures/tourlogo/spainqueencup30-7-2018-16-16-15.png"
    },
    "host": {
      "name": "فالنسيا",
      "logoUrl": "https://media.gemini.media/img/yallakora/iosteams/120/2018/7/29/valencia2018_7_29_14_44.jpg",
      "goals": []
    },
    "visitor": {
      "name": "اتليتك بلباو",
      "logoUrl": "https://media.gemini.media/img/yallakora/iosteams/120/2018/7/29/athleticbilbao2018_7_29_14_44.jpg",
      "goals": []
    },
    "matchTime": "22:30",
    "week": "عودة نصف النهائي",
    "tvChannel": ""
  },
  {
    "league": {
      "name": "كأس إيطاليا",
      "logoUrl": "https://www.yallakora.com/pictures/tourlogo/italycup30-7-2018-15-39-3.png"
    },
    "host": {
      "name": "فيورنتينا",
      "logoUrl": "https://media.gemini.media/img/yallakora/iosteams/120/2018/7/29/fiorentina2018_7_29_15_7.jpg",
      "goals": []
    },
    "visitor": {
      "name": "يوفنتوس",
      "logoUrl": "https://media.gemini.media/img/yallakora/iosteams/120/2021/7/14/juventus12021_7_14_17_22.jpg",
      "goals": [
        {
          "player": "لورينزو فينوتي",
          "time": "90"
        }
      ]
    },
    "matchTime": "22:00",
    "week": "ذهاب نصف النهائي",
    "tvChannel": "أبوظبي الرياضية - HD1"
  },
  {
    "league": {
      "name": "كأس فرنسا",
      "logoUrl": "https://www.yallakora.com/pictures/tourlogo/coupedefrance30-7-2018-16-43-38.png"
    },
    "host": {
      "name": "نانت",
      "logoUrl": "https://media.gemini.media/img/yallakora/iosteams/120/2021/9/5/nantes2021_9_5_14_49.jpg",
      "goals": [
        {
          "player": "سامويل موتسامي",
          "time": "74"
        },
        {
          "player": "جبريل سيديبي",
          "time": "21"
        }
      ]
    },
    "visitor": {
      "name": "موناكو",
      "logoUrl": "https://media.gemini.media/img/yallakora/iosteams/120/2018/7/29/monaco2018_7_29_17_13.jpg",
      "goals": [
        {
          "player": "جيليرمو ماريبان",
          "time": "13"
        },
        {
          "player": "ميرون بوادو",
          "time": "76"
        }
      ]
    },
    "matchTime": "22:15",
    "week": "نصف النهائي",
    "tvChannel": ""
  },
  {
    "league": {
      "name": "كأس ألمانيا",
      "logoUrl": "https://www.yallakora.com/pictures/tourlogo/germanycup30-7-2018-15-45-32.png"
    },
    "host": {
      "name": "هامبورج",
      "logoUrl": "https://media.gemini.media/img/yallakora/iosteams/120/2018/8/16/hamburg2018_8_16_10_18.jpg",
      "goals": []
    },
    "visitor": {
      "name": "كارلسروهر",
      "logoUrl": "https://www.yallakora.com/pictures/teamlogo/93128-10-2008-13-28-25.png",
      "goals": []
    },
    "matchTime": "19:30",
    "week": "ربع النهائي",
    "tvChannel": ""
  },
  {
    "league": {
      "name": "كأس ألمانيا",
      "logoUrl": "https://www.yallakora.com/pictures/tourlogo/germanycup30-7-2018-15-45-32.png"
    },
    "host": {
      "name": "هانوفر96",
      "logoUrl": "https://media.gemini.media/img/yallakora/iosteams/120/2018/7/29/hannover962018_7_29_16_5.jpg",
      "goals": []
    },
    "visitor": {
      "name": "لايبزيج",
      "logoUrl": "https://media.gemini.media/img/yallakora/iosteams/120/2018/7/29/leipzig2018_7_29_16_8.jpg",
      "goals": []
    },
    "matchTime": "19:30",
    "week": "ربع النهائي",
    "tvChannel": ""
  },
  {
    "league": {
      "name": "كأس ألمانيا",
      "logoUrl": "https://www.yallakora.com/pictures/tourlogo/germanycup30-7-2018-15-45-32.png"
    },
    "host": {
      "name": "بوخوم",
      "logoUrl": "https://media.gemini.media/img/yallakora/iosteams/120/2021/7/15/bochum2021_7_15_13_44.jpg",
      "goals": []
    },
    "visitor": {
      "name": "فرايبورج",
      "logoUrl": "https://media.gemini.media/img/yallakora/iosteams/120/2018/7/29/freiburg2018_7_29_16_7.jpg",
      "goals": []
    },
    "matchTime": "21:45",
    "week": "ربع النهائي",
    "tvChannel": ""
  },
  {
    "league": {
      "name": "الدوري التونسي",
      "logoUrl": "https://www.yallakora.com/pictures/tourlogo/tunisianleague30-7-2018-16-51-37.png"
    },
    "host": {
      "name": "الترجى الرياضي",
      "logoUrl": "https://media.gemini.media/img/yallakora/iosteams/120/2018/8/18/altraji2018_8_18_22_5.jpg",
      "goals": []
    },
    "visitor": {
      "name": "أمل حمام سوسة",
      "logoUrl": "https://www.yallakora.com/pictures/teamlogo/hammamsosa6-10-2010-21-22-7.png",
      "goals": []
    },
    "matchTime": "15:00",
    "week": "الأسبوع الثامن",
    "tvChannel": ""
  },
  {
    "league": {
      "name": "الدوري التونسي",
      "logoUrl": "https://www.yallakora.com/pictures/tourlogo/tunisianleague30-7-2018-16-51-37.png"
    },
    "host": {
      "name": "النجم الساحلى",
      "logoUrl": "https://media.gemini.media/img/yallakora/iosteams/120/2018/8/18/etoiledusahel2018_8_18_21_33.jpg",
      "goals": []
    },
    "visitor": {
      "name": "سليمان الرياضي",
      "logoUrl": "https://media.gemini.media/img/yallakora/iosteams/120/2021/4/6/220px-as_soliman2021_4_6_18_16.jpg",
      "goals": []
    },
    "matchTime": "15:00",
    "week": "الأسبوع الثامن",
    "tvChannel": ""
  },
  {
    "league": {
      "name": "الدوري المغربي",
      "logoUrl": "https://www.yallakora.com/pictures/tourlogo/botolapro18-8-2021-19-38-13.jpg"
    },
    "host": {
      "name": "حسنية اغادير",
      "logoUrl": "https://media.gemini.media/img/yallakora/iosteams/120/2018/7/24/hassaniaagadir2018_7_24_17_51.jpg",
      "goals": []
    },
    "visitor": {
      "name": "نهضة بركان",
      "logoUrl": "https://media.gemini.media/img/yallakora/iosteams/120/2021/9/23/nahdetbourkan2021_9_23_16_20.jpg",
      "goals": []
    },
    "matchTime": "21:00",
    "week": "الأسبوع التاسع عشر",
    "tvChannel": ""
  },
  {
    "league": {
      "name": "دوري نجوم قطر",
      "logoUrl": "https://www.yallakora.com/pictures/tourlogo/qatarleague30-7-2018-16-25-56.png"
    },
    "host": {
      "name": "الدحيل",
      "logoUrl": "https://media.gemini.media/img/yallakora/iosteams/120/2018/7/26/alduhail2018_7_26_12_12.jpg",
      "goals": [
        {
          "player": "ميتشيل أولونجا",
          "time": "12"
        },
        {
          "player": "سلطان حسين البريك",
          "time": "45"
        },
        {
          "player": "إدميلسون جونيور",
          "time": "48"
        },
        {
          "player": "عبد الرحمن فهمي",
          "time": "51"
        },
        {
          "player": "عبد الرحمن فهمي",
          "time": "77"
        },
        {
          "player": "رشيد ال عبدالله",
          "time": "86"
        },
        {
          "player": "أداما ديوماندي",
          "time": "24"
        },
        {
          "player": "أداما ديوماندي",
          "time": "55"
        },
        {
          "player": "إبراهيم كلا",
          "time": "90"
        }
      ]
    },
    "visitor": {
      "name": "ام صلال",
      "logoUrl": "https://media.gemini.media/img/yallakora/iosteams/120/2018/7/26/ummsalal2018_7_26_12_11.jpg",
      "goals": [
        {
          "player": "ياسين البخيت",
          "time": "83"
        },
        {
          "player": "سفيان هاني",
          "time": "5"
        },
        {
          "player": "شيخ دياباتي",
          "time": "76"
        }
      ]
    },
    "matchTime": "15:50",
    "week": "الأسبوع الحادي والعشرون",
    "tvChannel": ""
  },
  {
    "league": {
      "name": "دوري نجوم قطر",
      "logoUrl": "https://www.yallakora.com/pictures/tourlogo/qatarleague30-7-2018-16-25-56.png"
    },
    "host": {
      "name": "العربي",
      "logoUrl": "https://media.gemini.media/img/yallakora/iosteams/120/2018/7/26/alarabi2018_7_26_12_12.jpg",
      "goals": [
        {
          "player": "ميتشيل أولونجا",
          "time": "12"
        },
        {
          "player": "سلطان حسين البريك",
          "time": "45"
        },
        {
          "player": "إدميلسون جونيور",
          "time": "48"
        },
        {
          "player": "عبد الرحمن فهمي",
          "time": "51"
        },
        {
          "player": "عبد الرحمن فهمي",
          "time": "77"
        },
        {
          "player": "رشيد ال عبدالله",
          "time": "86"
        },
        {
          "player": "أداما ديوماندي",
          "time": "24"
        },
        {
          "player": "أداما ديوماندي",
          "time": "55"
        },
        {
          "player": "إبراهيم كلا",
          "time": "90"
        }
      ]
    },
    "visitor": {
      "name": "الغرافة",
      "logoUrl": "https://media.gemini.media/img/yallakora/iosteams/120/2018/7/25/gharrafa2018_7_25_16_2.jpg",
      "goals": [
        {
          "player": "ياسين البخيت",
          "time": "83"
        },
        {
          "player": "سفيان هاني",
          "time": "5"
        },
        {
          "player": "شيخ دياباتي",
          "time": "76"
        }
      ]
    },
    "matchTime": "18:00",
    "week": "الأسبوع الحادي والعشرون",
    "tvChannel": ""
  }
]
```

### Support or Contact

Having trouble with APIs? please go ahead and send me an [email](mailto:eslamtammam@hotmail.com).
