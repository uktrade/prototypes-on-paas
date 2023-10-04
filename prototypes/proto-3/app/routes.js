//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here


// Headers
// Setting a few specfic header to not use logged in user
router.get('/public-site/public-cases', function (req, res) {
    if (req.session.data['signin'] == null) {
        // store it in session
        req.session.data['signin'] = "no"
    }
    res.render('public-site/public-cases')
})

// Headers
// Setting a few spoecfic header to not use logged in user
router.get('/public-site/start', function (req, res) {
    if (req.session.data['signin'] == null) {
        // store it in session
        req.session.data['signin'] = "no"
    }
    res.render('public-site/start')
})

// Pubic
// Pubic
// Pubic
// Pubic
// Pubic
// Pubic - Create account


// Run this code on createaccount-existing-account: - existing org account or not?

router.post('/createaccount-existing-account-route', function (req, res) {

    // Make a variable and give it the value from 'createaccount-uk-reg'
    var createaccountExistingAccount = req.session.data['createaccount-existing-account']

    // Check whether the variable matches a condition
    if (createaccountExistingAccount == "Yes") {
        // Send user to next page
        res.redirect('/public-site/create-account/createaccount-existing-account-yes')
    } else {
        // Send user to ineligible page
        res.redirect('/public-site/create-account/createaccount-your-account?reg-type=create&user-permissions=Admin user')
    }
})

// Run this code on createaccount-uk-org: - is org UK reg?
router.post('/createaccount-uk-reg-route', function (req, res) {

    // Make a variable and give it the value from 'createaccount-uk-reg'
    var createaccountUKReg = req.session.data['createaccount-uk-reg']

    // Check whether the variable matches a condition
    if (createaccountUKReg == "yes") {
        // Send user to next page
        res.redirect('/public-site/create-account/createaccount-your-org-uk-search')
    } else {
        // Send user to ineligible page
        res.redirect('/public-site/create-account/createaccount-your-org')
    }
})

// Run this code during createaccount-your-org / uk - is org address the same as contact address?
router.post('/createaccount-contact-address-route', function (req, res) {

    // Make a variable and give it the value from 'createaccount-contact-address'
    var createaccountContactAdd = req.session.data['createaccount-contact-address']

    // Check whether the variable matches a condition
    if (createaccountContactAdd == "no") {
        // Send user to next page
        res.redirect('/public-site/createaccount-your-office-dets')
    } else {
        // Send user to ineligible page
        res.redirect('/public-site/createaccount-your-org-dets')
    }
})

// Register interest - public
// Register interest - public


// Run this code on reginterest-which-org: what org is registering interest?
router.post('/reginterest-which-org-route', function (req, res) {

    // Make a variable and give it the value from 'reginterest-what-org'
    var reginterestWho = req.session.data['reginterest-what-org']

    // Check whether the variable matches a condition
    if (reginterestWho == "my-org") {
        // Send user to next page
        res.redirect('/public-site/reg-interest/reginterest-tasks?which-org-task=complete&reginterest-task=Draft')
    }

    // Check whether the variable matches a condition
    if (reginterestWho == "existing-org") {
        // Send user to next page
        res.redirect('/public-site/reg-interest/reginterest-which-rep')
    }

    // Check whether the variable matches a condition
    if (reginterestWho == "new-org") {
        // Send user to next page
        res.redirect('/public-site/reg-interest/reginterest-contact')
    }
})

router.post('/reginterest-contact-route', function (req, res) {
    var reginterestUKReg = req.session.data['reginterest-which-rep']
    if (reginterestUKReg == "New Client") {
        req.session.data['reginterest-what-org'] = "new-org"
    }
    res.redirect('/public-site/reg-interest/reginterest-contact')

})

// Run this code on reginterest-uk-org: - is org UK reg?
router.post('/reginterest-uk-reg-route', function (req, res) {

    // Make a variable and give it the value from 'reginterest-uk-org'
    var reginterestUKReg = req.session.data['reginterest-uk-reg']

    // Check whether the variable matches a condition
    if (reginterestUKReg == "yes") {
        // Send user to next page
        res.redirect('/public-site/reg-interest/reginterest-the-org-uk-search')
    } else {
        // Send user to no page
        res.redirect('/public-site/reg-interest/reginterest-the-org')
    }
})


// Run this code on reginterest-loa-existing - which option is chosen:
router.post('/reginterest-tasks-contact-route', function (req, res) {

    // Make a variable and give it the value from 'reginterest-valid-primary'
    var reginterestChooseContact = req.session.data['reginterest-choose-contact']

    // Check whether the variable matches a condition
    if (reginterestChooseContact == "Simon Williams - s.williams@steeluk.org") {
        // Send user to next page
        res.redirect('/public-site/reg-interest/reginterest-tasks?which-org-task=complete')
    }
    if (reginterestChooseContact == "Robbie Cortina - ortina@steeluk.org") {
        // Send user to next page
        res.redirect('/public-site/reg-interest/reginterest-tasks?which-org-task=complete')
    }
    if (reginterestChooseContact == "Tina Fray - tina.fray@steeluk.org") {
        // Send user to next page
        res.redirect('/public-site/reg-interest/reginterest-tasks?which-org-task=complete')
    }
    if (reginterestChooseContact == "new-contact") {
        // Send user to next page
        res.redirect('/public-site/reg-interest/reginterest-contact')
    }
})


// Register interest
// Run this code during reginterest-upload
router.get('/public-site/reg-interest/reginterest-upload', function (req, res) {

    if (req.session.data['upload2-started'] == "yes") {
        // store it in session
        req.session.data['upload2-complete'] = "yes"
        // send it to the current page
        res.locals.data['upload2-complete'] = "yes"
    }

    if (req.session.data['upload3-started'] == "yes") {
        // store it in session
        req.session.data['upload3-complete'] = "yes"
        // send it to the current page
        res.locals.data['upload3-complete'] = "yes"
    }

    if (req.session.data['upload4-started'] == "yes") {
        // store it in session
        req.session.data['upload4-complete'] = "yes"
        // send it to the current page
        res.locals.data['upload4-complete'] = "yes"
    }

    res.render('public-site/reg-interest/reginterest-upload')

})


// Invite Rep to account

// Run this code on invite-user-type - which option is chosen:
router.post('/invite-type-route', function (req, res) {

    // Make a variable and give it the value from 'invite-user-type'
    var regType = req.session.data['reg-type']

    // Check whether the variable matches a condition
    if (regType == "invite-own-org") {
        // Send user to next page
        res.redirect('/public-site/manage-users/invite/invite-user-details')
    }
    if (regType == "invite-rep") {
        // Send user to next page
        res.redirect('/public-site/manage-users/tasklist/invite-rep-tasks?tasklist-type=invite-rep')
    }
})

// Run this code on invite-user-type - which option is chosen:
router.post('/invite-type-no-case-route', function (req, res) {

    // Make a variable and give it the value from 'invite-user-type'
    var regType = req.session.data['reg-type']

    // Check whether the variable matches a condition
    if (regType == "invite-own-org") {
        // Send user to next page
        res.redirect('/public-site/manage-users/invite/invite-user-details')
    }
    if (regType == "invite-rep") {
        // Send user to next page
        res.redirect('/public-site/manage-users/tasklist/invite-case-none')
    }
})

// Run this code on invite-rep-which-org - which option is chosen:
router.post('/invite-contact-details-route', function (req, res) {

    // Make a variable and give it the value from 'invite-user-type'
    var inviteRepWhatOrg = req.session.data['invite-rep-what-org']

    // Check whether the variable matches a condition
    if (inviteRepWhatOrg == "existing-org") {
        // Send user to next page
        res.redirect('/public-site/manage-users/tasklist/invite-rep-contact')
    }
    if (inviteRepWhatOrg == "new-org") {
        // Send user to next page
        res.redirect('/public-site/manage-users/tasklist/invite-rep-contact-details')
    }
})

// Caseworker
// Caseworker
// Caseworker
// Caseworker
// Caseworker

// Headers
// Setting specfic headers to not use logged in user
router.get('/caseworker/signin', function (req, res) {
    if (req.session.data['signin'] == null) {
        // store it in session
        req.session.data['signin'] = "no"
    }
    res.render('caseworker/signin')
})

// Run this code on reginterest-interested-party - which option is chosen:
router.post('/reginterest-interested-party-route', function (req, res) {

    // Make a variable and give it the value from 'reginterest-valid-primary'
    var reginterestValidPrimary = req.session.data['reginterest-valid-primary']

    // Check whether the variable matches a condition
    if (reginterestValidPrimary == "Verified") {
        // Send user to next page
        res.redirect('/caseworker/reg-interest/reginterest-party-type')
    }
    if (reginterestValidPrimary == "Unverified") {
        // Send user to next page
        res.redirect('/caseworker/reg-interest/reginterest-unverified?int-party-task=complete&party-type=int')
    }
})

// Run this code on reginterest-representative-party - which option is chosen:
router.post('/reginterest-representative-party-route', function (req, res) {

    // Make a variable and give it the value from 'reginterest-valid-primary'
    var reginterestValidRepresentative = req.session.data['reginterest-valid-representative']

    // Check whether the variable matches a condition
    if (reginterestValidRepresentative == "Verified") {
        // Send user to next page
        res.redirect('/caseworker/reg-interest/reginterest-tasks?rep-party-task=complete')
    }
    if (reginterestValidRepresentative == "Unverified") {
        // Send user to next page
        res.redirect('/caseworker/reg-interest/reginterest-unverified?rep-party-task=complete&party-type=rep')
    }
})

// Run this code on reginterest-confirm - which option is chosen:
router.post('/reginterest-accept-on-case-route', function (req, res) {

    // Make a variable and give it the value from 'reginterest-valid-party'
    var reginterestAccept = req.session.data['reginterest-accecpt-on-case']

    // Check whether the variable matches a condition
    if (reginterestAccept == "accept") {
        // Send user to next page
        res.redirect('/caseworker/reg-interest/reginterest-complete?accept-on-case-complete=yes&accept-on-case-result=accept')
    }
    if (reginterestAccept == "decline") {
        // Send user to next page
        res.redirect('/caseworker/reg-interest/reginterest-complete?accept-on-case-complete=yes&accept-on-case-result=reject')
    }
})

// Run this code on reginterest-loa-existing - which option is chosen:
router.post('/reginterest-loa-existing-route', function (req, res) {

    // Make a variable and give it the value from 'reginterest-valid-primary'
    var reginterestAuthChooseContact = req.session.data['reginterest-auth-choose-contact']

    // Check whether the variable matches a condition
    if (reginterestAuthChooseContact == "Jane Winder") {
        // Send user to next page
        res.redirect('/caseworker/reg-interest/reginterest-tasks?loa-task=complete')
    }
    if (reginterestAuthChooseContact == "new-contact") {
        // Send user to next page
        res.redirect('/caseworker/reg-interest/reginterest-loa-new?loa-task=complete')
    }
})

//Delete?
// Run this code on reginterest-representative-party - which option is chosen:
router.post('/verify-rep-invite-representative-party-route', function (req, res) {

    // Make a variable and give it the value from 'reginterest-valid-primary'
    var reginterestValidRepresentative = req.session.data['reginterest-valid-representative']

    // Check whether the variable matches a condition
    if (reginterestValidRepresentative == "verified") {
        // Send user to next page
        res.redirect('/caseworker/cases/invite/verify-rep-invite/verify-complete?accept-on-case-result=accept')
    }
    if (reginterestValidRepresentative == "unverified") {
        // Send user to next page
        res.redirect('/caseworker/cases/invite/verify-rep-invite/verify-unverified?accept-on-case-result=decline')
    }
})

// Run this code on reginterest-merge-is-dup - which option is chosen:
router.post('/reginterest-merge-rep1-route', function (req, res) {

    // Make a variable and give it the value from 'reginterest-matching-orgs-question'
    var reginterestmatchingorgsquestion = req.session.data['reginterest-matching-orgs-question']

    // Check whether the variable matches a condition
    if (reginterestmatchingorgsquestion == "yes") {
        // Send user to next page
        res.redirect('/caseworker/reg-interest/reginterest-merge-rep-choose-table-radio?merge-rep-task=In progress')
    }
    if (reginterestmatchingorgsquestion == "no") {
        // Send user to next page
        res.redirect('/caseworker/reg-interest/reginterest-merge-rep-not-duplicate?merge-rep-task=In progress')
    }
})

// Run this code on reginterest-merge-is-dup - which option is chosen:
router.post('/reginterest-merge-rep2-route', function (req, res) {

    // Make a variable and give it the value from 'reginterest-matching-orgs-question'
    var reginterestmatchingorgsquestion = req.session.data['reginterest-matching-orgs-question']

    // Check whether the variable matches a condition
    if (reginterestmatchingorgsquestion == "yes") {
        // Send user to next page
        res.redirect('/caseworker/reg-interest/reginterest-merge-rep-choose-table-radio?merge-rep-task=In progress')
    }
    if (reginterestmatchingorgsquestion == "no") {
        // Send user to next page
        res.redirect('/caseworker/reg-interest/reginterest-merge-rep-not-duplicate?merge-rep-task=In progress')
    }
})

// Run this code on reginterest-merge-is-dup - which option is chosen:
router.post('/reginterest-merge-rep3-route', function (req, res) {

    // Make a variable and give it the value from 'reginterest-matching-orgs-question'
    var reginterestmatchingorgsquestion = req.session.data['reginterest-matching-orgs-question']

    // Check whether the variable matches a condition
    if (reginterestmatchingorgsquestion == "yes") {
        // Send user to next page
        res.redirect('/caseworker/reg-interest/reginterest-merge-rep-choose-table-radio?merge-rep-task=In progress')
    }
    if (reginterestmatchingorgsquestion == "no") {
        // Send user to next page
        res.redirect('/caseworker/reg-interest/reginterest-merge-rep-not-duplicate?merge-rep-task=In progress')
    }
})

// Run this code on reginterest-merge-is-dup - which option is chosen:
router.post('/reginterest-merge-int-route', function (req, res) {

    // Make a variable and give it the value from 'reginterest-matching-orgs-question'
    var reginterestmatchingorgsquestion = req.session.data['reginterest-matching-orgs-question']

    // Check whether the variable matches a condition
    if (reginterestmatchingorgsquestion == "yes") {
        // Send user to next page
        res.redirect('/caseworker/reg-interest/reginterest-merge-int-choose-table-radio?merge-int-task=In progress')
    }
    if (reginterestmatchingorgsquestion == "no") {
        // Send user to next page
        res.redirect('/caseworker/reg-interest/reginterest-merge-int-not-duplicate?merge-int-task=In progress')
    }
})

// Run this code on feedback-task
router.post('/feedback-task-route', function (req, res) {

    // Make a variable and give it the value from 'createaccount-uk-reg'
    var taskrating = req.session.data['task-rating']

    // Check whether the variable matches a condition
    if (taskrating == "5") {
        // Send user to next page
        res.redirect('/public-site/feedback-complete')
    } else {
        // Send user to ineligible page
        res.redirect('/public-site/feedback')
    }
})

