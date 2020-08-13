Feature: Test Login

  Scenario Outline: Login sucsess
    Given User navigate to page "https://anotepad.com/login"
    When User input "<Username>" and "<Password>"
    Then User navigate to main page success

    Examples: 
      | Username                  | Password |
      | thanhhai.ng.333@gmail.com |   123456 |
      | blank                     | blank    |

  Scenario Outline: Login invalid
    Given User navigate to page "https://anotepad.com/login"
    When User input "<Username>" and "<Password>"
    Then User stay in login page, not login success

    Examples: 
      | type                       | Username                  | Password |
      | pw blank, invalid username | aaa                       | blank    |
      | username blank             | blank                     | aaa      |
      | pw blank, valid username   | aaa@gmail.com             | blank    |
      | valid username, wrong pass | thanhhai.ng.333@gmail.com |    11111 |

  Scenario: Create and login with new account
    Given User navigate to page "https://anotepad.com/login"
    And User navigate to create account page
    And User create new account with generate username and default PW
      | Password |
      |    12345 |
    When User navigate back to login page
    And Login with new create account
    Then User navigate to main page success
