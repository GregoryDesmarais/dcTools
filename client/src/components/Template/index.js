import React from "react";


function writeInfo(item, i) {
    return (
        <div key={i}>
            <p><strong>{item.title} {item.TID ? " - TID: "+item.TID : ""}</strong></p>
            <ul>
                {item.body.split("\r\n").map((lineItem, i) => {
                    return (<li key={i}>{lineItem}</li>)
                })}
            </ul>
        </div>
    )
}

function Template(props) {
    let date = new Date();

    let announce = [];
    let events = [];
    let maint = [];
    let issues = [];
    let tapes = [];
    let backup = [];
    let patch = [];
    let other = [];
    let notes = [];

    if (props.items.length > 0) {
        announce = props.items.filter(item => item.type === "announce");
        events = props.items.filter(item => item.type === "events");
        maint = props.items.filter(item => item.type === "maint");
        issues = props.items.filter(item => item.type === "issues");
        tapes = props.items.filter(item => item.type === "tapes");
        backup = props.items.filter(item => item.type === "backup");
        patch = props.items.filter(item => item.type === "patch");
        other = props.items.filter(item => item.type === "other");
        notes = props.items.filter(item => item.type === "notes");
    }

    return (<div>
        <div><h5>Date: {date.getMonth() + 1}/{date.getDate()}/{date.getFullYear()}</h5></div>
        <div><h5>Shift: {props.shift}</h5> </div>
        <div><h5>Data Center: {props.dc}</h5> </div>
        <div><h5>Local Ops Techs on Shift: {props.names}</h5> </div>
        <br /><br />
        <div><h5>Announcements</h5>{announce ? announce.map((item, i) => writeInfo(item, i)) : ""}</div>
        <div><h5>Events</h5>{events ? events.map((item, i) => writeInfo(item, i)) : ""}</div>
        <div><h5>Scheduled Changes/Maintenance</h5>{maint ? maint.map((item, i) => writeInfo(item, i)) : ""}</div>
        <div><h5>Known Issues</h5>{issues ? issues.map((item, i) => writeInfo(item, i)) : ""}</div>
        <div><h5>Tape Rotations</h5>{tapes ? tapes.map((item, i) => writeInfo(item, i)) : ""}</div>
        <div><h5>Backups</h5>{backup ? backup.map((item, i) => writeInfo(item, i)) : ""}</div>
        <div><h5>Patching</h5>{patch ? patch.map((item, i) => writeInfo(item, i)) : ""}</div>
        <div><h5>All Other Tickets Worked</h5>{other ? other.map((item, i) => writeInfo(item, i)) : ""}</div>
        <div><h5>Notes</h5>{notes ? notes.map((item, i) => writeInfo(item, i)) : ""}</div>
    </div>
    );
}

export default Template;
