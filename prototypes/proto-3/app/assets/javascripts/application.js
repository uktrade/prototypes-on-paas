/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()

  let selectElements = $('#search-reg-org, .autocomplete-select')
  let placeholder = 'Enter a registered company name or number'

  selectElements.each(function (index) {
    let selectElement = $(this)
    if (selectElement.length) {
      // AccessibleAutocomplete orignal
      if (selectElement.attr('autocomplete-placeholder')) {
        placeholder = selectElement.attr('autocomplete-placeholder')
      }
      accessibleAutocomplete.enhanceSelectElement({
        defaultValue: '',
        placeholder: placeholder,
        selectElement: selectElement[0],
        onConfirm: function (data) {

          // First we check if the selectElement has a particular wrapper linked to it

          // Search for company in Companies House search - setting the div to show the option value
          let company_wrapper_id = 'selected_company_wrapper'
          if (this.selectElement.hasAttribute('data-selected-company-wrapper-id')) {
            company_wrapper_id = this.selectElement.getAttribute('data-selected-company-wrapper-id')
          }
          let company_wrapper_element = $('#' + company_wrapper_id)
          let selected_company_element = company_wrapper_element.find('div.govuk-inset-text')

          // Search for case/ commodity in Public files - setting the div to show the option value
          let commodity_wrapper_id = 'selected_commodity_wrapper'
          let commodity_wrapper_element = $('#' + commodity_wrapper_id)
          let selected_commodity_element = commodity_wrapper_element.find('a#selected_commodity')

          let commodity_li_id = "selected_commodity2"
          let commodity_li_id_element = $('#' + commodity_li_id)
          

          // Search for org in caseworker  - setting the div to show the option value
          let org_wrapper_id = 'selected_org_wrapper'
          let org_wrapper_element = $('#' + org_wrapper_id)
          let selected_org_element = org_wrapper_element.find('a#selected_org')

          // Search for users in caseworker - setting the div for showing the option value
          //let user_wrapper_id = 'selected_user_wrapper'
          //let user_wrapper_element = $('#' + user_wrapper_id)
          //let selected_user_element = user_wrapper_element.find("a#selected_user")

          if (data !== undefined) {
            // We only want to hide if the variable is defined
            if (data) {

              selected_company_element.html($('option:contains(' + data + ')').val())
              company_wrapper_element.show()

              selected_commodity_element.html($('option:contains(' + data + ')').val())
              commodity_wrapper_element.show()

              selected_org_element.html($('option:contains(' + data + ')').text())
              org_wrapper_element.show()

              //selected_user_element.html($('option:contains(' + data + ')').text())
              //user_wrapper_element.show()  

              //If the select has the ID data-go-to-url then go straight to a url when selecting an option
              if (selectElement.attr('data-go-to-url')) {
                var user_url = $('option:contains(' + data + ')').val()
                window.location = user_url
              }

              // Org search: Change the href of the <a> in the div for showing the option value
              if ($('#selected_org').length){
                document.getElementById('selected_org').href = ($('option:contains(' + data + ')').val())
              }

              // Search for case/ commodity in Public files: if the option #single is selected then hide a specific <li>, else show it
              if ($('#single:contains(' + data + ')').val()) {
                commodity_li_id_element.hide()
                
              }
                else {commodity_li_id_element.show()
              }


            } else {
              company_wrapper_element.hide()
              commodity_wrapper_element.hide()
              
              user_wrapper_element.hide()
              org_wrapper_element.hide()
            }
          }
        }
      })
    }

  })

  // https://www.w3schools.com/howto/howto_js_filter_elements.asp

  filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

})
