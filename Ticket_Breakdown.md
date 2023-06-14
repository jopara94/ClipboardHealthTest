# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

Ticket Breakdown:

Ticket 1 - Update the facility model to store custom IDs

Implementation:

Add a field to accept custom IDs to the facility data.
Modify the facility UI to allow users from the facility to enter, save, and retrieve the custom IDs.
Implement backend code that allows for the User Interface improvements to function.
Update the database schema to include the custom ID field.
Unit testing should be done to verify the functionality of the code.
Acceptance Criteria:

Each custom ID should be associated with a corresponding Agent in the database.
Users at the facility should be able to enter/save/retrieve custom IDs using their User Interface.
Time Estimation is 4 hours.

Ticket 2 - Update shift data to include custom IDs

Implementation:

Update the getShiftsByFacility function to return the custom IDs associated with each shift.
Update the shift metadata to include a field for the custom ID.
Update the User Interface to display both the facility ID and the custom Agent ID.
Unit testing should be done to verify the functionality of the code.
Acceptance Criteria:

The custom Agent ID should be displayed along with all other pertinent data when the user attempts to fetch shift information.
Time Estimation is 4 hours.

Ticket 3 - Update reports to contain custom IDs

Implementation:

Modify the generateReport function to include the custom ID instead of the internal database ID in PDF reports.
Unit testing should be done to verify the functionality of the code.
Acceptance Criteria:

When reports are generated, they should display the custom ID instead of the internal database ID, along with other pertinent shift details.
Time estimation is 3 hours

Ticket 4 - Update documentation

Implementation:

Update relevant documentation to show clear explanations of the new custom ID feature.
Always provide screenshots, and if possible provide short screen recording clips to guide users.
Acceptance Criteria:

The documentation clearly explains to users how to use the new feature and shows clear examples.
