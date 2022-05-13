// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'Henrik',
  imageBackground: true,
  openInNewTab: true,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: 'Good morning!',
  greetingAfternoon: 'Good afternoon,',
  greetingEvening: 'Good evening,',
  greetingNight: 'Go to Sleep!',

  // Weather
  weatherKey: '23be1bf5242ce5809783e631477577cb',
  weatherIcons: 'Nord', // 'Nord', 'Dark', 'White'
  weatherUnit: 'C',
  weatherLatitude: '57.239400',
  weatherLongitude: '12.181645',

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'Azure devops',
      icon: 'git-branch',
      link: 'https://dev.azure.com/gunnebo-ec/IoT-Solutions/',
    },
    {
      id: '2',
      name: 'Azure',
      icon: 'cloud',
      link: 'https://portal.azure.com/#home',
    },
    {
      id: '3',
      name: 'Reddit',
      icon: 'bookmark',
      link: 'https://reddit.com',
    },
    {
      id: '4',
      name: 'linkedin',
      icon: 'linkedin',
      link: 'https://se.linkedin.com/',
    },
    {
      id: '5',

      name: 'Github',
      icon: 'github',
      link: 'https://github.com/',
    },
    {
      id: '6',
      name: 'Youtube',
      icon: 'youtube',
      link: 'https://www.youtube.com',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'log-in',
  secondListIcon: 'home',

  // Links
  lists: {
    firstList: [
      {
        name: 'Jira',
        link: 'https://jira-prod.gunnebo.com/jira/secure/RapidBoard.jspa?rapidView=94&view=planning.nodetail&issueLimit=1000',
      },
      {
        name: 'Devops',
        link: 'https://dev.azure.com/gunnebo-ec',
      },
      {
        name: 'Whitesource',
        link: 'https://saas-eu.whitesourcesoftware.com/Wss/WSS.html#!home',
      },
      {
        name: 'Confluences',
        link: 'https://confluence-prod.gunnebo.com/confluence/#all-updates',
      },
    ],
    secondList: [
      {
        name: 'Dropbox',
        link: 'https://www.dropbox.com/home',
      },
      {
        name: 'Confluence',
        link: 'https://callistaenterprise.atlassian.net/wiki/home',
      },
      {
        name: 'Time-report',
        link: 'https://me71619-iaccess.deltekfirst.com/maconomy',
      },
      {
        name: 'Gmail',
        link: 'https://mail.google.com/mail/u/0/#inbox',
      },
    ],
  },
};
