import Mock from "./mock";
import icon from "../assets/logo.png";

const photo = require("../assets/placeholders/photo.jpg");
const logotype = require("../assets/placeholders/logotype.png");
// const icon = require("../assets/placeholders/icon.svg");

const database = {
  fast_links: [
    {
      title: "Homepage",
      url: "/home",
    },
    {
      title: "About",
      url: "#about",
    },
    {
      title: "Teams",
      url: "/teams",
    },
    {
      title: "Become a sponsor",
      url: "/",
    },
    {
      title: "Contact us",
      url: "/contacts",
    },
  ],
  header_bgs: {
    about: 'https://i.ibb.co/M7y9xL8/world-of-warcraft-dragonflight-main-menu-loading-screen.jpg',
    about_video_poster: photo,
    blog: photo,
    contacts: photo,
    contacts_w: photo,
    portfolio: photo,
    services: photo,
    team: photo,
    team_w: photo,
    facts: photo,
    subscribe: photo,
    list: photo,
  },
  menu: [
    {
      children: [
        {
          name: "Slider Header",
          url: "/",
        },
        {
          name: "Video Background",
          url: "/home-video",
        },
      ],
      name: "Home",
      url: "/",
    },
    {
      children: [
        {
          name: "Team Wind Bridge",
          url: "/teams/twb",
        },
        {
          name: "Video Background",
          url: "/home-video",
        },
      ],
      name: "Teams",
      url: "/teams",
    },
    {
      name: "Apply",
      url: "/apply",
    },
  ],
  posts: [
    {
      category_id: 1,
      featured: true,
      id: "post_0",
      image: 'https://i.ibb.co/4YNK3hh/cinematic-render-2.jpg',
      posting_date: "Feb 14, 2020",
      quote:
        "Enthusiastically generate multidisciplinary benefits rather than bricks-and-clicks action items. ",
      short: "WE WANT RAIDERS WHO WANT TO IMPROVE THEIR PLAY, IMPROVE THE RAID TEAM, AND IMPROVE THE CULTURE WE FOSTER HERE.",
      title: "Mist is a cutting-edge guild focused on us-250 progression.",
      user_id: "2",
    },
    {
      category_id: 2,
      featured: true,
      full:
        "Dynamically enhance distributed scenarios rather than extensive metrics. Compellingly supply leveraged leadership and standardized web-readiness. Phosfluorescently predominate competitive platforms after unique potentialities. Seamlessly engineer optimal niches through turnkey communities. Objectively grow emerging alignments before sticky synergy. <p> Enthusiastically e-enable inexpensive expertise for low-risk high-yield e-commerce. Monotonectally facilitate cutting-edge communities vis-a-vis process-centric systems. Competently utilize granular infomediaries with team building e-commerce. Seamlessly enable market positioning action items through optimal collaboration and idea-sharing. Dramatically revolutionize cross functional opportunities before multifunctional interfaces.<p> Uniquely pontificate e-business materials rather than seamless benefits. Completely coordinate client-centric channels for 24/365 communities. Quickly facilitate covalent interfaces after prospective vortals. Monotonectally envisioneer competitive collaboration and idea-sharing and plug-and-play systems. Energistically syndicate leading-edge initiatives vis-a-vis wireless materials. Completely initiate unique benefits via corporate core competencies. Holisticly maximize highly efficient channels without world-class partnerships. <p>Phosfluorescently brand stand-alone deliverables via premier infrastructures. Enthusiastically visualize scalable applications via market positioning web services. Phosfluorescently redefine high standards in models before emerging leadership. Energistically morph user-centric mindshare with 24/7 niches. Uniquely strategize resource maximizing outsourcing without cross functional ROI. Globally productize process-centric solutions rather than focused sources. Monotonectally repurpose bleeding-edge ideas via extensible human capital. <p>Collaboratively orchestrate covalent platforms rather than just in time infrastructures. Collaboratively expedite plug-and-play web services without professional ideas. Synergistically provide access to open-source markets with covalent methodologies. Dynamically develop multimedia based meta-services vis-a-vis an expanded array of infrastructures. Professionally supply ubiquitous initiatives whereas cross-platform users. Phosfluorescently restore superior solutions with error-free customer service.",
      id: "post_1",
      image: 'https://wallpapercave.com/wp/wp10407651.jpg',
      posting_date: "Feb 07, 2020",
      quote:
        "dolor dolores doloribus ducimus fuga iusto magni maiores minus nam numquam officiis provident quasi",
      short: "WE WANT RAIDERS WHO WANT TO IMPROVE THEIR PLAY, IMPROVE THE RAID TEAM, AND IMPROVE THE CULTURE WE FOSTER HERE.",
      title: "OUR GUILD PRIDES ITSELF ON ALWAYS IMPROVING. ",
      user_id: "1",
    },
  ],
  achievements: [
    {
      category_id: 1,
      featured: true,
      id: "raid_1",
      image: 'https://i.ibb.co/QKQG3TR/sepulcher-of-the-first-ones-small.jpg',
      title: "Sepulcher of the First Ones",
      progress: '10/10M',
      user_id: "1",
    },
    {
      category_id: 2,
      featured: true,
      id: "raid_2",
      image: 'https://i.ibb.co/sjdq3mm/sanctum-of-domination-small.jpg',
      title: "Sanctum of Domination",
      progress: '10/10M',
      user_id: "2",
    },
    {
      category_id: 3,
      featured: true,
      id: "raid_3",
      image: 'https://i.ibb.co/k6wrsrQ/castle-nathria.jpg',
      title: "Castle Nathria",
      progress: '10/10M',
      user_id: "3",
    },
  ],
  castles: [
    {
      name: "Castle Nathria",
      icon: 'https://i.ibb.co/GsdyVtt/sire-Denathrius-Big.png',
      bg: 'https://wow.zamimg.com/uploads/guide/seo/10246.jpg?1588896674',
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis ratione commodi sint illo facere id dolore repudiandae, ex dignissimos molestiae voluptatum, totam quia? Laborum dolore modi voluptatibus alias fugit perferendis.",
    },
    {
      name: "Fated Castle Nathria",
      icon: 'https://i.ibb.co/MMMXL1Z/sludgefist-Big.png',
      bg: 'https://wow.zamimg.com/uploads/guide/seo/10246.jpg?1588896674',
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis ratione commodi sint illo facere id dolore repudiandae, ex dignissimos molestiae voluptatum, totam quia? Laborum dolore modi voluptatibus alias fugit perferendis.",
    },
    {
      name: "Sanctum of Domination ",
      icon: 'https://i.ibb.co/fDzyrLk/pngwing-com-1.png',
      bg: 'https://cdn1.dotesports.com/wp-content/uploads/2020/12/10013745/gargoyle.jpg',
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis ratione commodi sint illo facere id dolore repudiandae, ex dignissimos molestiae voluptatum, totam quia? Laborum dolore modi voluptatibus alias fugit perferendis.",
    },
    {
      name: "Fated Sanctum of Domination ",
      icon: 'https://i.ibb.co/fDzyrLk/pngwing-com-1.png',
      bg: 'https://cdn1.dotesports.com/wp-content/uploads/2020/12/10013745/gargoyle.jpg',
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis ratione commodi sint illo facere id dolore",
    },
    {
      name: "Sepulcher of the First Ones",
      icon: 'https://i.ibb.co/XFgMzrx/zovaal-the-jailer-heroic-kill1644882949-picture-item-small.png',
      bg: 'https://cdn1.dotesports.com/wp-content/uploads/2020/12/10013745/gargoyle.jpg',
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis ratione commodi sint illo facere id dolore repudiandae, ex dignissimos molestiae voluptatum, totam quia? Laborum dolore modi voluptatibus alias fugit perferendis.",
    },
    {
      name: "Fated Sepulcher of the First Ones",
      icon: 'https://i.ibb.co/XFgMzrx/zovaal-the-jailer-heroic-kill1644882949-picture-item-small.png',
      bg: 'https://cdn1.dotesports.com/wp-content/uploads/2020/12/10013745/gargoyle.jpg',
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis ratione commodi sint illo facere id dolore",
    },
  ],
  teams: [
    {
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis ratione commodi sint illo facere id dolore repudiandae, ex dignissimos molestiae voluptatum, totam quia? Laborum dolore modi voluptatibus alias fugit perferendis.",
      icon: 'https://i.ibb.co/GsdyVtt/sire-Denathrius-Big.png',
      id: 0,
      bg: 'https://cdn1.dotesports.com/wp-content/uploads/2020/12/10013745/gargoyle.jpg',
      subtitle: "Handling of construction materials",
      link: "/twb",
      title: "Team Wind Bridge",
      zone: "Sepulcher of the First Ones"
    },
    {
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis ratione commodi sint illo facere id dolore repudiandae, ex dignissimos molestiae voluptatum, totam quia? Laborum dolore modi voluptatibus alias fugit perferendis.",
      icon: 'https://www.pngall.com/wp-content/uploads/11/World-Of-Warcraft-PNG-HD-Image.png',
      id: 1,
      bg: 'https://wallpapercave.com/wp/wp10407651.jpg',
      subtitle: "Making planning for ptoject",
      link: "/2nmt",
      title: "2-Night Mythic Team",
    },
  ],
  members: [
    {
      id: 0,
      user: 'Billygates',
      officer: true,
      discord: 'Billygates#1234',
      about: '',
    },
    {
      id: 1,
      user: 'Äni',
      officer: false,
    },
    {
      id: 2,
      user: 'Zensy',
      officer: false,
    },
    {
      id: 3,
      user: 'Ducksyan',
      officer: false,
    },
    {
      id: 3,
      user: 'Mysticplay',
      officer: false,
    },
  ],
};

Mock.onGet("/api/data").reply((config) => {
  const response = database;
  return [200, response];
});
