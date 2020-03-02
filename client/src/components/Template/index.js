import React from "react";
import Button from "react-bootstrap/Button";
import API from "../../utils/API"

let date = new Date();

function writeInfo(item, i) {
    return (
        <div key={i}>
            <p><strong>{item.title} {item.TID ? " - TID: " + item.TID : ""}</strong></p>
            <ul>
                {item.body.split("\n").map((lineItem, i) => {
                    if(lineItem.length !== 0)
                        return (<li key={i}>{lineItem}</li>)
                })}
            </ul>
        </div>
    )
}
function Template(props) {

    function createEmail() {
        let tempDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
        props.createEmail(`${props.dc} - ${props.shift} Shift Handoff - ${tempDate}`);
        let body = {
            names: props.names,
            shift: props.shift,
            datacenter: props.dc,
            date: tempDate,
            items: props.items
        }
        API.addHandoff(body)
            .then(res => console.log(res.statusText))
    }

    let types = ["announce", "events", "issues", "tapes", "backup", "patch", "other", "notes"];
    let items = {};

    if (props.items.length > 0) {
        //Loop through the types array.  This will sort props.items into an object for further processing.
        types.forEach(type => {
            //Set temp as an array containing only the filtered items.
            let temp = props.items.filter(item => item.type === type);
            //Set the items object at key [type] to React components created by the writeInfo function.
            items[type] = temp.map((item, i) => writeInfo(item, i));
    })
}

    function Submit() {
        if (window.location.pathname === "/handoff") {
            return (<Button variant='success' onClick={createEmail}>Send Report</Button>)
        }
        else return null
    }

    function ShowTemplate() {
        if (props.shift !== "") {
            return (
                <>
                    <Submit />
                    <div id='email'>
                        <div><h5>Date: {props.date || ""}</h5></div>
                        <div><h5>Shift: {props.shift}</h5> </div>
                        <div><h5>Data Center: {props.dc}</h5> </div>
                        <div><h5>Local Ops Techs on Shift: {props.names}</h5> </div>
                        <br /><br />
                        <div><h5>Announcements</h5>{items.announce}</div>
                        <div><h5>Events</h5>{items.events}</div>
                        <div><h5>Scheduled Changes/Maintenance</h5>{items.maint}</div>
                        <div><h5>Known Issues</h5>{items.issues}</div>
                        <div><h5>Tape Rotations</h5>{items.tapes}</div>
                        <div><h5>Backups</h5>{items.backup}</div>
                        <div><h5>Patching</h5>{items.patch}</div>
                        <div><h5>All Other Tickets Worked</h5>{items.other}</div>
                        <div><h5>Notes</h5>{items.notes}</div>
                    </div>
                </>

            )
        }
        else
            return null
    }

    return (
        <ShowTemplate />
    );
}

export default Template;
