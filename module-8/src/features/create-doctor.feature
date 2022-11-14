@createDoctorFeature
Feature: create-doctor

    @getPageTitle
    Scenario: Doctors page should have "Appointment Planner - Syncfusion Angular Components Showcase App" title
        When I open "Doctors" page
        Then Page title should "be equal to" "Appointment Planner - Syncfusion Angular Components Showcase App"

    @openCreateDoctorPopup
    Scenario: It should be possible to open a modal window
        When I open "Doctors" page
        And I click add new doctor button from list header
        Then modal window should be displayed

    @addDoctor
    Scenario Outline: It should be possible to create a new doctor
        When I enter <name> to "name" field
        And I enter <phone> to "phone" field
        And I enter <email> to "email" field
        And I enter <education> to "education" field
        And I click <button> button in modal window
        Then <id> card name should "be equal to" "Dr. John Kek"
        Examples:
            | name       | phone        | email          | education | button | id  |
            | "John Kek" | "1234567890" | "john@kek.com" | "PTU"     | "save" | "8" |

    @deleteDoctor
    Scenario: It should be possible to delete doctor
        When I click on "8" doctor card name
        And I click on delete button in doctor details tab
        And I click "ok" button in delete confirmation pop-up
        Then should open page with name of doctor "be equal to" "Dr. Nembo Lukeni"
