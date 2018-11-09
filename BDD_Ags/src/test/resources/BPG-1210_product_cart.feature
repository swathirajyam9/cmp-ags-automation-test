Feature: Cart fucntion
  As a user
  I want to check if the cart quantity is updated as soon as I add or delete product from the list
  So that total of the cost seen below reflects right invoiced amount and qty

  Scenario: Add 1 product to empty cart
    Given as a user I
    When  I added
    Then I should see the product count on cart icon