module.exports = `
<strong>Date:</strong> ${date.getDate()}/${date.getMonth + 1}/${date.getFullYear}.prototype<br>
<strong>Shift:</strong> ${this.state.shift}<br>
<strong>Data Center:</strong> ${this.state.dc}<br>
<strong>Local Ops Techs on Shift:</strong> ${this.state.names}<br><br>
<strong>Announcements</strong><br>${this.state.announcements.map(item => writeInfo(item))}<br><br>
<strong>Events</strong><br>${this.state.events.map(item => writeInfo(item))}<br><br>
<strong>Scheduled Changes/Maintenance</strong><br>${this.state.announcements.map(item => writeInfo(item))}<br><br>
<strong>Known Issues</strong><br>${this.state.announcements.map(item => writeInfo(item))}<br><br>
<strong>Tape Rotations</strong><br>${this.state.announcements.map(item => writeTicket(item))}<br><br>
<strong>Backups</strong><br>${this.state.announcements.map(item => writeTicket(item))}<br><br>
<strong>Patching</strong><br>${this.state.announcements.map(item => writeTicket(item))}<br><br>
<strong>All Other Tickets Worked</strong><br>${this.state.announcements.map(item => writeTicket(item))}<br><br>
&nbsp;&nbsp;Walkthrough Completed = Yes<br>
<strong>Notes</strong><br>${this.state.announcements.map(item => writeInfo(item))}<br><br>";
`