import React from "react";
import trees from "../../assets/images/backgrounds/trees.svg";
import mee6Mountain from "../../assets/images/backgrounds/mee6-mountain.svg";
import AddToDiscord from "../common/AddToDiscord";
import SeeFeatures from "../common/SeeFeatures";
import PhotoAndInfo from "./PhotoAndInfo";
import botPersonalizer from "../../assets/images/home/bot_personalizer.webp";
import welcome from "../../assets/images/home/welcome.webp";
import customCommands from "../../assets/images/home/custom_commands.webp";
import socialConnectors from "../../assets/images/home/social_connectors.webp";
import reactionRoles from "../../assets/images/home/reaction_roles.webp";
import levels from "../../assets/images/home/levels.webp";
import polls from "../../assets/images/home/polls.webp";

function HomePage() {
  const data = [
    {
      heading: "Build Your Own Unique Discord Bot",
      para: `The best Discord bot is the one you can customize yourself. Let's
            make the Discord client better than ever. Customize MEE6 to
            reflect your server's personality. Unlock its potential with a
            powerful plugin system. Utilize MEE6's Bot Personalizer feature to
            make your server unique so the bot integrates into your server's
            universe and aligns with your branding.You can create a unique
            space for your community. Take control of MEE6 and tailor it to
            match your server's identity and enhance the user experience. It's
            easy! With the help of our simple tutorial and helpful support
            team, you'll be seeing all of the cool possibilities that MEE6 can
            bring to your Discord server in no time. Are you ready to see what
            MEE6 bot can do?`,
      img: botPersonalizer,
      first: "photo",
    },
    {
      heading: "Creative Welcome Messages",
      para: `Extend a warm and personalized greeting to new members when they join the server.Take the opportunity to introduce them to the server's rules, topics of discussion, and any ongoing events or activities. This way, you know that everyone has a positive and inclusive experience from the moment they join. Promote a sense of community and foster engagement among users. Make sure that new members feel valued and informed so they can participate and contribute to the vibrant and engaging channels you’ve created. Whether you’re all playing a game or joining a new guild together, or even just chatting in the servers, every member of each channel should feel like part of a community.`,
      img: welcome,
      first: "text",
    },
    {
      heading: "Advanced Custom Commands",
      para: `Empower your server with custom commands designed to automate tasks, streamline role management, and deliver predefined messages. With MEE6, you have the power to create personalized commands that align with your server's unique needs. Enhance user experience, save time, and unlock the full potential of your server by harnessing the customizable command system offered by MEE6. It’s the best way to personalize your Discord.If you get a bit lost in all of the command possibilities, don’t forget to message support and check out our tutorial. Powerful bots like MEE6 can be overwhelming at first!`,
      img: customCommands,
      first: "photo",
    },
    {
      heading: "Twitch and Social Media Alerts",
      para: `Stay connected with your community by sending them real-time notifications whenever you go live to play games on Twitch, upload a new video on YouTube, send a Tweet, or make a post on Instagram. With MEE6, you can effortlessly keep each member in the loop about your latest content updates.You can also use the MEE6 Discord bot to subscribe to other content creators of your choice, ensuring that you will never miss out on their updates. Stay updated so you can game together or just sit back and watch them chat or play a game!`,
      img: socialConnectors,
      first: "text",
    },
    {
      heading: "Discord Reaction Roles",
      para: `You can streamline the role-assigning process and allow members to auto-assign roles simply by reacting to a Discord message. With MEE6's advanced Reaction Roles plugin, you have the power to fully customize this feature to suit your server's needs. We love this function.This intuitive system empowers each member to personalize their experience and access the roles that resonate with them, all with a simple reaction. Take control of your role management with MEE6. Whether you’re grouping members of a guild, friends, or just people who like to game together, it’s never been easier.`,
      img: reactionRoles,
      first: "photo",
    },
    {
      heading: "Fun Leveling and XP System",
      para: `Elevate your server's activity by implementing our text-based leveling system, designed to track and reward your most active members. That’s right, it’s like you’re adding a game to the Discord chat application. With MEE6, you can configure exclusive access to channels and roles, offering special privileges to those who consistently engage in conversations. By incentivizing your members to chat more, you will foster a more lively server community. Encourage participation, spark conversations, and create a sense of achievement as users progress through the fun leveling system.`,
      img: levels,
      first: "text",
    },
    {
      heading: "Take Polls With the MEE6 Poll Plugin",
      para: `The MEE6 poll plugin is a powerful tool that allows you to create polls in the Discord application. With this plugin, you can truly engage your community! You can choose the duration of the poll, set multiple-choice or single-choice options, and even add additional helpful features! Once the poll is live, users in your Discord server will participate by casting their votes. The bot plugin collects and tallies the votes, providing you with real-time results. This feature is awesome for gathering feedback, or simply fostering interaction among your server members. Whether you're planning an event, deciding on a game, choosing a guild leader, or seeking opinions, a poll plugin simplifies the process.`,
      img: polls,
      first: "photo",
    },
  ];
  return (
    <>
      <div className="bg-dark tree-bg">
        <div className="row pt-5 pe-0 me-0">
          <div
            className="row"
            style={{
              backgroundImage: `url(${trees})`,
              backgroundPosition: "bottom",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="col-md-1"></div>
            <div className="col-md-4 pt-5">
              <div className="text pt-5">
                <div className="header-text">
                  The best all-in-one bot for Discord
                </div>
                <div className="text-secondary mt-4 mb-5">
                  Mee6 is a complete Discord bot, easy-to-use, that millions of
                  Discord servers worldwide trust to manage, entertain, and grow
                  their community.
                </div>
                <AddToDiscord />
                <span className="ms-4">
                  <SeeFeatures text="See Features" />
                </span>
              </div>
            </div>
            <div className="col-md-7 pe-0 d-flex flex-row-reverse pt-5">
              <img src={mee6Mountain} className="img-fluid" alt="" />
            </div>
          </div>
          <div className="col-md-12">
            {data.map((info) => (
              <PhotoAndInfo
                heading={info.heading}
                para={info.para}
                img={info.img}
                first={info.first}
              />
            ))}
          </div>
          <div className="bg-blue py-5 text-center">
            <div className="heading-text h2 text-light">
              Build the best Discord server for free
            </div>
            <div className="mt-4">
              <AddToDiscord bg="white" purple={true} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
