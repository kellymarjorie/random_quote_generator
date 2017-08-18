$(document).ready(function () {
  
    function getQuote() {
    
        var quote = ["We have to remember what's important in life: friends, waffles, and work. Or waffles, friends, word. But work has to come third. - Leslie",
"You know my code: hoes before bros. Uteruses before duderuses. Ovaries before brovaries. - Leslie",
"What I hear when I'm being yelled at is people caring really loudly at me. - Leslie",
"I ate a brownie one. At a party in college. It was kind of indescribable really, I felt like I was floating. It turns out there wasn't any marijuana in it, it was just an insanely good brownie. - Leslie",
"I love you and I like you. - Leslie",
"Oh my god, I wonder who else was born in Eagleton. Voldemort probably. - Leslie",
"No matter what I do, literally nothing bad can happen to me. I'm like a white male US senator. - Leslie",
"Now if you'll excuse me, I'm about to endorse 10 beers into my mouth, cause this has been an incredibly stressful evening. - Leslie",
"If I had to have a stripper's name, it would be 'Equality'. - Leslie",
"I am big enough to admit that I am often inspired by myself. - Leslie",
"Hey Leslie. It's Leslie. Hang in there. I love you. Bye. - Leslie",
"I'm going to be direct and honest with you. I would like a glass of red wine and I'll take the cheapest one you have because I can't tell the difference. - Leslie",
"Guys love it when you can show them you're better than they are at something they love. - Leslie",
"I don't want to be overdramatic but today felt like a hundred years in hell and the absolute worst day of my life. - Leslie",
"I took your idea and I made it better. - Leslie",
"The thing about youth culture is - I don't understand it. - Leslie",
"He told me he liked me, and I'm gonna go make out with him right now. On his face. - Leslie",
"I'm like that light bulb.. Weak, flickering, barely giving off any light, unable to make out with the light bulb I want to make out with. - Leslie",
"Winning is every girl's dream. But it's my destiny. - Leslie",
"Why would anybody ever eat anything besides breakfast food. - Leslie",
"I'm cried out, but I want to cry more, so I'm rehydrating. - Leslie",
"Wow, that's weird, with us being women and all. You'd think our boobs would get in the way. - Leslie",
"Shut your mouth, you have all the strengths. - Leslie",
"Oh Ann, you beautiful rule-breaking moth. - Leslie",
"Ann, you beautiful tropical fish. - Leslie",
"Ann, you poetic and noble land-mermaid. - Leslie",
"I stand behind my decision to avoid salad and other disgusting things. - Leslie",
"One person's 'annoying' is another person's 'inspiring and heroic'. - Leslie",
"You are a beautiful, talented, billiant, powerful musk ox. - Leslie",
"Dear Congress, it's Leslie again.. - Leslie",
"A blind stubborn belief that what I am doing is 100% right. - Leslie",
"There's nothing we can't do if we work hard, never sleep, and shirk all other responsibilities in our lives. - Leslie",
"He is attractive and charming, and his family employs half the town. But so what? I am a lifelong government bureaucrat who's well versed in the issues. And those are the kind of sexy qualifications that win elections. - Leslie",
"It's true, I no longer have highly trained, professional campaign managers. So what? Are most murders committed by highly trained, professional assassins? No, they're committed by friends and coworders! - Leslie",
"I have been very civil, but I will waterboard you. - Leslie",
"Just before I can't go out with him, someone else can? Wow. - Leslie",
"I always carry emergency s'more rations in my car. - Leslie",
"What kind of lunatic would want to be Cleopatra over Eleanor Roosevelt? - Leslie",
"I'm gonna get drunk, and then I'm gonna order a 3 course meal where each course is made of dessert. - Leslie",
"One time I accidentally drank an entire bottle of vinegar. I thought it was terrible wine. - Leslie",
"Hobbies? Organizing my agenda. Wait. That doesn't sound fun. Jammin' on my planner! - Leslie",
"Oh Ann, you beautiful, naive, sophisticated newborn baby. - Leslie",
"I have no idea what I'm doing, but I know I'm doing it really, really well. - Andy",
"Dear frozen yogurt, you are the celery of dessert. Be ice cream, or be nothing. - Ron",
"There has never been a sadness that can't be cured by breakfast foods. - Ron",
"Time is money, money is power, power is pizza, and pizza is knowledge. - April",
"Never half-ass two things. Whole-ass one thing. - Ron",
"I'd wish you the best of luck, but I believe luck is a concept created by the weak to explain their failures. - Ron",
"I am 100% certain that I am 0% sure of what I'm going to do. - Chris",
"I once forgot to brush my teeth for five weeks. - Andy",
"I didn't actually sell my last car, I just forgot where I parked it. - Andy",
"I don't know who Al Gore is and at this point I'm too afraid to ask. - Andy",
"When they say 2% milk, I don't know what the other 98% is. - Andy",
"I'm allergic to sushi. Every time I eat more than 80 pieces, I throw up. - Andy",
"Sometimes you work a little, so you can ball a lot. - Tom",
"Leslie, I tried to make ramen in the coffee pot and I broke everything. - Andy",
"Jogging is the worst. I know it keeps you healthy, but god, at what cost?! - Ann",
"When people get a little too chummy with me, I like to call them by the wrong name to let them know I don't really care about them. - Ron",
"I have never taken the high road, but I tell other people to. Cause then there's more room for me on the low road. - Tom",
"One time my refridgerator stopped working. I didn't know what to do, I just moved. - Tom",
"I can't go because I don't want to. - Ron",
"Clear alcohols are for rich women on diets. - Ron",
"I don't even have time to tell you how wrong you are. Actually, it's gonna bug me if I don't. - Ben",
"Ann, you unstoppable, glamorous freight train. - Leslie",
"I don't care about the prize, but I want his happiness to go away. - April",
"Leslie, I typed your symptoms into the thing up here and it says you have network connectivity problems. - Andy",
"Put some alcohol in your mouth, to block the words from coming out. - Ron",
"There's only one thing I hate more than lying: skim milk. Which is water that's lying about being milk. - Ron",
"Fishing relaxes me. It's like yoga, except I still get to kill something. - Ron",
"I regret nothing. The end. - Ron",
"I like saying 'no,' it lowers their enthusiasm. - Ron"]
    
        var randomQuote = quote[Math.floor(Math.random() * quote.length)];
        var lastQuote;
        if(quote.indexOf(randomQuote) === lastQuote) {
            getQuote();
        } else {
            lastQuote = quote.indexOf(randomQuote);
            $('.message').html(randomQuote);
        }
    
        return randomQuote;
    };
  
    window.onload = getQuote();
  
    function tweetQuote() {
    
        var tweet = $(".message").text();

        var url = "https://twitter.com/intent/tweet?hashtags=parksandrec&related=freecodecamp&text=" + tweet;
        document.getElementById("tweetQuote").setAttribute("href", url);
    
    };
  
    $('#getMessage').on('click', getQuote);
    $("#tweetQuote").on('click', tweetQuote);
});