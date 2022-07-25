import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [bots, setBots] = useState ([]);
  const [botArmy, setBotArmy] = useState([]);

  //fetching data

  useEffect(() => {
    fetch("http://localhost:8002/bots")
    .then(response => response.json())
    .then(bots => setBots(bots))
  }, []);

  function addBotToArmy(armyBot){
    if(!botArmy.find(bot => bot === armyBot)){
      const foundBot = bots.find(bot => bot === armyBot)

      setBotArmy([...botArmy, foundBot])
    }
  }

  function removeBotFromArmy(armyBot) {
    const botArmyList = botArmy.filter((bot)=> bot !== armyBot)
    setBotArmy(botArmyList)
  }

  function removeBotPermanently (armyBot) {
    if(botArmy.find((bot) => bot === armyBot)){
      const filterBots = bots.filter(bot => bot !== armyBot)
      const filterBotArmy = botArmy.filter(bot => bot !== armyBot)

      setBots(filterBots)
      setBotArmy(filterBotArmy)

      fetch(`http://localhost:6001/bots/${armyBot.id}`, {
        method: "DELETE"
      })
    }
  }
  
  return (
    <div>
      <YourBotArmy  botArmy={botArmy} removeBot={removeBotFromArmy} deleteBot= {removeBotPermanently} />
      <BotCollection bots={bots}  addBot={addBotToArmy} deleteBot={removeBotPermanently}/>
    </div>
  )
}

export default BotsPage;
