import React from "react";
import BotCard from "./BotCard";

function YourBotArmy ({botArmy, removeBot}) {
  //your bot army code here...




  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {botArmy.map((bot) => (
          <BotCard bot={bot} handleBot={removeBot} />
          ))}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
