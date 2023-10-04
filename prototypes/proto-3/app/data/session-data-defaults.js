/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

const { isNull } = require("lodash");

module.exports = {

  // Insert values here

//Key default values to set up Public
  "who-signin": "org",
  "account-activated": "fully",
  "user-permissions": "Admin user",


//Key caseworker users - Investigator not Lead

  "caseworker-invest": "Jonanna Barton",
  "caseworker-invest-email": "Jonanna.Barton@tra.com",
  "caseworker-invest-permiss": "Investigator",
  "caseworker-invest-status": "Active",
  "caseworker-lead": "Natalie Inbruge",
  "caseworker-lead-email": "Natalie.Inbruge@tra.com",
  "caseworker-lead-permiss": "Lead investigator",
  "caseworker-admin": "Simon Twizzel",
  "caseworker-admin-email": "Simon.Twizzel@tra.com",
  "caseworker-admin-permiss": "Administrator",
  "caseworker-head": "Philamonia Philamonia",
  "caseworker-head-email": "Philamonia.Philamonia@tra.com",
  "caseworker-head-permiss": "Head of investigation",

  "who-signin": "invest",
  
  //KEY USER: who-signin=org
  "party1": "Steel UK",
  "party-user1": "Jane Winder",
  "party-email1": "j.winder@steeluk.org",
  "party-user1-permissions": "Active",
  "party-role1": "Interested party",
  "party-type1": "Importer",
  "party-submission1": "Registration of interest",
  "party-status1": "Representative invite received",
  "party-address1": "345, The Shard, London",
  "party-postcode1": "SE1 9QU",
  "party-country1": "United Kingdom",
  "party-org-number1": "456794936", 
  "party-web1": "www.steeluk.org", 
  "party-vat1": null, 
  "party-eori1": "GB123456789",
  "party-duns1": null,

  //KEY USER: who-signin=org-invite
  "party-user11": "Lara Crist",
  "party-email11": "l.crist@steeluk.com",
  "party-user11-status": "Active",
  "party-user11-permission": "User",
  
  "party-user6": "Rodney Trigger",
  "party-email6": "r.trigger@steeluk.com",
  "party-user6-status": "Inactive",
  "party-user6-permission": "User",

  //KEY USER: who-signin=rep
  "representative1": "BlueSteel Partners",
  "rep-role1": "Representative",
  "rep-user1": "Bob Hoskins",
  "rep-email1": "bobhoskins@BlueSteelPartners.com",
  "rep-user1-permission": "Admin user",
  "rep-mobile1": "+44 7854329445",
  "rep-mobile-national1": "07854329445",
  "rep-submission1": "Registration of interest received",
  "rep-address1": "305 Fleet Street, London",
  "rep-postcode1": "EC4Y 1JU",
  "rep-country1": "United Kingdom",
  "rep-org-number1": "765238953", 
  "rep-web1": "www.BlueSteelPartners.com", 
  "rep-vat1": "223456789", 
  "rep-eori1": null,
  "rep-duns1": null,

  //KEY USER - who-signin=rep-invite
  "rep-role3": "Representative",
  "rep-user3": "Demi Morre",  
  "rep-email3": "demi.morre@BlueSteelPartners.com",
  "rep-user-role3": "(Invite sent)",

  //Duplicate 1
  "dup-party1": "Steeel",
  "dup-party-address1": "22 High Drive, Shanghai",
  "dup-party-postcode1": "345667",
  "dup-party-country1": "People's Republic of China",
  "dup-party-org-number1": "765238953", 
  "dup-party-web1": null, 
  "dup-party-vat1": "987654321", 
  "dup-party-eori1": "GB123456789",
  "dup-party-duns1": "450483782",

  "dup-user1": "Gusto McWee",  
  "dup-email1": "t.mcwee@steeel.com",
 
  //Duplicate 2
  "dup-party2": "Steel UK",
  "dup-party-address2": "24 The Street, Reading",
  "dup-party-postcode2": "RG1 1AF",
  "dup-party-country2": "United Kingdom",
  "dup-party-org-number2": "456794936",
  "dup-party-web2": "www.steeluk.org", 
  "dup-party-vat2": "123456789", 
  "dup-party-eori2": null,
  "dup-party-duns2": null,

  //Duplicate 3
  "dup-party3": "Bluesteel",
  "dup-party-address3": "243 Cupboard Lane, Leeds",
  "dup-party-postcode3": "LE1 1AF",
  "dup-party-country3": "United Kingdom",
  "dup-party-org-number3": "765238953",
  "dup-party-web3": "bluesteelpartners.com", 
  "dup-party-vat3": "223456789", 
  "dup-party-eori3": "GB205672212000",
  "dup-party-duns3": null,
  "dup-user3": "Jonty Bodwin",
  "dup-email3": "jonty.bodwin@BlueSteelPartners.com",

  //KEY USER - who-signin=rep-invite2
  "rep-role2": "Representative",
  "rep-user2": "Trevor McDoodle",  
  "rep-email2": "doodle@lawyersinc.com",
  "rep-user-role2": "(Invite sent)",
  "representative2": "Lawyers Inc",
  "party-submission2": "Representative invite",
  "submission-date2": "02 August 2022",

  //KEY USER: party that cannot be verified
  "party111": "Awesome Steel",
  "party-user111": "Itsa Steel",
  "party-email111": "itsa.steel@awesomesteel.cn",
  "party-address111": "243 Cupboard Lane, Leeds",
  "party-postcode111": "LE1 1AF",
  "party-country111": "People's Republic of China",
  "party-role111": "Interested party",
  "party-case-role111": "Unknown",
  "party-submission111": "Registration of interest",
  "party-comment111": "Unable to find concrete details about this organisation through any of the usual channels. They have not responded to any email requests.",

//CASE 1
  "case-ref1": "AD2224",
  "case-name1": "Steel plate from Russia",
  "case-typeabr1": "AD",
  "case-type1": "Anti-dumping",
  "commodity1": "Steel plate",
  "country1": "Russia",
  "created1": "12 May 2022",
  "initiated1": "13 May 2022",
  "register-date1": "21 Sept 2022",
  "updated1": "21 Oct 2022",
  "status1": "Initiation notices published",
  "next-task1": "Publish questionnaires",

  "applicant1": "Steelman Plc",
  "app-user1": "Vladimir Boffoff",
  "app-email1": "v.boffoff@Steelman.org",
  "app-submission1": "Questionnaire",
  "app-role1": "Applicant",

//CASE 2 - case closed
  "case-ref2": "TS0002",
  "case-name2": "Rainbow Trout from Republic of Turkey",
  "case-typeabr2": "TAS",
  "case-type2": "Transition anti-subsidy review",
  "commodity2": "Rainbow Trout",
  "applicant2": "Secretary of State",
  "created2": "01 Feb 2019",
  "initiated2": "04 Mar 2019",
  "register-date2": "30 June 19",
  "updated2": "30 July 2019",
  "country2": "Republic of Turkey",
  "status2": "	Final determination",
  "next-task2": "n/a",
  "next-notice2": "n/a",
  
  "party2": "Trouty Works",
  "party-case-role2": "Exporter",
  "party-role2": "Interested party",
  "party-user2": "Clay Akin",
  "party-email2": "Clay.Akin@trouty.works.co",


//CASE 3
  "case-ref3": "AS0404",
  "case-name3": "Farnets from Fabon",
  "case-typeabr3": "AS",
  "case-type3": "Anti-subsidy investigation",
  "commodity3": "Farnets",
  "applicant3": "Farnets First UK",
  "country3": "Federation of Fabon",
  "created3": "13 April 2022",
  "initiated3": "16 April 2022",
  "register-date3": "11 May 2022",
  "updated3": "11 June 2022",
  "status3": "Case initiated",
  "next-task3": "Issue questionnaires",
  "next-notice3": "21 June 2022",

  "party3": "Fabulous Farnets",
  "party-user3": "Odessa Seas",
  "party-email3": "o.seas@fabulous-farnets.fn",
  "party-role3": "Importer",
  "party-status5": "Questionnaires received",
  "party-country": "Russia",
  "submission3": "Questionnaire",

//CASE 4
  "case-ref4": "SI0005",
  "case-name4": "Barnets from Tabon",
  "case-typeabr4": "SI",
  "case-type4": "Safeguarding Invesitgation",
  "commodity4": "Barnets",
  "applicant4": "Tabon Holdings",
  "applicant-user4": "Terry Crotchet",
  "applicant-email4": "terry.crotchet@tabon-holdings.tb",
  "applicant-submission4": "Applicant",
  "applicant-role4": "Applicant",
  "created4": "	13 Nov 2020",
  "initiated4": "20 Nov 2021",
  "register-date4": "05 Dec 2021",
  "updated4": "05 Jan 2022",
  "country4": "United Kingdom",
  "status4": "Questionnaires issued",
  "next-task4": "Process questionnaires",
  "next-notice4": "02 Feb 2022",

  "party4": "Best Barnets Corp",
  "party-user4": "Mohawks Fringe",
  "party-email4": "m.fringe@best-barnets.uk",
  "party-case-role4": "Importer",
  "party-role4": "Interested party",
  "party-submission4": "Questionnaire",

  //Representative for this case is Demi Morre - see Case 3 for dets


//CASE 5
  "case-ref5": "AS3464",
  "case-name5": "Garnets from Gabon",
  "case-typeabr5": "AS",
  "case-type5": "Anti-subsidy investigation",
  "commodity5": "Garnet stones",
  "applicant5": "Secretary of State",
  "created5": "24 Dec 2020",
  "initiated5": "01 Jan 2021",
  "register-date5": "28 Feb 2023",
  "updated5": "28 Feb 2023",
  "country5": "Republic of Gabon",
  "status5": "Processing applications",
  "next-task5": "Initiation",
  "next-notice5": "01 June 2023",
  "case-role5": "Declined",

  "party5": "Glorious Gabon Plc",
  "party-user5": "George Spinter",
  "party-email5": "Spinter@glorgabon.gb",
  "party-status5": "Questionnaire received",
  "party-case-role5": "Importer",
  "party-role5": "Interested party",
  "party-submission5": "Representative invite",


//CASE 6
  "case-ref6": "SI9405",
  "case-name6": "Electric Bikes",
  "case-typeabr6": "SI",
  "case-type6": "Safeguarding Invesitgation",
  "commodity6": "Electric Bikes",
  "applicant6": "Bikers Ltd",
  "created6": "07 July 2021",
  "initiated6": "24 Jan 2022",
  "register-date6": "05 Feb 2022",
  "updated6": "05 Mar 2022",
  "country6": "People's Republic of China",
  "status6": "Post-verification analysis",
  "next-task6": "The Statement of Essential Facts",
  "next-notice6": "24 Sept 2022",

  //KEY USER: who-signin=org-invite
  "party-user66": "Jenny Jones",
  "party-email66": "thejones@bikers.com",


  "rep-status6": "Deficiency notice issued",
  "rep-user-role6": "User",
  "rep-role6": "Contributor",


  //"representative1": "BlueSteel Partners",
  "rep-user6": "Arnie Swarts",
  "rep-email6": "arnieswarts@BlueSteelPartners.com",

//CASE 7 - DRAFT yet to be made public
  "case-ref7": "AD12234",
  "case-name7": "Corn-on-cob from Alaska",
  "case-typeabr7": "AD",
  "case-type7": "Anti-dumping",
  "commodity7": "Corn-on-cob, sweetcorn",
  "applicant7": "Secretary of State",
  "created7": "07 Mar 2022",
  "initiated7": "n/a",
  "register-date7": "n/a",
  "updated7": "07 Mar 2021",
  "country7": "United States",
  "status7": "DRAFT",
  "next-task7": "n/a",
  "next-notice7": "n/a/",

  "rep-role7": "Representative",
  "rep-user7": "Joan de-Arc",  
  "rep-email7": "arc@biglawyersrus.com",
  "rep-user-role7": "(Invite sent)",
  "representative7": "Big Lawyers RUS",

//CASE 8
  "case-ref8": "AD0012",
  "case-name8": "Aluminium Extrusions from China",
  "case-typeabr8": "AD",
  "case-type8": "Anti-dumping",
  "commodity8": "	Aluminium Extrusions",
  "applicant8": "Secretary of State",
  "created8": "15 Jun 2021",
  "initiated8": "21 Sept 2021",
  "register-date8": "23 Oct 2022",
  "updated8": "23 Nov 2022",
  "country8": "People's Republic of China",
  "status8": "Final determination",
  "next-task8": "n/a",
  "next-notice8": "n/a/",

//CASE 9 
  "case-ref9": "AD0021",
  "case-name9": "Single-mode Optical Fibre Cables from China",
  "case-typeabr9": "AD",
  "case-type9": "Anti-dumping",
  "commodity9": "Optical fibre cables",
  "applicant9": "PRYSMIAN CABLES & SYSTEMS LIMITED",
  "created9": "07 March 2022",
  "initiated9": "26 Apr 2022",
  "register-date9": "12 May 2022",
  "updated9": "12 June 2022",
  "country9": "People's Republic of China",
  "status9": "General publication - Questionnaire",
  "next-task9": "n/a",
  "next-notice9": "n/a/",

//CASE 10 
  "case-ref10": "AS0020",
  "case-name10": "Ironing Boards from Turkey",
  "case-typeabr10": "AD",
  "case-type10": "Anti-subsidy",
  "commodity10": "Ironing Boards",
  "applicant10": "ANONYMOUS",
  "created10": "01 Apr 2022",
  "initiated10": "07 Apr 2022",
  "register-date10": "21 June 2022",
  "updated10": "21 July 2022",
  "country10": "Republic of Turkey",
  "status10": "	Questionnaire",
  "next-task10": "n/a",
  "next-notice10": "n/a/",


}