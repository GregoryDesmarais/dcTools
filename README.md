# dcTools - [Heroku](https://dctools.herokuapp.com/)

## Introduction
dcTools is a collection of tools created to provide better QoL for certain tasks for Data Center Technicians.  The first version was written with HTML, CSS, JavaScript/jQuery, and PHP.  

## Technologies Used
- MongoDB
  - Mongoose
- Node
  - Express
  - Axios
- React
  - react-bootstrap
  - react-router-dom


## Pages
### Home
![Home Page](/imgs/home.png)
Contains descriptions/usage for each of the pages.

### Shift Handoff
![Shift Handoff](/imgs/handoff.png)
Users can can use this to enter the items they have worked on throughout their shift.  Clicking the "Show Preview" Button will display the Shift Handoff template with the contents of each item that the user has listed.

![Handoff_Preview](/imgs/handoff_preview.png)
The user can then click "Send Report" to save their completed handoff to the database.  The application will then copy the handoff to the clipboard, and open a new email using the user's default email client.  The Handoff can then be pasted into the email body, and sent to any recipient.


### Amber Lights
![Amber Lights](/imgs/amber.png)
Periodically, the Data Center Technician is to check servers in the Data Center for Amber Lights, which typically indicate an active issue with the server.  The customer is then contacted via ticket if any are found.  This tool provides a simple form that accepts user input and stores it to the database.  The user can then recall the data, in template form, to be sent to the customer via their ticketing system.


![Cardboard Tool](/imgs/home.png)
This tool has roughly the same functionality as the Amber Light tool.  Every so often, the Data Center is to be audited for combustible materials stored in the cabinets.  This tool provides a way to store the information for any offending cabinets, and allows the user to recall the information in template form, which can then be sent to the customer via a ticket.