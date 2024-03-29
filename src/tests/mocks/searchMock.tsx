

const searchMock = () => {

  const results = [
    {
      "adult": false,
      "backdrop_path": "/92PG1J4gvxjTRLXTqDzPqjpe6fp.jpg",
      "genre_ids": [
        14,
        28,
        80
      ],
      "id": 268,
      "original_language": "en",
      "original_title": "Batman",
      "overview": "Batman must face his most ruthless nemesis when a deformed madman calling himself \"The Joker\" seizes control of Gotham's criminal underworld.",
      "popularity": 51.204,
      "poster_path": "/cij4dd21v2Rk2YtUQbV5kW69WB2.jpg",
      "release_date": "1989-06-21",
      "title": "Batman",
      "video": false,
      "vote_average": 7.227,
      "vote_count": 7367
    },
    {
      "adult": false,
      "backdrop_path": "/bxxupqG6TBLKC60M6L8iOvbQEr6.jpg",
      "genre_ids": [
        28,
        35,
        80
      ],
      "id": 2661,
      "original_language": "en",
      "original_title": "Batman",
      "overview": "The Dynamic Duo faces four super-villains who plan to hold the world for ransom with the help of a secret invention that instantly dehydrates people.",
      "popularity": 25.12,
      "poster_path": "/zzoPxWHnPa0eyfkMLgwbNvdEcVF.jpg",
      "release_date": "1966-07-30",
      "title": "Batman",
      "video": false,
      "vote_average": 6.33,
      "vote_count": 811
    },
    {
      "adult": false,
      "backdrop_path": "/bHxJA9rllKF2jhb11ARAwZJYSp6.jpg",
      "genre_ids": [
        28,
        12,
        80,
        878,
        53,
        10752
      ],
      "id": 125249,
      "original_language": "en",
      "original_title": "Batman",
      "overview": "Japanese master spy Daka operates a covert espionage-sabotage organization located in Gotham City's now-deserted Little Tokyo, which turns American scientists into pliable zombies. The great crime-fighters Batman and Robin, with the help of their allies, are in pursuit.",
      "popularity": 12.284,
      "poster_path": "/AvzD3mrtokIzZOiV6zAG7geIo6F.jpg",
      "release_date": "1943-07-16",
      "title": "Batman",
      "video": false,
      "vote_average": 6.2,
      "vote_count": 65
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [
        28,
        80,
        9648
      ],
      "id": 1249938,
      "original_language": "en",
      "original_title": "Batman",
      "overview": "It's Bruce Wayne’s first year as Batman. He must get used to his double life in order to protect Gotham from criminals, some have already rose among the city.",
      "popularity": 5.379,
      "poster_path": "/RqvYBFEJfz1MVooCBO7RWN1d5E.jpg",
      "release_date": "2024-01-09",
      "title": "Batman",
      "video": false,
      "vote_average": 0,
      "vote_count": 0
    },
    {
      "adult": false,
      "backdrop_path": "/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg",
      "genre_ids": [
        80,
        9648,
        53
      ],
      "id": 414906,
      "original_language": "en",
      "original_title": "The Batman",
      "overview": "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.",
      "popularity": 131.38,
      "poster_path": "/74xTEgt7R36Fpooo50r9T25onhq.jpg",
      "release_date": "2022-03-01",
      "title": "The Batman",
      "video": false,
      "vote_average": 7.686,
      "vote_count": 9254
    },
    {
      "adult": false,
      "backdrop_path": "/8pOUmMgVnl1tYNtTRTE5TeyGBGD.jpg",
      "genre_ids": [
        16,
        28,
        878
      ],
      "id": 485942,
      "original_language": "ja",
      "original_title": "ニンジャバットマン",
      "overview": "Batman, along with many of his allies and adversaries, finds himself transported to feudal Japan by Gorilla Grodd's time displacement machine.",
      "popularity": 27.084,
      "poster_path": "/5xSB0Npkc9Fd9kahKBsq9P4Cdzp.jpg",
      "release_date": "2018-06-15",
      "title": "Batman Ninja",
      "video": false,
      "vote_average": 5.773,
      "vote_count": 801
    },
    {
      "adult": false,
      "backdrop_path": "/doiUtOHzcxXFl0GVQ2n8Ay6Pirx.jpg",
      "genre_ids": [
        28,
        12,
        14
      ],
      "id": 209112,
      "original_language": "en",
      "original_title": "Batman v Superman: Dawn of Justice",
      "overview": "Fearing the actions of a god-like Super Hero left unchecked, Gotham City’s own formidable, forceful vigilante takes on Metropolis’s most revered, modern-day savior, while the world wrestles with what sort of hero it really needs. And with Batman and Superman at war with one another, a new threat quickly arises, putting mankind in greater danger than it’s ever known before.",
      "popularity": 68.862,
      "poster_path": "/5UsK3grJvtQrtzEgqNlDljJW96w.jpg",
      "release_date": "2016-03-23",
      "title": "Batman v Superman: Dawn of Justice",
      "video": false,
      "vote_average": 5.964,
      "vote_count": 17424
    },
    {
      "adult": false,
      "backdrop_path": "/lh5lbisD4oDbEKgUxoRaZU8HVrk.jpg",
      "genre_ids": [
        28,
        80,
        18
      ],
      "id": 272,
      "original_language": "en",
      "original_title": "Batman Begins",
      "overview": "Driven by tragedy, billionaire Bruce Wayne dedicates his life to uncovering and defeating the corruption that plagues his home, Gotham City.  Unable to work within the system, he instead creates a new identity, a symbol of fear for the criminal underworld - The Batman.",
      "popularity": 63.781,
      "poster_path": "/4MpN4kIEqUjW8OPtOQJXlTdHiJV.jpg",
      "release_date": "2005-06-10",
      "title": "Batman Begins",
      "video": false,
      "vote_average": 7.704,
      "vote_count": 20118
    },
    {
      "adult": false,
      "backdrop_path": "/8UHbmR3WP86BspfwZZPgsVxxCFJ.jpg",
      "genre_ids": [
        16,
        35,
        28,
        10751,
        878
      ],
      "id": 484862,
      "original_language": "en",
      "original_title": "Scooby-Doo! & Batman: The Brave and the Bold",
      "overview": "Scooby-Doo and the Mystery Inc. gang meet up with Batman and other friends to defeat evil villains and save the day.",
      "popularity": 38.204,
      "poster_path": "/hSPeF1zoYH8kCOhFMu7x3B55zu6.jpg",
      "release_date": "2018-01-31",
      "title": "Scooby-Doo! & Batman: The Brave and the Bold",
      "video": false,
      "vote_average": 7.277,
      "vote_count": 220
    },
    {
      "adult": false,
      "backdrop_path": "/bNMw3onveTYU7PpLQRK0HQK8JRb.jpg",
      "genre_ids": [
        28,
        16,
        80
      ],
      "id": 69735,
      "original_language": "en",
      "original_title": "Batman: Year One",
      "overview": "A wealthy playboy named Bruce Wayne and a Chicago cop named Jim Gordon both return to Gotham City where their lives unexpectedly intersect.",
      "popularity": 36.277,
      "poster_path": "/mLZRhulJcDsxZWTdfx0trtk6y07.jpg",
      "release_date": "2011-09-27",
      "title": "Batman: Year One",
      "video": false,
      "vote_average": 7.291,
      "vote_count": 899
    },
    {
      "adult": false,
      "backdrop_path": "/3WP0RObZ2t7ShHfqQpKPljF9B22.jpg",
      "genre_ids": [
        28,
        14
      ],
      "id": 364,
      "original_language": "en",
      "original_title": "Batman Returns",
      "overview": "While Batman deals with a deformed man calling himself the Penguin, an employee of a corrupt businessman transforms into the Catwoman.",
      "popularity": 49.215,
      "poster_path": "/jKBjeXM7iBBV9UkUcOXx3m7FSHY.jpg",
      "release_date": "1992-06-19",
      "title": "Batman Returns",
      "video": false,
      "vote_average": 6.922,
      "vote_count": 6166
    },
    {
      "adult": false,
      "backdrop_path": "/snlu32RmjldF9b068UURJg8sQtn.jpg",
      "genre_ids": [
        28,
        80,
        14
      ],
      "id": 414,
      "original_language": "en",
      "original_title": "Batman Forever",
      "overview": "Batman must battle a disfigured district attorney and a disgruntled former employee with help from an amorous psychologist and a young circus acrobat.",
      "popularity": 36.563,
      "poster_path": "/mzzNBVwTiiY94xAXDMWJpNPW2US.jpg",
      "release_date": "1995-06-16",
      "title": "Batman Forever",
      "video": false,
      "vote_average": 5.421,
      "vote_count": 4909
    },
    {
      "adult": false,
      "backdrop_path": "/a21obwG9qMSf1qa6oG4ZgpOyMaA.jpg",
      "genre_ids": [
        16,
        28,
        10751,
        35
      ],
      "id": 870358,
      "original_language": "en",
      "original_title": "Merry Little Batman",
      "overview": "This Christmas, Damian Wayne wants to be a superhero like his dad – the one and only Batman. When Damian is left home alone while Batman takes on Gotham’s worst supervillains on Christmas Eve, he stumbles upon a villainous plot to steal Christmas and leaps at the chance to save the day.",
      "popularity": 45.928,
      "poster_path": "/2J70guF8wcErbYbRgZUBcvShgI1.jpg",
      "release_date": "2023-12-08",
      "title": "Merry Little Batman",
      "video": false,
      "vote_average": 6.645,
      "vote_count": 114
    },
    {
      "adult": false,
      "backdrop_path": "/eoMushgujydxFplE9yPZ54lwOvo.jpg",
      "genre_ids": [
        16,
        28,
        35,
        10751
      ],
      "id": 324849,
      "original_language": "en",
      "original_title": "The Lego Batman Movie",
      "overview": "A cooler-than-ever Bruce Wayne must deal with the usual suspects as they plan to rule Gotham City, while discovering that he has accidentally adopted a teenage orphan who wishes to become his sidekick.",
      "popularity": 42.487,
      "poster_path": "/snGwr2gag4Fcgx2OGmH9otl6ofW.jpg",
      "release_date": "2017-02-08",
      "title": "The Lego Batman Movie",
      "video": false,
      "vote_average": 7.223,
      "vote_count": 4755
    },
    {
      "adult": false,
      "backdrop_path": "/tgPFZxhDuxWd4VXYaz8eAUznGTF.jpg",
      "genre_ids": [
        28,
        878,
        12
      ],
      "id": 415,
      "original_language": "en",
      "original_title": "Batman & Robin",
      "overview": "Batman and Robin deal with relationship issues while preventing Mr. Freeze and Poison Ivy from attacking Gotham City.",
      "popularity": 48.925,
      "poster_path": "/cGRDufDDSrFrv7VI4YnmWnslne0.jpg",
      "release_date": "1997-06-20",
      "title": "Batman & Robin",
      "video": false,
      "vote_average": 4.345,
      "vote_count": 4745
    },
    {
      "adult": false,
      "backdrop_path": "/sA50fD5aLbYPRU0fMCHIZ88gc5g.jpg",
      "genre_ids": [
        16,
        28,
        10751
      ],
      "id": 581997,
      "original_language": "en",
      "original_title": "Batman vs Teenage Mutant Ninja Turtles",
      "overview": "Batman, Batgirl and Robin forge an alliance with the Teenage Mutant Ninja Turtles to fight against the Turtles' sworn enemy, The Shredder, who has apparently teamed up with Ra's Al Ghul and The League of Assassins.",
      "popularity": 29.473,
      "poster_path": "/yP3h0Pu8htyb9450mWJ9Vu1rU.jpg",
      "release_date": "2019-03-31",
      "title": "Batman vs Teenage Mutant Ninja Turtles",
      "video": false,
      "vote_average": 7.142,
      "vote_count": 448
    },
    {
      "adult": false,
      "backdrop_path": "/niRgVCgvDVxD67u6gjKZnkBO1AD.jpg",
      "genre_ids": [
        878,
        16,
        28,
        80,
        53
      ],
      "id": 13851,
      "original_language": "en",
      "original_title": "Batman: Gotham Knight",
      "overview": "A chronicle of Bruce Wayne's establishment and progression into Gotham City’s legendary caped crusader through 6 standalone episodes.",
      "popularity": 29.838,
      "poster_path": "/3i1o0sHBP0VUpuSVmkdCRKYoDBC.jpg",
      "release_date": "2008-07-08",
      "title": "Batman: Gotham Knight",
      "video": false,
      "vote_average": 6.7,
      "vote_count": 632
    },
    {
      "adult": false,
      "backdrop_path": "/4xFlvdymCBqyBN8Ab5i69Sgqk7m.jpg",
      "genre_ids": [
        28,
        16,
        35
      ],
      "id": 464882,
      "original_language": "en",
      "original_title": "Batman vs. Two-Face",
      "overview": "Former Gotham City District Attorney Harvey Dent, one side of his face scarred by acid, goes on a crime spree based on the number '2'. All of his actions are decided by the flip of a defaced, two-headed silver dollar.",
      "popularity": 22.776,
      "poster_path": "/yTbj8Kcp4WFwMRdEejnn55KIsfH.jpg",
      "release_date": "2017-11-14",
      "title": "Batman vs. Two-Face",
      "video": false,
      "vote_average": 6.324,
      "vote_count": 162
    },
    {
      "adult": false,
      "backdrop_path": "/iQJ1gC2p6yn5wnBEklhPaEFJ3n1.jpg",
      "genre_ids": [
        16,
        28,
        878
      ],
      "id": 886396,
      "original_language": "en",
      "original_title": "Batman and Superman: Battle of the Super Sons",
      "overview": "After discovering he has powers, 11-year-old Jonathan Kent and assassin-turned-Boy-Wonder Damian Wayne must join forces to rescue their fathers (Superman & Batman) and save the planet from the malevolent alien force known as Starro.",
      "popularity": 19.715,
      "poster_path": "/mvffaexT5kA3chOnGxwBSlRoshh.jpg",
      "release_date": "2022-10-17",
      "title": "Batman and Superman: Battle of the Super Sons",
      "video": false,
      "vote_average": 7.658,
      "vote_count": 262
    },
    {
      "adult": false,
      "backdrop_path": "/9BtUWZhigispqSUYhrS6cJHpvwx.jpg",
      "genre_ids": [
        28,
        16,
        80,
        9648,
        18
      ],
      "id": 14919,
      "original_language": "en",
      "original_title": "Batman: Mask of the Phantasm",
      "overview": "When a powerful criminal, who is connected to Bruce Wayne's ex-girlfriend, blames the Dark Knight for killing a crime lord, Batman decides to fight against him.",
      "popularity": 24.284,
      "poster_path": "/l4jaQjkgznu2Rz05X18f24UjPNW.jpg",
      "release_date": "1993-12-25",
      "title": "Batman: Mask of the Phantasm",
      "video": false,
      "vote_average": 7.475,
      "vote_count": 1010
    }
  ]
  return {
    results
  }
}

export default searchMock
