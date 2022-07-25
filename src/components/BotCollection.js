import React from "react";
//import BotSpecs from "./BotSpecs";
import BotCard from "./BotCard";

function BotCollection({bots, addBot, deleteBot}) {
  


  return (
    <div className="ui four column grid">
      <div className="row">
        {bots.map((bot) => (
        <BotCard bot={bot}  handleBot={addBot} handleDeleteBot={deleteBot}/>
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
