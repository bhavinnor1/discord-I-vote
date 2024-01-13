import React from "react";
import discord from "../../assets/images/icons/discord.svg";
import discordPurple from "../../assets/images/icons/discord-purple.svg";

function AddToDiscord({ bg, purple }) {
  return (
    <button
      className={`btn btn-mee-six ${bg === "white" ? "bg-white" : "bg-blue"} d-inline-flex align-items-center`}
    >
      <img src={purple ? discordPurple : discord} className="img-fluid me-1" alt="" />
      {/* <DiscordIcon /> */}
      <span className={`${bg === "white" ? "text-dark" : "text-white"} ms-2`}>
        Add to Discord
      </span>
    </button>
  );
}

export default AddToDiscord;
