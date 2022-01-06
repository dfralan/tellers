function kiujdgrsghsss(){
    //teller element where instructions are made
    const tellerTag = document.getElementsByTagName("teller")[0]
    //Languages
    var clientLang = 'en';
    var userLang = 'en';
    //Displayed Box or not
    var displayedBox = false;
    //Already interacted Box or not
    var interacted = false;
    //Ready to fetch
    var emotionSelected= false;
    var messageReady = false;
    var emailReadyTeller = false;
    var lockAndLoudTeller=false;
    //User input data
    var emotionTeller = "";
    var messageTeller = "";
    var emailTeller = "";
    //Color Palette
    const almostBlack = '#0D1418';
    const realWhite = '#FFFFFF';
    const nebulaGrey = '#E8E8E8';
    const realGrey = '#808080';
    const charmingGrey = '#2A2F32';
    const messengerBlue = '#0384FF';
    const wspGreen = '#03D79C';
    const telegramBlue = '#2AA2C6';
    //Platform Buttons
    const feedbackMainButton = '<svg id="buttonFeedbackBrick" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 50 50" style="overflow:visible;enable-background:new 0 0 50 50;" xml:space="preserve"><rect class="transparentBG" y="0" width="50" height="50"/><path id="feedbackIconShape" d="M25,0C11.2,0,0,11.2,0,25s11.2,25,25,25c13.8,0,25-11.2,25-25S38.8,0,25,0z M16,20.9c-1,0-1.9-0.9-1.9-1.9 s0.9-1.9,1.9-1.9c1,0,1.9,0.9,1.9,1.9S17,20.9,16,20.9z M25.1,33c-6.3,0-7.6-5.2-7.6-5.3c-0.1-0.2,0-0.4,0.1-0.6 c0.1-0.2,0.3-0.3,0.5-0.3h13.8c0.2,0,0.4,0.1,0.7,0.3c0.1,0.2,0.1,0.4,0.1,0.6C32.7,27.8,31.6,33,25.1,33z M34,20.9	c-1,0-1.9-0.9-1.9-1.9s0.9-1.9,1.9-1.9c1,0,1.9,0.9,1.9,1.9S35,20.9,34,20.9z"/></svg>'
    const messengerMainButton = '<svg id="buttonMessengerBrick" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 50 50" style="overflow:visible;enable-background:new 0 0 50 50;" xml:space="preserve"><rect class="transparentBG" y="0" width="50" height="50"/><path id="messengerIconShape" d="M25,0C11.5,0,0.5,11.1,0.7,24.5c0.1,6.8,3,12.9,7.5,17.3c0.5,0.5,0.8,1.2,0.8,1.9v4.1c0,1.5,1.6,2.6,3.1,1.9 l4.5-2c0.6-0.3,1.2-0.3,1.8-0.1c2,0.6,4.3,0.9,6.5,0.9c13.3,0,24.3-10.9,24.3-24.2C49.2,10.9,38.3,0,25,0z M40,18.5l-7.2,11.4	c-1.2,1.8-3.7,2.3-5.5,1.1l-2-1.4l-3.6-2.5c-0.7-0.5-1.6-0.4-2.2,0.1l-7.2,5.9c-1.2,0.9-2.7-0.5-1.9-1.7L17.5,20c1.2-1.8,3.7-2.3,5.5-1.1l3,2.1l2.6,1.9c0.7,0.5,1.6,0.4,2.2-0.1l7.2-5.9C39.2,15.9,40.8,17.3,40,18.5z"/></svg>';
    const wspMainButton = '<svg id="buttonWhatsappBrick" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 50 50" style="overflow:visible;enable-background:new 0 0 50 50;" xml:space="preserve"><rect class="transparentBG" width="50" height="50"/><path id="whatsappIconShape" d="M42.5,7.4c-4.7-4.6-10.9-7.2-17.6-7.2C11.2,0.2,0,11.3,0,25.1c0,4.7,1.4,9.3,3.8,13.2l0.6,0.9l-2.5,9.2l9.4-2.5	l0.9,0.5c3.8,2.3,8.2,3.5,12.7,3.5C38.6,49.8,50,38.7,50,24.9C50,18.3,47.2,12.1,42.5,7.4z M39.5,35.7c-0.6,1.8-3.6,3.3-5,3.6	c-2.4,0.3-4.2,0.2-9-1.9C18,34.2,13.1,26.6,12.8,26.1c-0.3-0.5-3-4.1-3-7.7s1.9-5.4,2.6-6.3c0.6-0.7,1.5-0.9,2-0.9s1,0,1.5,0 c0.4,0,1-0.2,1.7,1.3c0.6,1.5,2.1,5.1,2.3,5.5c0.2,0.4,0.3,0.8,0.1,1.3c-1.5,2.8-2.9,2.7-2.2,4.1c2.9,4.9,5.8,6.7,10.1,8.9 c0.7,0.4,1.2,0.3,1.6-0.2c0.4-0.5,1.9-2.2,2.4-2.9c0.5-0.7,1-0.6,1.7-0.4c0.6,0.2,4.4,2.1,5.1,2.4c0.7,0.4,1.3,0.5,1.5,0.8 C40.2,32.5,40.2,33.9,39.5,35.7z"/></svg>';
    const telegramMainButton = '<svg id="buttonTelegramBrick" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 50 50" style="overflow:visible;enable-background:new 0 0 50 50;" xml:space="preserve"><rect class="transparentBG" width="50" height="50"/><path id="telegramIconShape" d="M25,0C11.2,0,0,11.2,0,25s11.2,25,25,25s25-11.2,25-25S38.8,0,25,0z M36.9,16.3c-0.1,1-0.7,4.6-1.2,8.4L33.9,36	c0,0-0.1,1.7-1.4,2c-1.2,0.3-3.3-1-3.6-1.3c-0.3-0.2-5.4-3.5-7.3-5.1c-0.5-0.4-1.1-1.3,0.1-2.3c2.6-2.4,5.7-5.3,7.6-7.2	c0.9-0.9,1.7-2.9-1.9-0.4l-10.2,6.9c0,0-1.2,0.7-3.3,0.1C11.7,27.9,9.2,27,9.2,27s-1.8-1.1,1.2-2.2l16.8-6.9c1.7-0.7,7.3-3,7.3-3 S37.1,13.9,36.9,16.3z"/></svg>';
    const wspSendButtonIcon = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 50 50" style="overflow:visible;enable-background:new 0 0 50 50;" xml:space="preserve"><rect class="transparentBG" width="40" height="40"/><polygon id="wspSendButtonSVG" points="21.6,15.3 12.3,11 12.3,17.9 21.8,19.6 12.3,21.4 12.3,28.3 21.6,24 31,19.6 	"/></svg>'
    const messengerSendButtonIcon = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="29px" height="29.8px" viewBox="0 0 29 29.8" style="overflow:visible;enable-background:new 0 0 29 29.8;" xml:space="preserve"><path id="messengerIconFull" d="M14.5,0C6.4,0-0.1,6.6,0,14.6c0,4.1,1.8,7.7,4.5,10.3C4.8,25.3,5,25.7,5,26.1v2.4c0,0.9,1,1.6,1.8,1.2l2.7-1.2c0.4-0.2,0.7-0.2,1.1-0.1c1.2,0.3,2.6,0.5,3.9,0.5c8,0,14.5-6.5,14.5-14.5C29,6.5,22.5,0,14.5,0z M23.5,11.1l-4.3,6.8c-0.7,1.1-2.2,1.4-3.3,0.6l-1.2-0.9l-2.1-1.5c-0.4-0.3-0.9-0.3-1.3,0l-4.3,3.5c-0.7,0.6-1.7-0.3-1.2-1l4.3-6.8c0.7-1.1,2.2-1.4,3.3-0.6l1.8,1.3l1.6,1.1c0.4,0.3,0.9,0.3,1.3,0l4.3-3.5C23,9.5,24,10.3,23.5,11.1z"/></svg>'
    const telegramSendButtonIcon = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 50 50" style="overflow:visible;enable-background:new 0 0 50 50;" xml:space="preserve"><rect class="transparentBG" width="40" height="40"/><path id="telegramSendButtonSVG" d="M27.5,19.2l-13.5-6.9c-0.6-0.3-1.4,0.2-1.3,0.9l0.7,5c0.1,0.4,0.4,0.7,0.7,0.7l7.7,0.8c0.2,0,0.2,0.4,0,0.4L14.2,21c-0.4,0-0.7,0.3-0.7,0.7l-0.7,5c-0.1,0.7,0.6,1.2,1.3,0.9l13.5-6.9C28.2,20.5,28.2,19.5,27.5,19.2z"/></svg>'
    const tellerSmallA = '<b><a target="_blank" href="https://www.unirvana.com/teller">Teller<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="22px"	 height="14.6px" viewBox="0 0 22 14.6" style="overflow:visible;enable-background:new 0 0 22 14.6;" xml:space="preserve"><style type="text/css">	.stayPlane{fill:'+userColor()+';}</style><defs></defs><path class="stayPlane" d="M5.1,6l14.5-5.9C19.9,0,20.1,0.3,20,0.5l-9.1,14c-0.1,0.2-0.5,0.1-0.5-0.1L10,7.5c0-0.1-0.1-0.2-0.2-0.3L5.2,6.5C4.9,6.5,4.9,6.1,5.1,6z"/><line class="transparentBG" x1="22" y1="0" x2="0" y2="0"/></svg></a></b>'
    //Feedback URL variables
    var ffu = "";//feedbackFormUrl
    var entryA = "";//Emotion
    var entryB = "";//Email
    var entryC = "";//Message
    var entryD = "";//Date
    //Date data
    var roundingHour = new Date().getHours();
    var dateTeller = new Date();
    //Regex section
    const regexMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regexHourInterval = /^([0-1]?[0-9]|2?[0-3]|[0-9])[:\-\/]([0-1]?[0-9]|2?[0-3]|[0-9])$/;
    const regexMsg = /^[\a-zA-Z\d\s:\u00C0-\u00FF.,¡!¿?]+$/;
    //Elements specified
    var tellerUseWsp = false;
    var tellerUseFeedback = false;
    var tellerUseMessenger = false;
    var tellerUseTelegram = false;
    var displayedSharedComponents = false;
    var numberOfComplements = 0;
    var onlyFeedback = false;
    var onlyMessenger = false;
    var onlyWsp = false;
    var onlyTelegram = false;

    detectClientLang();
    detectUserLang();
    detectBrowser();
    complementsComposer()
    callToActionTeller()

    //Styles sheet/Hoja de estilos
    const styleSheetTeller = '<style>\
    @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;600&display=swap");\
    '+ fixScaleOnIE()+'\
    \
    \
    \
    teller {\
        display:'+ complementsComposer()[2]+';\
        position: fixed!important;\
        z-index: 100000;\
        '+ getSide()[0] +': 30;\
        bottom: 30!important;\
        background-color: transparent!important;\
    }\
    .transparentBG{\
        fill:none !important;\
    }\
    #hoverBrick {\
        display:none;\
        opacity: 0;\
        position: absolute!important;\
        bottom: 60px!important;\
        '+ getSide()[0] +': 0px!important;\
        transition:  .3s !important;\
        -webkit-transition:  .3s !important;\
        -moz-transition:  .3s !important;\
        -o-transition:  .3s !important;\
        filter: drop-shadow(0 0 0.25rem rgba(0,0,0,0.1));\
        border: 1px solid rgba(0,0,0,0.1);\
        border-radius: 5px;\
        width: 190px!important;\
        height: auto!important;\
        padding: 10px 70px 15px 15px;\
        text-align: left;\
        font-weight: 200!important;\
        font-size: small!important;\
        font-family: "Outfit", sans-serif;\
        color: '+  byTheme(charmingGrey,realWhite) +';\
        background-color: '+  byTheme(realWhite,charmingGrey) +'!important;\
    }\
    #hoverBrickClose {\
        position: absolute !important;\
        transition:  .3s !important;\
        -webkit-transition:  .3s !important;\
        -moz-transition:  .3s !important;\
        -o-transition:  .3s !important;\
        right: 10px;\
        top: 10px;\
        width: 20px;\
        height: 20px;\
        background-color: '+ byTheme(charmingGrey,realWhite) +';\
        border-radius: 3px !important;\
    }\
    #hoverBrickClose:hover {\
        opacity: .8;\
    }\
    #buttonFatherBrick {\
        opacity: 1;\
        transition: .3s!important;\
        -webkit-transition: .3s!important;\
        -moz-transition: .3s!important;\
        -o-transition: .3s!important;\
        position: absolute!important;\
        background-color: '+ userColor() +'!important;\
        width: 50px;\
        height: 50px;\
        '+ getSide()[0] +': 0px;\
        bottom: 0px!important;\
        border-radius: '+ userBorderRadius() +'px;\
        filter: drop-shadow(0 0 0.25rem rgba(0,0,0,0.1));\
        border: 1px solid rgba(0,0,0,0.1);\
        cursor: pointer!important;\
    }\
    #buttonFatherBrick svg {\
        transition: .3s!important;\
        -webkit-transition: .3s!important;\
        -moz-transition: .3s!important;\
        -o-transition: .3s!important;\
    }\
    \
    #buttonFatherBrick svg:hover {\
        transform: scale(1.05);\
    }\
    \
    #buttonFeedbackBrick {\
        opacity: 1;\
        display: inline-block\
        transition: .3s!important;\
        -webkit-transition: .3s!important;\
        -moz-transition: .3s!important;\
        -o-transition: .3s!important;\
        background-color: transparent;\
        width: 35px;\
        height: 35px;\
        margin: 7px 7.5px 8px 7.5px;\
        border-radius: none !important;\
        border: none!important;\
        cursor: pointer!important;\
    }\
    #buttonFeedbackBrick:hover {\
        transform: scale(1.05);\
    }\
    \
    #feedbackIconShape{/* \
        stroke:rgba(0, 0, 0, 0.2);\
        stroke-width:.5;\
        stroke-miterlimit:10; */\
        transition: .3s!important;\
        -webkit-transition: .3s!important;\
        -moz-transition: .3s!important;\
        -o-transition: .3s!important;\
        fill:'+ byTheme(nebulaGrey,realGrey)+';\
    }\
    #fatherBrick {\
        display: none;\
        opacity: 0;\
        transition: .3s!important;\
        -webkit-transition: .3s!important;\
        -moz-transition: .3s!important;\
        -o-transition: .3s!important;\
        font-family: "Outfit", sans-serif;\
        position: absolute!important;\
        background-color:'+byTheme(realWhite,charmingGrey)+'!important;\
        width: 340px!important;\
        height: 200px;\
        '+ getSide()[0] +': 0px!important;\
        bottom: 70px!important;\
        border-radius: 5px;\
        transform: translateY(10px);\
        filter: drop-shadow(0 0 0.25rem rgba(0,0,0,0.1));\
        border: 1px solid rgba(0,0,0,0.1);\
    }\
    #xBrick {\
        opacity: 0;\
        transition: .3s!important;\
        -webkit-transition: .3s!important;\
        -moz-transition: .3s!important;\
        -o-transition: .3s!important;    \
        fill:'+  byTheme(realWhite,charmingGrey) +';\
        transform: translateX(30px) scaleX(0);\
    }\
    #palomita {\
        opacity: 1;\
        transition: .3s!important;\
        -webkit-transition: .3s!important;\
        -moz-transition: .3s!important;\
        -o-transition: .3s!important;    \
        fill:'+  byTheme(realWhite,charmingGrey) +';\
        transform: scaleX(1);\
    }\
    .questBrick {\
        opacity: 1;\
        transition: .3s!important;\
        -webkit-transition: .3s!important;\
        -moz-transition: .3s!important;\
        -o-transition: .3s!important;\
        fill: #cecece;\
    }\
    #titleBrick {\
        font-weight: 200;\
        color:'+byTheme(almostBlack,realWhite)+'!important;\
        opacity: 1;\
        transition: .3s!important;\
        -webkit-transition: .3s!important;\
        -moz-transition: .3s!important;\
        -o-transition: .3s!important;\
        position: absolute!important;\
        background-color: transparent!important;\
        width: 300px!important;\
        height: auto!important;\
        left: 20px!important;\
        top: 20px!important;\
        text-align: center!important;\
    }\
    #emojisBrick {\
        opacity: 1;\
        transition: .3s!important;\
        -webkit-transition: .3s!important;\
        -moz-transition: .3s!important;\
        -o-transition: .3s!important;\
        position: absolute!important;\
        background-color: transparent!important;\
        width: 300px!important;\
        height: 80px!important;\
        left: 20px!important;\
        top: 60px;\
        text-align: center!important;\
    }\
    #emojiSelectorBrick {\
        opacity: 0;\
        transition: .3s!important;\
        -webkit-transition: .3s!important;\
        -moz-transition: .3s!important;\
        -o-transition: .3s!important;\
        position: absolute!important;\
        background-color: #eaeaeb!important;\
        width: 10px!important;\
        height: 10px!important;\
        left: 25px;\
        transform: rotate(45deg)!important;\
        bottom: -7px!important;\
        text-align: center!important;\
    }\
    #emojiBrick1 {\
        opacity: 0.25;\
        transition: .3s!important;\
        -webkit-transition: .3s!important;\
        -moz-transition: .3s!important;\
        -o-transition: .3s!important;\
        position: absolute!important;\
        background-color: transparent!important;\
        width: 60px!important;\
        height: 80px!important;\
        left: 0!important;\
        top: 0!important;\
        text-align: center!important;\
        cursor: pointer!important;\
    }\
    #emojiBrick1:hover>#emojiDescriptionBrick1 {\
        opacity: 1!important;\
    }\
    #emojiBrick2 {\
        opacity: 0.25;\
        transition: .3s!important;\
        -webkit-transition: .3s!important;\
        -moz-transition: .3s!important;\
        -o-transition: .3s!important;\
        position: absolute!important;\
        background-color: transparent!important;\
        width: 60px!important;\
        height: 80px!important;\
        left: 60px!important;\
        top: 0!important;\
        text-align: center!important;\
        cursor: pointer!important;\
    }\
    #emojiBrick2:hover>#emojiDescriptionBrick2 {\
        opacity: 1!important;\
    }\
    #emojiBrick3 {\
        opacity: 0.25;\
        transition: .3s!important;\
        -webkit-transition: .3s!important;\
        -moz-transition: .3s!important;\
        -o-transition: .3s!important;\
        position: absolute!important;\
        background-color: transparent!important;\
        width: 60px!important;\
        height: 80px!important;\
        left: 120px!important;\
        top: 0!important;\
        text-align: center!important;\
        cursor: pointer!important;\
    }\
    #emojiBrick3:hover>#emojiDescriptionBrick3 {\
        opacity: 1!important;\
    }\
    #emojiBrick4 {\
        opacity: 0.25;\
        transition: .3s!important;\
        -webkit-transition: .3s!important;\
        -moz-transition: .3s!important;\
        -o-transition: .3s!important;\
        position: absolute!important;\
        background-color: transparent!important;\
        width: 60px!important;\
        height: 80px!important;\
        left: 180px!important;\
        top: 0!important;\
        text-align: center!important;\
        cursor: pointer!important;\
    }\
    #emojiBrick4:hover>#emojiDescriptionBrick4 {\
        opacity: 1!important;\
    }\
    #emojiBrick5 {\
        opacity: 0.25;\
        transition: .3s!important;\
        -webkit-transition: .3s!important;\
        -moz-transition: .3s!important;\
        -o-transition: .3s!important;\
        position: absolute!important;\
        background-color: transparent!important;\
        width: 60px!important;\
        height: 80px!important;\
        left: 240px!important;\
        top: 0!important;\
        text-align: center!important;\
        cursor: pointer!important;\
    }\
    #emojiBrick5:hover>#emojiDescriptionBrick5 {\
        opacity: 1!important;\
    }\
    #emojiFaceBrick1 {\
        opacity: 1!important;\
        transition: .3s!important;\
        -webkit-transition: .3s!important;\
        -moz-transition: .3s!important;\
        -o-transition: .3s!important;\
        position: absolute!important;\
        background-color: '+ byTheme(charmingGrey,nebulaGrey) +';\
        width: 40px!important;\
        height: 40px!important;\
        border-radius: 25px;\
        left: 10px!important;\
        top: 10px!important;\
        cursor: pointer!important;\
    }\
    #emojiFaceBrick2 {\
        opacity: 1!important;\
        transition: .3s!important;\
        -webkit-transition: .3s!important;\
        -moz-transition: .3s!important;\
        -o-transition: .3s!important;\
        position: absolute!important;\
        background-color: '+ byTheme(charmingGrey,nebulaGrey) +';\
        width: 40px!important;\
        height: 40px!important;\
        border-radius: 25px;\
        left: 10px!important;\
        top: 10px!important;\
        cursor: pointer!important;\
    }\
    #emojiFaceBrick3 {\
        opacity: 1!important;\
        transition: .3s!important;\
        -webkit-transition: .3s!important;\
        -moz-transition: .3s!important;\
        -o-transition: .3s!important;\
        position: absolute!important;\
        background-color: '+ byTheme(charmingGrey,nebulaGrey) +';\
        width: 40px!important;\
        height: 40px!important;\
        border-radius: 25px;\
        left: 10px!important;\
        top: 10px!important;\
        cursor: pointer!important;\
    }\
    #emojiFaceBrick4 {\
        opacity: 1!important;\
        transition: .3s!important;\
        -webkit-transition: .3s!important;\
        -moz-transition: .3s!important;\
        -o-transition: .3s!important;\
        position: absolute!important;\
        background-color: '+ byTheme(charmingGrey,nebulaGrey) +';\
        width: 40px!important;\
        height: 40px!important;\
        border-radius: 25px;\
        left: 10px!important;\
        top: 10px!important;\
        cursor: pointer!important;\
    }\
    #emojiFaceBrick5 {\
        opacity: 1!important;\
        transition: .3s!important;\
        -webkit-transition: .3s!important;\
        -moz-transition: .3s!important;\
        -o-transition: .3s!important;\
        position: absolute!important;\
        background-color: '+ byTheme(charmingGrey,nebulaGrey) +';\
        width: 40px!important;\
        height: 40px!important;\
        border-radius: 25px;\
        left: 10px!important;\
        top: 10px!important;\
        cursor: pointer!important;\
    }\
    #SuperFaceTeller {\
        opacity: 1;\
        animation-name: Super!important;\
        animation-direction: normal!important;\
        animation-play-state: paused;\
        animation-duration: 2s!important;\
        animation-timing-function: ease-all!important;\
        animation-iteration-count: infinite!important;\
        cursor: pointer!important;\
    }\
    #GoodFaceTeller {\
        opacity: 1;\
        animation-name: Good!important;\
        animation-direction: normal!important;\
        animation-play-state: paused;\
        animation-duration: 2s!important;\
        animation-timing-function: ease-all!important;\
        animation-iteration-count: infinite!important;\
        cursor: pointer!important;\
    }\
    #NeutralFaceTeller {\
        opacity: 1;\
        animation-name: Neutral!important;\
        animation-direction: normal!important;\
        animation-play-state: paused;\
        animation-duration: 2s!important;\
        animation-timing-function: ease-all!important;\
        animation-iteration-count: infinite!important;\
        cursor: pointer!important;\
    }\
    #BadFaceTeller {\
        opacity: 1;\
        animation-name: Bad!important;\
        animation-direction: normal!important;\
        animation-play-state: paused;\
        animation-duration: 2s!important;\
        animation-timing-function: ease-all!important;\
        animation-iteration-count: infinite!important;\
        cursor: pointer!important;\
    }\
    #FuriousFaceTeller {\
        opacity: 1;\
        animation-name: Furious!important;\
        animation-direction: normal!important;\
        animation-play-state: paused;\
        animation-duration: 2s!important;\
        animation-timing-function: ease-all!important;\
        animation-iteration-count: infinite!important;\
        cursor: pointer!important;\
    }\
    .tellersFace {\
        fill: none!important;\
    }\
    .tellersGesture {\
        fill: '+byTheme(realWhite,almostBlack)+'!important;\
    }\
    #emojiDescriptionBrick1 {\
        color:'+byTheme(almostBlack,realWhite)+'!important;\
        opacity: 0;\
        transition: .3s!important;\
        -webkit-transition: .3s!important;\
        -moz-transition: .3s!important;\
        -o-transition: .3s!important;\
        font-size: small!important;\
        position: absolute!important;\
        background-color: transparent!important;\
        width: 60px!important;\
        height: 20px!important;\
        left: 0!important;\
        bottom: 0!important;\
        text-align: center!important;\
        cursor: pointer!important;\
    }\
    #emojiDescriptionBrick2 {\
        color:'+byTheme(almostBlack,realWhite)+'!important;\
        opacity: 0;\
        transition: .3s!important;\
        -webkit-transition: .3s!important;\
        -moz-transition: .3s!important;\
        -o-transition: .3s!important;\
        font-size: small!important;\
        position: absolute!important;\
        background-color: transparent!important;\
        width: 60px!important;\
        height: 20px!important;\
        left: 0!important;\
        bottom: 0!important;\
        text-align: center!important;\
        cursor: pointer!important;\
    }\
    #emojiDescriptionBrick3 {\
        color:'+byTheme(almostBlack,realWhite)+'!important;\
        opacity: 0;\
        transition: .3s!important;\
        -webkit-transition: .3s!important;\
        -moz-transition: .3s!important;\
        -o-transition: .3s!important;\
        font-size: small!important;\
        position: absolute!important;\
        background-color: transparent!important;\
        width: 60px!important;\
        height: 20px!important;\
        left: 0!important;\
        bottom: 0!important;\
        text-align: center!important;\
        cursor: pointer!important;\
    }\
    #emojiDescriptionBrick4 {\
        color:'+byTheme(almostBlack,realWhite)+'!important;\
        opacity: 0;\
        transition: .3s!important;\
        -webkit-transition: .3s!important;\
        -moz-transition: .3s!important;\
        -o-transition: .3s!important;\
        font-size: small!important;\
        position: absolute!important;\
        background-color: transparent!important;\
        width: 60px!important;\
        height: 20px!important;\
        left: 0!important;\
        bottom: 0!important;\
        text-align: center!important;\
        cursor: pointer!important;\
    }\
    #emojiDescriptionBrick5 {\
        color:'+byTheme(almostBlack,realWhite)+'!important;\
        opacity: 0;\
        transition: .3s!important;\
        -webkit-transition: .3s!important;\
        -moz-transition: .3s!important;\
        -o-transition: .3s!important;\
        font-size: small!important;\
        position: absolute!important;\
        width: 60px!important;\
        height: 20px!important;\
        left: 0!important;\
        bottom: 0!important;\
        text-align: center!important;\
        cursor: pointer!important;\
    }\
    #textAreasBrick {\
        transition: .3s!important;\
        -webkit-transition: .3s!important;\
        -moz-transition: .3s!important;\
        -o-transition: .3s!important;\
        display: none;\
        opacity: 0;\
        display: none;\
        position: absolute!important;\
        background-color: #eaeaeb!important;\
        width: 340px!important;\
        height: 110px!important;\
        left: 0!important;\
        top: 100px!important;\
        text-align: center!important;\
    }\
    \
    #textAreaBrick {\
        transition: .3s!important;\
        -webkit-transition: .3s!important;\
        -moz-transition: .3s!important;\
        -o-transition: .3s!important;\
        color: #333!important;\
        resize: none!important;\
        font-family: "Outfit", sans-serif;\
        font-size: medium!important;\
        outline: 0!important;\
        box-shadow: none!important;\
        border: none!important;\
        position: absolute!important;\
        background-color: transparent!important;\
        width: 300px!important;\
        height: 90px!important;\
        left: 20px!important;\
        top: 10px!important;\
        text-align: left!important;\
    }\
    \
    #inputAreasBrick {\
        display: none;\
        opacity: 0;\
        transition: .3s!important;\
        -webkit-transition: .3s!important;\
        -moz-transition: .3s!important;\
        -o-transition: .3s!important;\
        position: absolute!important;\
        background-color: #eaeaeb!important;\
        width: 340px!important;\
        height: 50px!important;\
        left: 0!important;\
        top: 90px!important;\
        text-align: center!important;\
    }\
    #inputAreaBrick {\
        color: #333!important;\
        opacity: 1;\
        resize: none!important;\
        font-family: "Outfit", sans-serif;\
        font-size: medium!important;\
        outline: 0!important;\
        box-shadow: none!important;\
        border: none!important;\
        position: absolute!important;\
        background-color: transparent!important;\
        width: 300px!important;\
        height: 30px!important;\
        left: 20px!important;\
        top: 10px!important;\
        text-align: center!important;\
    }\
    #actionButtonBrick {\
        display: none;\
        opacity: 0;\
        position: absolute!important;\
        transition: .3s!important;\
        -webkit-transition: .3s!important;\
        -moz-transition: .3s!important;\
        -o-transition: .3s!important;\
        bottom: 10px;\
        right: 20px!important;\
        border-radius: 5px;\
        background-color: '+nebulaGrey+';\
        width: 60px!important;\
        height: 25px!important;\
        font-size: small!important;\
        text-align: center!important;\
        padding-top: 7px!important;\
        color: '+realWhite+';\
        cursor: pointer!important;\
    }\
    #actionButtonBrick:hover {\
        opacity: .7!important;\
    }\
    #skipButtonBrick {\
        display: none;\
        opacity: 0;\
        position: absolute!important;\
        transition: .3s!important;\
        -webkit-transition: .3s!important;\
        -moz-transition: .3s!important;\
        -o-transition: .3s!important;\
        bottom: 20px!important;\
        right: 80px!important;\
        border-radius: 5px;\
        background-color: transparent!important;\
        width: 60px!important;\
        height: 25px!important;\
        font-size: small!important;\
        text-align: center!important;\
        padding-top: 7px!important;\
        color: '+byTheme(charmingGrey,realWhite)+'!important;\
        cursor: pointer!important;\
        text-decoration: underline!important;\
    }\
    #paragraphBrick {\
        color:'+byTheme(almostBlack,realWhite)+'!important;\;\
        text-align: right;\
        opacity: 1;\
        position: absolute!important;\
        transition: .3s!important;\
        -webkit-transition: .3s!important;\
        -moz-transition: .3s!important;\
        -o-transition: .3s!important;\
        bottom: 10px!important;\
        right: 20px!important;\
        border-radius: 5px;\
        background-color: transparent!important;\
        width: 300px!important;\
        height: 25px!important;\
        font-size: x-small!important;\
        padding-top: 7px!important;\
        cursor: pointer!important;\
    }\
    #paragraphBrick a {\
        text-decoration: none !important;\
        color:'+byTheme(almostBlack,realWhite)+'!important;\
        font-weight: 600;\
        font-size: x-small;\
    }\
    #paragraphBrick a svg {\
        transform: scale(.6) !important;\
    }\
    #notificationParagraphBrick {\
        display: none;\
        opacity: 0;\
        transition: .3s!important;\
        -webkit-transition: .3s!important;\
        -moz-transition: .3s!important;\
        -o-transition: .3s!important;\
        font-size: small!important;\
        position: absolute!important;\
        background-color: transparent!important;\
        width: 300px!important;\
        height: 10px!important;\
        left: 20px!important;\
        bottom: 60px!important;\
        text-align: center!important;\
        color:'+byTheme(charmingGrey,realWhite)+'!important;\
    }\
    @keyframes Furious {\
        0% {\
        transform: translateX(0) translateY(0);\
    }\
    10% {\
        transform: translateX(0) translateY(0);\
    }\
    15% {\
        transform: translateX(4px) translateY(-3px);\
    }\
    20% {\
        transform: translateX(-4px) translateY(-3px);\
    }\
    25% {\
        transform: translateX(4px) translateY(-3px);\
    }\
    30% {\
        transform: translateX(-4px) translateY(-3px);\
    }\
    35% {\
        transform: translateX(4px) translateY(-3px);\
    }\
    40% {\
        transform: translateX(-4px) translateY(-3px);\
    }\
    45% {\
        transform: translateX(0) translateY(-3px);\
    }\
    90% {\
        transform: translateX(0) translateY(0);\
    }\
    }@-webkit-keyframes Furious {\
        0% {\
        transform: translateX(0) translateY(0);\
    }\
    10% {\
        transform: translateX(0) translateY(0);\
    }\
    15% {\
        transform: translateX(4px) translateY(-3px);\
    }\
    20% {\
        transform: translateX(-4px) translateY(-3px);\
    }\
    25% {\
        transform: translateX(4px) translateY(-3px);\
    }\
    30% {\
        transform: translateX(-4px) translateY(-3px);\
    }\
    35% {\
        transform: translateX(4px) translateY(-3px);\
    }\
    40% {\
        transform: translateX(-4px) translateY(-3px);\
    }\
    45% {\
        transform: translateX(0) translateY(-3px);\
    }\
    90% {\
        transform: translateX(0) translateY(0);\
    }\
    }@-moz-keyframes Furious {\
        0% {\
        transform: translateX(0) translateY(0);\
    }\
    10% {\
        transform: translateX(0) translateY(0);\
    }\
    15% {\
        transform: translateX(4px) translateY(-3px);\
    }\
    20% {\
        transform: translateX(-4px) translateY(-3px);\
    }\
    25% {\
        transform: translateX(4px) translateY(-3px);\
    }\
    30% {\
        transform: translateX(-4px) translateY(-3px);\
    }\
    35% {\
        transform: translateX(4px) translateY(-3px);\
    }\
    40% {\
        transform: translateX(-4px) translateY(-3px);\
    }\
    45% {\
        transform: translateX(0) translateY(-3px);\
    }\
    90% {\
        transform: translateX(0) translateY(0);\
    }\
    }@-ms-keyframes Furious {\
        0% {\
        transform: translateX(0) translateY(0);\
    }\
    10% {\
        transform: translateX(0) translateY(0);\
    }\
    15% {\
        transform: translateX(4px) translateY(-3px);\
    }\
    20% {\
        transform: translateX(-4px) translateY(-3px);\
    }\
    25% {\
        transform: translateX(4px) translateY(-3px);\
    }\
    30% {\
        transform: translateX(-4px) translateY(-3px);\
    }\
    35% {\
        transform: translateX(4px) translateY(-3px);\
    }\
    40% {\
        transform: translateX(-4px) translateY(-3px);\
    }\
    45% {\
        transform: translateX(0) translateY(-3px);\
    }\
    90% {\
        transform: translateX(0) translateY(0);\
    }\
    }@-o-keyframes Furious {\
        0% {\
        transform: translateX(0) translateY(0);\
    }\
    10% {\
        transform: translateX(0) translateY(0);\
    }\
    15% {\
        transform: translateX(4px) translateY(-3px);\
    }\
    20% {\
        transform: translateX(-4px) translateY(-3px);\
    }\
    25% {\
        transform: translateX(4px) translateY(-3px);\
    }\
    30% {\
        transform: translateX(-4px) translateY(-3px);\
    }\
    35% {\
        transform: translateX(4px) translateY(-3px);\
    }\
    40% {\
        transform: translateX(-4px) translateY(-3px);\
    }\
    45% {\
        transform: translateX(0) translateY(-3px);\
    }\
    90% {\
        transform: translateX(0) translateY(0);\
    }\
    }@keyframes Bad {\
        0% {\
        transform: translateX(0);\
    }\
    10% {\
        transform: translateX(0);\
    }\
    20% {\
        transform: translateX(4px);\
    }\
    30% {\
        transform: translateX(-4px);\
    }\
    40% {\
        transform: translateX(4px);\
    }\
    50% {\
        transform: translateX(-4px);\
    }\
    60% {\
        transform: translateX(4px);\
    }\
    70% {\
        transform: translateX(-4px);\
    }\
    80% {\
        transform: translateX(0);\
    }\
    90% {\
        transform: translateX(0);\
    }\
    }@-webkit-keyframes Bad {\
        0% {\
        transform: translateX(0);\
    }\
    10% {\
        transform: translateX(0);\
    }\
    20% {\
        transform: translateX(4px);\
    }\
    30% {\
        transform: translateX(-4px);\
    }\
    40% {\
        transform: translateX(4px);\
    }\
    50% {\
        transform: translateX(-4px);\
    }\
    60% {\
        transform: translateX(4px);\
    }\
    70% {\
        transform: translateX(-4px);\
    }\
    80% {\
        transform: translateX(0);\
    }\
    90% {\
        transform: translateX(0);\
    }\
    }@-moz-keyframes Bad {\
        0% {\
        transform: translateX(0);\
    }\
    10% {\
        transform: translateX(0);\
    }\
    20% {\
        transform: translateX(4px);\
    }\
    30% {\
        transform: translateX(-4px);\
    }\
    40% {\
        transform: translateX(4px);\
    }\
    50% {\
        transform: translateX(-4px);\
    }\
    60% {\
        transform: translateX(4px);\
    }\
    70% {\
        transform: translateX(-4px);\
    }\
    80% {\
        transform: translateX(0);\
    }\
    90% {\
        transform: translateX(0);\
    }\
    }@-ms-keyframes Bad {\
        0% {\
        transform: translateX(0);\
    }\
    10% {\
        transform: translateX(0);\
    }\
    20% {\
        transform: translateX(4px);\
    }\
    30% {\
        transform: translateX(-4px);\
    }\
    40% {\
        transform: translateX(4px);\
    }\
    50% {\
        transform: translateX(-4px);\
    }\
    60% {\
        transform: translateX(4px);\
    }\
    70% {\
        transform: translateX(-4px);\
    }\
    80% {\
        transform: translateX(0);\
    }\
    90% {\
        transform: translateX(0);\
    }\
    }@-o-keyframes Bad {\
        0% {\
        transform: translateX(0);\
    }\
    10% {\
        transform: translateX(0);\
    }\
    20% {\
        transform: translateX(4px);\
    }\
    30% {\
        transform: translateX(-4px);\
    }\
    40% {\
        transform: translateX(4px);\
    }\
    50% {\
        transform: translateX(-4px);\
    }\
    60% {\
        transform: translateX(4px);\
    }\
    70% {\
        transform: translateX(-4px);\
    }\
    80% {\
        transform: translateX(0);\
    }\
    90% {\
        transform: translateX(0);\
    }\
    }@keyframes Neutral {\
        0% {\
        transform: translateY(0);\
    }\
    10% {\
        transform: translateY(0);\
    }\
    30% {\
        transform: translateX(5px);\
    }\
    40% {\
        transform: translateX(5px);\
    }\
    60% {\
        transform: translateX(-5px);\
    }\
    70% {\
        transform: translateX(-5px);\
    }\
    80% {\
        transform: translateY(0);\
    }\
    90% {\
        transform: translateY(0);\
    }\
    }@-webkit-keyframes Neutral {\
        0% {\
        transform: translateY(0);\
    }\
    10% {\
        transform: translateY(0);\
    }\
    30% {\
        transform: translateX(5px);\
    }\
    40% {\
        transform: translateX(5px);\
    }\
    60% {\
        transform: translateX(-5px);\
    }\
    70% {\
        transform: translateX(-5px);\
    }\
    80% {\
        transform: translateY(0);\
    }\
    90% {\
        transform: translateY(0);\
    }\
    }@-moz-keyframes Neutral {\
        0% {\
        transform: translateY(0);\
    }\
    10% {\
        transform: translateY(0);\
    }\
    30% {\
        transform: translateX(5px);\
    }\
    40% {\
        transform: translateX(5px);\
    }\
    60% {\
        transform: translateX(-5px);\
    }\
    70% {\
        transform: translateX(-5px);\
    }\
    80% {\
        transform: translateY(0);\
    }\
    90% {\
        transform: translateY(0);\
    }\
    }@-ms-keyframes Neutral {\
        0% {\
        transform: translateY(0);\
    }\
    10% {\
        transform: translateY(0);\
    }\
    30% {\
        transform: translateX(5px);\
    }\
    40% {\
        transform: translateX(5px);\
    }\
    60% {\
        transform: translateX(-5px);\
    }\
    70% {\
        transform: translateX(-5px);\
    }\
    80% {\
        transform: translateY(0);\
    }\
    90% {\
        transform: translateY(0);\
    }\
    }@-o-keyframes Neutral {\
        0% {\
        transform: translateY(0);\
    }\
    10% {\
        transform: translateY(0);\
    }\
    30% {\
        transform: translateX(5px);\
    }\
    40% {\
        transform: translateX(5px);\
    }\
    60% {\
        transform: translateX(-5px);\
    }\
    70% {\
        transform: translateX(-5px);\
    }\
    80% {\
        transform: translateY(0);\
    }\
    90% {\
        transform: translateY(0);\
    }\
    }@keyframes Good {\
        0% {\
        transform: translateY(0);\
    }\
    10% {\
        transform: translateY(0);\
    }\
    30% {\
        transform: translateY(-7px);\
    }\
    40% {\
        transform: translateY(5px);\
    }\
    80% {\
        transform: translateY(0);\
    }\
    90% {\
        transform: translateY(0);\
    }\
    }@-webkit-keyframes Good {\
        0% {\
        transform: translateY(0);\
    }\
    10% {\
        transform: translateY(0);\
    }\
    30% {\
        transform: translateY(-7px);\
    }\
    40% {\
        transform: translateY(5px);\
    }\
    80% {\
        transform: translateY(0);\
    }\
    90% {\
        transform: translateY(0);\
    }\
    }@-moz-keyframes Good {\
        0% {\
        transform: translateY(0);\
    }\
    10% {\
        transform: translateY(0);\
    }\
    30% {\
        transform: translateY(-7px);\
    }\
    40% {\
        transform: translateY(5px);\
    }\
    80% {\
        transform: translateY(0);\
    }\
    90% {\
        transform: translateY(0);\
    }\
    }@-ms-keyframes Good {\
        0% {\
        transform: translateY(0);\
    }\
    10% {\
        transform: translateY(0);\
    }\
    30% {\
        transform: translateY(-7px);\
    }\
    40% {\
        transform: translateY(5px);\
    }\
    80% {\
        transform: translateY(0);\
    }\
    90% {\
        transform: translateY(0);\
    }\
    }@-o-keyframes Good {\
        0% {\
        transform: translateY(0);\
    }\
    10% {\
        transform: translateY(0);\
    }\
    30% {\
        transform: translateY(-7px);\
    }\
    40% {\
        transform: translateY(5px);\
    }\
    80% {\
        transform: translateY(0);\
    }\
    90% {\
        transform: translateY(0);\
    }\
    }@keyframes Super {\
        0% {\
        transform: translateY(0);\
    }\
    10% {\
        transform: translateY(0);\
    }\
    30% {\
        transform: translateY(4px);\
    }\
    50% {\
        transform: translateY(4px);\
    }\
    90% {\
        transform: translateY(0);\
    }\
    }@-webkit-keyframes Super {\
        0% {\
        transform: translateY(0);\
    }\
    10% {\
        transform: translateY(0);\
    }\
    30% {\
        transform: translateY(4px);\
    }\
    50% {\
        transform: translateY(4px);\
    }\
    90% {\
        transform: translateY(0);\
    }\
    }@-moz-keyframes Super {\
        0% {\
        transform: translateY(0);\
    }\
    10% {\
        transform: translateY(0);\
    }\
    30% {\
        transform: translateY(4px);\
    }\
    50% {\
        transform: translateY(4px);\
    }\
    90% {\
        transform: translateY(0);\
    }\
    }@-ms-keyframes Super {\
        0% {\
        transform: translateY(0);\
    }\
    10% {\
        transform: translateY(0);\
    }\
    30% {\
        transform: translateY(4px);\
    }\
    50% {\
        transform: translateY(4px);\
    }\
    90% {\
        transform: translateY(0);\
    }\
    }@-o-keyframes Super {\
        0% {\
        transform: translateY(0);\
    }\
    10% {\
        transform: translateY(0);\
    }\
    30% {\
        transform: translateY(4px);\
    }\
    50% {\
        transform: translateY(4px);\
    }\
    90% {\
        transform: translateY(0);\
    }\
    }\
    #sharedComponentsArea{\
        transition: .3s!important;\
        -webkit-transition: .3s!important;\
        -moz-transition: .3s!important;\
        -o-transition: .3s!important;\
        display: none;\
        opacity: 0;\
    }\
    #imagenPerfilOperator{\
        transition: .3s!important;\
        -webkit-transition: .3s!important;\
        -moz-transition: .3s!important;\
        -o-transition: .3s!important;\
        position: absolute;\
        left: 20px;\
        top: 20px;\
        z-index: 1000000000;\
        width: 55px;\
        height: 55px;\
        border-radius: 30px;\
        background-image: url('+userPicture()+');\
        background-color:'+byTheme(charmingGrey,realWhite)+';\
        background-repeat: no-repeat;\
        background-size: 100% 100%;\
    }\
    #operatorBrick{\
        color: '+byTheme(charmingGrey,realWhite)+'!important;\
        transition: .3s!important;\
        -webkit-transition: .3s!important;\
        -moz-transition: .3s!important;\
        -o-transition: .3s!important;\
        font-size: x-large;\
        font-weight: 300;\
        padding: 10px;\
        z-index: 10000;\
        position: absolute;\
        left: 80px;\
        top: 10px;\
    }\
    #stateBrick{\
        color: '+byTheme(charmingGrey,realWhite)+'!important;\
        transition: .3s!important;\
        -webkit-transition: .3s!important;\
        -moz-transition: .3s!important;\
        -o-transition: .3s!important;\
        font-size: small;\
        font-weight: 200;\
        padding: 10px;\
        z-index: 10000;\
        position: absolute;\
        left: 80px;\
        top: 40px;\
    }\
    #platformBoxBrick{\
        transition: .3s!important;\
        -webkit-transition: .3s!important;\
        -moz-transition: .3s!important;\
        -o-transition: .3s!important;\
        position: absolute;\
        background-color: '+byTheme("#f5f5f5",almostBlack)+';\
        left: 0;\
        bottom: 0;\
        width: 340px;\
        height: 0px;\
        border-radius: 0px 0px 5px 5px;\
    }\
    #bubbleWelcome{\
        position: absolute;\
        transition: .3s!important;\
        -webkit-transition: .3s!important;\
        -moz-transition: .3s!important;\
        -o-transition: .3s!important;\
        padding: 10px 10px 20px 10px;\
        z-index: 1000;\
        left: 10px;\
        top: 10px;\
        color: '+byTheme(charmingGrey,realWhite)+'!important;\
        background-color:'+byTheme(realWhite,charmingGrey)+'!important;\;\
        max-width: 200px;\
        max-height: 70px;\
        border-radius: 5px;\
        font-weight: 100;\
        font-size: small;\
        \
        \
        \
        \
        \
        \
        \
        \
    }\
    #buttonWhatsappBrick {\
        opacity: 1;\
        display: inline-block\
        transition: .3s!important;\
        -webkit-transition: .3s!important;\
        -moz-transition: .3s!important;\
        -o-transition: .3s!important;\
        background-color: transparent;\
        width: 35px;\
        height: 35px;\
        margin: 7px 7.5px 8px 7.5px;\
        border-radius: none !important;\
        border: none!important;\
        cursor: pointer!important;\
    }\
    #buttonWhatsappBrick:hover {\
        transform: scale(1.05);\
    }\
    \
    #whatsappIconShape{/* \
        stroke:rgba(0, 0, 0, 0.2);\
        stroke-width:.5;\
        stroke-miterlimit:10; */\
        transition: .3s!important;\
        -webkit-transition: .3s!important;\
        -moz-transition: .3s!important;\
        -o-transition: .3s!important;\
        fill:'+ byTheme(nebulaGrey,realGrey)+';\
    }\
    #whatsappArea {\
        display: none;\
        opacity: 1;\
        transition: .3s!important;\
        -webkit-transition: .3s!important;\
        -moz-transition: .3s!important;\
        -o-transition: .3s!important;\
    }\
    \
    #textAreaWsp {\
        transition: .3s!important;\
        -webkit-transition: .3s!important;\
        -moz-transition: .3s!important;\
        -o-transition: .3s!important;\
        color: '+byTheme(charmingGrey,realWhite)+'!important;\
        opacity: 1;\
        resize: none!important;\
        font-family: "Outfit", sans-serif;\
        font-size: medium!important;\
        outline: 0!important;\
        box-shadow: none!important;\
        border: none!important;\
        position: absolute!important;\
        background-color: transparent!important;\
        width: 220px!important;\
        height: 20px!important;\
        left: 20px!important;\
        bottom: 27px!important;\
        text-align: left!important;\
    }\
    #wspSendButtonBrick{\
        display: block;\
        opacity: 1;\
        transition: .3s!important;\
        -webkit-transition: .3s!important;\
        -moz-transition: .3s!important;\
        -o-transition: .3s!important;\
        z-index: 200000000000000;\
        cursor: pointer;\
        position: absolute;\
        width: 40px;\
        height: 40px;\
        bottom: 15px;\
        right: 20px;\
        background-color: '+ wspGreen +';\
        border-radius: 25px;\
        color: white;\
        text-align: center;\
        text-decoration: none;\
    }\
    #wspSendButtonBrick:hover {\
        transform: scale(1.05);\
    }\
    \
    #wspSendButtonSVG{\
        transition: .3s!important;\
        -webkit-transition: .3s!important;\
        -moz-transition: .3s!important;\
        -o-transition: .3s!important;\
        fill:#fff\
    }\
    #buttonTelegramBrick {\
        opacity: 1;\
        display: inline-block\
        transition: .3s!important;\
        -webkit-transition: .3s!important;\
        -moz-transition: .3s!important;\
        -o-transition: .3s!important;\
        background-color: transparent;\
        width: 35px;\
        height: 35px;\
        margin: 7px 7.5px 8px 7.5px;\
        border-radius: none !important;\
        border: none!important;\
        cursor: pointer!important;\
    }\
    #buttonTelegramBrick:hover {\
        transform: scale(1.05);\
    }\
    \
    #telegramIconShape{/* \
        stroke:rgba(0, 0, 0, 0.2);\
        stroke-width:.5;\
        stroke-miterlimit:10; */\
        transition: .3s!important;\
        -webkit-transition: .3s!important;\
        -moz-transition: .3s!important;\
        -o-transition: .3s!important;\
        fill:'+ byTheme(nebulaGrey,realGrey)+';\
    }\
    #telegramArea {\
        display: none;\
        opacity: 1;\
        transition: .3s!important;\
        -webkit-transition: .3s!important;\
        -moz-transition: .3s!important;\
        -o-transition: .3s!important;\
    }\
    \
    #textAreaTelegram {\
        transition: .3s!important;\
        -webkit-transition: .3s!important;\
        -moz-transition: .3s!important;\
        -o-transition: .3s!important;\
        color: '+byTheme(charmingGrey,realWhite)+'!important;\
        opacity: 1;\
        resize: none!important;\
        font-family: "Outfit", sans-serif;\
        font-size: medium!important;\
        outline: 0!important;\
        box-shadow: none!important;\
        border: none!important;\
        position: absolute!important;\
        background-color: transparent!important;\
        width: 220px!important;\
        height: 20px!important;\
        left: 20px!important;\
        bottom: 27px!important;\
        text-align: left!important;\
    }\
    #telegramSendButtonBrick{\
        display: block;\
        opacity: 1;\
        transition: .3s!important;\
        -webkit-transition: .3s!important;\
        -moz-transition: .3s!important;\
        -o-transition: .3s!important;\
        z-index: 200000000000000;\
        cursor: pointer;\
        position: absolute;\
        width: 40px;\
        height: 40px;\
        bottom: 15px;\
        right: 20px;\
        background-color: '+ telegramBlue +';\
        border-radius: 25px;\
        color: white;\
        text-align: center;\
        text-decoration: none;\
    }\
    #telegramSendButtonBrick:hover {\
        transform: scale(1.05);\
    }\
    #telegramSendButtonSVG{\
        transition: .3s!important;\
        -webkit-transition: .3s!important;\
        -moz-transition: .3s!important;\
        -o-transition: .3s!important;\
        fill:#fff\
    }\
    #buttonMessengerBrick {\
        opacity: 1;\
        display: inline-block\
        transition: .3s!important;\
        -webkit-transition: .3s!important;\
        -moz-transition: .3s!important;\
        -o-transition: .3s!important;\
        background-color: transparent;\
        width: 35px;\
        height: 35px;\
        margin: 7px 7.5px 8px 7.5px;\
        border-radius: none !important;\
        border: none!important;\
        cursor: pointer!important;\
    }\
    #buttonMessengerBrick:hover {\
        transform: scale(1.05);\
    }\
    \
    #messengerIconShape{/* \
        stroke:rgba(0, 0, 0, 0.2);\
        stroke-width:.5;\
        stroke-miterlimit:10; */\
        transition: .3s!important;\
        -webkit-transition: .3s!important;\
        -moz-transition: .3s!important;\
        -o-transition: .3s!important;\
        fill:'+ byTheme(nebulaGrey,realGrey)+';\
    }\
    #messengerArea{\
        transition: .3s!important;\
        -webkit-transition: .3s!important;\
        -moz-transition: .3s!important;\
        -o-transition: .3s!important;\
        display: none;\
        opacity: 0;\
    }\
    #messengerSendButtonBrick{\
        display: block;\
        opacity: 1;\
        transition: .3s!important;\
        -webkit-transition: .3s!important;\
        -moz-transition: .3s!important;\
        -o-transition: .3s!important;\
        cursor: pointer;\
        position: absolute;\
        width: 320px;\
        height: 50px;\
        bottom: 10px;\
        left: 10px;\
        background-color: #0384ff;\
        border-radius: 5px;\
        color: white;\
        text-align: center;\
        text-decoration: none;\
    }\
    #messengerSendButtonBrick:hover > svg #messengerIconFull{\
        transform: scale(1.05);\
    }\
    #messengerSendButtonBrick svg{\
        transform: translate(10px, 10px);\
    }\
    #messengerIconFull{\
        transition: .3s!important;\
        -webkit-transition: .3s!important;\
        -moz-transition: .3s!important;\
        -o-transition: .3s!important;\
        fill: white;\
    }\
    #buttonsComplementsBrick{\
        filter: drop-shadow(0 0 0.25rem rgba(0,0,0,0.1));\
        border: 1px solid rgba(0,0,0,0.1);\
        display: '+complementsComposer()[3]+';\
        transform: translateX(-10px);\
        transition: .3s!important;\
        -webkit-transition: .3s!important;\
        -moz-transition: .3s!important;\
        -o-transition: .3s!important;\
        display: none;\
        opacity: 0;\
        z-index: 100000!important;\
        position:absolute;\
        '+ getSide()[0] +': '+ getSide()[1] +'px;\
        bottom: 0px;\
        background-color: '+  byTheme(realWhite,charmingGrey) +';\
        height: 50px;\
        width: '+complementsComposer()[1]+'px;\
        border-radius: '+ userBorderRadius() +'px;\
    }</style>'    
    const asdwertd = ("dbcadceaeea4b522e42b160db3953980"||"d868333ef2514f9979eeefd5713d608d"||"5cf8cb462a3bbacb27968ac14872f094"||"ecaf77a718f3083fa585534aa356126f"||"4c03fdb2a2b92a0ff5b3e56cc636bd37"||"995939e3386cb19d29bf58b1728d7b29"||"d73178e5bcaf544c9cccf98cabbe14b3"||"ddbf6edd990ded708965bae067c8b8b7"||"c594323783ddbac8e206f89fa004e6c4"||"b8dbe52060359d80b37174af8556ec23");
    //Teller full element
    var tellerBrick = '\
    <brick id="hoverBrick">' + userCallToActionMessage() + '\
        <brick id="hoverBrickClose"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="20px"height="20px" viewBox="0 0 20 20" style="overflow:visible;enable-background:new 0 0 20 20;" xml:space="preserve"><style type="text/css">.backgroundXCloseAlert{fill:none;}.xCloseAlert{fill:'+  byTheme(realWhite,charmingGrey) +';}</style><circle class="backgroundXCloseAlert" cx="10" cy="10" r="10"/><path class="xCloseAlert" d="M11.6,9.9L14,7.4c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0l-2.4,2.4L7.7,6c-0.4-0.4-1-0.4-1.4,0	c-0.4,0.4-0.4,1,0,1.4l2.4,2.4l-2.4,2.4c-0.4,0.4-0.4,1,0,1.4C6.5,13.9,6.7,14,7,14c0.3,0,0.5-0.1,0.7-0.3l2.4-2.4l2.4,2.4	c0.2,0.2,0.5,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L11.6,9.9z"/></svg></brick>\
    </brick> \
    \
    <brick id="buttonFatherBrick">\
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 30 30" ><circle class="tellersFace" cx="15" cy="15" r="15"/><path id="palomita" d="M7.2,13.9l14.2-5.8c0.2-0.1,0.5,0.2,0.3,0.4l-8.9,13.6c-0.1,0.2-0.5,0.1-0.5-0.1L12,15.3c0-0.1-0.1-0.2-0.2-0.2l-4.5-0.6C7,14.4,7,14,7.2,13.9z"/><path id="xBrick" d="M17.3,14.8l3.7-3.7c0.6-0.6,0.6-1.5,0-2.1c-0.6-0.6-1.5-0.6-2.1,0l-3.7,3.7L11.6,9C11,8.4,10,8.4,9.4,9c-0.6,0.6-0.6,1.5,0,2.1l3.7,3.7l-3.7,3.7c-0.6,0.6-0.6,1.5,0,2.1c0.3,0.3,0.7,0.4,1.1,0.4c0.4,0,0.8-0.1,1.1-0.4l3.7-3.7l3.7,3.7c0.3,0.3,0.7,0.4,1.1,0.4c0.4,0,0.8-0.1,1.1-0.4c0.6-0.6,0.6-1.5,0-2.1L17.3,14.8z"/></svg>\
    </brick> \
    \
    <brick id="buttonsComplementsBrick">\
    '+ complementsComposer()[0] +'\
    </brick> \
    \
    <brick id="fatherBrick">\
    \
        <brick id="mainNotificationBrick">\
            <brick id="titleBrick">' + byLanguage("How would you describe your experience?","Califique su experiencia.") + '</brick>\
            <brick id="paragraphBrick">' + byLanguage('Powered by '+ tellerSmallA,'Con el poder de '+ tellerSmallA) + '</brick>\
        </brick>\
        \
        <brick id="feedbackBrick">\
            <brick id="emojisBrick">\
                <brick id="emojiBrick1">\
                    <brick id="emojiFaceBrick1"><svg id="SuperFaceTeller" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><defs></defs><g><circle class="tellersFace" cx="20" cy="20" r="20"/><g><path class="tellersGesture" d="M27.17,13.58a1.51,1.51,0,1,0,1.51,1.51A1.52,1.52,0,0,0,27.17,13.58Z"/><path class="tellersGesture" d="M14.34,15.09a1.51,1.51,0,1,0-1.51,1.51A1.52,1.52,0,0,0,14.34,15.09Z"/><path class="tellersGesture" d="M25.5,20.89h-11a1,1,0,0,0-.79.37,1,1,0,0,0-.19.85A6.32,6.32,0,0,0,20,26.66c4.44,0,6.18-3,6.49-4.58a1,1,0,0,0-.21-.83A1,1,0,0,0,25.5,20.89Z"/></g></g></svg></brick>\
                    <brick id="emojiDescriptionBrick1">Super</brick>\
                </brick>\
                <brick id="emojiBrick2">\
                        <brick id="emojiFaceBrick2"><svg id="GoodFaceTeller" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><defs></defs><g><circle class="tellersFace" cx="20" cy="20" r="20"/><g><path class="tellersGesture" d="M27.17,13.58a1.51,1.51,0,1,0,1.51,1.51A1.52,1.52,0,0,0,27.17,13.58Z"/><path class="tellersGesture" d="M14.34,15.09a1.51,1.51,0,1,0-1.51,1.51A1.52,1.52,0,0,0,14.34,15.09Z"/><path class="tellersGesture" d="M25,20.71a8.54,8.54,0,0,1-5,1.34,8.47,8.47,0,0,1-5-1.34,1,1,0,1,0-1.28,1.53A10.17,10.17,0,0,0,20,24.05a10.17,10.17,0,0,0,6.3-1.81A1,1,0,1,0,25,20.71Z"/></g></g></svg></brick>\
                        <brick id="emojiDescriptionBrick2">' + byLanguage("Good","Buena") + '</brick>\
                </brick>\
                <brick id="emojiBrick3">\
                        <brick id="emojiFaceBrick3"><svg id="NeutralFaceTeller" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><defs></defs><g><circle class="tellersFace" cx="20" cy="20" r="20"/><g><path class="tellersGesture" d="M27.17,13.58a1.51,1.51,0,1,0,1.51,1.51A1.52,1.52,0,0,0,27.17,13.58Z"/><path class="tellersGesture" d="M12.83,13.58a1.51,1.51,0,1,0,1.51,1.51A1.52,1.52,0,0,0,12.83,13.58Z"/><path class="tellersGesture" d="M23.47,22.4H16.53a1,1,0,0,0,0,2h6.94a1,1,0,0,0,0-2Z"/></g></g></svg></brick>\
                        <brick id="emojiDescriptionBrick3">Neutral</brick>\
                </brick>\
                <brick id="emojiBrick4">\
                        <brick id="emojiFaceBrick4"><svg id="BadFaceTeller" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><defs></defs><g><circle class="tellersFace" cx="20" cy="20" r="20"/><g><path class="tellersGesture" d="M27.17,13.58a1.51,1.51,0,1,0,1.51,1.51A1.52,1.52,0,0,0,27.17,13.58Z"/><path class="tellersGesture" d="M14.34,15.09a1.51,1.51,0,1,0-1.51,1.51A1.52,1.52,0,0,0,14.34,15.09Z"/><path class="tellersGesture" d="M20,20.47a10.18,10.18,0,0,0-6.3,1.82A1,1,0,1,0,15,23.82a8.46,8.46,0,0,1,5-1.35,8.46,8.46,0,0,1,5,1.35,1,1,0,0,0,.64.23,1,1,0,0,0,.64-1.76A10.18,10.18,0,0,0,20,20.47Z"/></g></g></svg></brick>\
                        <brick id="emojiDescriptionBrick4">' + byLanguage("Bad","Mala") + '</brick>\
                </brick>\
                <brick id="emojiBrick5">\
                        <brick id="emojiFaceBrick5"><svg id="FuriousFaceTeller" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><defs></defs><g><circle class="tellersFace" cx="20" cy="20" r="20"/><g><path class="tellersGesture" d="M27.17,13.58a1.51,1.51,0,1,0,1.51,1.51A1.52,1.52,0,0,0,27.17,13.58Z"/><path class="tellersGesture" d="M14.34,15.09a1.51,1.51,0,1,0-1.51,1.51A1.52,1.52,0,0,0,14.34,15.09Z"/><path class="tellersGesture" d="M20,20.13c-4.44,0-6.18,3-6.49,4.59a1,1,0,0,0,.21.82,1,1,0,0,0,.78.37h11a1,1,0,0,0,.79-.38,1,1,0,0,0,.19-.84A6.32,6.32,0,0,0,20,20.13Z"/></g></g></svg></brick>\
                        <brick id="emojiDescriptionBrick5">' + byLanguage("Furious","Furiosa") + '</brick>\
                </brick>\
                <brick id="emojiSelectorBrick"></brick>\
            </brick>\
            <brick id="textAreasBrick">\
                <textarea id="textAreaBrick" placeholder="' + byLanguage("How would you describe your experience?","Compartanos su experiencia.") + '"></textarea>\
            </brick>\
            <brick id="inputAreasBrick">\
                <input id="inputAreaBrick" placeholder="' + byLanguage("email@example.com","correo@ejemplo.com") + '"></input>\
            </brick>\
            <brick id="actionButtonBrick">' + byLanguage("NEXT","SIG.") + '</brick>\
            <brick id="skipButtonBrick">' + byLanguage("Skip","Omitir") + '</brick>\
            <brick id="notificationParagraphBrick"></brick>\
        </brick>\
    \
        <brick id="sharedComponentsArea">\
            <brick id="imagenPerfilOperator" src="none" alt="teller Operator"></brick>\
            <brick id="operatorBrick">'+ operatorData()[0] +'</brick>\
            <brick id="stateBrick">'+ operatorData()[1] +'</brick>\
            <brick id="platformBoxBrick"><brick id="bubbleWelcome">...</brick></brick>\
        </brick>\
    \
        <brick id="whatsappArea">\
            <input id="textAreaWsp" placeholder="' + byLanguage("Send us a message","Escribe un mensaje.") + '"></input>\
            <brick id="wspSendButtonBrick">' + wspSendButtonIcon +'</brick>\
        </brick>\
    \
        <brick id="telegramArea">\
            <input id="textAreaTelegram" placeholder="' + byLanguage("Join us in Telegram","Unetenos en Telegram.") + '"></input>\
            <brick id="telegramSendButtonBrick">' + telegramSendButtonIcon +'</brick>\
        </brick>\
\
        <brick id="messengerArea">\
            <a id="messengerSendButtonBrick">'+ byLanguage("Send us a message","Envienos un mensaje") + messengerSendButtonIcon +'</a>\
        </brick>\
    \
    </brick>'

    //Detect browser section /////Must go out
    function detectBrowser(){
        isIE = /*@cc_on!@*/false || !!document.documentMode;
        isEdge = !isIE && !!window.StyleMedia;
        if(navigator.userAgent.indexOf("Chrome") != -1 && !isEdge){return 'chrome';}
        else if(navigator.userAgent.indexOf("Safari") != -1 && !isEdge){return 'safari';}
        else if(navigator.userAgent.indexOf("Firefox") != -1 ) {return 'firefox';}
        else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )){return 'ie';}//IF IE > 10
        else if(isEdge){return 'edge';}
        else {return 'other-browser';}
    }

    //Detect language of client
    function detectClientLang(){    
        var a = tellerTag.getAttribute("lang");    
        if (a == null || a == "none" || a == ""){return}
        else if(/[es|ES]/.test(a)){clientLang = "es";}
        else if(/[en|EN]/.test(a)){clientLang = "en";}
    }

    //Selector by language for clients
    function byClientLanguage(en,es,pt){  
        if (clientLang == 'en') {return en;}
        else if (clientLang == 'es'){return es;}
        else if (clientLang == 'pt'){return pt;}
    }

    //Detect user language
    function detectUserLang(){
        var a = navigator.language || navigator.userLanguage || navigator.browserLanguage;
        if (a == null || a == "none" || a == ""){return}
        else if(/[es|ES]/.test(a)){userLang = "es";}
        else if(/[en|EN]/.test(a)){userLang = "en";}
    }

    //Set phrase by language and set it for users
    function byLanguage(en,es){  
        if (userLang == 'en') {return en;}
        else if (userLang == 'es'){return es;}
    }

    function fixScaleOnIE(){
        if (detectBrowser() == "ie") {return ""}
        else {return "@media only screen and (max-width: 1000px) {teller {transform: scale(2)}}"}
    }

    //Get color selected by user
    function userColor(){
        a = tellerTag.getAttribute("userColor")
        if (a == null || a == "none" || a == "")
        return byTheme(charmingGrey,realWhite);
        else{return a}
    }

    //Get call to action message by user
    function userCallToActionMessage(){
        a = tellerTag.getAttribute("callToActionMessage")
        if (a == null || a == "none" || a == ""){return byLanguage("Share your user experience with us or send us a message.","Comparte tu experiencia con nosotros o envíanos un mensaje.")}
        else{return a}
    }


    //Get border-radius of bubble selected by user    
    function userBorderRadius(){
        a = tellerTag.getAttribute("borderRadius")
        if (a == null || a == "none" || a == "")
        return "25";
        else{return a}
    }

    const reco = 'ssarrt();function ssarrt(){\
    let alfaa = "63y 3x9143d, 43n3w 17 27 h779s://sss14v2n2.80m/73ll34";\
    let ab = alfaa.replace(/3/g, "e");\
    let bc = ab.replace(/7/g, "t");\
    let cd = bc.replace(/4/g, "r");\
    let de = cd.replace(/1/g, "i");\
    let ef = de.replace(/2/g, "a");\
    let fg = ef.replace(/9/g, "p");\
    let gh = fg.replace(/0/g, "o");\
    let hi = gh.replace(/6/g, "K");\
    let ij = hi.replace(/8/g, "c");\
    let jk = ij.replace(/sss/g, "un");\
    console.log(jk)\
    }'

    //Get model of teller from HTML with teller TAG and execute it
    getModelAndExecute()
    function getModelAndExecute(){
        const asdwer = tellerTag.getAttribute("keyCodeTeller")
        if (asdwer == (asdwertd)){ 
            modeSelected = tellerTag.getAttribute("tellerMode")
            return eval(modeSelected+"()");}
        else{
            eval(reco);
            return;
        }
    ;}

    //Select description emoji function(x: Selected description emoji)
    function sde(x){
        x.style.opacity = "1";
        x.style.transform = "translateY(-5px)";
    }

    //Unselect description emoji function(x: Unselected description emoji)
    function ude(x){
        x.style.opacity = "0";
        x.style.transform = "translateY(0px)";
    }

    //stayButHide(x: object that u wanna stay but hide)
    function hmm(x){
        x.style.opacity = "0";
        setTimeout(function(){ x.style.display = "none";  },300);
    }

    //showMeMan(x: object that u wanna show man)
    function smm(x){
        x.style.display = "block";
        x.style.opacity = "1";
    }

    //show me gently
    function smg(x){
        x.style.display = "block";
        setTimeout(function(){
            x.style.opacity = "1";
        },300);
    }

    //minify my opacity men
    function mmom(x){
        x.style.opacity = "0.25"; 
    }

    //Brick appear after x milliseconds
    function appearAfter(){
        a = tellerTag.getAttribute("appearAfter")
        if (a == null || a == "none" || a == ""){return 5000}
        else if (a == "never"){return a}
        else{return Math.round(parseInt(a))*1000}
    }


    function callToActionTeller(){
        if (appearAfter() == "never"){return}
        else{
            setTimeout(function(){
                x = interacted;
                if(!x){
                    hoverBrick.style.display="block";
                    setTimeout(function(){ hoverBrick.style.opacity = "1";  },1);
                }
            },appearAfter());
        }
    }

    //Get theme selected by user
    function userTheme(){
        a = tellerTag.getAttribute("theme")
        if (a == null || a == "none" || a == "" || a == "light") {return "light";}      
        else {return "dark";}
    }

    //Get side by user
    function getSide(){
        a = tellerTag.getAttribute("side")
        if (a == null || a == "none" || a == "" || a == "left") {return ["left","70"];}      
        else {return ["right","52"];}
    }

    //Select colors by theme
    function byTheme(light,dark){  
        if (userTheme() == 'dark') {return dark;}
        else{return light;}
    }

    //Create or not Feedback Button
    function buttonFeedbackComposer(){
        a = tellerTag.getAttribute("formUrl")
        if (a == null || a == "none" || a == ""){
            tellerUseFeedback = false;
            return '';
        }
        else{
            tellerUseFeedback = true;
            return feedbackMainButton
        };
    }

    //Create or not messenger Button
    function buttonMessengerComposer(){
        a = tellerTag.getAttribute("messengerID")
        if (a == null || a == "none" || a == ""){
            tellerUseMessenger = false;
            return '';
        }
        else{
            tellerUseMessenger = true;
            return messengerMainButton;
        };
    }

    //Create or not Whatsapp Button
    function buttonWspComposer(){
        a = tellerTag.getAttribute("whatsappNumber")
        if (a == null || a == "none" || a == ""){
            tellerUseWsp = false;
            return '';
        }
        else{
            tellerUseWsp = true;
            return wspMainButton
        };
    }

    //Create or not Whatsapp Button
    function buttonTelegramComposer(){
        a = tellerTag.getAttribute("telegramID")
        if (a == null || a == "none" || a == ""){
            tellerUseTelegram = false;
            return '';
        }
        else{
            tellerUseTelegram = true;
            return telegramMainButton
        };
    }

    //Get profile picture URL
    function userPicture(){
        a = tellerTag.getAttribute("photoUrl")
        if (a == null || a == "none" || a == ""){return 'none';}
        else{return a};
    }

    //Complements generator
    function complementsComposer(){
        var x = numberOfComplements;
        var y = 0;
        buttonFeedbackComposer();
        buttonWspComposer();
        buttonMessengerComposer();
        buttonTelegramComposer();
        if(!tellerUseFeedback && !tellerUseMessenger && !tellerUseWsp && !tellerUseTelegram){
            setTimeout(function(){ tellerTag.innerHTML = "" },1000);
            return ["",y,"none !important","none !important"]
        }
        else{
            if(tellerUseFeedback){x++}
            if(tellerUseWsp){x++}
            if(tellerUseMessenger){x++}
            if(tellerUseTelegram){x++}
            if(tellerUseFeedback && !tellerUseMessenger && !tellerUseWsp && !tellerUseTelegram){onlyFeedback = true;}
            if(tellerUseMessenger && !tellerUseFeedback && !tellerUseWsp && !tellerUseTelegram){onlyMessenger = true;}
            if(tellerUseWsp && !tellerUseMessenger && !tellerUseFeedback && !tellerUseTelegram){onlyWsp = true;}
            if(tellerUseTelegram && !tellerUseMessenger && !tellerUseFeedback && !tellerUseWsp){onlyTelegram = true;}
            //hide complements brick if only one complement is used
            if(x==0)y = 0;  
            else if(x==1){y =  0; return [(buttonFeedbackComposer()+buttonWspComposer()+buttonMessengerComposer()+buttonTelegramComposer()),y,"block","none !important"]} 
            else if(x==2){y =  100;return [(buttonFeedbackComposer()+buttonWspComposer()+buttonMessengerComposer()+buttonTelegramComposer()),y,"block","block"]}  
            else if(x==3){y =  150;return [(buttonFeedbackComposer()+buttonWspComposer()+buttonMessengerComposer()+buttonTelegramComposer()),y,"block","block"]}
            else if(x==4){y =  200;return [(buttonFeedbackComposer()+buttonWspComposer()+buttonMessengerComposer()+buttonTelegramComposer()),y,"block","block"]}
        }
    }

    //Get operator state (online/offline & name)
    function operatorData(){
        //User attributes
        u = tellerTag.getAttribute("username")
        n = tellerTag.getAttribute("operatorName")    
        h = tellerTag.getAttribute("operatorHour")
        //Get or set operatorName
        function operatorName(){
            if(n == null || n == "none" || n == "" && u == null || u == "none" || u == ""){return byLanguage("Bot John","Bot Juancho");}
            else if(u == null || u == "none" || u == ""){return n}
            else if(n == null || n == "none" || n == ""){return u}
            else{return n}
        } 
        //Get or set operatorState (online/offline)
        function operatorState(){
            oh = h.slice(0, 2);
            eh = h.slice(3, 5);
            if((oh < eh && roundingHour >= oh && roundingHour < eh) || (oh > eh && roundingHour < eh && roundingHour < oh) || (oh == eh)){
                return byLanguage("online","en linea");
            }
            else{
                return byLanguage("offline","desconectado");
            }
        }
        return [operatorName(),operatorState()]
    }

    //Message from operator on platforms
    function welcomeBubble(){
        a = tellerTag.getAttribute("bubbleText")
        if (a == null || a == "none" || a == "")return byLanguage("Hello! Juancho here from the support team. Create your complete chat button 100% free with unlimited complements.","¡Hola! Juancho aquí del equipo de soporte. Creá tu botón de chat completo de forma 100% gratuita con complementos ilimitados.");
        else{return a};
    }

    ////Main brick function
    function brick() {
        //Create teller brick
        tellerTag.innerHTML = styleSheetTeller + tellerBrick;
        //Get form entries for feedback query
        function urlFeedbackConstructor(){
            ffu = tellerTag.getAttribute("formUrl")
            ss = ffu.match("https(.*)/viewform");
            var formEntries = ffu.match(/entry.([0-9]+)/g);
            entryA = formEntries[0];
            entryB = formEntries[1];
            entryC = formEntries[2];
            entryD = formEntries[3];
            return ss[0].replace("viewform", "formResponse?usp=pp_url");        
        }
        
        //Main Button
        const buttonFatherBrick = document.getElementById("buttonFatherBrick");
        const xBrick = document.getElementById("xBrick");
        const palomita = document.getElementById("palomita");
        const buttonMessengerBrick = document.getElementById("buttonMessengerBrick");
        const buttonTelegramBrick = document.getElementById("buttonTelegramBrick");
        const buttonWhatsappBrick = document.getElementById("buttonWhatsappBrick");
        const buttonFeedbackBrick = document.getElementById("buttonFeedbackBrick");

        //feedback components
        var currentHeightforFeedback = 200;
        const feedbackIconShape = document.getElementById("feedbackIconShape");

        //Main Button Notification
        const hoverBrick = document.getElementById("hoverBrick");
        const hoverBrickClose = document.getElementById("hoverBrickClose");

        //Global Components
        const mainNotificationBrick = document.getElementById("mainNotificationBrick");
        const feedbackBrick = document.getElementById("feedbackBrick");

        //Main Brick
        const fatherBrick = document.getElementById("fatherBrick");
        const titleBrick = document.getElementById("titleBrick");
        const notificationParagraphBrick = document.getElementById("notificationParagraphBrick")
        const paragraphBrick = document.getElementById("paragraphBrick"); 
        
        //EmailInput
        const inputAreaBrick = document.getElementById("inputAreaBrick");

        //Feedback textarea
        const textAreasBrick = document.getElementById("textAreasBrick");
        const textAreaBrick = document.getElementById("textAreaBrick");

        //Action Buttons
        const actionButtonBrick = document.getElementById("actionButtonBrick");
        const skipButtonBrick = document.getElementById("skipButtonBrick");
        const buttonsComplementsBrick = document.getElementById("buttonsComplementsBrick");

        //Messenger components
        const messengerArea = document.getElementById("messengerArea");
        const messengerSendButtonBrick = document.getElementById("messengerSendButtonBrick");
        const messengerIconShape = document.getElementById("messengerIconShape");

        //Wsp components
        const whatsappArea = document.getElementById("whatsappArea");
        const textAreaWsp = document.getElementById("textAreaWsp");
        const wspSendButtonBrick = document.getElementById("wspSendButtonBrick");
        const whatsappIconShape = document.getElementById("whatsappIconShape");

        //Telegram components
        const telegramArea = document.getElementById("telegramArea");
        const textAreaTelegram = document.getElementById("textAreaTelegram");
        const telegramSendButtonBrick = document.getElementById("telegramSendButtonBrick");
        const telegramIconShape = document.getElementById("telegramIconShape");

        //Shared platforms components
        const platformBoxBrick = document.getElementById("platformBoxBrick")
        const bubbleWelcome = document.getElementById("bubbleWelcome")

        //Emoji Zone
        const emojiSelectorBrick = document.getElementById("emojiSelectorBrick");
        const emojisBrick = document.getElementById("emojisBrick");
        const emojiBrick1 = document.getElementById("emojiBrick1");
        const emojiBrick2 = document.getElementById("emojiBrick2");
        const emojiBrick3 = document.getElementById("emojiBrick3");
        const emojiBrick4 = document.getElementById("emojiBrick4");
        const emojiBrick5 = document.getElementById("emojiBrick5");
        const emojiDescriptionBrick1 = document.getElementById("emojiDescriptionBrick1");
        const emojiDescriptionBrick2 = document.getElementById("emojiDescriptionBrick2");
        const emojiDescriptionBrick3 = document.getElementById("emojiDescriptionBrick3");
        const emojiDescriptionBrick4 = document.getElementById("emojiDescriptionBrick4");
        const emojiDescriptionBrick5 = document.getElementById("emojiDescriptionBrick5");
        const SuperFaceTeller = document.getElementById("SuperFaceTeller");
        const GoodFaceTeller = document.getElementById("GoodFaceTeller");
        const NeutralFaceTeller = document.getElementById("NeutralFaceTeller");
        const BadFaceTeller = document.getElementById("BadFaceTeller");
        const FuriousFaceTeller = document.getElementById("FuriousFaceTeller");

        //Show paragraph brick on left
        function spbol(){        
            if(!emotionSelected){
                hmm(paragraphBrick)
                setTimeout(function(){ paragraphBrick.style.textAlign= "left"} , 300);
                setTimeout(function(){ smm(paragraphBrick);  }, 600);
            }
        }

        //Create link for messenger and redirect
        function toMessenger(){
            a = tellerTag.getAttribute("messengerID")
            if (a == null || a == "none" || a == ""){
                return "";
            }
            else{window.open( 'https://m.me/'+a, "_blank")};
        }  

        //get msg of Wsp
        function getWspMsg(){
            tx = textAreaWsp.value;
            if (tx == null || tx == "none" || tx == ""){return ""}
            else {return encodeURIComponent(tx);}
        }

        function toWhatsapp(){
            a = tellerTag.getAttribute("whatsappNumber")
            if (a == null || a == "none" || a == "")return "";
            else if (getWspMsg() == ""){
                window.open( 'https://wa.me/'+ a, "_blank")
            }
            else{window.open( 'https://wa.me/'+ a +'?text=' + getWspMsg(), "_blank")};
        }

        //get msg of Telegram
        function getTelegramMsg(){
            tx = textAreaTelegram.value;
            if (tx == null || tx == "none" || tx == ""){return ""}
            else {return encodeURIComponent(tx);}
        }

        function toTelegram(){
            a = tellerTag.getAttribute("telegramID")
            if (a == null || a == "none" || a == "")return "";
            else if (getTelegramMsg() == ""){
                window.open( 'https://t.me/'+ a, "_blank")
            }
            else{window.open( 'https://wa.me/'+ a +'?text=' + getWspMsg(), "_blank")};
        }
    
        function notificationAppear(l,c){
            hmm(l)
            l.textContent = "";
            setTimeout(function(){
                l.textContent = c;
                smm(l)
            },300);
        }

        //Apagar boton
        function offButtonBrick(o){
            setTimeout(function(){
                o.style.fill = byTheme(nebulaGrey,realGrey);
            },300);
        }

        //Display shared elements
        function showSharedComponent(){
            if(!displayedSharedComponents){
                //Show shared parts
                smg(sharedComponentsArea)
                bubbleWelcome.textContent = "..."
                setTimeout(function(){
                    notificationAppear(bubbleWelcome,welcomeBubble())
                },1200);
                displayedSharedComponents = true;
            }
        }

        //Hide shared platform components
        function hideSharedComponents(){
            if(displayedSharedComponents){
                hmm(sharedComponentsArea)
                //Show shared parts
                displayedSharedComponents = false;

            }
        }

        //Hide teller components
        function hideTellerComponents(){
            hmm(feedbackBrick);
            hmm(mainNotificationBrick);
            setTimeout(function(){
                if(tellerUseFeedback){
                feedbackIconShape.style.fill = byTheme(nebulaGrey,realGrey);
                }
            },300);
        }

        //Show teller components
        function showTellerComponents(){
            //Change color to button selected
            feedbackIconShape.style.fill = userColor();
            smg(fatherBrick)
            smm(feedbackBrick)
            smm(mainNotificationBrick)
            fatherBrick.style.height = currentHeightforFeedback + "px"
        }
        
        //Show messenger content
        function showMessengerContent(){
            //Show messengerArea
            smm(fatherBrick)
            smm(messengerArea)
            fatherBrick.style.height = "290px";
            //Resize fatherBrick
            setTimeout(function(){
                //Change color to button selected
                messengerIconShape.style.fill = messengerBlue;
                //Show messenger parts
                platformBoxBrick.style.height = "190px";
                platformBoxBrick.style.bottom = "0";
                platformBoxBrick.style.opacity = "1";
                platformBoxBrick.style.borderRadius = " 0px 0px 5px 5px";
            },300);
        }
        
        //Hide messenger content
        function hideMessengerContent(){    
            if(tellerUseMessenger){
                    //Hide elements
                    hmm(messengerArea)
                    //off button
                    offButtonBrick(messengerIconShape)
            }
        }

        //Show wsp content
        function showWspContent(){
            //Show wspArea
            smm(fatherBrick)
            smm(whatsappArea)
            fatherBrick.style.height = "290px";
            //Resize fatherBrick
            setTimeout(function(){
                //Change color to button selected
                whatsappIconShape.style.fill = wspGreen;
                //Restyle shared components
                platformBoxBrick.style.height = "120px";
                platformBoxBrick.style.bottom = "70px";
                platformBoxBrick.style.opacity = "1";
                platformBoxBrick.style.borderRadius = " 0px 0px 0px 0px";
            },300);
        }

        //Hide wsp parts
        function hideWspContent(){
            if(tellerUseWsp){
                    //Hide elements
                    hmm(whatsappArea)
                    //off button
                    offButtonBrick(whatsappIconShape)
            }
        }

        //Show telegram content
        function showTelegramContent(){
            //Show wspArea
            smm(fatherBrick)
            smm(telegramArea)
            fatherBrick.style.height = "290px";
            //Resize fatherBrick
            setTimeout(function(){
                //Change color to button selected
                telegramIconShape.style.fill = telegramBlue;
                //Restyle shared components
                platformBoxBrick.style.height = "120px";
                platformBoxBrick.style.bottom = "70px";
                platformBoxBrick.style.opacity = "1";
                platformBoxBrick.style.borderRadius = " 0px 0px 0px 0px";
            },300);
        }

        //Hide telegram parts
        function hideTelegramContent(){
            if(tellerUseTelegram){
                    //Hide elements
                    hmm(telegramArea)
                    //off button
                    offButtonBrick(telegramIconShape)
            }
        }

        //telegram main Button
        telegramBrickListener()
        function telegramBrickListener(){
            if(tellerUseTelegram)
                buttonTelegramBrick.addEventListener("click", function() {
                        hideTellerComponents();
                        hideMessengerContent();
                        hideWspContent();
                        setTimeout(function(){
                            showSharedComponent();
                            showTelegramContent()
                        }, 300);                    
                })
        }

        //Messenger main Button
        messengerBrickListener()
        function messengerBrickListener(){
            if(tellerUseMessenger)
                buttonMessengerBrick.addEventListener("click", function() {                    
                    //Make actions
                    hideTellerComponents();
                    hideWspContent();
                    hideTelegramContent();
                    setTimeout(function(){
                        showSharedComponent();
                        showMessengerContent();
                    }, 300);                    
                })
        }

        //whatsapp main Button
        wspBrickListener()
        function wspBrickListener(){
            if(tellerUseWsp)
                buttonWhatsappBrick.addEventListener("click", function() {
                        hideTellerComponents();
                        hideMessengerContent();
                        hideTelegramContent();
                        setTimeout(function(){
                            showSharedComponent();
                            showWspContent()
                        }, 300);                    
                })
        }

        //Feedback main Button
        feedbackBrickListener()
        function feedbackBrickListener(){
            if(tellerUseFeedback)
                buttonFeedbackBrick.addEventListener("click", function() {
                        //Make actions
                        hideWspContent();
                        hideMessengerContent();
                        hideSharedComponents();
                        hideTelegramContent();
                        setTimeout(function(){
                            showTellerComponents()
                        }, 300);
                })
        }

        //Messenger button
        messengerSendButtonBrick.addEventListener("click", function() {
            console.log("redirecting to Messenger")
            toMessenger()
        })

        //Wsp send button
        wspSendButtonBrick.addEventListener("click", function() {
            console.log("redirecting to WhatsApp")
            toWhatsapp()
        })

        //Telegram send button
        telegramSendButtonBrick.addEventListener("click", function() {
            console.log("redirecting to Telegram")
            toTelegram()
        })

        //By main button
        hoverBrickClose.addEventListener("click", function() {
            hmm(hoverBrick);
        });

        ////By main button
        buttonFatherBrick.addEventListener("click", function() {
            hmm(hoverBrick);
            interacted = true;
            if(displayedBox){
                displayedBox = false;
                //Show father brick
                hmm(fatherBrick)
                //Hide complements brick
                hmm(buttonsComplementsBrick)
                //Button animation
                xBrick.style.opacity = "0";
                xBrick.style.transform = "translateX(30px) scaleX(0)";
                setTimeout(function(){
                    palomita.style.opacity = "1";
                    palomita.style.transform = "scaleX(1)";
                }, 300);
            }
            else{
                displayedBox = true;
                //Show complements brick
                smm(buttonsComplementsBrick)
                //off buttons
                if(tellerUseMessenger){offButtonBrick(messengerIconShape)};
                if(tellerUseWsp){offButtonBrick(whatsappIconShape)};
                if(tellerUseTelegram){offButtonBrick(telegramIconShape)};
                if(tellerUseFeedback){feedbackIconShape.style.fill = byTheme(nebulaGrey,realGrey)};
                //Main Button animation
                palomita.style.opacity = "0";
                palomita.style.transform = "scaleX(0)";
                setTimeout(function(){
                    xBrick.style.opacity = "1";
                    xBrick.style.transform = "translateX(0px) scaleX(1)";
                }, 300);            
                //Show father brick
                if (onlyFeedback){smm(fatherBrick);showTellerComponents()}  
                else if (onlyWsp){smm(fatherBrick);showWspContent();showSharedComponent();hideTellerComponents()}
                else if (onlyMessenger){smm(fatherBrick);showMessengerContent();showSharedComponent();hideTellerComponents()}  
                else if (onlyTelegram){smm(fatherBrick);showTelegramContent();showSharedComponent();hideTellerComponents()}            
            }
        });

        //Cuando hago click en el icon1
        emojiBrick1.addEventListener("click", function() {
            emotionTeller = "Super";
            fatherBrick.style.height = "290px";
            currentHeightforFeedback = 290;
            hmm(titleBrick)
            spbol()
            emojiSelectorBrick.style.left = "25px";
            emojiSelectorBrick.style.opacity = "1";
            emojisBrick.style.top = "20px";
            smm(emojiBrick1);
            mmom(emojiBrick2);
            mmom(emojiBrick3); 
            mmom(emojiBrick4); 
            mmom(emojiBrick5); 
            sde(emojiDescriptionBrick1);
            ude(emojiDescriptionBrick2);
            ude(emojiDescriptionBrick3);
            ude(emojiDescriptionBrick4);
            ude(emojiDescriptionBrick5);
            smm(actionButtonBrick)
            smm(textAreasBrick)
            setTimeout(function(){ actionButtonBrick.style.bottom = "20px" }, 300);
            emotionSelected = true;
        });

        //Cuando hago click en el icon2
        emojiBrick2.addEventListener("click", function() {
            emotionTeller = "Good";
            fatherBrick.style.height = "290px";
            currentHeightforFeedback = 290;
            hmm(titleBrick)
            spbol()
            emojiSelectorBrick.style.left = "85px";
            emojiSelectorBrick.style.opacity = "1";
            emojisBrick.style.top = "20px";
            smm(emojiBrick2);
            mmom(emojiBrick1);
            mmom(emojiBrick3); 
            mmom(emojiBrick4); 
            mmom(emojiBrick5);
            sde(emojiDescriptionBrick2)
            ude(emojiDescriptionBrick1);
            ude(emojiDescriptionBrick3);
            ude(emojiDescriptionBrick4);
            ude(emojiDescriptionBrick5);
            smm(actionButtonBrick)
            smm(textAreasBrick)
            setTimeout(function(){ actionButtonBrick.style.bottom = "20px" }, 300);
            emotionSelected = true;
        });

        //Cuando hago click en el icon3
        emojiBrick3.addEventListener("click", function() {
            emotionTeller = "Neutral";
            fatherBrick.style.height = "290px";
            currentHeightforFeedback = 290;
            hmm(titleBrick)
            spbol()
            emojiSelectorBrick.style.left = "145px";
            emojiSelectorBrick.style.opacity = "1";
            emojisBrick.style.top = "20px";
            smm(emojiBrick3);
            mmom(emojiBrick1);
            mmom(emojiBrick2); 
            mmom(emojiBrick4); 
            mmom(emojiBrick5);
            sde(emojiDescriptionBrick3)
            ude(emojiDescriptionBrick1);
            ude(emojiDescriptionBrick2);
            ude(emojiDescriptionBrick4);
            ude(emojiDescriptionBrick5);
            smm(actionButtonBrick)
            smm(textAreasBrick)
            setTimeout(function(){ actionButtonBrick.style.bottom = "20px" }, 300);
            emotionSelected = true;
        });

        //Cuando hago click en el icon4
        emojiBrick4.addEventListener("click", function() {
            emotionTeller = "Bad";
            fatherBrick.style.height = "290px";
            currentHeightforFeedback = 290;
            hmm(titleBrick)
            spbol()
            emojiSelectorBrick.style.left = "205px";
            emojiSelectorBrick.style.opacity = "1";
            emojisBrick.style.top = "20px";
            smm(emojiBrick4);
            mmom(emojiBrick1);
            mmom(emojiBrick2); 
            mmom(emojiBrick3); 
            mmom(emojiBrick5);
            sde(emojiDescriptionBrick4)
            ude(emojiDescriptionBrick1);
            ude(emojiDescriptionBrick2);
            ude(emojiDescriptionBrick3);
            ude(emojiDescriptionBrick5);
            smm(actionButtonBrick)
            smm(textAreasBrick)
            setTimeout(function(){ actionButtonBrick.style.bottom = "20px" }, 300);
            emotionSelected = true;
        });

        //Cuando hago click en el icon5
        emojiBrick5.addEventListener("click", function() {
            emotionTeller = "Furious";
            fatherBrick.style.height = "290px";
            currentHeightforFeedback = 290;
            hmm(titleBrick)
            spbol()
            emojiSelectorBrick.style.left = "265px";
            emojiSelectorBrick.style.opacity = "1";
            emojisBrick.style.top = "20px";
            smm(emojiBrick5);
            mmom(emojiBrick1);
            mmom(emojiBrick2);
            mmom(emojiBrick3); 
            mmom(emojiBrick4);
            sde(emojiDescriptionBrick5)
            ude(emojiDescriptionBrick1);
            ude(emojiDescriptionBrick2);
            ude(emojiDescriptionBrick3);
            ude(emojiDescriptionBrick4);
            smm(actionButtonBrick)
            smm(textAreasBrick)
            setTimeout(function(){ actionButtonBrick.style.bottom = "20px" }, 300);
            emotionSelected = true;
        });

        //Icon1 hover
        emojiBrick1.addEventListener("mouseover", function() {
            emojiFaceBrick1.style.transform="translateY(-10px)";
            SuperFaceTeller.style.animationPlayState = "running";
            if(!emotionSelected){
            smm(emojiDescriptionBrick1);
            smm(emojiBrick1);
            mmom(emojiBrick2);
            mmom(emojiBrick3);
            mmom(emojiBrick4);
            mmom(emojiBrick5);
            }
            emojiBrick1.addEventListener("mouseout", function() {
                emojiFaceBrick1.style.transform="translateY(0px)";
                SuperFaceTeller.style.animationPlayState = "paused";
                if(!emotionSelected){
                    mmom(emojiBrick1);
                    emojiDescriptionBrick1.style.opacity= "0";
                }      
            });
        });

        //Icon2 hover
        emojiBrick2.addEventListener("mouseover", function() {
            emojiFaceBrick2.style.transform="translateY(-10px)";
            GoodFaceTeller.style.animationPlayState = "running";
            if(!emotionSelected){
            smm(emojiDescriptionBrick2);
            smm(emojiBrick2);
            mmom(emojiBrick1);
            mmom(emojiBrick3); 
            mmom(emojiBrick4); 
            mmom(emojiBrick5); 
            }
            emojiBrick2.addEventListener("mouseout", function() {
                emojiFaceBrick2.style.transform="translateY(0px)";
                GoodFaceTeller.style.animationPlayState = "paused";
                if(!emotionSelected){
                    mmom(emojiBrick2);
                    emojiDescriptionBrick2.style.opacity="0";
                }     
            });
        });

        //Icon3 hover
        emojiBrick3.addEventListener("mouseover", function() {
            emojiFaceBrick3.style.transform="translateY(-10px)";
            NeutralFaceTeller.style.animationPlayState = "running";
            if(!emotionSelected){
            smm(emojiDescriptionBrick3);
            smm(emojiBrick3);
            mmom(emojiBrick1);
            mmom(emojiBrick2);
            mmom(emojiBrick4); 
            mmom(emojiBrick5); 
            }
            emojiBrick3.addEventListener("mouseout", function() {
                emojiFaceBrick3.style.transform="translateY(0px)";
                NeutralFaceTeller.style.animationPlayState = "paused";
                if(!emotionSelected){
                    mmom(emojiBrick3);
                    emojiDescriptionBrick3.style.opacity="0";
                }    
            });
        });

        //Icon4 hover
        emojiBrick4.addEventListener("mouseover", function() {
            emojiFaceBrick4.style.transform="translateY(-10px)";
            BadFaceTeller.style.animationPlayState = "running";
            if(!emotionSelected){
            smm(emojiDescriptionBrick4);
            smm(emojiBrick4);
            mmom(emojiBrick1);
            mmom(emojiBrick2);
            mmom(emojiBrick3);
            mmom(emojiBrick5);
            }
            emojiBrick4.addEventListener("mouseout", function() {
                emojiFaceBrick4.style.transform="translateY(0px)";
                BadFaceTeller.style.animationPlayState = "paused";
                if(!emotionSelected){
                    mmom(emojiBrick4);
                    emojiDescriptionBrick4.style.opacity="0";
                }    
            });
        });

        //Icon5 hover
        emojiBrick5.addEventListener("mouseover", function() {
            emojiFaceBrick5.style.transform="translateY(-10px)";
            FuriousFaceTeller.style.animationPlayState = "running";
            if(!emotionSelected){
            smm(emojiDescriptionBrick5);
            smm(emojiBrick5);
            mmom(emojiBrick1);
            mmom(emojiBrick2)
            mmom(emojiBrick3);
            mmom(emojiBrick4);
            }
            emojiBrick5.addEventListener("mouseout", function() {
                emojiFaceBrick5.style.transform="translateY(0px)";
                FuriousFaceTeller.style.animationPlayState = "paused";
                if(!emotionSelected){
                    mmom(emojiBrick5);
                    emojiDescriptionBrick5.style.opacity="0";
                }     
            });
        });

        //Text area regex
        textAreaBrick.addEventListener("input", function() {        
            notificationAppear(notificationParagraphBrick, "");
            var isMsg = regexMsg.test(textAreaBrick.value);        
            if(textAreaBrick.value == ""){
                messageTeller = "";
                messageReady = false; // Confirm message setted
                messageTeller = ""; //Set message on variable
                actionButtonBrick.style.color = realWhite;
                actionButtonBrick.style.backgroundColor = nebulaGrey;
                notificationAppear(notificationParagraphBrick, byLanguage("The message must not be empty","El mensaje no puede estar vacío."));
            }
            else if(isMsg){
                messageTeller = textAreaBrick.value;
                messageReady = true; // Confirm message setted
                messageTeller = textAreaBrick.value; //Set message on variable
                actionButtonBrick.style.color = byTheme(realWhite,charmingGrey);
                actionButtonBrick.style.backgroundColor = userColor();
                notificationAppear(notificationParagraphBrick, byLanguage("Thanks for your feedback","Gracias por tu comentario."));
            }
            else if(!isMsg){
                messageTeller = "";
                messageReady = false; // Confirm message setted
                messageTeller = ""; //Set message on variable
                actionButtonBrick.style.color = realWhite;
                actionButtonBrick.style.backgroundColor = nebulaGrey;
                notificationAppear(notificationParagraphBrick, byLanguage("Use letters from Aa-Zz, numbers from 0-9, and supported special signs (?!.,; :)." ,"Usá letras de Aa-Zz, números de 0-9, y signos admitidos (?!.,;:)."));
            }    
            return;
        });


        //Check if is valid email and show notifications (Just regular expression, not real comprobation)
        function checkEmail(){
            var isEmail = regexMail.test(inputAreaBrick.value);
            if(inputAreaBrick.value==""){
                emailTeller = "";
                emailReadyTeller = false;
                lockAndLoudTeller = false;
                actionButtonBrick.style.color = realWhite;
                actionButtonBrick.style.backgroundColor = nebulaGrey;
                notificationAppear(notificationParagraphBrick, byLanguage('The field cannot be empty.' ,'Este campo debe llenarse.'));
            }
            else if(!isEmail){
                emailTeller = "";
                emailReadyTeller = false;
                lockAndLoudTeller = false;
                actionButtonBrick.style.color = realWhite;
                actionButtonBrick.style.backgroundColor = nebulaGrey;
                notificationAppear(notificationParagraphBrick, byLanguage("Not valid email address." ,"Correo electrónico no válido."));
            }
            else if(isEmail){
                emailTeller = inputAreaBrick.value;
                emailReadyTeller = true;
                lockAndLoudTeller = true;
                actionButtonBrick.style.color = byTheme(realWhite,charmingGrey);
                actionButtonBrick.style.backgroundColor = userColor();
                notificationAppear(notificationParagraphBrick, "");
            }
        }

        function entryComposer(entry,resp){
        if (entry==""){return ""}
        else return ('&'+entry+'='+resp)}

        //Submit fetch
        function submit (answer) {      
            if(lockAndLoudTeller){
            answer = encodeURIComponent(answer)
            var fullFeedbackurl = urlFeedbackConstructor()+ 
            entryComposer(entryA,emotionTeller) +
            entryComposer(entryB,emailTeller) +
            entryComposer(entryC,messageTeller) +
            entryComposer(entryD,dateTeller) +
            '&submit=Submit'

            var opts = {
            method: "POST",
            mode: "no-cors", // Google will only submit a form if "mode" is "no-cors"
            redirect: "follow", 
            referrer: "no-referrer"
            }
            console.log("Making request to Google Forms");
            if(detectBrowser() == "ie"){
                titleBrick.style.display = "block";
                skipButtonBrick.style.display = "none";
                inputAreaBrick.style.display = "none";
                actionButtonBrick.style.display = "none";
                titleBrick.style.transform = "translateY(65px)";
                notificationAppear(titleBrick, byLanguage('Your browser does not support the request, we will have to redirect it.','Su navegador no admite la solicitud, tendremos que redirigirla.')); 
                
                setTimeout(function(){ window.open(fullFeedbackurl, 'tellerRequest'); }, 1500);        
                setTimeout(function(){ kiujdgrsghsss() }, 5000);  
            } 
            else{     
                fetch(fullFeedbackurl, opts).then(function(response) {
                return response.text();
            })
            .then(function(text) {      
                titleBrick.style.display = "block";  
                skipButtonBrick.style.display = "none";
                inputAreaBrick.style.display = "none";
                actionButtonBrick.style.display = "none";
                titleBrick.style.transform = "translateY(65px)";
                notificationAppear(titleBrick, byLanguage('We receive the feedback, thanks for your time.','Recibimos su comentario, gracias por su tiempo.')); 
                
            })
            .catch(function(error) {
                titleBrick.style.display = "block";  
                skipButtonBrick.style.display = "none";
                inputAreaBrick.style.display = "none";
                actionButtonBrick.style.display = "none";
                titleBrick.style.transform = "translateY(35px)";
                notificationAppear(titleBrick, byLanguage('Something went wrong, you should try later.','Algo salió mal, no hemos podido cargar su solicitud, por favor intentelo más tarde.')); 
                
            });
            setTimeout(function(){fatherBrick.style.transform = "translateY(20px)";
                fatherBrick.style.opacity = "0";
                titleBrick.style.opacity = "0";
                emojisBrick.style.opacity = "0";
                emojisBrick.style.transform = "translateY(20px)";
                xBrick.style.opacity = "0";

                setTimeout(function(){
                    titleBrick.style.display = "none";
                    fatherBrick.style.display = "none";
                }, 300);
            }, 3000);
            setTimeout(function(){ kiujdgrsghsss(); }, 3000);
            }
        }}
        
        //Event listener for skip button
        skipButtonBrick.addEventListener("click", function() {
            notificationParagraphBrick.style.opacity = "0"
            emailTeller = "none";
            emailReadyTeller = true;
            lockAndLoudTeller = true;
            paragraphBrick.innerHTML = byLanguage('Powered by '+ tellerSmallA,'Con el poder de '+ tellerSmallA);
            paragraphBrick.style.textAlign= "center";             
            paragraphBrick.style.opacity = "1";
            titleBrick.style.opacity = "0";
            skipButtonBrick.style.opacity = "0";
            inputAreasBrick.style.opacity = "0";
            actionButtonBrick.style.opacity = "0";
            submit();
        });

        //Next button event listener on click
        actionButtonBrick.addEventListener("click", function() {
            //Empty message
            if(textAreaBrick.value == ""){
                notificationAppear(notificationParagraphBrick, byLanguage("The message must not be empty","El mensaje no puede estar vacío."));
            }
            //Emotion, message and email ready to fetch
            else if(emotionSelected == true && messageReady == true && emailReadyTeller == true && lockAndLoudTeller == true){
                notificationAppear(notificationParagraphBrick, byLanguage("",""));
                actionButtonBrick.style.opacity = "0";
                titleBrick.style.opacity = "0";
                skipButtonBrick.style.opacity = "0";
                inputAreasBrick.style.opacity = "0";
                paragraphBrick.style.textAlign= "center";
                paragraphBrick.style.opacity = "1";
                setTimeout(function(){submit()}, 1000);
            }
            //Emotion and message completed
            else if(emotionSelected == true && messageReady == true && emailReadyTeller == false && lockAndLoudTeller == false){
                titleBrick.textContent = "";
                emojiSelectorBrick.style.opacity = 0;
                notificationAppear(notificationParagraphBrick, byLanguage("",""));
                emojisBrick.style.transform = "translateY(20px)";
                emojisBrick.style.opacity = "0";
                paragraphBrick.style.opacity = "0";
                titleBrick.style.opacity = "0";
                titleBrick.style.display = "block";
                skipButtonBrick.style.display = "block";
                textAreasBrick.style.transform = "translateY(20px)";
                textAreasBrick.style.opacity = "0";
                inputAreasBrick.style.display = "block";
                setTimeout(function(){
                    notificationAppear(titleBrick, byLanguage('Please enter your email if you are happy for us to contact you, if not press "skip".','Ingrese su correo si esta de acuerdo en que nos comuniquemos con usted, de lo contrario presione "omitir".'));
                    emojisBrick.style.display = "none";
                    checkEmail();
                    fatherBrick.style.height = "220px";
                    currentHeightforFeedback = 220;
                    actionButtonBrick.textContent = byLanguage("SEND","ENVIAR");
                    actionButtonBrick.style.color = realWhite;
                    actionButtonBrick.style.backgroundColor = nebulaGrey;
                    inputAreasBrick.style.top = "120px";
                    inputAreasBrick.style.opacity = "1";
                    textAreasBrick.style.display = "none";
                    skipButtonBrick.style.opacity = "1";
                    titleBrick.style.opacity = "1";
                }, 300);
            }
        });
        //Listen email input
        inputAreaBrick.addEventListener("input", function() {    
            checkEmail()    
        });
    }


    /* Primer dìa, por la mañana cojo una copa de vidrio, la lleno con agua y la pongo al sol. Por la tarde tomo
    de la copa de acuerdo a cuanto sienta he de beber de ella.

    Por la mañana en el primer día cojo una copa de vidrio con agua y la pongo al sol. Por la tarde tomo
    del vaso de acuerdo a cuanto sienta he de beber de ella.

    Por la mañana el primer día cojo una copa de vidrio con agua y la pongo al sol. Por la tarde tomo
    del vaso de acuerdo sienta he de beber de ella.

    El primer día por la mañana coloco una copa de vidrio con agua al sol y tomo de acuerdo sienta
    he de beber de ella. Por la tarde. */



    /* No es correcto talar un árbol para que deje de crecer pues acrentecen sus raíces.

    Me escucho. Mi ansiedad esta ahí para hablarme.
    Dejo de hacer eso que por hacer o por no hacer me causo ansiedad.

    Las cosas se solucionan dejando de hacer cosas, no haciendo más cosas. Si quieren podemos ponerle un nombre etimológico, emmm WU WEI me gusta.

    Primero me vacío de eso que me causa en este caso "ansiedad". Tomar te, respirar lindo, mirar el río son pasos re lindos pero están más adelante si nos queremos poner técnicos.

    Uso mi oscuridad, si soy procrastinador no me pongo a ver un video de cómo dejar de procrastinar, porque caí en la trampa, no solo admito que soy un procrastinador, si no que encima procrastino mis tareas por ponerme a ver un video de como dejar de procrastinar.

    Ahora reemplaze procrastinar por el "martirio" que lo acongoje.

    Cachetazo para los new ages, que parece abundan en este grupo.*/




    /* 

    //UTF Constructor
    const utfTeller = document.createElement("meta");
        utfTeller.setAttribute("charset", "UTF-8");
        utfTeller.setAttribute("type", "text/javascript");
        document.head.appendChild(utfTeller);


    //General status
    function statusBrick(){
        setTimeout(function(){    
            console.log("")
            console.log("userLang: "+ userLang)
            console.log("browserName: "+ detectBrowser())
            console.log("displayed: "+ displayedBox)
            console.log("interacted: "+ interacted)
            console.log("emotionSelected: "+ emotionSelected)
            console.log("emotionTeller: "+ emotionTeller)
            console.log("messageReady: "+ messageReady)
            console.log("messageTeller: "+ messageTeller)
            console.log("emailReadyTeller: "+ emailReadyTeller)
            console.log("emailTeller: "+ emailTeller)
            console.log("lockAndLoudTeller: "+ lockAndLoudTeller)
            console.log("")
        }, 1000);
    }

    */

}
window.onload = function() {
        kiujdgrsghsss();
};





















var tDate = new Date();

  //Convert timestamp in GMT/UTC format
var utcDate = tDate.toUTCString();

console.log(tDate)
console.log(utcDate)

const day = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"][new Date().getDay()]

console.log(day)
