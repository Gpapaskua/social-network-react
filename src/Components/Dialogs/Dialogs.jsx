import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = props => {
  console.log(props);
  let dialogsElements = props.state.dialogsData.map(d => {
    return <DialogItem name={d.name} id={d.id} />;
  });

  let messagesElements = props.state.messages.map(m => {
    return <Message message={m.message} />;
  });

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
