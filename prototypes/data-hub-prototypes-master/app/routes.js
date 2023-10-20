//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here



// The URL here needs to match the URL of the page that the user is on
// when they type in their email address
router.post('/baris/data-workspace/get-email/email-address', function (req, res) {

  notify.sendEmail(
    // this long string is the template ID, copy it from the template
    // page in GOV.UK Notify. It’s not a secret so it’s fine to put it
    // in your code.
    '0a5070d7-9e0e-473e-877b-75a555f9d671',
    // `emailAddress` here needs to match the name of the form field in
    // your HTML page
    req.body.emailAddress
  );

  // This is the URL the users will be redirected to once the email
  // has been sent
  res.redirect('/baris/data-workspace/get-email/confirmation-dataset');

});

// The URL here needs to match the URL of the page that the user is on
// when they type in their email address  topic-and-source-q4-source
router.post('/baris/data-workspace/get-email/unsubscribe-all', function (req, res) {

  notify.sendEmail(
    // this long string is the template ID, copy it from the template
    // page in GOV.UK Notify. It’s not a secret so it’s fine to put it
    // in your code.
    '30191623-5dbc-48b3-a445-272b3fb57a14',
    // `emailAddress` here needs to match the name of the form field in
    // your HTML page
    req.body.emailAddress
  );

  // This is the URL the users will be redirected to once the email
  // has been sent
  res.redirect('/baris/data-workspace/get-email/confirmation-unsubscribe-all');

});

// The URL here needs to match the URL of the page that the user is on
// when they type in their email address  topic-and-source-q4-source
router.post('/baris/data-workspace/get-email/unsubscribe-topic-and-source', function (req, res) {

  notify.sendEmail(
    // this long string is the template ID, copy it from the template
    // page in GOV.UK Notify. It’s not a secret so it’s fine to put it
    // in your code.
    '30191623-5dbc-48b3-a445-272b3fb57a14',
    // `emailAddress` here needs to match the name of the form field in
    // your HTML page
    req.body.emailAddress
  );

  // This is the URL the users will be redirected to once the email
  // has been sent
  res.redirect('/baris/data-workspace/get-email/confirmation-unsubscribe');

});

// The URL here needs to match the URL of the page that the user is on
// when they type in their email address  topic-and-source-q4-source
router.post('/baris/data-workspace/get-email/unsubscribe-dataset', function (req, res) {

  notify.sendEmail(
    // this long string is the template ID, copy it from the template
    // page in GOV.UK Notify. It’s not a secret so it’s fine to put it
    // in your code.
    '30191623-5dbc-48b3-a445-272b3fb57a14',
    // `emailAddress` here needs to match the name of the form field in
    // your HTML page
    req.body.emailAddress
  );

  // This is the URL the users will be redirected to once the email
  // has been sent
  res.redirect('/baris/data-workspace/get-email/confirmation-unsubscribe');

});

// The URL here needs to match the URL of the page that the user is on
// when they type in their email address  topic-and-source-q4-source
router.post('/baris/data-workspace/get-email/summary-list-topic-and-source', function (req, res) {

  notify.sendEmail(
    // this long string is the template ID, copy it from the template
    // page in GOV.UK Notify. It’s not a secret so it’s fine to put it
    // in your code.
    '6ce99c8f-3e31-4593-8dda-2efcbb5aaeb9',
    // `emailAddress` here needs to match the name of the form field in
    // your HTML page
    req.body.emailAddress
  );

  // This is the URL the users will be redirected to once the email
  // has been sent
  res.redirect('/baris/data-workspace/get-email/confirmation-topic-and-source');

});

// The URL here needs to match the URL of the page that the user is on
// when they type in their email address
router.post('/baris/data-workspace/get-email/summary-list-dataset', function (req, res) {

  notify.sendEmail(
    // this long string is the template ID, copy it from the template
    // page in GOV.UK Notify. It’s not a secret so it’s fine to put it
    // in your code.
    '9f2842d6-3b5c-4fc3-b87f-5f3be69747b2',
    // `emailAddress` here needs to match the name of the form field in
    // your HTML page
    req.body.emailAddress
  );

  // This is the URL the users will be redirected to once the email
  // has been sent
  res.redirect('/baris/data-workspace/get-email/confirmation-dataset');

});

// The URL here needs to match the URL of the page that the user is on
// when they type in their email address
router.post('/baris/data-workspace/get-email/update-summary-list-dataset', function (req, res) {

  notify.sendEmail(
    // this long string is the template ID, copy it from the template
    // page in GOV.UK Notify. It’s not a secret so it’s fine to put it
    // in your code.
    '9f2842d6-3b5c-4fc3-b87f-5f3be69747b2',
    // `emailAddress` here needs to match the name of the form field in
    // your HTML page
    req.body.emailAddress
  );

  // This is the URL the users will be redirected to once the email
  // has been sent
  res.redirect('/baris/data-workspace/get-email/update-confirmation-dataset');

});

// The URL here needs to match the URL of the page that the user is on
// when they type in their email address
router.post('/baris/data-workspace/get-email/update-summary-list-topic-and-source', function (req, res) {

  notify.sendEmail(
    // this long string is the template ID, copy it from the template
    // page in GOV.UK Notify. It’s not a secret so it’s fine to put it
    // in your code.
    '6ce99c8f-3e31-4593-8dda-2efcbb5aaeb9',
    // `emailAddress` here needs to match the name of the form field in
    // your HTML page
    req.body.emailAddress
  );

  // This is the URL the users will be redirected to once the email
  // has been sent
  res.redirect('/baris/data-workspace/get-email/update-confirmation-topic-and-source');

});

// The URL here needs to match the URL of the page that the user is on
// when they type in their email address
router.post('/baris/data-workspace/get-email/email-notification-data-is-updated', function (req, res) {

  notify.sendEmail(
    // this long string is the template ID, copy it from the template
    // page in GOV.UK Notify. It’s not a secret so it’s fine to put it
    // in your code.
    '7f96ac2d-6c9e-44b5-8282-437c79d323a8',
    // `emailAddress` here needs to match the name of the form field in
    // your HTML page
    req.body.emailAddress
  );

  // This is the URL the users will be redirected to once the email
  // has been sent
  res.redirect('/baris/data-workspace/get-email/confirmation-page-dataset');

});

// The URL here needs to match the URL of the page that the user is on
// when they type in their email address
router.post('/baris/data-workspace/get-email/email-notification-data-is-updated-weekly', function (req, res) {

  notify.sendEmail(
    // this long string is the template ID, copy it from the template
    // page in GOV.UK Notify. It’s not a secret so it’s fine to put it
    // in your code.
    'fcb6a0f3-4c7b-48b9-9497-385b593560fd',
    // `emailAddress` here needs to match the name of the form field in
    // your HTML page
    req.body.emailAddress
  );

  // This is the URL the users will be redirected to once the email
  // has been sent
  res.redirect('/baris/data-workspace/get-email/confirmation-page-dataset');

});

// The URL here needs to match the URL of the page that the user is on
// when they type in their email address
router.post('/baris/data-workspace/get-email/email-notification-structure-change-vague', function (req, res) {

  notify.sendEmail(
    // this long string is the template ID, copy it from the template
    // page in GOV.UK Notify. It’s not a secret so it’s fine to put it
    // in your code.
    '532a6997-d3bd-4f38-9ccf-ef6a4c11497f',
    // `emailAddress` here needs to match the name of the form field in
    // your HTML page
    req.body.emailAddress
  );

  // This is the URL the users will be redirected to once the email
  // has been sent
  res.redirect('/baris/data-workspace/get-email/confirmation-page-dataset');

});

// The URL here needs to match the URL of the page that the user is on
// when they type in their email address
router.post('/baris/data-workspace/get-email/email-notification-structure-change-vague-less', function (req, res) {

  notify.sendEmail(
    // this long string is the template ID, copy it from the template
    // page in GOV.UK Notify. It’s not a secret so it’s fine to put it
    // in your code.
    '942723c8-72ea-49ed-a870-96a62395a50b',
    // `emailAddress` here needs to match the name of the form field in
    // your HTML page
    req.body.emailAddress
  );

  // This is the URL the users will be redirected to once the email
  // has been sent
  res.redirect('/baris/data-workspace/get-email/confirmation-page-dataset');

});

// The URL here needs to match the URL of the page that the user is on
// when they type in their email address
router.post('/baris/data-workspace/get-email/email-notification-structure-change-explicit', function (req, res) {

  notify.sendEmail(
    // this long string is the template ID, copy it from the template
    // page in GOV.UK Notify. It’s not a secret so it’s fine to put it
    // in your code.
    '562321b9-6855-422b-a82a-d11c76f9b538',
    // `emailAddress` here needs to match the name of the form field in
    // your HTML page
    req.body.emailAddress
  );

  // This is the URL the users will be redirected to once the email
  // has been sent
  res.redirect('/baris/data-workspace/get-email/confirmation-page-dataset');

});

// The URL here needs to match the URL of the page that the user is on
// when they type in their email address
router.post('/baris/data-workspace/get-email/email-notification-topic-and-source-immediate', function (req, res) {

  notify.sendEmail(
    // this long string is the template ID, copy it from the template
    // page in GOV.UK Notify. It’s not a secret so it’s fine to put it
    // in your code.
    '06ddc49b-1d9d-40f3-aaa3-0b865e62dece',
    // `emailAddress` here needs to match the name of the form field in
    // your HTML page
    req.body.emailAddress
  );

  // This is the URL the users will be redirected to once the email
  // has been sent
  res.redirect('/baris/data-workspace/get-email/confirmation-page-topic-and-source');

});

// The URL here needs to match the URL of the page that the user is on
// when they type in their email address
router.post('/baris/data-workspace/get-email/email-notification-topic-and-source-weekly', function (req, res) {

  notify.sendEmail(
    // this long string is the template ID, copy it from the template
    // page in GOV.UK Notify. It’s not a secret so it’s fine to put it
    // in your code.
    '76fa09d4-4e27-42ee-8abc-8d57958c49e4',
    // `emailAddress` here needs to match the name of the form field in
    // your HTML page
    req.body.emailAddress
  );

  // This is the URL the users will be redirected to once the email
  // has been sent
  res.redirect('/baris/data-workspace/get-email/confirmation-page-topic-and-source');

});


// Routing the interaction form

router.post('/interaction-details', function (req, res) {

  var interactionType = req.session.data['interaction-type']
  var exportType = req.session.data['export-type']
  var otherType = req.session.data['other-type']

  if (interactionType == "export" && exportType == "standard interaction"){
    res.redirect('/current/data-hub/interaction-details/export-standard-interaction')
  } else if (interactionType == "export" && exportType == "service") {
    res.redirect('/current/data-hub/interaction-details/export-service-interaction')
  } else if (interactionType == "investment") {
    res.redirect('/current/data-hub/interaction-details/investment')
  } else if (interactionType == "trade agreement") {
    res.redirect('/current/data-hub/interaction-details/trade-agreement')
  } else if (interactionType == "other" && otherType == "standard interaction") {
    res.redirect('/current/data-hub/interaction-details/other-standard-interaction')
  } else if (interactionType == "other" && otherType == "service") {
    res.redirect('/current/data-hub/interaction-details/other-service-interaction')
  }

})

// Validation

router.post('/current/data-hub/interaction-summary', function (req, res) {

  var interactionContacts = req.session.data['interaction-contacts']
  var interactionService = req.session.data['interaction-service']
  var interactionSummary = req.session.data['interaction-summary']
  var interactionDay = req.session.data['interaction-date-day']
  var interactionMonth = req.session.data['interaction-date-month']
  var interactionYear = req.session.data['interaction-date-year']
  var interactionAdvisers = req.session.data['interaction-advisers']
  var interactionComms = req.session.data['interaction-comms']
  var interactionBusinessIntel = req.session.data['interaction-business-intel']
  var interactionPolicyType = req.session.data['interaction-policy-type']
  var interactionPolicyArea = req.session.data['interaction-policy-areas']
  var interactionBusinessIntelDetail = req.session.data['interaction-business-intel-detail']
  var interactionCountries = req.session.data['interaction-countries']
  var interactionCurrentCountries = req.session.data['interaction-current-country']
  var interactionFutureCountries = req.session.data['interaction-future-country']
  var interactionCountryNoInterest = req.session.data['interaction-countries-no-interest']
  var interactionExportBarrier = req.session.data['interaction-export-barrier']
  var interactionBarrierType = req.session.data['interaction-barrier-type']
  var interactionTradeAgreement = req.session.data['interaction-trade-agreement']
  var interactionTradeAgreementDetail = req.session.data['interaction-agreement-detail']

  var errorString = '?'
  var error = false

  // Service

  if (!interactionService) {
    if (error == true) {
      errorString = errorString + "&"
    }
    errorString = errorString + "service=error"
    error = true
  }

  // Summary

  if (!interactionSummary) {
    if (error == true) {
      errorString = errorString + "&"
    }
    errorString = errorString + "summary=error"
    error = true
  }

  // Date

  if (!interactionDay | !interactionMonth | !interactionYear) {
    if (error == true) {
      errorString = errorString + "&"
    }
    errorString = errorString + "date=error"
    error = true
  }

  // Contacts

  if (!interactionContacts) {
    if (error == true) {
      errorString = errorString + "&"
    }
    errorString = errorString + "contacts=error"
    error = true
  }

  // Advisers

  if (!interactionAdvisers) {
    if (error == true) {
      errorString = errorString + "&"
    }
    errorString = errorString + "advisers=error"
    error = true
  }

  // Communication channel

  if (!interactionComms) {
    if (error == true) {
      errorString = errorString + "&"
    }
    errorString = errorString + "comms=error"
    error = true
  }

  // Business intelligence

  if (!interactionBusinessIntel) {
    if (error == true) {
      errorString = errorString + "&"
    }
    errorString = errorString + "busintel=error"
    error = true
  }

  if (interactionBusinessIntel == "Yes") {
    if (!interactionPolicyType) {
      if (error == true) {
        errorString = errorString + "&"
      }
      errorString = errorString + "policytype=error"
      error = true
    }
    if (!interactionPolicyArea) {
      if (error == true) {
        errorString = errorString + "&"
      }
      errorString = errorString + "policyarea=error"
      error = true
    }
    if (!interactionBusinessIntelDetail) {
      if (error == true) {
        errorString = errorString + "&"
      }
      errorString = errorString + "busdetail=error"
      error = true
    }
  }

  // Trade agreement

  if (!interactionTradeAgreement) {
    if (error == true) {
      errorString = errorString + "&"
    }
    errorString = errorString + "tradeagr=error"
    error = true
  }

  if (interactionTradeAgreement == "Yes") {
    if (!interactionTradeAgreementDetail) {
      if (error == true) {
        errorString = errorString + "&"
      }
      errorString = errorString + "tradeagrdet=error"
      error = true
    }
  }

  // Country

  if (!interactionCountries) {
    if (error == true) {
      errorString = errorString + "&"
    }
    errorString = errorString + "country=error"
    error = true
  }

  if (interactionCountries == "Yes") {
    if (!interactionCurrentCountries && !interactionFutureCountries && !interactionCountryNoInterest) {
      if (error == true) {
        errorString = errorString + "&"
      }
      errorString = errorString + "countrydet=error"
      error = true
    }
  }

  // Trade barriers

  if (!interactionExportBarrier) {
    if (error == true) {
      errorString = errorString + "&"
    }
    errorString = errorString + "barrier=error"
    error = true
  }

  if (interactionExportBarrier == "Yes") {
    if (!interactionBarrierType) {
      if (error == true) {
        errorString = errorString + "&"
      }
      errorString = errorString + "barriertype=error"
      error = true
    }
  }

  if (error == true) {
  res.redirect('/current/data-hub/interaction-details/export-standard-interaction' + errorString)
} else {
  res.redirect('/current/data-hub/interaction-summary')
}

})
