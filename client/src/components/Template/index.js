import React from "react";


function writeInfo(item) {
    return (
        <div>
            <p><strong>{item.title}</strong></p>
            <p>{item.body}</p>
        </div>
    )
}

function writeTicket(item) {
    return (
        <div>
            <p><strong>{item.customer}</strong> - TID: {item.TID}</p>
            <p>{item.body}</p>
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
    
    if(props.items.length > 0)
    {
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
        <div><strong>Date:</strong> {date.getMonth() + 1}/{date.getDate()}/{date.getFullYear()}</div>
        <div><strong>Shift:</strong> {props.shift}</div>
        <div><strong>Data Center:</strong> {props.dc}</div>
        <div><strong>Local Ops Techs on Shift:</strong> {props.names}</div>
        <p><strong>Announcements</strong>{announce ? announce.map(item => writeInfo(item)) : ""}</p>
        <p><strong>Events</strong>{events ? events.map(item => writeInfo(item)) : ""}</p>
        <p><strong>Scheduled Changes/Maintenance</strong>{maint ? maint.map(item => writeInfo(item)) : ""}</p>
        <p><strong>Known Issues</strong>{issues ? issues.map(item => writeInfo(item)) : ""}</p>
        <p><strong>Tape Rotations</strong>{tapes ? tapes.map(item => writeTicket(item)) : ""}</p>
        <p><strong>Backups</strong>{backup ? backup.map(item => writeTicket(item)) : ""}</p>
        <p><strong>Patching</strong>{patch ? patch.map(item => writeTicket(item)) : ""}</p>
        <p><strong>All Other Tickets Worked</strong>{other ? other.map(item => writeTicket(item)) : ""}</p>
        <p><strong>Notes</strong>{notes ? notes.map(item => writeInfo(item)) : ""}</p>
    </div>
    );
}

export default Template;
