@createDoctorFeature
Feature: create-doctor

    @getPageTitle
    Scenario: Doctors page should have "Appointment Planner - Syncfusion Angular Components Showcase App" title
        When I open "Doctors" page
        Then Page title should "be equal to" "Appointment Planner - Syncfusion Angular Components Showcase App"

    @addDoctor
    Scenario Outline: It should be possible to create a new doctor
        When I click "add" new doctor button from list header
        # And I wait 1 seconds
        And I enter <name> to "name" field
        # And I wait 1 seconds
        And I enter <phone> to "phone" field
        And I enter <email> to "email" field
        And I enter <education> to "education" field
        And I click <button> button in modal window
        Then <id> card name should "be equal to" <cardName>
        Examples:
            | name       | phone        | email          | education | button | id | cardName       |
            | "John AAA" | "1111111111" | "john@kek.com" | "PTU"     | "save" | 8  | "Dr. John AAA" |
            | "Luke BBB" | "2222222222" | "luke@kek.com" | "PTU"     | "save" | 9  | "Dr. Luke BBB" |
            | "Jack CCC" | "3333333333" | "jack@kek.com" | "PTU"     | "save" | 10 | "Dr. Jack CCC" |

    @deleteDoctor
    Scenario: It should be possible to delete doctor
        When I click on 8 doctor card name
        And I click on 'delete' button in doctor details tab
        And I click "ok" button in delete confirmation pop-up
        Then should open page with name of doctor "be equal to" "Dr. Nembo Lukeni"
