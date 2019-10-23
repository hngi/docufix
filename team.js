window.onload = function(){
    const anchors = document.getElementsByTagName('a');
    for (let i=0; i<anchors.length; i++){
      anchors[i].setAttribute('target', '_blank');
    }
  }
     const container = document.querySelector('.container');
     container.classList.add('container');
      const wrapper = document.querySelector('.wrapper');
      wrapper.classList.add('row');
    
    
    const displayTeam = (data) => {
      let count = 0;
      data.forEach((data) => {
        let wrapperChild0 = document.createElement('div');
        wrapperChild0.classList.add('col');
        wrapperChild0.classList.add('the-col');
        let wrapperChild = document.createElement('div');
        wrapperChild.classList.add('all-users')
        let wrapperChild1 = document.createElement('div');
        wrapperChild1.classList.add('users-image')
        let wrapperChild2 = document.createElement('div');
        wrapperChild2.classList.add('users-image-box')
        let wrapperChild3 = document.createElement('div');
        wrapperChild3.classList.add('content-part')
        let wrapperChild4 = document.createElement('div');
        wrapperChild4.classList.add('user-info');
        wrapperChild4.classList.add('text-center');
        wrapperChild4.classList.add('p-3');
        let wrapperChild5 = document.createElement('div');
        wrapperChild5.classList.add('user-content');
        let wrapperChild6 = document.createElement('div');
        wrapperChild6.classList.add('content-footer');
        wrapperChild6.classList.add('mb-3');

        let a1 = document.createElement('a');
        a1.href = data.a1;
        let a2 = document.createElement('a');
        a2.href = data.a2;
        let a3 = document.createElement('a');
        a3.href = data.a3;
        let a4 = document.createElement('a');
        a4.href = data.a4;

        let icon1 = document.createElement('i');
        let icon2 = document.createElement('i');
        let icon3 = document.createElement('i');
        let icon4 = document.createElement('i');

        icon1.classList.add('fab');
        icon1.classList.add('fa-twitter');
        icon1.classList.add('social-icons');
        icon1.classList.add('fa-2x');

        icon2.classList.add('fab');
        icon2.classList.add('fa-instagram');
        icon2.classList.add('social-icons');
        icon2.classList.add('fa-2x');

        icon3.classList.add('fab');
        icon3.classList.add('fa-linkedin');
        icon3.classList.add('social-icons');
        icon3.classList.add('fa-2x');

        icon4.classList.add('fab');
        icon4.classList.add('fa-facebook-f');
        icon4.classList.add('social-icons');
        icon4.classList.add('fa-2x');

        a1.appendChild(icon1);
        a2.appendChild(icon2);
        a3.appendChild(icon3);
        a4.appendChild(icon4);

        wrapperChild6.appendChild(a1);
        wrapperChild6.appendChild(a2);
        wrapperChild6.appendChild(a3);
        wrapperChild6.appendChild(a4);
        

        let imgUrl = document.createElement('img');
        imgUrl.classList.add('image');
        imgUrl.src = data.imgUrl;
        wrapperChild2.appendChild(imgUrl);
        let workDone = document.createElement('b');
        workDone.innerHTML = data.workDone;
        wrapperChild5.appendChild(workDone);
        let slackUsername = document.createElement('p');
        slackUsername.innerHTML = data.slackUsername;
        wrapperChild5.appendChild(slackUsername);
        let heading = document.createElement('h3');
        heading.innerHTML = data.name;
        let stack = document.createElement('p');
        stack.innerHTML = data.stack;
        wrapperChild4.appendChild(heading);
        wrapperChild4.appendChild(stack);



       
        wrapperChild.appendChild(wrapperChild1);
        wrapperChild3.appendChild(wrapperChild4);
        wrapperChild1.appendChild(wrapperChild2);
        wrapperChild.appendChild(wrapperChild3);
        wrapperChild3.appendChild(wrapperChild5);
        wrapperChild.appendChild(wrapperChild6);
    
    
        wrapperChild0.appendChild(wrapperChild)
        wrapper.appendChild(wrapperChild0);
    
        count += 1;
    
      })
    }
    
    
    const teamArr = [
      {
        name: "Mercy Temi Inyang",
        stack: "Front-End Developer",
        imgUrl: "https://res.cloudinary.com/mercyinyang/image/upload/v1567341335/mercy_-_Mercy_Inyang_fppxi9.jpg",
        workDone:'Team lead',
        slackUsername:'SlackUsername: @Miss Temi',
        a1:'https://twitter.com/LoneTemi',
        a2:'https://www.instagram.com/mercyskittles/',
        a3:'https://www.linkedin.com/in/mercyinyangp',
        a4:'https://www.facebook.com/mercytemiinyang'
      },
      {
        name: "Onyenkachi Chidiebere",
        stack: "Front End",
        imgUrl: "https://res.cloudinary.com/chidi6ix/image/upload/v1571420011/20190825_112753_vdkudk.jpg",
        workDone:'Team lead',
        slackUsername:'SlackUsername: @codeSmith',
        a1:'https://twitter.com/',
        a2:'https://www.instagram.com/',
        a3:'http://www.linkedin.com/in/onyekachi-chidiebere-5202bb124',
        a4:'https://www.facebook.com/'
      },
  
  {
      name: "Isuma Chidera",
      slackUsername: "SlackUsername: @Cross",
      stack: "Backend | Project Management",
      workDone: "Project Manager",
      a3: "https://www.linkedin.com/in/chidera-isuma/",
      imgUrl: "https://res.cloudinary.com/erys1521/image/upload/v1567323865/Me_jgxgkf.jpg"
  },
  {
      name: "Samuel Egbajie",
      slackUsername: "SlackUsername: @Major",
      stack: "Front End",
      workDone: "Work on the comparison Algorithm using JavaScript",
      a1: "https://www.twitter.com/Engr_Major",
      a2: "https://www.instagram.com/engr_major",
      a3: "https://www.linkedin.com/in/samuel-egbajie-08662415b",
      a4: "https://free.facebook.com/samuel.oshie",
      imgUrl: "https://res.cloudinary.com/major/image/upload/v1571406076/IMG_20190823_004821_hsnwii.jpg"
  },
  {
    
    name: "Ademola Madelewi",
    slackUsername: "SlackUsername: @AdemolaM",
    stack: "Front end",
    workDone: "Homepage and Comparison Algorithm",
    a1: "https://twitter.com/Adem0la_jr",
    a2: "https://www.instagram.com/",
    a3: "https://www.linkedin.com/in/ademola-madelewi-9441a8102/",
    imgUrl: "https://res.cloudinary.com/ademolamadelewi/image/upload/v1571505429/IMG_20190910_180814_631_lgqv01.jpg"
},
{
    name: "Prosper Ndubueze ",
    slackUsername: "SlackUsername: @Ros4eva",
    stack: "Frontend",
    workDone: "File and text comparison page frontend ",
    a1: "https://twitter.com/rosesopuruchi",
    a2: "https://www.instagram.com/prospersopuruchi/",
    a3: "https://www.linkedin.com/in/prosper-sopuruchi-ndubueze-338209122",
    a4: "https://www.facebook.com/prosper.sopuruchi/",
    imgUrl: "https://res.cloudinary.com/ros4eva/image/upload/v1570140043/IMG_20190927_150929_gpoaza.jpg"
},
{
    name: "Akpan Dominic Gabriel",
    slackUsername: "SlackUsername: @Pa Dom",
    stack: "Design",
    workDone: "I coordinated the design team and designed the home page and contributed/adjusted all the other pages",
    a1: "https://twitter.com/drmusic001?s=09",
    a3: "https://www.linkedin.com/in/dominic-akpan-540560196",
    a4: "https://www.facebook.com/akpan.dominic",
    imgUrl: "https://res.cloudinary.com/padom2020/image/upload/v1566740261/IMG-20190819-WA0002_xhki10.jpg"
},
  {
      name: "Benjamin Bala",
      slackUsername: "SlackUsername: @Benjee",
      stack: "Design",
      workDone: "Worked on the design for the Docufix app",
      a1: "https://www.twitter.com/benjeee_",
      a2: "https://www.instagram.com/_ben.jeee_",
      imgUrl: "https://res.cloudinary.com/benjee/image/upload/v1571406592/PHOTO-2019-08-15-11-18-51_smoyo8.jpg"
  },
  {
    name: "Kingsley Umujeyan",
    slackUsername: "SlackUsername: @kuic",
    stack: "Front end",
    workDone: "Team Page",
    a1: "https://twitter.com/kuicpet",
    a3: "https://www.linkedin.com/in/kingsley-umujeyan-17858a75/",
    a4: "https://web.facebook.com/umujeyan.kingsley",
    imgUrl: "https://res.cloudinary.com/kuic/image/upload/v1566490915/startNg2019/kuic_jxb4la.jpg"
},
{
    name: "Onasanya Tunde",
    slackusername: "SlackUsername: @Rammy",
    stack: "Front End",
    workDone: "Worked on the API endpoint that converts the files uploaded to plain text.",
    a1: "https://twiiter.com/simply_rammy",
    a2: "https://www.instagram.com/simply_rammy",
    a3: "https://www.linkedin.com/in/onasanya-tunde/",
    a4: "https://facebook.com/onasanyatunde",
    imgUrl: "https://res.cloudinary.com/rammy/image/upload/v1554506675/rammy.jpg"
},
{  
    name: "Chidiebere Chukwudi",
    slackUsername: "SlackUsername: @jovial",
    stack: "Back end",
    workDone: "Php script for file comparison",
    a1: "https://twitter.com/chidideveloper",
    imgUrl: "https://res.cloudinary.com/chidiebere/image/upload/v1523832031/pp.jpg"
},
{
    name: "Ayo Onamusi",
    slackUsername: "SlackUsername: @Ayo-Onams",
    stack: "Front End ",
    workDone: "Homepage ",
    imgUrl: "https://res.cloudinary.com/onamusia/image/upload/v1567605657/Screenshot_2019-09-04_at_14.18.06_rap7kt.png"
},
{
    name: "Omotoso Yusuf ",
    slackUsername: "SlackUsername: @OmotosoYusuf ",
    stack: "Front end ",
    workDone: "Linking pages ",
    a1: "https://twitter.com/OmotosoYusuf",
    a3: "https://www.linkedIn.com/OmotosoYusuf ",
    imgUrl: "https://res.cloudinary.com/omotosoyusuf/image/upload/v1566572749/yusufOmotoso_adafxo.jpg"
},
{
     
    name: "Yusuf Ismaili",
    slackUsername: "SlackUsername: @YUSUF",
    stack: "FRONTEND",
    workDone: "Header & Footer - Index.html",
    a1: "https://twitter.com/yusufIsmail1",
    a3: "https://linkedin.com/in/yusuf-ismail-59706089",
    imgUrl: "https://bit.ly/31w0RMR"
},
{
    name: "Samson Emeje",
    slackUsername: "SlackUsername: @Genghis Khan",
    stack: "Front end ",
    workDone: "Document Analysis Page",
    a1: "https://twitter.com/S_Mabeni",
    a2: "https://www.instagram.com/mabeni808/",
    a3: "https://www.linkedin.com/in/samson-emeje/",
    a4: "https://mobile.facebook.com/samemeje",
    imgUrl: "https://res.cloudinary.com/dqvu3ts0s/image/upload/v1502874057/IMG_20170707_065607_gqay7p.png"
},
  
  {
    
      name: "Ikechukwu Tochukwu Merit",
      slackUsername: "SlackUsername: @emma_odia",
      stack: "DevOps",
      workDone: "Installed and setup NGINX for webserver",
      imgUrl: "https://res.cloudinary.com/emmaodia/image/upload/v1571423773/emmaodia.jpg"
  },
  {
    
      name: "AbdulRahman Abu",
      slackUsername: "SlackUsername: @AbdulRahmanAbu",
      stack: "Front End",
      workDone: "Document Analysis Page",
      a1: "https://twitter.com/jtabdulrahman",
      a3: "https://www.linkedin.com/in/abdulrahman-abu/",
      imgUrl: "https://res.cloudinary.com/aburahman/image/upload/v1566652016/AbdulRahman%20Pictures/gzscf5hwgqalt8kiogph.jpg"
  },
  {
      name: "Abiodun Abolarinwa",
      slackUsername: "SlackUsername: @loki",
      stack: "Front end",
      workDone: "File upload page",
      a1: "https://twitter.com/BIOCELL_",
      a2: "https://www.instagram.com/biocell_loki/?hl=en",
      a3: "https://www.linkedin.com/in/abolarinwa-biodun-b23233118/",
      a4: "https://facebook.com/abolarinwa.biodun",
      imgUrl: "https://res.cloudinary.com/abolarinwaabiodun/image/upload/c_scale,w_200/v1566558306/IMG20190714101049_flifyy.jpg"
  },
  {
      name: "Christian Ani",
      slackUsername: "SlackUsername: @anikriz",
      stack: "Front End",
      workDone: "Team Page",
      a1: "https://twitter.com/anikriz99",
      a2: "https://www.instagram.com/ani_kriz/",
      a3: "https://www.linkedin.com/in/anikriz/",
      a4: "https://web.facebook.com/anikrizz",
      imgUrl: "https://res.cloudinary.com/anikriz/image/upload/v1566560640/HNG%20%7CStartng%20Internship/passport_photo-min_zremwg.jpg"
  },
  
  {
      name: "David Enoch Aji",
      slackUsername: "SlackUsername: @Ajiva",
      stack: "Front End",
      workDone: "Team Page",
      a1: "https://twitter.com/daveaji",
      a2: "https://www.instagram.com/ajiva_D/",
      a3: "https://www.linkedin.com/in/david-aji-386197164/",
      imgUrl: "https://res.cloudinary.com/ajiva/image/upload/v1568641919/profile-pic.jpg"
  },
  {
      name: "Etok Blessing",
      slackUsername: "SlackUsername: @Edi",
      stack: "Front end",
      workDone: "Document analysis footer",
      a1: "https://mobile.twitter.com/session/new",
      a2: "https://www.instagram.com/p/B1Umx1uFP2C/?igshid=94ytkwyg1t4t",
      a3: "https://www.linkedin.com/feed/",
      a4: "https://free.facebook.com/?hrc=1&refsrc=http%3A%2F%2Ffree.facebook.com%2F&_rdr",
      imgUrl: "https://res.cloudinary.com/el-beracah/image/upload/v1566893213/67973790_479745906182578_7630307018294191377_n.jpg_dmmkmn.jpg"
  },
  {
      name: "Habeeb Awoyemi",
      slackUsername: "SlackUsername: @habeeb_ability",
      stack: "Front End",
      workDone: "designed and arranged the landing page",
      a1: "https://twitter.com/habeebability",
      a2: "https://www.instagram.com/habeebability/",
      a3: "https://www.linkedin.com/in/awoyemi-habeeb-795937172/",
      a4: "https://facebook.com/habeeb.ability",
      imgUrl: "https://res.cloudinary.com/habeebability/image/upload/v1554381379/habeebability_pic.jpg"
  },
  {
      name: "Martini Mabifa",
      slackUsername: "SlackUsername: @Martini Mabifa",
      stack: "Front End",
      workDone: "About Page",
      a1: "https://twitter.com/MartiniDeen",
      a2: "https://www.instagram.com/martinideen/?hl=en",
      a4: "https://www.facebook.com/martini.mabifa?ref=bookmarks",
      imgUrl: "https://res.cloudinary.com/martinideen/image/upload/c_scale,h_192,w_192/v1566761204/Martini_For_Real_zppc1k.jpg"
  },
  {
      name: "Oko-Ose Onolunose Hannah",
      slackUsername: "SlackUsername: @Onolunose",
      stack: "Front End",
      workDone: "Data Analysis",
      a1: "https://twitter.com/ono_hannah",
      imgUrl: "https://res.cloudinary.com/onose/image/upload/v1571412582/Ono/j5wdvxagvqr2rvthbfzr.jpg"
  },
  {
      name: "Abiodun Olushola",
      slackUsername: "SlackUsername: @Coded_Savage",
      stack: "Front end",
      workDone: "File Upload page",
      a4: "https://mobile.facebook.com/olasumbo.afolabi.18?ref=wizard",
      imgUrl: "https://res.cloudinary.com/olasumboeniola/image/upload/v1571408198/FB_IMG_15700193231610244_tffkyv.jpg"
  },
  {
      name: "Osunkunle Olanrewaju",
      slackUsername: "SlackUsername: @lario",
      stack: "Front End",
      workDone: "Text Comparison Page",
      a1: "https://twitter.com/lario_lee0",
      a2: "https://www.instagram.com/lario_lee/?hl=en",
      a3: "https://www.linkedin.com/in/osunkunle-olanrewaju-841307129/",
      a4: "https://web.facebook.com/larioscophobia",
      imgUrl: "https://res.cloudinary.com/dtbjhs8a6/image/upload/v1571405356/samples/lario/qqov6cplw8qs7uosewx7.jpg"
  },
  {
      name: "Segun Olanitori",
      slackUsername: "SlackUsername: @SegunOS",
      stack: "Front End",
      workDone: "Team page 2",
      a1: "https://twitter.com/segun_os",
      a2: "https://instagram.com/segun_os",
      imgUrl: "https://res.cloudinary.com/dowrygm9b/image/upload/v1570267346/IMG_6894-1_ykvrgg.jpg"
  },
  
  {
      name: "Tosan Lodge",
      slackusername: "SlackUsername: @TosanLodge",
      stack: "Front End ",
      workDone: "About Us page ",
      a1: "https://twitter.com/lodgendury?s=09",
      a3: "https://www.linkedin.com/in/tosan-lodge-084b20125",
      imgUrl: "https://res.cloudinary.com/lodgendury/image/upload/v1571417716/20181113_213452_cfhslm.jpg"
  },
  {
      name: "Abiodun Olushola",
      slackUsername: "SlackUsername: @eshjay",
      stack: "Front end",
      workDone: "About Us",
      a1: "https://twitter.com/holushola",
      a3: "https://linkedin.com/in/Abiodun2050",
      a4: "https://Facebook.com/eshjaylee",
      imgUrl: "https://res.cloudinary.com/dlqceb87c/image/upload/v1566503590/shola_grav_het1lf.jpg"
  },
  {
      name: "Adekunte Tolulope",
      slackUsername: "SlackUsername: @adtrex",
      stack: "Front End",
      workDone: "Image link Url, Header and Footer Update",
      a1: "https://twitter.com/AdtrexOfficial",
      a2: "https://www.instagram.com/official_adekunte123/",
      a3: "https://www.linkedin.com/in/tolulope-adekunte-8a2891185/",
      a4: "https://web.facebook.com/Adtrex.Official",
      imgUrl: "https://pbs.twimg.com/profile_images/1092875947756437507/HTY2WmLx_400x400.jpg"
  },
  {
      name: "Adenike Salau",
      slackUsername: "SlackUsername: @AdemiAde",
      stack: "Front end",
      workDone: "Text comparison page",
      a1: "https://twitter.com/_AdemiAde",
      a2: "https://www.instagram.com/ademi64/",
      a3: "https://www.linkedin.com/in/adenike-salau-118a55164",
      imgUrl: "https://res.cloudinary.com/adenike/image/upload/v1571418297/1_eiunzt.jpg"
  },
  {
      name: "Ogidiagba Henry Oghenetejiri",
      slackUsername: "SlackUsername: @Henry Teejay",
      stack: "Front End",
      workDone: "Team Page",
      a1: "https://twitter.com/henry_teejay",
      a2: "https://www.instagram.com/henry_teejay/?hl=en",
      a3: "https://www.linkedin.com/in/henry-ogidiagba-a77721191/",
      a4: "https://web.facebook.com/henry.teejay1",
      imgUrl: "https://res.cloudinary.com/dlkp3rtps/image/upload/v1571404933/paassport_tj_ukba4v.jpg"
  },
  {
    
      name: "Olawale Esan",
      slackUsername: "SlackUsername: @ElijahWale",
      stack: "Front end",
      workDone: "Homepage",
      a1: "https://mobile.twitter.com/OlawaleElijah3",
      a2: "https://www.instagram.com/elijah_wale/?hl=en",
      a4: "https://m.facebook.com/olawaleesa",
      imgUrl: "https://res.cloudinary.com/elijahwale/image/upload/v1571405763/20180218_133219_ttgxkt.jpg"
  },
  {
      
      name: "Saudat Salawudeen",
      slackUsername: "SlackUsername: @Omobola",
      stack: "Front end",
      workDone: "I review the codes and upload images to cloudinary for efficiency",
      imgUrl: "https://res.cloudinary.com/omobola/image/upload/v1566608564/StartNG/Saudat.png"
  },
  {
      name: "Soares Dolapo Paul",
      slackUsername: "SlackUsername: @Soares Dolapo Paul",
      stack: "Front End",
      workDone: "About us Page",
      imgUrl: "https://res.cloudinary.com/soares04/image/upload/v1566492008/uxxbl8xkagqeo9h00pl8.jpg"
  },
  {
      name: "Ndajem Nora ",
      slackUsername: "SlackUsername: @kingz",
      stack: "Front end ",
      workDone: "Homepage ",
      a3: "https://www.linkedin.com/in/nora-ndajem-a699aa98",
      a4: "https://www.facebook.com/nora.king.5209",
      imgUrl: "https://res.cloudinary.com/nnonornora/image/upload/v1571415194/IMG_20190624_100838_6_c2j4tr.jpg"
  },
  
  {
      name: "Onyeme Michael ",
      slackUsername: "SlackUsername: @Mykel",
      stack: "Front end ",
      workDone: "File upload page and update index.html",
      a1: "https://twitter.com/MichaelOnyeme?s=08",
      a2: "https://www.instagram.com/onyememichael/",
      a3: "https://www.linkedin.com/in/onyeme-michael-6b1589196/",
      a4: "https://m.facebook.com/onyeme.michael.7",
      imgUrl: "https://pbs.twimg.com/profile_images/825105787467026436/0GILl_nN_400x400.jpg"
  },
  
  {
      name: "Abdullahi Luqman Olanrewaju",
      slackUsername: "SlackUsername: @Luqmonac",
      stack: "Front end",
      workDone: "About Us Page",
      a1: "https://twitter.com/luqmonac56",
      a2: "https://www.instagram.com/luqmonac_/",
      a3: "https://www.linkedin.com/in/luqman-abdullahi-54b1b118b/",
      a4: "https://www.facebook.com/harbdullahi.luqmorn",
      imgUrl: "https://res.cloudinary.com/luqmonac56/image/upload/v1571416406/IMG-20190331-WA0006_mo6bmh.jpg"
  },
  {
      
      name: "Abdulrahman Yusuf",
      slackUsername: "SlackUsername: @Young-Einstein",
      stack: "Front end",
      workDone: "Navbar-2",
      a1: "https://twitter.com/zaydabdulrahman",
      a3: "https://www.linkedin.com/in/abdulrahman-yusuf-a44463176",
      a4: "https://facebook.com/damilola.yusuf.96",
      imgUrl: "https://res.cloudinary.com/young-einstein/image/upload/v1567517232/passport_cjsegl.jpg"
  },
  
  {
    
      name: "Abraham Harold ",
      slackUsername: "SlackUsername: @Haroldfr3shboss ",
      stack: "Front end",
      workDone: "Team Comparison page ",
      a1: "https://www.twitter.com/haroldfr3shboss",
      a2: "https://www.instagram.com/haroldfr3shboss/",
      a3: "https://www.linkedin.com/in/abraham-harold-pmec-0ab799b3/",
      a4: "https://m.facebook.com/haroldfr3shboss",
      imgUrl: "https://res.cloudinary.com/haroldb/image/upload/v1566662471/My_Photo_qjo6xz.jpg"
  },
  {
   
      name: "Adaeze Imegwu",
      slackUsername: "SlackUsername: @ladyboss123",
      stack: "Front end",
      workDone: "About Page",
      a1: "https://twitter.com/adaeze123_",
      a2: "https://www.instagram.com/adaeze123_/",
      a3: "https://www.linkedin.com/in/adaeze-imegwu-10526330/",
      a4: "https://web.facebook.com/adaeze.nwachukwu.imegwu16",
      imgUrl: "https://res.cloudinary.com/adaeze123/image/upload/v1566518405/myfacepicture_fcjp8m.jpg"
  },
  {
      name: "Amodu Ola-adewale",
      slackUsername: "SlackUsername: @sidebone",
      stack: "Front end",
      workDone: "About page",
      a1: "https://twitter.com/I_Am_Amodu/status/1162042614167810050?s=08",
      a2: "https://www.instagram.com/?hl=en",
      a3: "https://www.linkedin.com/",
      a4: "https://m.facebook.com/?hrc=1&refsrc=http%3A%2F%2Fwww.google.com%2F&_rdr",
      imgUrl: "https://res.cloudinary.com/sidebone/image/upload/v1566557645/arleuyaxygdgarwsvrha.jpg"
  },
  {
      name: "Bisiriyu Daniel",
      slackUsername: "SlackUsername: @leye",
      stack: "Front end",
      workDone: "About us page",
      a1: "https://twitter.com/ola_leye_",
      a2: "https://www.instagram.com/danielbisiriyu/?hl=en",
      imgUrl: "https://res.cloudinary.com/olaleye247/image/upload/v1571407030/passport_akcscg.jpg"
  },
  {
      
      name: "Chibueze Arinze",
      slackUsername: "SlackUsername: @TheCavemann",
      stack: "Front end",
      workDone: "Linking Pages",
      a1: "https://twitter.com/The_Cavemann",
      a2: "https://www.instagram.com/_arinzee/",
      a3: "https://www.linkedin.com/in/arinze-chibueze-876127188/",
      imgUrl: "https://res.cloudinary.com/dzwtycmnl/image/upload/v1566590092/IMG_2602_osa6ad.jpg"
  },
  {
    
      name: "David Chinweike",
      slackUsername: "SlackUsername: @Dave",
      stack: "Front end",
      workDone: "Comparison algorithm",
      a1: "https://mobile.twitter.com/lil_Dave1379",
      a3: "https://www.linkedin.com/in/dave-chinweike-7b448418b",
      a4: "https://m.facebook.com/dave.chinweike.3",
      imgUrl: "https://res.cloudinary.com/chidi6ix/image/upload/v1571407468/IMG_20190909_152905_EDIT_1_tppov7.jpg"
  },
  {
     
      name: "Emeka Oluwaseun Jonas",
      slackUsername: "SlackUsername: @Ecstasy",
      stack: "Front end",
      workDone: "Team Page",
      a1: "https://mobile.twitter.com/emeka_jns",
      a2: "https://www.instagram.com/emyjonas/",
      a3: "https://www.linkedin.com/in/emeka-jonas-47740193",
      a4: "https://m.facebook.com/digitaljonasemmie",
      imgUrl: "https://res.cloudinary.com/ecstasy/image/upload/v1571409691/Passport/IMG_20190817_183732_veknsq.jpg"
  },
  {
      
      name: "Hafizah muhyideen",
      slackUsername: "SlackUsername: @hafizaaah",
      stack: "Front end",
      workDone: "Footer",
      a1: "https://www.twitter.com/strictyfiza",
      a2: "https://www.instagram.com/ha_fizaah_",
      a4: "http://www.facebook.com/hafizah.muhyideen7",
      imgUrl: "https://res.cloudinary.com/hafizah/image/upload/v1566627089/Snapchat-733321432_3_ode4vf.jpg"
  },
  {
      
      name: "Henry Adeyemi",
      slackUsername: "SlackUsername: @yugach",
      stack: "Front end",
      workDone: "Header and Footer fix",
      a1: "https://twitter.com/yugach?p=s",
      a2: "https://instagram.com/oluwayugach/",
      a3: "https://www.linkedin.com/in/adeyemi-henry-1b9413158",
      a4: "https://facebook.com/adeyemi.henry1",
      imgUrl: "https://res.cloudinary.com/yugach/image/upload/v1571404456/yugach_wn6y2u.jpg"
  },
  {
      
      name: "Idowu Festus Temiloluwa",
      slackUsername: "SlackUsername: @Nobledev",
      stack: "Front end",
      workDone: "Document Analysis Page",
      a1: "https://twitter.com/Mcnobledev",
      a2: "https://www.instagram.com/temiloluwafestus/",
      a3: "https://www.linkedin.com/in/festus-idowu-8269b3159/",
      a4: "https://www.facebook.com/temiloluwa.festus",
      imgUrl: "https://res.cloudinary.com/mcnoble/image/upload/v1566593070/StartNG/festus_g91ynv.webp"
  },
  {
     
      name: "Idris",
      slackUsername: "SlackUsername: @Aboogeeky",
      stack: "Front End",
      workDone: "About Us Page",
      a1: "http://www.Twitter.com/aboogeeky",
      imgUrl: "https://res.cloudinary.com/aboogeeky/image/upload/v1566541703/passport_hcist5.jpg"
  },
  {

      name: "Emeka Oluwaseun Jonas",
      slackUsername: "SlackUsername: @IGOBO",
      stack: "Front end",
      workDone: "footer",
      a1: "https://www.twitter.com/igobojoshua",
      a2: "https://instagram.com/joshua10043",
      a3: "https://www.linkedin.com/in/igobo-joshua-f-219072167",
      a4: "https://www.facebook.com/igobo.joshua",
      imgUrl: "https://res.cloudinary.com/sima-inc/image/upload/v1566541929/samples/igoboSTNG_l7vvm4.jpg"
  },
  {
      name: "Joshua Odejide",
      slackUsername: "SlackUsername: @Joshua Odjide",
      stack: "Frontend",
      workDone: "Upload page 2",
      a1: "https://mobile.twitter.com/JOdejide",
      a2: "https://www.instagram.com/sir_novo/",
      a4: "https://m.facebook.com/joshua.odejide?ref=bookmarks",
      imgUrl: "https://res.cloudinary.com/joshualoni2/image/upload/v1571407100/IMG-20190629-WA0011_s2kswp.jpg"
  },
 
  {
      
      name: "Mercy Nwamara ",
      slackUsername: "SlackUsername: @Mercy Nwamara ",
      stack: "Frontend",
      workdone: "Footer and Header fix ",
      a1: "https://twitter.com/itsmercie?s=09",
      a3: "https://www.linkedin.com/in/mercy-nwamara-334379b4",
      imgUrl: "https://res.cloudinary.com/memz/image/upload/v1571403771/IMG-20190411-WA0026_ejbgow.jpg"
  },
 
  {
      
      name: "Miracle Alex",
      slackUsername: "SlackUsername: @Miracle",
      stack: "Frontend",
      workDone: "About Us page ",
      a1: "https://twitter.com/mirakul_1",
      a2: "https://www.instagram.com/mirakul_1/",
      a3: "https://linkedin.com/in/mirakul1",
      a4: "https://www.facebook.com/mirakuul/",
      imgUrl: "https://res.cloudinary.com/mirakul1/image/upload/ar_1:1,c_fill,e_art:hokusai,g_auto,w_416/v1570188521/oe4mjfk792exqjpzwkxz.jpg"
  },
  {
      name: "Oghenebrume Kofi Oghenetega",
      slackUsername: "SlackUsername: @tegakay",
      stack: "Frontend",
      workDone: "Docufix about us",
      a1: "https://twitter.com/tega_kay",
      a2: "https://www.instagram.com/p/B155eBRnSD4/?igshid=i3kzuj4ebq8",
      a3: "https://notonlinkedin.com",
      a4: "https://notonfacebook.com",
      imgUrl: "https://pbs.twimg.com/profile_images/1054655132489654272/SIxTikFG_400x400.jpg"
  },
  {
     
      name: "oluwadamilare Alonge",
      slackUsername: "SlackUsername: @Maphorbs",
      stack: "Frontend",
      workDone: "Team page",
      a1: "https://mobile.twitter.com/Dreman3082",
      a2: "https://www.instagram.com/dare3082/",
      a3: "https://www.linkedin.com/in/oluwadamilare-alonge-b989b812b",
      a4: "https://m.facebook.com/damilare.alonge1",
      imgUrl: "https://res.cloudinary.com/maphorbs/image/upload/v1571404331/IMG_20190824_183700_ec93wk.jpg"
  },
  {
     
      name: "Omeokwe Asobie",
      slackUsername: "SlackUsername: @Asobank",
      stack: "Frontend",
      workDone: "Update content on homepage",
      imgUrl: "https://res.cloudinary.com/omyasobie/image/upload/v1569340436/omi_ief366.jpg"
  },
  {
    name: "Cindy Shontan ",
    slackUsername: " SlackUsername: @CindySho",
    stack: "Design ",
    workDone: "Designed the \"our team\" page",
    a1: "https://twitter.com/CindySho_?s=03",
    a2: "https://www.instagram.com/cinamide_/",
    a3: "https://www.linkedin.com/in/cindy-shontan-164468110",
    imgUrl: "https://res.cloudinary.com/cindyshontan/image/upload/v1566550689/txojypnvyzoonwkmaota.jpg"
},

  {
      name: "Patience Akpan",
      slackUsername: "SlackUsername: @peshie",
      stack: "Frontend",
      workDone: "File upload page",
      a1: "https://mobile.twitter.com/peshie01",
      a2: "https://www.instagram.com/peshie01/?hl=en",
      a3: "https://www.linkedin.com/in/patience-akpan-1442b510a",
      a4: "https://m.facebook.com/patchizzy",
      imgUrl: "https://res.cloudinary.com/patience/image/upload/v1566544234/peshie.jpg"
  },
  {
     
      name: "Precious Akams",
      slackUsername: "SlackUsername: @precious de wonder woman",
      stack: "FrontEnd",
      workDone: "Navigation bar",
      a1: "https://twitter.com/precious_akams",
      a2: "https://instagram.com/preciousakams",
      a3: "https://www.linkedin.com/in/onyeagoziri-akams-8290a884",
      a4: "https://web.facebook.com/precious.akams",
      imgUrl: "https://res.cloudinary.com/wonderwoman/image/upload/v1571413682/docufix/cloudinary_krfskf.jpg"
  },
  
  {
      
      name: "Salawu AbdulMalik Adewale the",
      slackUsername: "SlackUsername: @saintmalik",
      stack: "Frontend",
      workDone: "SEO optimization and some few coding",
      a1: "https://twitter.com/saintmalik_",
      a2: "https://instagram.com/iamsaintmalik_",
      a3: "https://www.linkedin.com/in/saintmalik",
      a4: "https://facebook.com/salawu.malik16",
      imgUrl: "https://res.cloudinary.com/saintmalik/image/upload/v1566558378/u9q6wxtekw0dv5p8hn2i.jpg"
  },
  {
    
      name: "Tomisin Ajayi",
      slackUsername: "SlackUsername: @tomisinAjayi",
      stack: "frontend",
      workDone: "Document analysis page ",
      a1: "https://twitter.com/tomiajayi_",
      imgUrl: "https://res.cloudinary.com/tomisin/image/upload/c_scale,h_177,w_138/v1571413110/tomisin_ebjcqo.png"
  },
  {
      
      name: "Yusuf Adeyemo",
      slackUsername: "SlackUsername: @Cypher",
      stack: "Frontend",
      workDone: "File Upload Page",
      a1: "https://twitter.com/marshaladex",
      a2: "https://www.instagram.com/marshaladex/?hl=en",
      a3: "https://www.linkedin.com/in/yusuf-adeyemo-b3476a13a/",
      a4: "https://www.facebook.com/Marshaladex",
      imgUrl: "https://res.cloudinary.com/cypher/image/upload/v1566537651/Yusuf_zrin2n.jpg"
  },
  
  {
      
      name: "Bankole Adejuwon ",
      slackUsername: "SlackUsername: @ositubanky",
      stack: "Frontend ",
      workDone: "Team page",
      a1: "https://mobile.twitter.com/home?logout=1571414921177",
      a2: "https://www.instagram.com/adejuwonbankole/",
      a4: "https://m.facebook.com/?hrc=1&refsrc=http%3A%2F%2Fh.facebook.com%2Fhr%2Fr&_rdr",
      imgUrl: "https://res.cloudinary.com/ositu/image/upload/v1571414130/bankole/banks_llrq1m.jpg"
  },
  {
     
      name: "Emmanuel Chigozie Ihejirika ",
      slackUsername: "SlackUsername: @Dev Chibris ",
      stack: "Frontend ",
      workDone: "Document Analysis ",
      a1: "https://twitter.com/ihejirika07",
      imgUrl: "https://res.cloudinary.com/dxonc8cxc/image/upload/v1566546938/Chigozie_i5bkw8.jpg"
  },
  {
    
      name: "Godwin Ikott",
      slackUsername: "SlackUsername: @Geedee",
      stack: "Frontend ",
      workDone: "Homepage ",
      a1: "http://www.twitter.com/geedeewain",
      a2: "http://www.instagram.com/geedeewain",
      a3: "http://www.linkedin.com/godwinikott",
      imgUrl: "https://res.cloudinary.com/geedee/image/upload/v1571420489/IMG_20190311_075802_315_hi0dii.jpg"
  },
  {
      name: "Michelle Nwachukwu ",
      slackUsername: "SlackUsername: @Michelle Nwachukwu ",
      stack: "Frontend ",
      workDone: "Document Analysis Page ",
      a1: "https://mobile.twitter.com/Nanyabooks",
      a2: "https://www.instagram.com/_miichey/",
      a3: "https://www.linkedin.com/in/michelle-nwachukwu-b95775176",
      imgUrl: "https://res.cloudinary.com/michelle300/image/upload/v1566599180/81EBDAE3-32FE-4C3D-B237-EC19C38207F8_na3ccj.jpg"
  },
  
  {
      name: "CHIEGANG SAPE BULCARD BRANDONE",
      slackUsername: "SlackUsername: @Brandone_Sape",
      stack: "Frontend developer",
      workDone: "I worked on the footer ",
      a1: "https://mobile.twitter.com/tjrsape",
      imgUrl: "https://res.cloudinary.com/sape123/image/upload/v1571408607/IMG_20190518_183300_785_500x466_2_sykpju.jpg"
  },
  {
      
      name: "okoye moses ebuka",
      slackUsername: "SlackUsername: @gentlebukan",
      stack: "frontend developer",
      workDone: "text comparison page 2",
      a1: "https://twitter.com/Bukan_moses",
      a2: "https://instagram.com/Bukan_moses",
      a3: "https://www.linkedin.com/in/okoye-moses-ebuka-a417b614b/",
      a4: "https://www.facebook.com/okoye.moses.14",
      imgUrl: "https://res.cloudinary.com/ebukamoses/image/upload/v1570259839/MY%20PERSONAL%20PIX/DSC_1948_gb8tjn.jpg"
  },
  {
      name: "Okonye Tochi ",
      slackUsername: "SlackUsername: @Tochi",
      stack: "Frontend ",
      workdone: "Analysis page footer",
      a1: "https://mobile.twitter.com/Okonyetochi",
      a2: "https://www.instagram.com/okonyetochi",
      a3: "https://www.linkedin.com/in/okonyetochi",
      imgUrl: "https://res.cloudinary.com/dvqlwtdpk/image/upload/v1571414014/81A550CC-DF2C-4715-8107-368B3027FBB4_byznsq.jpg"
  },
  {
      name: "Iwuoha Chimezie Solomon",
      slackUsername: "SlackUsername: @iwuoha chimezie solomon",
      stack: "Frontend/mobile web specialist",
      workDone: "About us page",
      a1: "https://twitter.com/6e3c25b935fd489",
      a2: "https://www.instagram.com/chimezie.solomon/",
      a3: "https://www.linkedin.com/in/chimezie-solomon-iwuoha-tos-33699415b/",
      a4: "https://www.facebook.com/chimezie.solomon1",
      imgUrl: "https://res.cloudinary.com/chimeziesolomon/image/upload/v1571403236/mypic.png_eq6fzr.jpg"
  },
  {
      name: "Tolulope David ",
      slackUsername: "SlackUsername: @Tolulope_David",
      stack: "Backend ",
      workDone: "Text comparison page ",
      a1: "https://mobile.twitter.com/toluwa_david",
      a3: "https://www.linkedin.com/in/tolulope-david-7a2077195",
      a4: "https://m.facebook.com/?_rdr",
      imgUrl:"https://pbs.twimg.com/profile_images/559637048030953473/saIYHqN8_400x400.jpeg"
  }


      
      
     ];
    
    

    
     displayTeam(teamArr);

    //  users.forEach(user => scroll(user, 'bottom'))
     
    
    