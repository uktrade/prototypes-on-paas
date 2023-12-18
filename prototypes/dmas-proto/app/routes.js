//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

const tags = ["Wales Priority", "Brexit", "NI Protocol", "Asia Pacific Pilot", "Programme Fund", "International Standards", "Clean Growth"]
const status = ["Open", "Resolved: In Part", "Resolved: In Full", "Dormant"]
const countries = ["Antigua and Barbuda", "Belgium", "China", "Guatemala", "Sudan", "United Kingdom", "United States of America", "Zimbabwe"]
const sectors = ["Aerospace", "Agriculture", "Automotive", "Chemicals", "Construction", "Consumer Goods", "Creative Industries", "Defence", "Education", "Energy", "Engineering", "Financial Services", "Food and Drink", "Healthcare", "Life Sciences", "Mining", "Oil and Gas", "Professional Services", "Rail", "Renewable Energy", "Retail", "Space", "Technology", "Textiles", "Transport", "Water"]

const words = [
    "people",
    "history",
    "way",
    "art",
    "world",
    "information",
    "map",
    "two",
    "family",
    "government",
    "health",
    "system",
    "computer",
    "meat",
    "year",
    "thanks",
    "music",
    "person",
    "reading",
    "method",
    "data",
    "food",
    "understanding",
    "theory",
    "law",
    "bird",
    "literature",
    "problem",
    "software",
    "control",
    "knowledge",
    "power",
    "ability",
    "economics",
    "love",
    "internet",
    "television",
    "science",
    "library",
    "nature",
    "fact",
    "product",
    "idea",
    "temperature",
    "investment",
    "area",
    "society",
    "activity",
    "story",
    "industry",
    "media",
    "thing",
    "oven",
    "community",
    "definition",
    "safety",
    "quality",
    "development",
    "language",
    "management",
    "player",
    "variety",
    "video",
    "week",
    "security",
    "country",
    "exam",
    "movie",
    "organization",
    "equipment",
    "physics",
    "analysis",
    "policy",
    "series",
    "thought",
    "basis",
    "boyfriend",
    "direction",
    "strategy",
    "technology",
    "army",
    "camera",
    "freedom",
    "paper",
    "environment",
    "child",
    "instance",
    "month",
    "truth",
    "marketing",
    "university",
    "writing",
    "article",
    "department",
    "difference",
    "goal",
    "news",
    "audience",
    "fishing",
    "growth",
    "income",
    "marriage",
    "user",
    "combination",
    "failure",
    "meaning",
    "medicine",
    "philosophy",
    "teacher",
    "communication",
    "night",
    "chemistry",
    "disease",
    "disk",
    "energy",
    "nation",
    "road",
    "role",
    "soup",
    "advertising",
    "location",
    "success",
    "addition",
    "apartment",
    "education",
    "math",
    "moment",
    "painting",
    "politics",
    "attention",
    "decision",
    "event",
    "property",
    "shopping",
    "student",
    "wood",
    "competition",
    "distribution",
    "entertainment",
    "office",
    "population",
    "president",
    "unit",
    "category",
    "cigarette",
    "context",
    "introduction",
    "opportunity",
    "performance",
    "driver",
    "flight",
    "length",
    "magazine",
    "newspaper",
    "relationship",
    "teaching",
    "cell",
    "dealer",
    "finding",
    "lake",
    "member",
    "message",
    "phone",
    "scene",
    "appearance",
    "association",
    "concept",
    "customer",
    "death",
    "discussion",
    "housing",
    "inflation",
    "insurance",
    "mood",
    "woman",
    "advice",
    "blood",
    "effort",
    "expression",
    "importance",
    "opinion",
    "payment",
    "reality",
    "responsibility",
    "situation",
    "skill",
    "statement",
    "wealth",
    "application",
    "city",
    "county",
    "depth",
    "estate",
    "foundation",
    "grandmother",
    "heart",
    "perspective",
    "photo",
    "recipe",
    "studio",
    "topic",
    "collection",
    "depression",
    "imagination",
    "passion",
    "percentage",
    "resource",
    "setting",
    "ad",
    "agency",
    "college",
    "connection",
    "criticism",
    "debt",
    "description",
    "memory",
    "patience",
    "secretary",
    "solution",
    "administration",
    "aspect",
    "attitude",
    "director",
    "personality",
    "psychology",
    "recommendation",
    "response",
    "selection",
    "storage",
    "version",
    "alcohol",
    "argument",
    "complaint",
    "contract",
    "emphasis",
    "highway",
    "loss",
    "membership",
    "possession",
    "preparation",
    "steak",
    "union",
    "agreement",
    "cancer",
    "currency",
    "employment",
    "engineering",
    "entry",
    "interaction",
    "mixture",
    "preference",
    "region",
    "republic",
    "tradition",
    "virus",
    "actor",
    "classroom",
    "delivery",
    "device",
    "difficulty",
    "drama",
    "election",
    "engine",
    "football",
    "guidance",
    "hotel",
    "owner",
    "priority",
    "protection",
    "suggestion",
    "tension",
    "variation",
    "anxiety",
    "atmosphere",
    "awareness",
    "bath",
    "bread",
    "candidate",
    "climate",
    "comparison",
    "confusion",
    "construction",
    "elevator",
    "emotion",
    "employee",
    "employer",
    "guest",
    "height",
    "leadership",
    "mall",
    "manager",
    "operation",
    "recording",
    "sample",
    "transportation",
    "charity",
    "cousin",
    "disaster",
    "editor",
    "efficiency",
    "excitement",
    "extent",
    "feedback",
    "guitar",
    "homework",
    "leader",
    "mom",
    "outcome",
    "permission",
    "presentation",
    "promotion",
    "reflection",
    "refrigerator",
    "resolution",
    "revenue",
    "session",
    "singer",
    "tennis",
    "basket",
    "bonus",
    "cabinet",
    "childhood",
    "church",
    "clothes",
    "coffee",
    "dinner",
    "drawing",
    "hair",
    "hearing",
    "initiative",
    "judgment",
    "lab",
    "measurement",
    "mode",
    "mud",
    "orange",
    "poetry",
    "police",
    "possibility",
    "procedure",
    "queen",
    "ratio",
    "relation",
    "restaurant",
    "satisfaction",
    "sector",
    "signature",
    "significance",
    "song",
    "tooth",
    "town",
    "vehicle",
    "volume",
    "wife",
    "accident",
    "airport",
    "appointment",
    "arrival",
    "assumption",
    "baseball",
    "chapter",
    "committee",
    "conversation",
    "database",
    "enthusiasm",
    "error",
    "explanation",
    "farmer",
    "gate",
    "girl",
    "hall",
    "historian",
    "hospital",
    "injury",
    "instruction",
    "maintenance",
    "manufacturer",
    "meal",
    "perception",
    "pie",
    "poem",
    "presence",
    "proposal",
    "reception",
    "replacement",
    "revolution",
    "river",
    "son",
    "speech",
    "tea",
    "village",
    "warning",
    "winner",
    "worker",
    "writer",
    "assistance",
    "breath",
    "buyer",
    "chest",
    "chocolate",
    "conclusion",
    "contribution",
    "cookie",
    "courage",
    "dad",
    "desk",
    "drawer",
    "establishment",
    "examination",
    "garbage",
    "grocery",
    "honey",
    "impression",
    "improvement",
    "independence",
    "insect",
    "inspection",
    "inspector",
    "king",
    "ladder",
    "menu",
    "penalty",
    "piano",
    "potato",
    "profession",
    "professor",
    "quantity",
    "reaction",
    "requirement",
    "salad",
    "sister",
    "supermarket",
    "tongue",
    "weakness",
    "wedding",
    "affair",
    "ambition",
    "analyst",
    "apple",
    "assignment",
    "assistant",
    "bathroom",
    "bedroom",
    "beer",
    "birthday",
    "celebration",
    "championship",
    "cheek",
    "client",
    "consequence",
    "departure",
    "diamond",
    "dirt",
    "ear",
    "fortune",
    "friendship",
    "funeral",
    "gene",
    "girlfriend",
    "hat",
    "indication",
    "intention",
    "lady",
    "midnight",
    "negotiation",
    "obligation",
    "passenger",
    "pizza",
    "platform",
    "poet",
    "pollution",
    "recognition",
    "reputation",
    "shirt",
    "sir",
    "speaker",
    "stranger",
    "surgery",
    "sympathy",
    "tale",
    "throat",
    "trainer",
    "uncle",
    "youth",
    "time",
    "work",
    "film",
    "water",
    "money",
    "example",
    "while",
    "business",
    "study",
    "game",
    "life",
    "form",
    "air",
    "day",
    "place",
    "number",
    "part",
    "field",
    "fish",
    "back",
    "process",
    "heat",
    "hand",
    "experience",
    "job",
    "book",
    "end",
    "point",
    "type",
    "home",
    "economy",
    "value",
    "body",
    "market",
    "guide",
    "interest",
    "state",
    "radio",
    "course",
    "company",
    "price",
    "size",
    "card",
    "list",
    "mind",
    "trade",
    "line",
    "care",
    "group",
    "risk",
    "word"
  ]


function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

function format_date(date){
    let year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
    let month = new Intl.DateTimeFormat('en', { month: 'long' }).format(date);
    let day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);

    return `${day} ${month} ${year}`
}

function generate_list_of_barriers(amount) {
    let no_of_barriers = amount;
    var barriers = []
    for (let i = 0; i < no_of_barriers; i++) {

        let this_tags = []
        let no_of_tags = Math.floor(Math.random() * 3) + 1
        for (let j = 0; j < no_of_tags; j++){
            this_tags.push(tags[Math.floor(Math.random() * tags.length)])
        }

        barriers.push({
            name: words[Math.floor(Math.random() * words.length)] + ' ' + words[Math.floor(Math.random() * words.length)],
            id: makeid(4),
            date_reported: format_date(new Date(new Date() - Math.random() * (1e+12))),
            last_updated: format_date(new Date(new Date() - Math.random() * (1e+12))),
            location: countries[Math.floor(Math.random() * countries.length)],
            status: status[Math.floor(Math.random() * status.length)],
            tags: this_tags,
            sector : sectors[Math.floor(Math.random() * sectors.length)],
        })
    }
    return barriers
}

// Add your routes here
// Section 7 concept routing based on HC codes known or not
router.post('/hs-codes-known-answer', function(request, response) {

    var knowHsCodes = request.session.data['do-you-know-the-hs-codes']
    if (knowHsCodes == "yes"){
        response.redirect("report-a-barrier/mve-updates/section-7v2-hscodes")
    } else {
        response.redirect("report-a-barrier/mve-updates/section-7v2-no-code-route")
    }
})

// ------------------------------
// MVE BOLT-ON ROUTING - OPTION 4
// ------------------------------

// Route to section 9 page if allowed = 'yes' else end MVE journey and goto check answers
router.post('/barrier-mve-pv-allowed', function(request, response) {

    var barrierState = request.session.data['barrier-public-view-status']
    if (barrierState == "Allowed"){
        response.redirect("current/publishing-v3/mve-bolt-on/option-4/section-9")
    } else {
        response.redirect("current/publishing-v3/mve-bolt-on/option-4/check-answers")
    }
})

// Route to section 10 page if will complete title and summary = 'yes' else end MVE journey and goto check answers
router.post('/barrier-mve-pv-complete-title-summary', function(request, response) {

    var titleSummaryDecision = request.session.data['complete-title-summary']
    if (titleSummaryDecision == "Yes"){
        response.redirect("current/publishing-v3/mve-bolt-on/option-4/section-10")
    } else {
        response.redirect("current/publishing-v3/mve-bolt-on/option-4/check-answers")
    }
})

// Route to section 10 page if allowed = 'yes' else end MVE journey and goto check answers
router.post('/barrier-mve-pv-allowed', function(request, response) {

    var barrierState = request.session.data['barrier-public-view-status']
    if (barrierState == "Allowed"){
        response.redirect("current/publishing-v3/mve-bolt-on/option-4/section-9")
    } else {
        response.redirect("current/publishing-v3/mve-bolt-on/option-4/check-answers")
    }
})

// ------------------------------
// MVE BOLT-ON ROUTING - OPTION 1
// ------------------------------

// PV status page - Routes if first add / editing from pv tab / allowed status handling
router.post('/barrier-status-submit', function(request, response) {

    var actionState = request.session.data['action-state']
    var pvAllowedState = request.session.data['barrier-public-view-status']
    if (actionState == "edit-pv-status"){
        response.redirect("current/publishing-v3/mve-bolt-on/option-1/public-view-tab-temp")
    } else if (pvAllowedState == "allowed"){
        response.redirect("current/publishing-v3/mve-bolt-on/option-1/barrier-title")
    } else {
        response.redirect("current/publishing-v3/mve-bolt-on/option-1/public-view-tab-temp")
    }
})

// PV title page - Routes if first add / editing from pv tab
router.post('/barrier-title-submit', function(request, response) {

    var actionState = request.session.data['action-state']
    if (actionState == "edit-pv-title"){
        response.redirect("current/publishing-v3/mve-bolt-on/option-1/public-view-tab-temp")
    } else {
        response.redirect("current/publishing-v3/mve-bolt-on/option-1/barrier-summary")
    }
})

// PV summary page - Routes if first add / editing from pv tab
router.post('/barrier-summary-submit', function(request, response) {

    var actionState = request.session.data['action-state']
    if (actionState == "edit-pv-summary"){
        response.redirect("current/publishing-v3/mve-bolt-on/option-1/public-view-tab-temp")
    } else {
        // Same for now unless adding check answers to these steps
        response.redirect("current/publishing-v3/mve-bolt-on/option-1/public-view-tab-temp")
    }
})

router.get('/barrier-search/search', function(request, response) {
    let normal_amount = 50

    for (query_param in request.query){
        if (request.query[query_param]){
            if (Array.isArray(request.query[query_param])){
                normal_amount = normal_amount - request.query[query_param].length
            }

            // There is another filter, reduce the number of results
            normal_amount = normal_amount - 3
        }
    }

    let random_barriers = generate_list_of_barriers(normal_amount)
    let barrier_count = random_barriers.length
    return response.render('barrier-search/search.html', {
        barriers: random_barriers,
        barrier_count: barrier_count
    })
})
