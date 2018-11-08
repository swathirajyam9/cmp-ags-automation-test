$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("filter.feature");
formatter.feature({
  "line": 2,
  "name": "Filter",
  "description": "As an end user\nI want to apply filter on the results\nSo that i can view results of my filter choice",
  "id": "filter",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@filter"
    }
  ]
});
formatter.before({
  "duration": 24947998271,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Filter By Rating",
  "description": "",
  "id": "filter;filter-by-rating",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@regression"
    },
    {
      "line": 7,
      "name": "@FilterByRate"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I search for a product \"nike\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I apply filter \"4or more\" on search result",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should see all the filtered products \"review\" is \"4.0\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchStepDef.i_am_on_home_page()"
});
formatter.result({
  "duration": 739117542,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nike",
      "offset": 24
    }
  ],
  "location": "SearchStepDef.searchForAProduct(String)"
});
formatter.result({
  "duration": 7093181907,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4or more",
      "offset": 16
    }
  ],
  "location": "FilterStepDef.iApplyFilterOnSearchResult(String)"
});
formatter.result({
  "duration": 6215252146,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "review",
      "offset": 40
    },
    {
      "val": "4.0",
      "offset": 52
    }
  ],
  "location": "FilterStepDef.iShouldSeeAllProductsAreFiltered(String,String)"
});
formatter.result({
  "duration": 485624954,
  "status": "passed"
});
formatter.after({
  "duration": 86613,
  "status": "passed"
});
});