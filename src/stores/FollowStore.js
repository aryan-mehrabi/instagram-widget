import { atom } from "jotai";
// import { getFollowers, getFollowings } from "../apis/instagram";

const initFollowing = [
  {
    has_anonymous_profile_picture: false,
    fbid_v2: "17841419300222146",
    text_post_app_joiner_number: 20135665,
    text_post_app_joiner_number_label: "20,135,665",
    pk: "19377171340",
    pk_id: "19377171340",
    username: "pxniz",
    full_name: "Paniz Moradi",
    is_private: true,
    is_verified: false,
    profile_pic_id: "2717077600854936825_19377171340",
    profile_pic_url:
      "https://scontent-arn2-1.cdninstagram.com/v/t51.2885-19/261305300_302138308389036_4784969747561278749_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-arn2-1.cdninstagram.com&_nc_cat=100&_nc_ohc=W2_JwkevUvUAX9rxBNc&edm=ALB854YBAAAA&ccb=7-5&oh=00_AfAbP5L6_LFhp3pQaHdOIjNy1q03kcTqrkrHRUbhN_xo6A&oe=64D18D40&_nc_sid=ce9561",
    account_badges: [],
    is_possible_scammer: false,
    third_party_downloads_enabled: 0,
    is_possible_bad_actor: {
      is_possible_scammer: false,
      is_possible_impersonator: {
        is_unconnected_impersonator: false,
        connected_similar_user_id: null,
      },
      is_possible_impersonator_threads: {
        is_unconnected_impersonator: false,
        connected_similar_user_id: null,
      },
    },
    latest_reel_media: 0,
    is_favorite: false,
  },
  {
    has_anonymous_profile_picture: false,
    fbid_v2: "17841401045907205",
    pk: "1101154863",
    pk_id: "1101154863",
    username: "thebadyaaw",
    full_name: "Mahyar Zamani",
    is_private: false,
    is_verified: false,
    profile_pic_id: "2100345805303937749_1101154863",
    profile_pic_url:
      "https://scontent-arn2-1.cdninstagram.com/v/t51.2885-19/66107414_2422339194516027_3547431184478765056_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-arn2-1.cdninstagram.com&_nc_cat=103&_nc_ohc=AV8WdpfBAUkAX_Ljd5E&edm=ALB854YBAAAA&ccb=7-5&oh=00_AfAAmYduzUI-i0Rosy5sSDrxj5SawN1gJId-hkFADDt1aw&oe=64D0BD89&_nc_sid=ce9561",
    account_badges: [],
    is_possible_scammer: false,
    third_party_downloads_enabled: 0,
    is_possible_bad_actor: {
      is_possible_scammer: false,
      is_possible_impersonator: {
        is_unconnected_impersonator: false,
        connected_similar_user_id: null,
      },
      is_possible_impersonator_threads: {
        is_unconnected_impersonator: false,
        connected_similar_user_id: null,
      },
    },
    latest_reel_media: 0,
    is_favorite: false,
  },
  {
    has_anonymous_profile_picture: false,
    fbid_v2: "17841403207113387",
    text_post_app_joiner_number: 46920019,
    text_post_app_joiner_number_label: "46,920,019",
    pk: "3307098903",
    pk_id: "3307098903",
    username: "alirezaheidaryofficial",
    full_name: "Alireza Heidary",
    is_private: true,
    is_verified: false,
    profile_pic_id: "3002647337821662321_3307098903",
    profile_pic_url:
      "https://scontent-arn2-1.cdninstagram.com/v/t51.2885-19/322040784_720708909570598_4289181913049180241_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-arn2-1.cdninstagram.com&_nc_cat=110&_nc_ohc=c5tAs3waScEAX8plG7U&edm=ALB854YBAAAA&ccb=7-5&oh=00_AfA7dzqwjHt5NFM2Mfv4A0mNpudKZtiJj1-oaynoOYvk-w&oe=64D0EDC2&_nc_sid=ce9561",
    account_badges: [],
    is_possible_scammer: false,
    third_party_downloads_enabled: 0,
    is_possible_bad_actor: {
      is_possible_scammer: false,
      is_possible_impersonator: {
        is_unconnected_impersonator: false,
        connected_similar_user_id: null,
      },
      is_possible_impersonator_threads: {
        is_unconnected_impersonator: false,
        connected_similar_user_id: null,
      },
    },
    latest_reel_media: 0,
    is_favorite: false,
  },
  {
    has_anonymous_profile_picture: false,
    fbid_v2: "17841400897028309",
    pk: "1811805900",
    pk_id: "1811805900",
    username: "alirezarezaei.arc",
    full_name: "𝖠 𝖫 𝖨 𝖱 𝖤 𝖹 𝖠 | عليرضــــا",
    is_private: false,
    is_verified: false,
    profile_pic_id: "3070753958805704108_1811805900",
    profile_pic_url:
      "https://scontent-arn2-1.cdninstagram.com/v/t51.2885-19/338925775_747214110474666_3665634026351582240_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-arn2-1.cdninstagram.com&_nc_cat=106&_nc_ohc=Itp--D7Wlw8AX8FxLgB&edm=ALB854YBAAAA&ccb=7-5&oh=00_AfDPWlcNP7wAkUGNngRO3RoDfDYdl-FtEYlj7V3Tm7_A7w&oe=64D03EE4&_nc_sid=ce9561",
    account_badges: [],
    is_possible_scammer: false,
    third_party_downloads_enabled: 0,
    is_possible_bad_actor: {
      is_possible_scammer: false,
      is_possible_impersonator: {
        is_unconnected_impersonator: false,
        connected_similar_user_id: null,
      },
      is_possible_impersonator_threads: {
        is_unconnected_impersonator: false,
        connected_similar_user_id: null,
      },
    },
    latest_reel_media: 0,
    is_favorite: false,
  },
  {
    has_anonymous_profile_picture: false,
    fbid_v2: "17841401385519864",
    pk: "1911342183",
    pk_id: "1911342183",
    username: "hamidrezahajighasemi",
    full_name: "(Kamran)",
    is_private: false,
    is_verified: false,
    profile_pic_id: "3070018926977161139_1911342183",
    profile_pic_url:
      "https://scontent-arn2-1.cdninstagram.com/v/t51.2885-19/338615392_1166777810674413_3557122091594552692_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-arn2-1.cdninstagram.com&_nc_cat=109&_nc_ohc=ROQGJpZCqEkAX_qmNDY&edm=ALB854YBAAAA&ccb=7-5&oh=00_AfCDNJ-swgOd7J769LdTj9m-7p52cA7HPiU68YmWifjviA&oe=64D1AD7C&_nc_sid=ce9561",
    account_badges: [],
    is_possible_scammer: false,
    third_party_downloads_enabled: 0,
    is_possible_bad_actor: {
      is_possible_scammer: false,
      is_possible_impersonator: {
        is_unconnected_impersonator: false,
        connected_similar_user_id: null,
      },
      is_possible_impersonator_threads: {
        is_unconnected_impersonator: false,
        connected_similar_user_id: null,
      },
    },
    latest_reel_media: 0,
    is_favorite: false,
  },
  {
    has_anonymous_profile_picture: false,
    fbid_v2: "17841408586303602",
    pk: "8428822210",
    pk_id: "8428822210",
    username: "amirrekabdarr",
    full_name: "Amirrekabdar",
    is_private: false,
    is_verified: false,
    profile_pic_id: "3105536734614775648_8428822210",
    profile_pic_url:
      "https://scontent-arn2-1.cdninstagram.com/v/t51.2885-19/348228954_1676468402780011_5253211755883811770_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-arn2-1.cdninstagram.com&_nc_cat=107&_nc_ohc=VxNbjg49OEwAX-bW36A&edm=ALB854YBAAAA&ccb=7-5&oh=00_AfA3KgIYrbkfjmIgffZSnWruXWMWaNwlzI6KelVL7kiR2Q&oe=64D0A370&_nc_sid=ce9561",
    account_badges: [],
    is_possible_scammer: false,
    third_party_downloads_enabled: 0,
    is_possible_bad_actor: {
      is_possible_scammer: false,
      is_possible_impersonator: {
        is_unconnected_impersonator: false,
        connected_similar_user_id: null,
      },
      is_possible_impersonator_threads: {
        is_unconnected_impersonator: false,
        connected_similar_user_id: null,
      },
    },
    latest_reel_media: 1691006547,
    is_favorite: false,
  },
  {
    has_anonymous_profile_picture: false,
    fbid_v2: "17841401482785710",
    text_post_app_joiner_number: 62467757,
    text_post_app_joiner_number_label: "62,467,757",
    pk: "365489426",
    pk_id: "365489426",
    username: "arefroshan",
    full_name: "🤌🏼",
    is_private: true,
    is_verified: false,
    profile_pic_id: "3059853296357680691_365489426",
    profile_pic_url:
      "https://scontent-arn2-1.cdninstagram.com/v/t51.2885-19/335785586_3532379843751182_6375030284418746377_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-arn2-1.cdninstagram.com&_nc_cat=102&_nc_ohc=MestO4SUGPcAX8REcs3&edm=ALB854YBAAAA&ccb=7-5&oh=00_AfBnj9ChU0TMp4aRAukwjd2TB7scUatg7ynv8kRONc-D8g&oe=64D1838F&_nc_sid=ce9561",
    account_badges: [],
    is_possible_scammer: false,
    third_party_downloads_enabled: 0,
    is_possible_bad_actor: {
      is_possible_scammer: false,
      is_possible_impersonator: {
        is_unconnected_impersonator: false,
        connected_similar_user_id: null,
      },
      is_possible_impersonator_threads: {
        is_unconnected_impersonator: false,
        connected_similar_user_id: null,
      },
    },
    latest_reel_media: 0,
    is_favorite: false,
  },
  {
    has_anonymous_profile_picture: false,
    fbid_v2: "17841401337842508",
    pk: "1440556594",
    pk_id: "1440556594",
    username: "ghazaalsalvati",
    full_name: "Gнαzαℓ | غزال",
    is_private: true,
    is_verified: false,
    profile_pic_id: "2534309919927436068_1440556594",
    profile_pic_url:
      "https://scontent-arn2-1.cdninstagram.com/v/t51.2885-19/162552462_304473141254780_5207081593776336833_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-arn2-1.cdninstagram.com&_nc_cat=108&_nc_ohc=eWFIWQm-ClQAX_eeD3R&edm=ALB854YBAAAA&ccb=7-5&oh=00_AfCBoYulZWusZA-p5QVT4Xq7ko64BNAuf79S-hXVsO_aKg&oe=64D029F2&_nc_sid=ce9561",
    account_badges: [],
    is_possible_scammer: false,
    third_party_downloads_enabled: 0,
    is_possible_bad_actor: {
      is_possible_scammer: false,
      is_possible_impersonator: {
        is_unconnected_impersonator: false,
        connected_similar_user_id: null,
      },
      is_possible_impersonator_threads: {
        is_unconnected_impersonator: false,
        connected_similar_user_id: null,
      },
    },
    latest_reel_media: 0,
    is_favorite: false,
  },
  {
    has_anonymous_profile_picture: false,
    fbid_v2: "17841405327314515",
    pk: "5316121577",
    pk_id: "5316121577",
    username: "mohamadnaziif",
    full_name: "Mohamadnaziif",
    is_private: false,
    is_verified: false,
    profile_pic_id: "2829988334605041652_5316121577",
    profile_pic_url:
      "https://scontent-arn2-1.cdninstagram.com/v/t51.2885-19/279706880_165423005866510_5598744298928365509_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-arn2-1.cdninstagram.com&_nc_cat=110&_nc_ohc=vyZSl6tCQ2UAX9MWotr&edm=ALB854YBAAAA&ccb=7-5&oh=00_AfBqrwyJvf5DRAeh9bWp3OariHeHZARb6evx1qiRgQBsVg&oe=64D110FC&_nc_sid=ce9561",
    account_badges: [],
    is_possible_scammer: false,
    third_party_downloads_enabled: 0,
    is_possible_bad_actor: {
      is_possible_scammer: false,
      is_possible_impersonator: {
        is_unconnected_impersonator: false,
        connected_similar_user_id: null,
      },
      is_possible_impersonator_threads: {
        is_unconnected_impersonator: false,
        connected_similar_user_id: null,
      },
    },
    latest_reel_media: 0,
    is_favorite: false,
  },
  {
    has_anonymous_profile_picture: false,
    fbid_v2: "17841411009611655",
    text_post_app_joiner_number: 13732090,
    text_post_app_joiner_number_label: "13,732,090",
    pk: "10813246987",
    pk_id: "10813246987",
    username: "indiepublic",
    full_name: "INDIE PUBLIC",
    is_private: false,
    is_verified: false,
    profile_pic_id: "2560462254395068554_10813246987",
    profile_pic_url:
      "https://scontent-arn2-1.cdninstagram.com/v/t51.2885-19/177234381_173252994656264_7499617831356776502_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-arn2-1.cdninstagram.com&_nc_cat=108&_nc_ohc=6lqqoHgU5osAX962btW&edm=ALB854YBAAAA&ccb=7-5&oh=00_AfDcxOhxx7rnia7a02nQVtCin8WSJ70HLJBFzFpVY1pcKQ&oe=64D02952&_nc_sid=ce9561",
    account_badges: [],
    is_possible_scammer: false,
    third_party_downloads_enabled: 0,
    is_possible_bad_actor: {
      is_possible_scammer: false,
      is_possible_impersonator: {
        is_unconnected_impersonator: false,
        connected_similar_user_id: null,
      },
      is_possible_impersonator_threads: {
        is_unconnected_impersonator: false,
        connected_similar_user_id: null,
      },
    },
    latest_reel_media: 0,
    is_favorite: false,
  },
  {
    has_anonymous_profile_picture: false,
    fbid_v2: "17841402087459390",
    pk: "2155125581",
    pk_id: "2155125581",
    username: "mohammadamirsalimbagha",
    full_name: "",
    is_private: true,
    is_verified: false,
    profile_pic_id: "2570287109159294291_2155125581",
    profile_pic_url:
      "https://scontent-arn2-1.cdninstagram.com/v/t51.2885-19/184679024_1188216668302173_3143107664685047527_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-arn2-1.cdninstagram.com&_nc_cat=109&_nc_ohc=r-BdQBaJbT4AX9lC3yX&edm=ALB854YBAAAA&ccb=7-5&oh=00_AfBm4UOlkOF3IVqD6XW_fBOYWF50NRylY9gx-5x8O4sgAA&oe=64D08F93&_nc_sid=ce9561",
    account_badges: [],
    is_possible_scammer: false,
    third_party_downloads_enabled: 0,
    is_possible_bad_actor: {
      is_possible_scammer: false,
      is_possible_impersonator: {
        is_unconnected_impersonator: false,
        connected_similar_user_id: null,
      },
      is_possible_impersonator_threads: {
        is_unconnected_impersonator: false,
        connected_similar_user_id: null,
      },
    },
    latest_reel_media: 0,
    is_favorite: false,
  },
  {
    has_anonymous_profile_picture: false,
    fbid_v2: "17841402332336774",
    pk: "2294197744",
    pk_id: "2294197744",
    username: "banoo_hich",
    full_name: "الف",
    is_private: true,
    is_verified: false,
    profile_pic_id: "3067285290888977700_2294197744",
    profile_pic_url:
      "https://scontent-arn2-1.cdninstagram.com/v/t51.2885-19/327972713_236242458783261_7039025544307116028_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-arn2-1.cdninstagram.com&_nc_cat=109&_nc_ohc=T301ylZT3koAX99fvdk&edm=ALB854YBAAAA&ccb=7-5&oh=00_AfBlIVkLkPM38uIqO6RYa2rExELjK7ZVUnboplpA2P4tQw&oe=64D11508&_nc_sid=ce9561",
    account_badges: [],
    is_possible_scammer: false,
    third_party_downloads_enabled: 0,
    is_possible_bad_actor: {
      is_possible_scammer: false,
      is_possible_impersonator: {
        is_unconnected_impersonator: false,
        connected_similar_user_id: null,
      },
      is_possible_impersonator_threads: {
        is_unconnected_impersonator: false,
        connected_similar_user_id: null,
      },
    },
    latest_reel_media: 1691057971,
    is_favorite: false,
  },
];
const initFollower = [
  {
    has_anonymous_profile_picture: false,
    fbid_v2: "17841459765151485",
    pk: "59931880171",
    pk_id: "59931880171",
    username: "e1ahe7",
    full_name: "Elahe Davari",
    is_private: true,
    is_verified: false,
    profile_pic_id: "3127238875964050096_59931880171",
    profile_pic_url:
      "https://scontent-arn2-1.cdninstagram.com/v/t51.2885-19/353916690_285626610479358_6107817924265627839_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-arn2-1.cdninstagram.com&_nc_cat=106&_nc_ohc=tWqkB2ILqjcAX99aNx1&edm=APQMUHMBAAAA&ccb=7-5&oh=00_AfAKEixQQbKcSmEe7UA5bNTLxtg5_ugMFhM3-etTKUKTTA&oe=64CFFC0B&_nc_sid=6ff7c8",
    account_badges: [],
    is_possible_scammer: false,
    third_party_downloads_enabled: 0,
    is_possible_bad_actor: {
      is_possible_scammer: false,
      is_possible_impersonator: {
        is_unconnected_impersonator: false,
        connected_similar_user_id: null,
      },
      is_possible_impersonator_threads: {
        is_unconnected_impersonator: false,
        connected_similar_user_id: null,
      },
    },
    latest_reel_media: 0,
  },
  {
    has_anonymous_profile_picture: false,
    fbid_v2: "17841459150412690",
    pk: "59141523680",
    pk_id: "59141523680",
    username: "aliii.nz59",
    full_name: "",
    is_private: true,
    is_verified: false,
    profile_pic_id: "3081532115605617687_59141523680",
    profile_pic_url:
      "https://scontent-arn2-1.cdninstagram.com/v/t51.2885-19/341190641_237515302145716_2349859373305190837_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-arn2-1.cdninstagram.com&_nc_cat=104&_nc_ohc=PJtbzQbGmykAX9lm5BM&edm=APQMUHMBAAAA&ccb=7-5&oh=00_AfA4zxmWw0-eP6TiS4M8QXAcmQzIEPWgvIAU_q2dWIGitw&oe=64CFF550&_nc_sid=6ff7c8",
    account_badges: [],
    is_possible_scammer: false,
    third_party_downloads_enabled: 0,
    is_possible_bad_actor: {
      is_possible_scammer: false,
      is_possible_impersonator: {
        is_unconnected_impersonator: false,
        connected_similar_user_id: null,
      },
      is_possible_impersonator_threads: {
        is_unconnected_impersonator: false,
        connected_similar_user_id: null,
      },
    },
    latest_reel_media: 0,
  },
  {
    has_anonymous_profile_picture: false,
    fbid_v2: "17841405614518221",
    pk: "5665771150",
    pk_id: "5665771150",
    username: "panah.architects",
    full_name: "◽️مشاوره معماری و دیزاین داخلی◽️",
    is_private: false,
    is_verified: false,
    profile_pic_id: "3033104308078736073_5665771150",
    profile_pic_url:
      "https://scontent-arn2-1.cdninstagram.com/v/t51.2885-19/329567189_1093527578715891_3925632182904755643_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-arn2-1.cdninstagram.com&_nc_cat=103&_nc_ohc=RoxELey_iGIAX-ba9sV&edm=APQMUHMBAAAA&ccb=7-5&oh=00_AfDniRTOc8RhD-DBYQxLAy6hinwY7DCJsXsb-EfbVzn37Q&oe=64CFDEF8&_nc_sid=6ff7c8",
    account_badges: [],
    is_possible_scammer: false,
    third_party_downloads_enabled: 0,
    is_possible_bad_actor: {
      is_possible_scammer: false,
      is_possible_impersonator: {
        is_unconnected_impersonator: false,
        connected_similar_user_id: null,
      },
      is_possible_impersonator_threads: {
        is_unconnected_impersonator: false,
        connected_similar_user_id: null,
      },
    },
    latest_reel_media: 0,
  },
  {
    has_anonymous_profile_picture: false,
    fbid_v2: "17841429897202453",
    pk: "29859628573",
    pk_id: "29859628573",
    username: "kimia__nkh",
    full_name: "❄𝘬𝓲ꪑ𝓲ꪖ❄",
    is_private: true,
    is_verified: false,
    profile_pic_id: "3117492835639780583_29859628573",
    profile_pic_url:
      "https://scontent-arn2-1.cdninstagram.com/v/t51.2885-19/351414736_1415605269276367_6697648118551190002_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-arn2-1.cdninstagram.com&_nc_cat=107&_nc_ohc=0gXdw3sBQzsAX_eM72l&edm=APQMUHMBAAAA&ccb=7-5&oh=00_AfAK4OGxpvE0uQVb4zYTraBs__mnIx41-2EkSP0VhI8pfA&oe=64D08B0F&_nc_sid=6ff7c8",
    account_badges: [],
    is_possible_scammer: false,
    third_party_downloads_enabled: 0,
    is_possible_bad_actor: {
      is_possible_scammer: false,
      is_possible_impersonator: {
        is_unconnected_impersonator: false,
        connected_similar_user_id: null,
      },
      is_possible_impersonator_threads: {
        is_unconnected_impersonator: false,
        connected_similar_user_id: null,
      },
    },
    latest_reel_media: 0,
  },
  {
    has_anonymous_profile_picture: false,
    fbid_v2: "17841400453069516",
    text_post_app_joiner_number: 31619251,
    text_post_app_joiner_number_label: "31,619,251",
    pk: "609039102",
    pk_id: "609039102",
    username: "arash.iran59",
    full_name: "آرش",
    is_private: false,
    is_verified: false,
    profile_pic_id: "3099053697128698406_609039102",
    profile_pic_url:
      "https://scontent-arn2-1.cdninstagram.com/v/t51.2885-19/345857779_950976052723968_6301728259645089197_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-arn2-1.cdninstagram.com&_nc_cat=100&_nc_ohc=vYc2lDGAZt0AX-K5WNH&edm=APQMUHMBAAAA&ccb=7-5&oh=00_AfDWL3O8yERTdGHV-VK-BNtP-MQX1hWG9kBSzrzNV_KvNg&oe=64D0E353&_nc_sid=6ff7c8",
    account_badges: [],
    is_possible_scammer: false,
    third_party_downloads_enabled: 0,
    is_possible_bad_actor: {
      is_possible_scammer: false,
      is_possible_impersonator: {
        is_unconnected_impersonator: false,
        connected_similar_user_id: null,
      },
      is_possible_impersonator_threads: {
        is_unconnected_impersonator: false,
        connected_similar_user_id: null,
      },
    },
    latest_reel_media: 0,
  },
  {
    has_anonymous_profile_picture: false,
    fbid_v2: "17841401847003294",
    text_post_app_joiner_number: 36481873,
    text_post_app_joiner_number_label: "36,481,873",
    pk: "1490877566",
    pk_id: "1490877566",
    username: "behzadsoltaniiiiii",
    full_name: "Behzad Soltani",
    is_private: true,
    is_verified: false,
    profile_pic_id: "3103294854012435237_1490877566",
    profile_pic_url:
      "https://scontent-arn2-1.cdninstagram.com/v/t51.2885-19/346584773_628732395946423_5496431293460300821_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-arn2-1.cdninstagram.com&_nc_cat=107&_nc_ohc=jAVVIvSsKccAX_jReJp&edm=APQMUHMBAAAA&ccb=7-5&oh=00_AfBkAlP2OW3jBQ-oOs1ykKwmEm0MCbnO2prDH8xZjWGbLg&oe=64CFC4C0&_nc_sid=6ff7c8",
    account_badges: [],
    is_possible_scammer: false,
    third_party_downloads_enabled: 0,
    is_possible_bad_actor: {
      is_possible_scammer: false,
      is_possible_impersonator: {
        is_unconnected_impersonator: false,
        connected_similar_user_id: null,
      },
      is_possible_impersonator_threads: {
        is_unconnected_impersonator: false,
        connected_similar_user_id: null,
      },
    },
    latest_reel_media: 0,
  },
  {
    has_anonymous_profile_picture: false,
    fbid_v2: "17841401648912877",
    text_post_app_joiner_number: 85366756,
    text_post_app_joiner_number_label: "85,366,756",
    pk: "1464182963",
    pk_id: "1464182963",
    username: "sadaf__hs",
    full_name: "Sadaf🐚🌹",
    is_private: true,
    is_verified: false,
    profile_pic_id: "3085157888511280023_1464182963",
    profile_pic_url:
      "https://scontent-arn2-1.cdninstagram.com/v/t51.2885-19/341551494_1348516409041757_2173336967336883938_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-arn2-1.cdninstagram.com&_nc_cat=105&_nc_ohc=Nz8Ipqzb2PwAX-U4WmC&edm=APQMUHMBAAAA&ccb=7-5&oh=00_AfC3kNbJNC9JIIzMqQPnOjAsrT1e4l7v5BbLAfNn2kDEHQ&oe=64D18F27&_nc_sid=6ff7c8",
    account_badges: [],
    is_possible_scammer: false,
    third_party_downloads_enabled: 0,
    is_possible_bad_actor: {
      is_possible_scammer: false,
      is_possible_impersonator: {
        is_unconnected_impersonator: false,
        connected_similar_user_id: null,
      },
      is_possible_impersonator_threads: {
        is_unconnected_impersonator: false,
        connected_similar_user_id: null,
      },
    },
    latest_reel_media: 0,
  },
  {
    has_anonymous_profile_picture: false,
    fbid_v2: "17841414466849694",
    pk: "14477554228",
    pk_id: "14477554228",
    username: "o_khdmm_o",
    full_name: "",
    is_private: true,
    is_verified: false,
    profile_pic_id: "2137073760266950296_14477554228",
    profile_pic_url:
      "https://scontent-arn2-1.cdninstagram.com/v/t51.2885-19/69155730_2550266405019562_6431167768560664576_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-arn2-1.cdninstagram.com&_nc_cat=110&_nc_ohc=FQbS-2MIY4EAX_0iB27&edm=APQMUHMBAAAA&ccb=7-5&oh=00_AfAz6OhbFluhU0hiU939uX9h5kJoCBuQccJSornXry5-Mw&oe=64D16A8D&_nc_sid=6ff7c8",
    account_badges: [],
    is_possible_scammer: false,
    third_party_downloads_enabled: 0,
    is_possible_bad_actor: {
      is_possible_scammer: false,
      is_possible_impersonator: {
        is_unconnected_impersonator: false,
        connected_similar_user_id: null,
      },
      is_possible_impersonator_threads: {
        is_unconnected_impersonator: false,
        connected_similar_user_id: null,
      },
    },
    latest_reel_media: 0,
  },
  {
    has_anonymous_profile_picture: false,
    fbid_v2: "17841455004801682",
    pk: "55053457493",
    pk_id: "55053457493",
    username: "rya.honarmand",
    full_name: "RYA",
    is_private: true,
    is_verified: false,
    profile_pic_id: "3119946326313722998_55053457493",
    profile_pic_url:
      "https://scontent-arn2-1.cdninstagram.com/v/t51.2885-19/352207831_214818931391787_6013085116215431885_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-arn2-1.cdninstagram.com&_nc_cat=103&_nc_ohc=_jLbBx_Wm3gAX_Cwzve&edm=APQMUHMBAAAA&ccb=7-5&oh=00_AfBxxkbjcR2jsQzu9b8XwMz-JCNMQKOaAspJh65ln7ZL6Q&oe=64D00C25&_nc_sid=6ff7c8",
    account_badges: [],
    is_possible_scammer: false,
    third_party_downloads_enabled: 0,
    is_possible_bad_actor: {
      is_possible_scammer: false,
      is_possible_impersonator: {
        is_unconnected_impersonator: false,
        connected_similar_user_id: null,
      },
      is_possible_impersonator_threads: {
        is_unconnected_impersonator: false,
        connected_similar_user_id: null,
      },
    },
    latest_reel_media: 0,
  },
  {
    has_anonymous_profile_picture: false,
    fbid_v2: "17841453594843560",
    text_post_app_joiner_number: 82519256,
    text_post_app_joiner_number_label: "82,519,256",
    pk: "53708482494",
    pk_id: "53708482494",
    username: "ye6ane",
    full_name: "ᵞᵉᵍᵃᶰᵉ",
    is_private: true,
    is_verified: false,
    profile_pic_id: "3087498912385345388_53708482494",
    profile_pic_url:
      "https://scontent-arn2-1.cdninstagram.com/v/t51.2885-19/342520836_201319509338833_2317393882659300696_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-arn2-1.cdninstagram.com&_nc_cat=101&_nc_ohc=7m0MLfp7EdYAX_pkPSS&edm=APQMUHMBAAAA&ccb=7-5&oh=00_AfA5dUYHQ-tYrtqWsaADE1wl7xROsQzXz0uju5TkeKJ71w&oe=64D0F09F&_nc_sid=6ff7c8",
    account_badges: [],
    is_possible_scammer: false,
    third_party_downloads_enabled: 0,
    is_possible_bad_actor: {
      is_possible_scammer: false,
      is_possible_impersonator: {
        is_unconnected_impersonator: false,
        connected_similar_user_id: null,
      },
      is_possible_impersonator_threads: {
        is_unconnected_impersonator: false,
        connected_similar_user_id: null,
      },
    },
    latest_reel_media: 1691067828,
  },
  {
    has_anonymous_profile_picture: false,
    fbid_v2: "17841401023771725",
    pk: "1390434125",
    pk_id: "1390434125",
    username: "ali_bahramzadeh",
    full_name: "ali bahramzadeh | علی بهرام زاده",
    is_private: true,
    is_verified: false,
    profile_pic_id: "2875191243383244393_1390434125",
    profile_pic_url:
      "https://scontent-arn2-1.cdninstagram.com/v/t51.2885-19/291702594_368633965300341_6670244655368383276_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-arn2-1.cdninstagram.com&_nc_cat=109&_nc_ohc=GwOf3YJLb0YAX_yzkcn&edm=APQMUHMBAAAA&ccb=7-5&oh=00_AfAW2WXlOw_CEZ99BOdebanp6D3z75Ff79Y0cZqqbUtd_g&oe=64CFC0C8&_nc_sid=6ff7c8",
    account_badges: [],
    is_possible_scammer: false,
    third_party_downloads_enabled: 0,
    is_possible_bad_actor: {
      is_possible_scammer: false,
      is_possible_impersonator: {
        is_unconnected_impersonator: false,
        connected_similar_user_id: null,
      },
      is_possible_impersonator_threads: {
        is_unconnected_impersonator: false,
        connected_similar_user_id: null,
      },
    },
    latest_reel_media: 0,
  },
];
export const followingAtom = atom(initFollowing);
export const followerAtom = atom(initFollower);
export const unfollowerAtom = atom(get => {
  const followers = get(followerAtom);
  const followings = get(followingAtom);
  const unfollowers = [];
  const followersObj = {};
  followers.forEach(user => {
    followersObj[user.fbid_v2] = user;
  });
  followings.forEach(
    user => user.fbid_v2 in followersObj || unfollowers.push(user)
  );
  return unfollowers;
});

// followingAtom.onMount = async setAtom => {
//   const res = await getFollowings();
//   setAtom(res);
// };

// followerAtom.onMount = async setAtom => {
//   const res = await getFollowers();
//   setAtom(res);
// };
