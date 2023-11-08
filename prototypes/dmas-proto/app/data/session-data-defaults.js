const sampleBarrierData = require('./barrier-information/dbt-barrier-sample-data');

// =======================
// Set some default values
// =======================

let myDefaults = {}

myDefaults.myNewVar = "My new var value"



// Default approvers list
defaultApprovers = [
  "Department for Environment Food & Rural Affairs",
  "HM Revenue & Customs",
  "Market Access Regional Coordinators",
  "BTR Regional Teams"
]


module.exports = {

  sampleBarrierData, //populates barrier information and public tabs
  myDefaults,
  defaultApprovers

}

