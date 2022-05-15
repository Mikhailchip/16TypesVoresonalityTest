// UI Elements

var predTest = document.getElementById('pred-button'),
  wpreyTest = document.getElementById('wprey-button'),
  upreyTest = document.getElementById('uprey-button'),

  stragr = document.getElementById('stragr-button'),
  agr = document.getElementById('agr-button'),
  na = document.getElementById('na-button'),
  dis = document.getElementById('dis-button'),
  strdis = document.getElementById('strdis-button'),

  title = document.getElementById('title'),
  title2 = document.getElementById('title2'),
  textarea = document.getElementById('textarea'),
  textarea2 = document.getElementById('textarea2'),
  textarea3 = document.getElementById('textarea3'),
  resetbtn = document.getElementById('reset-button');

// Scores  
var I = 0,
  S = 0,
  V = 0,
  E = 0,
  A = 0,
  P = 0,
  X = 0,
  N = 0;


//Test Statements    
var predStatements = [
    /* Individual */
    "The feelings of my prey matter little to me",
    "My prey should be content that I have deemed them worthy of being my food.",
    "If I take my time with my prey, it is entirely for my own satisfaction.",
    "Struggling prey need to learn their place.",
    "Prey who shout about how they don't want to be eaten are only proving they deserve to be.",

    /* Shared */
    "I would stop devouring my prey if they were uncomfortable.",
    "I listen to what my prey wants and try to satisfy both their needs and my own.",
    "I prefer my prey to be willing; if they’re not, I might try to tempt them into it.",
    "I try to find ways to make my prey feel comfortable with the process.",
    "I would feel regret if I digested an unwilling prey.",

    /* Visceral */
    "I eat primarily to satisfy my hunger.",
    "I’m often too distracted by the feeling of my prey’s muffled voice to understand what they’re saying.",
    "In the end, food is food.",
    "I couldn't hold a conversation with my future prey; I'd be too busy thinking about how good they'll feel sliding down my gullet!",
    "Devouring prey makes me feel stronger.",

    /* Emotional */
    "Swallowing prey isn't as satisfying if I don't get a reaction out of them.",
    "I like the idea of holding someone else inside me more than how my prey might taste or feel.",
    "I never forget that my prey are thinking, feeling beings.",
    "I have fond memories of all the prey I've eaten before.",
    "I especially enjoy eating people I'm close to.",

    /* Active */
    "I often go on the “hunt” for prey, be it in the wilds or in public.",
    "If my prey didn't want to be eaten, they should have tried harder to escape.",
    "When I see someone tasty, I immediately start thinking of ways to go about devouring them.",
    "I'm not afraid to get rough with my prey if I need to.",
    "I enjoy the thrill of the chase.",

    /* Passive */
    "I wait for prey to come to me, rather than seeking them out.",
    "I love meeting potential prey for a drink and a chat before 'the main course.'",
    "I get nervous about expressing my desire to eat someone.",
    "I prefer it when my prey makes the first move.",
    "I get flustered at the thought of having a full belly.",

    /* Sexual */
    "The feeling of a prey disappearing into my gut arouses me.",
    "I'll sometimes grind against my squirming gut after eating a prey.",
    "I continue to tease my prey long after they're gone.",
    "I like the weight from my prey to be added to my more 'seductive' assets.",
    "I eat prey because it's sexy.",

    /* Sensual */
    "Holding prey in my stomach is deeply comforting.",
    "Sometimes I carress my belly for hours, thinking of the prey inside.",
    "I love falling into a food coma after eating prey.",
    "Vore doesn’t need to be sexually arousing to be an enjoyable experience.",
    "I eat prey because it's fun."
  ],

  wpreyStatements = [
    // Individual
    "My predator should accommodate for my tastes.",
    "I would forcefeed myself to someone if they were reluctant to eat me.",
    "I sometimes catch predators off guard with my willingness",
    "I sometimes get jealous of other prey.",
    "I disdain predators who can't appreciate how delicious I am.",

    // Shared 
    "I would feel comfortable sharing a stomach with another prey.",
    "I enjoy hearing sounds of approval from my predator.",
    "I love helping a predator practice devouring people, myself included.",
    "I'd do everything I could to make myself easier to swallow for a predator.",
    "I would want my predator to treat me with the same respect I give them.",

    // Visceral 
    "I'd want my predator to treat me like food, and nothing more.",
    "I'd gladly share a stomach with regular food.",
    "The sensation of being devoured is the most important part.",
    "I wouldn't mind being eaten by a total stranger.",
    "I'd rather my predator rub me from the outside than speak to me when I'm in their belly",

    // Emotional
    "I want to feel like I'm someone special to my predator.",
    "Listening to my predator's heartbeat from the inside soothes me.",
    "An emotional connection to my predator is paramount in vore.",
    "I'd rather be eaten by my friends than strangers.",
    "I'd want to chat with my predator while I was in their stomach",

    // Active 
    "I make myself a target to predators however I can.",
    "When I see a predator yawn, I have to hold myself back from diving right in",
    "I love struggling and rubbing the walls when I'm in a gut.",
    "I put myself in perilous situations on the prospect of being eaten.",
    "I like to leave my fate up to games of chance.",

    // Passive
    "I don't draw attention to myself, waiting for predators to come to me.",
    "Open maws and big bellies make me flustered.",
    "I lay back and let the predator do the work when I'm in a stomach.",
    "I take the safe route wherever I can, but predators find me anyway.",
    "I like to talk with my predator, calmly outlining what I would enjoy.",

    // Sexual 
    "Nothing turns me on quite like sliding down a throat.",
    "I typically need to pleasure myself after being confined to a predator's stomach",
    "I have wet dreams about being devoured.",
    "My predator should pay special attention to my crotch when it's in their mouth.",
    "I enjoy flirtatious comments from my predator.",

    // Sensual
    "Being in a stomach is comforting.",
    "I relish the thought of becoming part of my predator's body.",
    "I imagine myself in a stomach when I need to relax.",
    "Being eaten can be a great boost to my mood and confidence.",
    "I use vore as a chance to escape my boring day-to-day."
  ],

  upreyStatements = [
    // Individual
    "I roll my eyes at predators who tell me how hungry they are.",
    "Teasing me about being prey rarely gets a predator anywhere.",
    "I'm not afraid to hurt a predator if it means escaping them.",
    "Willing Prey perplex me.",
    "I'm not above poisoning my predator if I'm eaten by them.",

    // Shared 
    "I sometimes falter if a predator appeals to my sense of good will.",
    "If I made an agreement to be prey, I would begrudgingly uphold it.",
    "I try my best to reason with a predator when cornered",
    "I have a few select individuals I might consider being eaten by.",
    "I could be convinced to be prey, for a high price or extremely good reason.",

    // Visceral 
    "Being in a tight, cramped stomach sounds like my worst nightmare.",
    "I try to find ways to protect myself from stomach acids, avoiding digesting for as long as I can.",
    "Predators with sharp teeth make me feel nervous.",
    "I would kick and yell to attract the attention of passers by if I were eaten.",
    "My fear of being devoured stems majorly from the physical pain I would be in.",

    // Emotional
    "Being in a predator's gut would be ungodly humiliating.",
    "A predator can tease me to the point of blushing.",
    "I'd rather disappear entirely than have my friends know I was ever prey.",
    "I try not to be noticable when I'm eaten, to avoid attracting attention and further embarrassment.",
    "Being eaten makes me feel weak and submissive.",

    // Active 
    "I put up a fight and try to escape when I'm caught.",
    "I would never submit to a predator's whims.",
    "Predators would need to tie me up to keep me from escaping.",
    "I would attempt to climb back up the throat if I were eaten",
    "I'd be glad knowing I gave a predator a stomach ache for eating me.",

    // Passive
    "I resign to my fate when I'm caught.",
    "I'll often play along with the predator if it means I might not be eaten.",
    "I'll go down without a fight, even if I hate it every step of the way.",
    "I'd rather conserve my energy and struggle in a gut than tire myself out struggling in a throat.",
    "I'm likely to give up the moment the predator belches.",

    // Sexual 
    "I sometimes feel aroused when I'm in someone's jaws, even if I don't want to be.",
    "A predator can get me to moan if they rub their gut just right.",
    "I have some preferences on who, or what, I would want to be eaten by if I had no choice.",
    "If I did get eaten, I'd want the predator to be physically attractive ",
    "Being told how I would add to someone's hips is oddly invigorating.",

    // Sensual
    "My friends would describe me as 'pouty' if they successfully stomach me.",
    "I would reluctantly rub a predator's gut if it meant a chance at being let out.",
    "I would try to appeal to a predator's sense of humanity to convince them not to eat me.",
    "I will bargain with a predator for my freedom.",
    "I could never find being eaten arousing."
  ];

//TestLogic
var testType = "",
  type = "",
  FinalScore = "",
  QuestionNo = 0,
  inc = 0;

var typeDesc = "";

// Functions used to hide buttons when not in use, and show them when they are.

resetbtn.style.display = "none";

function hideType() {
  predTest.style.display = 'none';
  wpreyTest.style.display = 'none';
  upreyTest.style.display = 'none';
}

function showType() {
  predTest.style.display = 'inline';
  wpreyTest.style.display = 'inline';
  upreyTest.style.display = 'inline';
}


function hideOptions() {
  stragr.style.display = 'none';
  agr.style.display = 'none';
  na.style.display = 'none';
  dis.style.display = 'none';
  strdis.style.display = 'none';
}

function showOptions() {
  stragr.style.display = 'inline';
  agr.style.display = 'inline';
  na.style.display = 'inline';
  dis.style.display = 'inline';
  strdis.style.display = 'inline';
}

hideOptions();

function resetScores() {
  I = 0,
    S = 0,
    V = 0,
    E = 0,
    A = 0,
    P = 0,
    X = 0,
    N = 0;
  type = "";
  QuestionNo = 0;
}

//Reset Button
function resetTest() {
  hideOptions();
  showType();
  title.innerText = "Voresonality Test";
  title2.innerText = "Find out your Vore Indicator!"
  textarea.innerText = "Created by TastyTales and Smuxray, with contributions from Eka's Portal users. This test is based off of the Myers-Briggs Personality Indicator, and is designed to show you what kind of predator or prey you are using one of 16 indicators. \n \n Please note that this test is meant to be taken for fun, and is still in its development stage. \n \n Select which test to take.";
  textarea2.innerText = "";
  textarea3.innerText = "";
  resetbtn.style.display = "none";
}

resetbtn.addEventListener('click', function() {
  resetTest();
  resetScores();
});

function finalResult() {
  resetbtn.style.display = "block";
  typeDesc = "";
  type = "";
  if (I >= S) {
    type = type + "I"
    typeDesc = typeDesc + "[I]ndividual / ";
  } else {
    type = type + "S"
    typeDesc = typeDesc + "[S]hared / ";
  }
  if (V >= E) {
    type = type + "V"
    typeDesc = typeDesc + "[V]isceral / ";
  } else {
    type = type + "E"
    typeDesc = typeDesc + "[E]motional / ";
  }
  if (A >= P) {
    type = type + "A"
    typeDesc = typeDesc + "[A]ctive / ";
  } else {
    type = type + "P"
    typeDesc = typeDesc + "[P]assive / ";
  }
  if (X >= N) {
    type = type + "X"
    typeDesc = typeDesc + "Se[X]ual";
  } else {
    type = type + "N"
    typeDesc = typeDesc + "Se[N]sual";
  }
  if (testType == wpreyStatements) {
    type = type + "-W"
  }
  if (testType == upreyStatements) {
    type = type + "-U"
  }
  title.innerText = type;
  title2.innerText = "Your type is: " + type;
  //  textarea.innerText = typeDesc;
  descriptions();
}

function question() {
  checkFinal()
  if (QuestionNo >= 0 && QuestionNo <= 4) {
    questionType = "I";
  } else if (QuestionNo >= 5 && QuestionNo <= 9)
    questionType = "S";
  else if (QuestionNo >= 10 && QuestionNo <= 14)
    questionType = "V";
  else if (QuestionNo >= 15 && QuestionNo <= 19)
    questionType = "E";
  else if (QuestionNo == 20 && QuestionNo <= 24)
    questionType = "A";
  else if (QuestionNo == 25 && QuestionNo <= 29)
    questionType = "P";
  else if (QuestionNo == 30 && QuestionNo <= 34)
    questionType = "X";
  else if (QuestionNo == 35 && QuestionNo <= 39)
    questionType = "N";

  title2.innerText = "Statement " + (QuestionNo + 1) + "/40";
  textarea.innerText = testType[QuestionNo];
  checkFinal()
}



//Choosing the Test Type
predTest.addEventListener('click', function() {
  questionNo = 0;
  testType = predStatements;
  resetScores();
  hideType();
  showOptions();
  question();
});

wpreyTest.addEventListener('click', function() {
  questionNo = 0;
  testType = wpreyStatements;
  resetScores();
  hideType();
  showOptions();
  question();
});

upreyTest.addEventListener('click', function() {
  questionNo = 0;
  testType = upreyStatements;
  resetScores();
  hideType();
  showOptions();
  question();
});


//Checks which score to change

function typeCheck() {
  switch (questionType) {
    case "I":
      I = I + inc;
      break;
    case "S":
      S = S + inc;
      break;
    case "V":
      V = V + inc;
      break;
    case "E":
      E = E + inc;
      break;
    case "A":
      A = A + inc;
      break;
    case "P":
      P = P + inc;
      break;
    case "X":
      X = X + inc;
      break;
    case "N":
      N = N + inc;
      break;
  }
}

//Buttons

stragr.addEventListener('click', function() {
  inc = 2;
  typeCheck();
  QuestionNo++;
  checkFinal()
  question();
});

agr.addEventListener('click', function() {
  inc = 1;
  typeCheck();
  QuestionNo++;
  checkFinal()
  question();
});

na.addEventListener('click', function() {
  inc = 0;
  typeCheck();
  QuestionNo++;
  checkFinal()
  question();
});

dis.addEventListener('click', function() {
  inc = -1;
  typeCheck();
  QuestionNo++;
  checkFinal()
  question();
});

strdis.addEventListener('click', function() {
  inc = -2;
  typeCheck();
  QuestionNo++;
  checkFinal()
  question();
});

function checkFinal() {
  if (QuestionNo >= 40) {
    hideOptions();
    finalResult();
  }
}

function debugMode() {
  textarea2.innerText = I + " " + S + " " + V + " " + E + " " + A + " " + P + " " + X + " " + N;
  title.innerText = questionType;
}

function descriptions() {
  textarea2.style.display = "inline";
  textarea3.style.display = "block";
  switch (type) {

    /* PREDATOR DESCRIPTIONS */

    case "IVAN":
      title2.innerText = "The Apex Predator";
      textarea.innerText = typeDesc;
      textarea2.innerText = "You are an Alpha Predator. Filling your gut is all that matters to you, and there are plenty of tasty prey in the world to fill it with. You hunt them actively, pursuing prey for the sole purpose of feeding your insaitable hunger. They may kick and struggle but, being top of the food chain, you will always win in the end. \n";
      break;
    case "IVAX":
      title2.innerText = "The Ravenous";
      textarea.innerText = typeDesc;
      textarea2.innerText = "Feeding your stomach is one thing, but you're drawn to far more... carnal desires. When some hapless prey goes down your throat, they're contributing not only to your body but a fun night of passion. The IVAX predator revels in a squirming prey, especially one that knows how to push against all the right places. \n";
      break;
    case "IVPN":
      title2.innerText = "The Spider";
      textarea.innerText = typeDesc;
      textarea2.innerText = "The IVPN does not go out of its way to find prey. You know that in time the food will come to you if you're patient. This hunting strategy usually leaves you famished, so when a prey comes your way you don't hesitate to devour them and enjoy a well earned meal. It's true what they say; Good things come to those who wait. \n";
      break;
    case "IVPX":
      title2.innerText = "The Siren";
      textarea.innerText = typeDesc;
      textarea2.innerText = "Unlike their IVPN counterparts, IVPX predators consider a prey's looks before they decide on making them a meal. You much prefer a meal to be cute or attractive, it makes them taste better in ways you can't put your finger on. On the other hand, you may just be making sure that only the highest quality of prey go into your body, knowing that after they're digested your curves will be all the more noticable for it. \n";
      break;
    case "IEAN":
      title2.innerText = "The Seeker";
      textarea.innerText = typeDesc;
      textarea2.innerText = "IEAN predators have their reasons to eat others. Whether they're filling their bellies with people who have wronged them, or whether doing so makes them feel superior,  the Seeker archetype uses vore as a means to an emotional end. \n";
      break;
    case "IEAX":
      title2.innerText = "The Bully";
      textarea.innerText = typeDesc;
      textarea2.innerText = "You always know the right thing to say to make your prey squirm. The IEAX predator finds joy in taunting and teasing their prey into squirming in their gut. They devour prey for amusement, and love it when their prey has a lot of energy to use up in their stomach. They can sometimes get tired of passive or willing prey, but it can also prove to be a fun challenge to figure out what to do to get a reaction out of them. IEAX predators are not always malicious, however. An IEAX predator could also be a predator who likes to flirt with their prey, teasing them as they eat them. \n";
      break;
    case "IEPN":
      title2.innerText = "The Trapper";
      textarea.innerText = typeDesc;
      textarea2.innerText = "IEPN predators love to lure their prey into a false sense of security. They get to know them, often hinting at their fate whilst never outright saying it. In some ways, prey of IEPN know that they are just a meal to them, and yet the IEPN's natural charisma encourages them to remain friends. The IEPN eats to satisfy a desire of Emotional connection to their prey as well as the sensations that come with the process. They can be equally passionate predators and clever tricksters.";
      break;
    case "IEPX":
      title2.innerText = "The Temptress";
      textarea.innerText = typeDesc;
      textarea2.innerText = "The Temptress can often be found at bars, simply waiting for prey to notice them. They wink and slip away from the crowd, guiding they prey into a quiet area where they can get to know eachother better, both emotionally and physically. The IEPN predator enjoys playing games with their prey, luring them into a night of passion (at least, for them) and devouring them when they least expect it. Their seductive nature makes them hard to resist for most, though being Passive they tend to wait for their prey to come to them instead. \n";
      break;
    case "SVAN":
      title2.innerText = "The Companion";
      textarea.innerText = typeDesc;
      textarea2.innerText = "SVAN are much friendlier predators than their IVAN counterparts. They often seek out willing prey to sate their appetite and try to make the experience an enjoyable one for both sides. While they still eat primarily to satisfy their hunger, their Shared nature ensures that their gluttony will never take precedence over the comfort of their prey. \n";
      break;
    case "SVAX":
      title2.innerText = "The Host";
      textarea.innerText = typeDesc;
      textarea2.innerText = "SVAX predators like to make their prey feel comfortable before the main event, outlining clearly what is about to happen to them. They explain their hunger and their desire to be filled, and how good it will feel for both them and their prey. Their passion is infectious, often convincing even the most unwilling prey of their arousal at the prospect of being eaten. The host can use their skills to trick prey, but most would rather that their prey be as satisfied with the outcome as they are. \n";
      break;
    case "SVPN":
      title2.innerText = "The Tempted";
      textarea.innerText = typeDesc;
      textarea2.innerText = "The SVPN is at a constant battle with their urges. They have plenty of prey friends, but when their stomach starts growling all they can think about doing is eating them. They try to ignore the feelings, despite how good it would be to just give in and binge on lots of prey. Finding a willing prey partner is a welcome relief of SVPN... if they can convince themselves to stop at just eating one prey, anyway. \n";
      break;
    case "SVPX":
      title2.innerText = "The Lustful";
      textarea.innerText = typeDesc;
      textarea2.innerText = "Wild nights of frisky passion usually end with a full belly for the SPVX. They can sometimes lose themselves in the moment, wanting to feel their partners deeper than they can possibly go. They may use vore to help themselves or their partner achieve climax, or as a way to cuddle with them after spending time with them. In any case, SVPX predators are lovers with a voracious appetite. \n";
      break;
    case "SEAN":
      title2.innerText = "The Keeper";
      textarea.innerText = typeDesc;
      textarea2.innerText = "SEAN predators like to keep their friends close, and what better way to do that than keeping them inside them? These predators love to spend quality time with the prey in their stomach, often holding them for extended periods of time even while they go about their day to day lives. SEAN predators are likely candidates for endosoma given their love of keeping prey in their bellies for the emotional comfort it brings them. \n";
      break;
    case "SEAX":
      title2.innerText = "The Collector";
      textarea.innerText = typeDesc;
      textarea2.innerText = "SEAX predators have an eye for quality when it comes to prey. They are social creatures, enjoying getting to know any attractive individual who catches their eye. They encourage prey to explore their body and give their opinions on where they'd like to end up on it, though they're more likely to go to 'fun' areas. Their Shared and Emotional traits give them a strong preference for willing prey, who actively search for when 'hunting'. \n";
      break;
    case "SEPN":
      title2.innerText = "The Nurturer";
      textarea.innerText = typeDesc;
      textarea2.innerText = "SEPN predators love to make their prey feel warm and cozy, often encouraging them with comforting words before and after they are done eating them. They lean towards keeping their prey safe and secure, and are reluctant when it comes to anything that would cause their prey harm such as digestion. Some SEPN predators don't even consider themselves to be predators at all, choosing only to eat when a prey comes to them seeking to experience vore. \n";
      break;
    case "SEPX":
      title2.innerText = "The Romantic ";
      textarea.innerText = typeDesc;
      textarea2.innerText = "Romantics, Lovers, Seekers of passion. SEPX predators understand the intimiate nature of vore better than anyone. It is a display of pleasure between two people who both want them same thing; an intimate closeness like no other. SEPX predators do not actively seek prey, but instead offer them the chance to explore their bodies of their own free will. Once inside them, the SEPX takes great sexual pleasure in both their own and their prey's arousal. They often choose to spit their prey out after they're done, or at least find means to revive them as SEPX predators form strong connections with those they eat, and wouldn't want them to be harmed. \n";
      break;
      
      /* WILLING PREY DESCRIPTIONS */

    case "IVAN-W":
      title2.innerText = "The Snack";
      textarea.innerText = typeDesc;
      textarea2.innerText = "Ever since you were young you had a strange desire to be eaten. Perhaps it was the tight embrace of the throat, the low gurgles of a stomach or imagining yourself hanging off the waist of some lucky predator, but you knew you were destined to be food. You seek out predators and try to actively get eaten by them, to the point that most know you mostly as being a willing snack who's always up to be eaten. \n";
      break;
    case "IVAX-W":
      title2.innerText = "The Thrillseeker";
      textarea.innerText = typeDesc;
      textarea2.innerText = "You're active in the pursuit of your vorish dreams, turning your fantasies into reality with each predator you meet. Some are taken aback by just how eager you are, but the motions you make in their stomach after you're devoured clear up any doubts. To you, being eaten is a fetish, and it's one you'll do anything to experience. \n";
      break;
    case "IVPN-W":
      title2.innerText = "The Patient";
      textarea.innerText = typeDesc;
      textarea2.innerText = "You are no stranger to waiting. You often listen to other prey talking about predators they've had experiences with. While you'd love to feel the warm embrace of a stomach, your passive nature prevents you from approaching predators. instead you wait, knowing sooner or later a predator will hunt you down and devour you. \n";
      break;
    case "IVPX-W":
      title2.innerText = "The Daydreamer";
      textarea.innerText = typeDesc;
      textarea2.innerText = "You're caught in an almost constant state of fantasizing about being prey. The hot breath of a predator, their warm tongue between your legs as you slide down their throat. These daydreams make you squirm in delight, but you can't bring yourself to act on them. Still, if a predator were to corner you or put the offer forward... \n";
      break;
    case "IEAN-W":
      title2.innerText = "The Worshipper";
      textarea.innerText = typeDesc;
      textarea2.innerText = "Something about stomachs make you feel at peace. You've never known comfort like the embracing walls of a gut. The IEAN-W prey seeks out predators for the emotional comfort they get from them, or the knowledge they are fulfilling their purpose as prey. \n";
      break;
    case "IEAX-W":
      title2.innerText = "The Explorer";
      textarea.innerText = typeDesc;
      textarea2.innerText = "The IEAX-W is a promiscious prey. They enjoy the emotional elements of vore, finding sexual arousal in the excitement of a gut. However, their Individual nature means that they are not tied down to a single predator. They adventure from place to place, finding new throats to delve down and stomachs to explore. An IEAX-W prey will always have plenty of stories to tell about their experiences. \n";  
      break;
    case "IEPN-W":
      title2.innerText = "The Wallflower";
      textarea.innerText = typeDesc;
      textarea2.innerText = "The IEPN-W is often confused with the IVPX-W Daydreamer, though any IEPN-W prey would make it clear their desires are more than simply 'being eaten'. They fantasize about the sensations of the stomach around them as their predator taunts them from the outside, the knowledge that they are nothing but food to the powerful creature that has consumed them. They often don't care who their predator is, just that someday, somehow, they will be approached by someone who can make them feel like a special treat, and devour them in a single gulp. \n"; 
      break;

      /* Descriptions and Flavour Text To Be Added */

    case "IEPX-W":
      title2.innerText = "The Blusher";
      textarea.innerText = typeDesc;
      textarea2.innerText = "As willing prey: More akin to the IEAX, this prey is likely to be very submissive, allowing them to be taunted and humiliated before, during, or after consumption to get aroused. Alternatively, they may be more similar to the IEPN, wishing that a sexually attractive predator would come to them so that they could be taken advantage of and consumed. \n";
      break;
    case "SVAN-W":
      title2.innerText = "The Committed";
      textarea.innerText = typeDesc;
      textarea2.innerText = "As willing prey: Willing though, this prey might see themselves as food but, rather than find any predator to sate that desire, they're reserving themselves for either a friend or perhaps a needy predator. They may also make sure that their enjoys eating them as much as the prey enjoys being eaten. \n";
      break;
    case "SVAX-W":
      title2.innerText = "The Flavourful";
      textarea.innerText = typeDesc;
      textarea2.innerText = "As willing prey: With a kinky aspect added into the situation, this prey might desire to make themselves as attractive to potential predators as possible, whether that be dressing provacatively, covering themselves with condiments, or whatever else that might make a potential predator see themselves as a delicious, pleasurable morsel. \n";
      break;
    case "SVPN-W":
      title2.innerText = "The Sheep";
      textarea.innerText = typeDesc;
      textarea2.innerText = "As willing prey: While not actively looking to be food, this is the prey who will likely get to know several predators as friends in the hopes that one of them will eventually decide to eat them, rather than try their luck with strangers. If this prey gets to be food to a friend, then they are satisfied. \n";
      break;
    case "SVPX-W":
      title2.innerText = "The Lover";
      textarea.innerText = typeDesc;
      textarea2.innerText = "As willing prey: This is the prey who will actively to try to get into a sexal and/or romantic relationship with a predator in the hopes that a nighttime romp might lead to them being in or on a belly after all is said and done. \n";
      break;
    case "SEAN-W":
      title2.innerText = "The Eager";
      textarea.innerText = typeDesc;
      textarea2.innerText = "As willing prey: This prey will likely have similar views to their predator counterpart, seeking to spend a lot of time inside of them for fun. This prey will actively encourage this to happen and may give the predator internal belly rubs to help keep themselves inside. They might also wish to become one with their predator, feeling that both parties will be benefitted with the prey becoming part of a greater whole. \n";
      break;
    case "SEAX-W":
      title2.innerText = "The Flirtatious";
      textarea.innerText = typeDesc;
      textarea2.innerText = "As willing prey: This prey will encourage and return sexual teasing and taunting, perhaps goading the predator to into becoming aroused enough to consume their prey in a lust-filled state. If the predator isn't enjoying it as they are, then they likely won't wish to be eaten as vore isn't fun unless both sides are happy. They might also seek to become part of an attractive predator, or perhaps to help make a predator more attractive, as they might feel more sexy being part of predator's sexual features or otherwise making them more beautiful. \n";
      break;
    case "SEPN-W":
      title2.innerText = "The Servant";
      textarea.innerText = typeDesc;
      textarea2.innerText = "As willing prey: This is very much like the unwilling SEPN, except, like the predator, they are all too happy to give into the desires rather an hesitate. However long their stay is up to their predator, they'll be content to sit back and relax deep inside of their friend's body. They perhaps might see themselves as their friend's personal snack or chew toy, to be taken and used whenever they want to play. \n";
      break;
    case "SEPX-W":
      title2.innerText = "The Devotee";
      textarea.innerText = typeDesc;
      textarea2.innerText = "As willing prey: This prey might see themselves as an edible sex toy, to be used to pleasure their lover whenever they need it. They are willing to give themselves to their lover to sate their sexual desires, up to and including being processed on any level. Though, being emotional types, they'd ideally hope it wouldn't be a permanent act so that they can continue to please their partner. \n";
      break;

      /* UNWILLING PREY DESCRIPTIONS */

    case "IVAN-U":
      title2.innerText = "The Challenger";
      textarea.innerText = typeDesc;
      textarea2.innerText = "You've been in enough maws to know how to break out of them. Despite multiple escapes, predators keep thinking they can devour you. Maybe some of them think it's a challenge to be able to keep such an active prey down? In any case, the idea that there are people who want to get eaten confuses you greatly, you would never allow yourself to be prey and will punch your way out of anyone who forces it on you. \n";
      break;
    case "IVAX-U":
      title2.innerText = "The Evasive";
      textarea.innerText = typeDesc;
      textarea2.innerText = "You put up a fight at first, but now that you're in a gut your heart begins to flutter in the most peculiar way... are you turned on? why would you feel aroused at a time like this? The IVAX-U experience some sexual excitement at their situation, but refuse to admit it. Better to keep struggling than stop just because you're horny. \n";
      break;
    case "IVPN-U":
      title2.innerText = "The Fatalist";
      textarea.innerText = typeDesc;
      textarea2.innerText = "You fought for a little while, but decided to stop. Maybe you had given up, or maybe you were just conversing your strength. Passive prey rarely last long against the stomach walls, though perhaps this tactic might bore your predator into letting you go? ...one can only hope. \n";
      break;
    case "IVPX-U":
      title2.innerText = "The Swayed";
      textarea.innerText = typeDesc;
      textarea2.innerText = "The IVPX-U is a complicated prey. They know how dangerous being eaten is, how disgusting the innards of a predator are likely to be, but when they are met with this fate they give in. Once the predator begins the process of eating them they find themselves stimulated, having a tongue tasting them is oddly arousing. Perhaps in this sense they aren't as unwilling as they first thought  \n";
      break;
    case "IEAN-U":
      title2.innerText = "The Remorseful";
      textarea.innerText = typeDesc;
      textarea2.innerText = "IEAN-U are melancholic prey. While their willing and predator counterparts find purpose and meaning in the activity, the IEAN-U finds only regret for all the things they never accomplished. They will fight to free themselves and complete their unfinished business. \n";
      break;
    case "IEAX-U":
      title2.innerText = "The Squirmer";
      textarea.innerText = typeDesc;
      textarea2.innerText = "The IEAX-U are easily flustered prey. While their Individual nature means they try to avoid being eaten, they can't help but take a second glance when a predator opens their jaws before them. They cover up their arousal through firm struggles and protesting that they aren't prey, often coaxing predators into teasing them more. A predator who wants to get the most out of an IEAX-U prey should focus on teasing them about their fate, telling them how good they tasted and, above all else, taunting them about how much they IEAX-U prey is enjoying themselves. A combination of these three strategies will guarantee them a prey who squirms all night long. \n";
      break;
    case "IEPN-U":
      title2.innerText = "The Tragic";
      textarea.innerText = typeDesc;
      textarea2.innerText = "All hope was lost the moment a predator laid eyes on them. Trapped with a single gulp, stifled by a burp, now nothing more than a meal. The IEPN-U find themselves in situations outside of their control where they are devoured, and often give into their fate immediately. While an IVPN-U would focus more on the concerns about being digested, the IEPN-U is more worried about how people will react when they find out they've been devoured. They are Passive prey, often giving up after a single attempt at escaping or easily silenced by a pat. \n";
      break;
      
      /* Descriptions and Flavour Text To Be Added */

    case "IEPX-U":
      title2.innerText = "The Indecisive";
      textarea.innerText = typeDesc;
      textarea2.innerText = "As unwilling prey: This prey might have little to no desire to be eaten, but might be too easily aroused or similar that sexual teasing might override whatever resistance they're able to put forward. The IEPX might come to regret their decision once their predator's body has begun to process them or they're otherwise trapped indefinitely. Or, alternatively, they might be willing afterwards, especially if they'll get to live to see this act again. \n";
      break;
    case "SVAN-U":
      title2.innerText = "The Feeder";
      textarea.innerText = typeDesc;
      textarea2.innerText = "As unwilling prey: The typical SVAN prey has predator friends they hang around. They skirt the border of being eaten through socialising with predators and convincing them that they're a better compainion than a meal. They often end up as feeders or find prey for predators to avoid ending up as prey themselves, but they are constantly aware that the next stomach they hear growl could be for them. \n";
      break;
    case "SVAX-U":
      title2.innerText = "The Voyeur";
      textarea.innerText = typeDesc;
      textarea2.innerText = "As unwilling prey: SVAX unwilling prey are often onlookers who find strange arousal out of watching vore but fearing being prey. They might be feeders for their predator friends, follow social media trends about predators eating prey, or just stop and watch when someone else is being devoured. Their Active trait encourages them to get closer and closer to the action, until finally they get a bit too close. \n";
      break;
    case "SVPN-U":
      title2.innerText = "The Gourmet";
      textarea.innerText = typeDesc;
      textarea2.innerText = "As unwilling prey: This prey probably doesn't want to be eaten, but if approached, they are likely to give in and let the predator have their way. Unlike IVPN, however, this prey might make sure that their predator enjoys them at the very least as, if they must be food, they at least should be a memorable meal. \n";
      break;
    case "SVPX-U":
      title2.innerText = "The Offering";
      textarea.innerText = typeDesc;
      textarea2.innerText = "As unwilling prey: Also similar to the SVPN, but, although they do not wish to be food, they may sexually please their predator to the best of their ability before they consign themselves to their fate of being inside or part of their predator. \n";
      break;
    case "SEAN-U":
      title2.innerText = "The Humiliated";
      textarea.innerText = typeDesc;
      textarea2.innerText = "SEAN-U and SEAX-U: I see this as a parallel to the IEA_-U type with a different twist. An IEA has an Individual fear of the Emotional consequences of death (i.e., losing out on having a future) while an SEA has the more Social (Reciprocal?) fear of being held captive. \"I am nobody's dinner!\" \n ";
      break;
    case "SEAX-U":
      title2.innerText = "The Closeted";
      textarea.innerText = typeDesc;
      textarea2.innerText = "SEAN-U and SEAX-U: I see this as a parallel to the IEA_-U type with a different twist. An IEA has an Individual fear of the Emotional consequences of death (i.e., losing out on having a future) while an SEA has the more Social (Reciprocal?) fear of being held captive. \"I am nobody's plaything!\" \n ";
      break;
    case "SEPN-U":
      title2.innerText = "The Trusting";
      textarea.innerText = typeDesc;
      textarea2.innerText = "As unwilling prey: This is more of the reluctant prey who can be coaxed into going inside of someone they trust. They might not want it, but if their companion really does, they will give in and give them the enjoyment they desire. Most likely to need to be convinced it's safe, but they aren't above more fatal outcomes if that's what their friend truly wants. \n";
      break;
    case "SEPX-U":
      title2.innerText = "The Toy ";
      textarea.innerText = typeDesc;
      textarea2.innerText = "As unwilling prey: Much like the SEPN prey, this one is a bit of a reluctant toy. They don't want to be used to sate their lover's sexual desires, but making sure they are happy is ultimately more important, so they get coaxed into the act. \n";
      break;
  }

  // Build the Traits Description
  
 // let iPerc = ((i+s)/100)*i;
 // let sPerc = ((i+s)/100)*s;
 // let vPerc = ((i+s)/100)*i;
 // let ePerc = 0;
 // let aPerc = 0;
 // let pPerc = 0;
 // let xPerc = 0;
 // let nPerc = 0;
  
  

  let isDesc = "";
  let veDesc = "";
  let apDesc = "";
  let xsDesc = "";

  if (I >= S) {
    isDesc = "Individual (I) characters generally don't put much thought toward their partner and their partner's feelings; nor would they put much effort into making the experience enjoyable for their partner. Individual characters aren't necessarily averse to taking it slow and having a little fun beforehand, but in the end they're in it to please themselves. In the case of unwilling prey, Individual means they could care less what their predator wants, they just want to escape and not have to experience it. Willing prey would seek to satisfy their own fantasy regardless of their predator's orientation. \n";
  } else {
    isDesc = "Shared (S) characters can only truly enjoy themselves if their partner is enjoying themselves as well. Though they still seek to achieve their own goals, they do so with respect to their partner's wishes. Shared predators prefer to eat only willing prey, or maybe coax the prey into sliding down their gullet; and, in the event that they do devour unwilling prey (perhaps out of absolute need), they feel remorseful about it, genuinely valuing their prey's emotions. Shared prey characters tend to go willingly and aim to please their predator as best they can on their way down. Unwillingness in Shared prey characters usually amounts to something more like reluctance- they didn't want to be food, but they may as well go along with it now that it's happening. \n";
  }
  if (V >= E) {
    veDesc = "Visceral (V) characters do what they do because they need it, or it simply makes sense. Predators with a Visceral leaning are driven by their raw hunger, or their physical desire to partake in the act, or simply for the need to fuel their body. Visceral prey, when willing, are much the same- they want to be eaten because it feels good, they enjoy the experience physically. Unwilling Visceral prey are motivated purely by their will to survive, or their fear of the pain and/or discomfort of being trapped inside a predator. \n";
  } else {
    veDesc = "Emotional (E) characters tend to focus on the deeper implications behind the whole process of vore. Emotional predators do what they do because they enjoy the relationship with their prey- be it one of affection, or domination- or because they enjoy the thought of holding another being inside themselves and/or turning their prey into a part of their own body. They might enjoy it when their prey begs or struggles while a Visceral predator would likely see such things as a nuisance, something keeping them from their food. Emotional willing prey function much the same way, enjoying the act because it fulfills their desire to be dominated, or to be intimate with their predator, or to be very intimate with their predator- i.e, digested. Emotional unwilling prey want to escape for those very reasons- not for the fear of the physical sensations, but rather the implications of being subjugated in such a way- and, potentially, of not getting to continue with their own life. \n";
  }
  if (A >= P) {
    apDesc = "Active (A) characters go out of their way to make things happen, putting in real effort to achieve their desires. The significance of this trait in predators is simple enough- active predators are the types who hunt regularly, or commonly seek out vore opportunities. Once they have their prey, active predators will likely want to get right to the point, and also probably won't be afraid to apply a little force to get what they want. Active prey will of course actively resist or struggle against their predator- or, in willing cases, intentionally seek out or encourage a pred to make a meal out of them. \n";
  } else {
    apDesc = "Passive (P) characters generally go with the flow of things, more often being drawn into situations than creating them. Passive predators are more inclined to wait and watch potential prey go by rather than simply grabbing one- perhaps coming up with a detailed plan to claim their prize, or luring prey close using their own appealing body. Passive predators can also simply not see themselves as predators, or try to resist their hunger when they're around prey (often failing to do so when the temptation becomes too much). Passive prey, naturally, tends to submit once the predator has them in their grasp- giving in for a host of possible reasons ranging from subservience to despair to sexual thrill. Willing types will happily subject themselves to their predator's whims, serving the role of 'toy' or 'food' with few objections. Unwilling Passive types tend to be more defeatist in nature- giving up struggling once they realize it's hopeless (while Active types tend to struggle on and on regardless of how hopeless it may seem). \n";
  }
  if (X >= N) {
    xsDesc = "SeXual (X) characters see vore as an act of temptation, sprouting from lust. Generally, any Sexual character would be hard-pressed to resist becoming aroused if they happened to be drawn into a vore scenario. Sexual predators seek out food to satisfy their carnal urges in tandem with any other motivations, including hunger, the desire to dominate, and/or put some extra weight on their hips. Sexual prey enjoy the experience similarly, taking pleasure in being their predator's meal, plaything or body-fuel- regardless of whether they do so willingly or unwillingly. \n";
  } else {
    xsDesc = "SeNsual (N) characters see vore as an act of plain pleasure, satisfaction, or perhaps of pure hunger. They don't associate the sexual element with it directly like Sexual types do- although this doesn't mean they can't still have a sexually involved vore experience now and then. Sensual predators can have all sorts of motivations depending on their other personality aspects, but generally, they do vore for food, satisfaction, bonding or fun- and not as an act of lust in and of itself. Sensual prey likewise enjoy the experience without the need for eroticism- or perhaps they're just some unfortunate unwilling prey-type, one that's pure enough not to take guilty pleasure in being devoured. \n";
  }

  textarea3.innerText = isDesc + "\n" + veDesc + "\n" + apDesc + "\n" + xsDesc;
}