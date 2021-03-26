



var loading = 0;
var backdrop = 0;
var Morality = [0, 0, 0, 0, 0, 0, 0, 0];
var ev = 0;
var Story = 1;

requestAnimationFrame(draw);


function draw() {
    background("black");
    if (loading == 0 || loading == 2) {
        if (Story == 1) {

            if (backdrop == 0) {
                title();
                story("", 0, "Start", 1, "Begin", 1)
            } else {
                story("Dog", 1, "Inspect", 2, "Glance", 2)
                story("Fluffy", 2, "Pet", 30, "Kick", 3)
                story("Yelp", 3, "Kick", 4, "Stop", 11)
                story("Whimper", 4, "Kick", 5, "Stop", 11)
                story("Silent", 5, "Kick", 6, "Stop", 6)
                story("Crowd", 6, "Threaten", 7, "Ignore", 29)
                story("Disgust", 7, "Lash", 8, "Attack", 8)
                story("Anger", 8, "Bloat", 9, "Provoke", 9)
                story("Brawl", 9, "Outnumbered", 10, "Outmatched", 10)
                story("Death", 10, "What?", 0, "How?", 0)
                story("Dog", 29, "Kick", 9, "Punch", 9)

                story("Flee", 11, "Follow", 12, "Flee", 0)
                story("Alley", 12, "Dog", 13, "Doubleback", 16)
                story("Scared", 13, "Confort", 19, "Beat", 14)
                story("Corpse", 14, "Flee", 16, "Gather", 15)
                story("Limp", 15, "Eat", 16, "Store", 16)
                story("Sirens", 16, "Flee", 17, "Hide", 17)
                story("Caught", 17, "Struggle", 18, "Punch", 18)
                story("Execution", 18, "What?", 0, "How?", 0)

                story("Curious", 19, "Pet", 20, "Beat", 14)
                story("Anxious", 20, "Scratch", 21, "BeaT", 14)
                story("Forgiveness", 21, "Stroke", 22, "BEAT", 14)
                story("Happy", 22, "Pet", 23, "B E A T", 14)
                story("happy", 23, "Pet", 24, "B E A T", 14)
                story("beat", 24, "Pet", 25, "B E A T", 14)
                story("Beat", 25, "Pet", 26, "B E A T", 14)
                story("BEAT", 26, "Pet", 27, "B E A T", 14)
                story("B E A T", 27, "Pet", 28, "B E A T", 14)
                story("B E A T", 28, "pet", 28, "B E A T", 14)



                story("Happy", 30, "Collar?", 31, "Feed", 32)
                story("Collarless", 31, "Neglect", 0, "Feed", 32)
                story("Hungry", 32, "Meat", 33, "Chocolate", 14)
                story("Devoured", 33, "Pet", 34, "Scratch", 34)
                story("Excited", 34, "Friend?", 35, "Companion?", 35)
                story("Both", 35, "Walk", 36, "Home", 36)
                story("Tomorrow Is", 36, "Another", 0, "Day", 0)

            }
        } else if (Story == 2) {
            if (backdrop == 0) {
                title();
                story("", 0, "Start", 1, "Begin", 1)
            } else {
                if (Morality[0] == 2) {
                    story("Dog", 1, "Inspect", 2, "Glance", 2)
                    story("Disappear", 2, "What?", 3, "How?", 3)
                    story("Morning", 3, "Awake", 4, "Snooze", 3)
                    story("Dreaming", 4, "Reality?", 5, "Asleep?", 5)
                    story("Outside", 5, "Dog?", 6, "Wander", 18)
                    story("Disappear", 6, "What?", 3, "Wait", 7)
                    story("Morning", 7, "Run", 8, "Snooze", 3)
                    story("Running", 8, "Behind!", 9, "Run", 11)
                    story("Demon!", 9, "Sprint", 10, "Run", 11)
                    story("Tripped", 10, "Falling", 3, "Down", 3)
                    story("Closer", 11, "Sprint", 10, "Run", 12)
                    story("Near", 12, "Sprint", 10, "Run", 13)
                    story("Almost", 13, "Sprint", 10, "Run", 14)
                    story("Caught", 14, "Struggle", 15, "Plead", 15)
                    story("Swallowed", 15, "Falling", 16, "Down", 16)
                    story("Morning", 16, "Awake", 17, "Snooze", 3)
                    story("Scar", 17, "What?", 18, "How?", 18)
                    story("Floorless", 18, "Falling", 19, "Down", 19)
                    story("Morning", 19, "Cautious", 20, "Careless", 20)
                    story("Picture", 20, "Where?", 21, "What?", 22)
                    story("Sheets", 21, "What?", 22, "How?", 20)
                    story("Dog", 22, "How?", 20, "Contemplate", 23)
                    story("Hurt", 23, "Regret", 24, "Heartless", 25)
                    story("GUILTY", 24, "Wait", 25, "What?", 25)
                    story("Floorless", 25, "Falling", 26, "Down", 26)
                    story("Crisis", 26, "Acceptance", 27, "Escape", 28)
                    story("Forever", 27, "Falling", 0, "Down", 0)


                    story("Awake", 28, "Wait", 29, "Go", 27)
                    story("Demon!", 29, "Frieght", 15, "Calm", 30)
                    story("Sins", 30, "Forgiveness", 31, "Think", 32)
                    story("Second Chance", 31, "Move", 0, "On", 0)
                    story("Waiting", 32, "Forgiveness", 31, "Attack", 33)


                    story("Shock", 33, "Punch", 34, "Kick", 34)
                    story("Anger", 34, "Attack", 35, "Defend", 36)
                    story("Lost", 35, "Wait", 27, "No!", 27)
                    story("Staggered", 36, "Finish", 37, "Him!", 37)
                    story("Victory", 37, "But,", 0, "Alone", 0)
                } else if (Morality[0] == 3) {
                    story("Dog", 1, "Inspect", 2, "Glance", 2)
                    story("Corpse", 2, "What?", 3, "How?", 3)
                    story("Morning", 3, "Awake", 4, "Snooze", 3)
                    story("Dreaming", 4, "Reality?", 5, "Asleep?", 5)
                    story("Outside", 5, "Dog?", 6, "Wander", 18)
                    story("Corpse", 6, "What?", 3, "Wait", 7)
                    story("Morning", 7, "Run", 8, "Snooze", 3)
                    story("Running", 8, "Behind!", 9, "Run", 11)
                    story("Demon!", 9, "Sprint", 10, "Run", 11)
                    story("Tripped", 10, "Falling", 3, "Down", 3)
                    story("Closer", 11, "Sprint", 10, "Run", 12)
                    story("Near", 12, "Sprint", 10, "Run", 13)
                    story("Almost", 13, "Sprint", 10, "Run", 14)
                    story("Caught", 14, "Struggle", 15, "Plead", 15)
                    story("Swallowed", 15, "Falling", 16, "Down", 16)
                    story("Morning", 16, "Awake", 17, "Snooze", 3)
                    story("Scar", 17, "What?", 18, "How?", 18)
                    story("Floorless", 18, "Falling", 19, "Down", 19)
                    story("Morning", 19, "Cautious", 20, "Careless", 20)
                    story("Picture", 20, "Where?", 21, "What?", 22)
                    story("Sheets", 21, "What?", 22, "How?", 20)
                    story("Dog", 22, "How?", 20, "Contemplate", 23)
                    story("Corpse", 23, "Empty", 24, "Heartless", 24)
                    story("GUILTY", 24, "Wait", 25, "What?", 25)
                    story("Floorless", 25, "Falling", 26, "Down", 26)
                    story("Crisis", 26, "Acceptance", 27, "Escape", 28)
                    story("Forever", 27, "Falling", 0, "Down", 0)


                    story("Awake", 28, "Wait", 29, "Go", 27)
                    story("Demon!", 29, "Frieght", 15, "Calm", 30)
                    story("Sins", 30, "Forgiveness", 31, "Think", 32)
                    story("Second Chance", 31, "Move", 0, "On", 0)
                    story("Waiting", 32, "Forgiveness", 31, "Attack", 33)


                    story("Shock", 33, "Punch", 34, "Kick", 34)
                    story("Anger", 34, "Attack", 35, "Defend", 36)
                    story("Lost", 35, "Wait", 27, "No!", 27)
                    story("Staggered", 36, "Finish", 37, "Him!", 37)
                    story("Victory", 37, "But,", 0, "Alone", 0)
                } else if (Morality[0] == 1) {
                    story("Dog", 1, "Inspect", 2, "Glance", 2)
                    story("Asleep", 2, "What?", 3, "How?", 3)
                    story("Morning", 3, "Awake", 4, "Snooze", 3)
                    story("Dreaming", 4, "Reality?", 5, "Asleep?", 5)
                    story("Outside", 5, "Dog?", 6, "Wander", 18)
                    story("Asleep", 6, "What?", 3, "Wait", 7)
                    story("Morning", 7, "Run", 8, "Snooze", 3)
                    story("Running", 8, "Behind!", 9, "Run", 11)
                    story("Demon!", 9, "Sprint", 10, "Run", 11)
                    story("Tripped", 10, "Falling", 3, "Down", 3)
                    story("Closer", 11, "Sprint", 10, "Run", 12)
                    story("Near", 12, "Sprint", 10, "Run", 13)
                    story("Almost", 13, "Sprint", 10, "Run", 14)
                    story("Caught", 14, "Struggle", 15, "Plead", 15)
                    story("Swallowed", 15, "Falling", 16, "Down", 16)
                    story("Morning", 16, "Awake", 17, "Snooze", 3)
                    story("Scar", 17, "What?", 18, "How?", 18)
                    story("Floorless", 18, "Falling", 19, "Down", 19)
                    story("Morning", 19, "Cautious", 20, "Careless", 20)
                    story("Picture", 20, "Where?", 21, "What?", 22)
                    story("Sheets", 21, "What?", 22, "How?", 20)
                    story("Dog", 22, "How?", 20, "Contemplate", 23)
                    story("Asleep", 23, "Smile", 24, "Pet", 24)
                    story("Frozen", 24, "Wait", 25, "What?", 25)
                    story("Floorless", 25, "Falling", 26, "Down", 26)
                    story("Crisis", 26, "Acceptance", 27, "Escape", 38)
                    story("Forever", 27, "Falling", 0, "Down", 0)
                    story("Dog!", 38, "Help!", 39, "Ignore", 27)
                    story("Saved!", 39, "Now", 28, "What?", 28)


                    story("Awake", 28, "Wait", 29, "Go", 27)
                    story("Demon!", 29, "Frieght", 15, "Calm", 30)
                    story("Hunger", 30, "Dog", 31, "Protect", 32)
                    story("Sacrifice?", 31, "Push", 40, "Wait...", 30)


                    story("Devoured", 40, "...", 40, "Attack", 33)
                    story("Shock", 33, "Punch", 34, "Kick", 34)
                    story("Anger", 34, "Attack", 35, "Defend", 36)
                    story("Lost", 35, "Wait", 33, "No!", 33)
                    story("Staggered", 36, "Finish", 37, "Him!", 37)
                    story("Victory", 37, "But,", 0, "Alone", 0)

                    story("Angry", 32, "Protect", 41, "Attack", 41)
                    story("Victory", 41, "Now", 0, "What?", 0)
                }
            }
        } else if (Story == 3) {
            if (backdrop == 0) {
                title();
                story("", 0, "Start", 1, "Begin", 1)
            } else {
                story("Awake?", 1, "Where?", 2, "What?", 2)
                story("Letter", 2, "Open", 3, "Ignore", 4)
                if (Morality[0] == 3 && Morality[1] == 3) {
                    story("Mo", 3, "What?", 4, "Who?", 4)
                } else if (Morality[0] == 3 && Morality[1] != 3) {
                    story("M", 3, "What?", 4, "Who?", 4)
                } else if (Morality[0] != 3 && Morality[1] == 3) {
                    story("o", 3, "What?", 4, "Who?", 4)
                } else if (Morality[0] != 3 && Morality[1] != 3) {
                    story("*Blank*", 3, "What?", 4, "Who?", 4)
                }
                story("AWAKE!", 4, "Where?", 6, "Self?", 5)
                story("Politician", 5, "Where?", 6, "Ok...", 7)
                story("Interview", 6, "Self?", 5, "Ok...", 7)

                story("Stance?", 7, "Moderate", 8, "Extremist", 11)
                story("Direction?", 8, "Left", 9, "Right", 10)
                story("Position?", 9, "Liberal", 14, "Socialist", 14)
                story("Position?", 10, "Conservative", 14, "Capitalist", 14)
                story("Direction?", 11, "Left", 12, "Right", 13)
                story("Position?", 12, "Communist", 22, "Anarchist", 22)
                story("Position?", 13, "Statist", 22, "Facist", 22)

                story("Issue", 14, "For", 15, "Against", 15)
                story("Issue #2", 15, "For", 16, "Against", 16)
                story("Issue #3" , 16, "For", 17, "Against", 17)
                story("Scandel", 17, "Apologize", 18, "Denounce", 20)

                story("Results...", 18, "And?", 19, "What?", 19)
                story("Elected!", 19, "What's", 0, "Next?", 0)

                story("Results...", 20, "And?", 21, "What?", 21)
                story("Lost", 21, "What's", 0, "Next?", 0)

                story("Issue", 22, "For", 23, "Against", 23)
                story("Issue #2", 23, "For", 24, "Against", 24)
                story("Issue #3" , 24, "For", 25, "Against", 25)
                story("Scandel", 25, "Apologize", 26, "Denounce", 28)

                story("Results...", 26, "And?", 27, "What?", 27)
                story("Elected!", 27, "What's", 0, "Next?", 0)

                story("Results...", 28, "And?", 29, "What?", 29)
                story("Shot", 29, "What's", 0, "Next?", 0)
            }
        } else if (Story == 4) {
            if (backdrop == 0) {
                title();
                story("", 0, "Start", 1, "Begin", 1)
            } else {
                story("Marching", 1, "What?", 2, "Self?", 3)
                story("Deployment", 2, "Self?", 3, "Where?", 4)
                story("Soldier", 3, "What?", 2, "Where?", 4)
                story("Vietnam", 4, "Surrondings?", 5, "Ok...", 8)
                if (Morality[0] == 1) {
                    story("Dogs", 5, "Are", 6, "Loved", 6)
                } else if (Morality[0] == 2){
                    story("Dogs", 5, "Are", 6, "Abused", 6)
                } else if (Morality[0] == 3){
                    story("Dogs", 5, "Are", 6, "Killed", 6)
                }

                if (Morality[1] == 1) {
                    story("Depression", 6, "Doesn't", 7, "Exist", 7)
                } else if (Morality[1] == 2){
                    story("Depression", 6, "Is", 7, "Rampant", 7)
                } else if (Morality[1] == 2){
                    story("Suicide", 6, "Is", 7, "Rampant", 7)
                }

                if (Morality[2] == 1) {
                    story("Politics", 7, "Are", 8, "Calm", 8)
                } else if (Morality[2] == 2) {
                    story("Politics", 7, "Are", 8, "Violent", 8)
                } else if (Morality[2] == 3) {
                    story("Political", 7, "Violence", 8, "Everywhere", 8)
                }

                story("Weeks", 8, "Pass", 9, "By...", 9)
                story("Welcome", 9, "To", 10, "Vietnam", 10)
                story("Self?", 10, "Squad", 11, "Leader", 11)

                story("Orders:", 11, "What?", 12, "Where?", 12)
                story("Stop The", 12, "Bombardment From", 13, "The VC", 13)
                story("In", 13, "The", 14, "Village", 14)

                story("Later", 14, "Where?", 15, "Men?", 16)
                story("100 Meters", 15, "Away From", 14, "The Vilage", 14)
                story("20", 16, "Men", 17, "Strong", 17)
                story("Gunshots!", 17, "Where?", 18, "Towards?", 19)
                story("From", 18, "The", 17, "Village", 17)
                story("Towards", 19, "Your", 20, "Men", 20)

                story("Tactics?", 20, "Think", 21, "Attack!", 28)
                story("Village", 21, "Civilans?", 22, "Soldiers?", 23)
                story("100 Civilains", 22, "Soldiers?", 23, "Hmm...", 24)
                story("Unknown", 23, "Civilans?", 22, "Hmm...", 24)

                story("What To Do?", 24, "Burn", 25, "Careful", 27)
                story("Burning", 25, "What's", 26, "Next?", 26)

                story("All Civilans Dead", 26, "1 Of Your", 0, "Men Died", 0)
                story("No Civilans Dead", 27, "10 Of Your", 0, "Men Died", 0)
                story("50 Civilans Dead", 28, "4 Of Your", 0, "Men Died", 0)

            }
        } else if (Story == 5) {
            if (backdrop == 0) {
                title();
                story("", 0, "Start", 1, "Begin", 1)
            } else {
                story("Emergncy!", 1, "What?", 2, "Where?", 3)
                story("Robbery", 2, "Where?", 3, "Go", 4)
                story("Blocks Away", 3, "What?", 2, "Go", 4)

                story("You're", 4, "A Police", 5, "Officer", 5)
                story("House", 5, "Inspect", 6, "Storm", 13)
                story("Inspection", 7, "Door?", 8, "Windows?", 9)
                story("Unscratched", 8, "Windows?", 9, "Think", 10)
                story("Solid", 9, "Door?", 8, "Think", 10)

                story("No Sign", 10, "Of A", 11, "Break-In", 11)
                story("What To Do?", 11, "Storm", 13, "Radio", 12)
                story("Wrong", 12, "House", 0, "Address", 0)


                story("Man", 13, "Threaten", 14, "Shoot", 20)
                story("Confusion", 14, "Threaten", 15, "Shoot", 20)
                story("Surrendered", 15, "Approach", 16, "Shoot", 20)
                story("African American", 16, "Question", 17, "Execute", 20)
                story("Anger", 17, "Wait,", 18, "Execute", 20)
                story("Wrong", 18, "House", 0, "Address", 0)

                story("Corpse", 19, "What's", 20, "Next?", 20)
                story("Wrong", 20, "House", 0, "Address", 0)
            }
        } else if (Story == 6) {
            if (backdrop == 0) {
                title();
                story("", 0, "Start", 1, "Begin", 1)
            } else {
                story("Protest", 1, "Where?", 2, "Self?", 3)
                story("City Hall", 2, "Self?", 3, "What?", 4)
                story("Protest Leader", 3, "Where?", 2, "What?", 4)

                if (Morality[0] == 1){
                    story("Lack", 4, "Of", 5, "Pets", 5)
                } else if (Morality[0] == 2){
                    story("Domestic", 4, "Animal", 5, "Abues", 5)
                } else if (Morality[0] == 3){
                    story("Domestic", 4, "Animal", 5, "Killings", 5)
                }

                if (Morality[1] == 1) {
                    story("Lack", 5, "Of", 6, "Recreation", 6)
                } else if (Morality[1] == 2){
                    story("High", 5, "Depression", 6, "Rates", 6)
                } else if (Morality[1] == 2){
                    story("High", 5, "Suicide", 6, "Rates", 6)
                }

                if (Morality[2] == 1) {
                    story("Long", 6, "Government", 7, "Terms", 7)
                } else if (Morality[2] == 2) {
                    story("Politcal", 6, "Unrest", 7, "Everywhere", 7)
                } else if (Morality[2] == 3) {
                    story("Political", 6, "Violence", 7, "Everywhere", 7)
                }

                if (Morality[3] == 1) {
                    story("Small", 7, "Army", 8, "Size", 8)
                } else if (Morality[3] == 2) {
                    story("Army", 7, "Killing", 8, "Civilians", 8)
                } else if (Morality[3] == 3) {
                    story("Army", 7, "Executing", 8, "Civilians", 8)
                }

                if (Morality[4] == 1) {
                    story("Lack", 8, "Of", 9, "Jobs", 9)
                } else if (Morality[4] == 2) {
                    story("Police", 8, "Hurting", 9, "People", 9)
                } else if (Morality[4] == 3) {
                    story("Police", 8, "Executing", 9, "People", 9)
                }

                story("Hours Later", 9, "Progress?", 10, "Opposition?", 11)
                story("Lacking", 10, "Opposition?", 11, "Decisions", 12)
                story("Couple Officers", 11, "Progress?", 10, "Decisions", 12)

                story("What", 12, "To", 13, "Do?", 13)
                story("", 13, "Protest", 14, "Riot", 15)

                story("As Long", 14, "As", 0, "Possible", 0)

                story("Police And", 15, "Rioters Under", 16, "Attack", 16)
                story("Police", 16, "Preparing", 17, "To Fire", 17)

                story("", 17, "Fall Back", 18, "Charge", 19)
                story("As Long", 18, "As", 0, "Possible", 0)
                story("As Long", 19, "As", 0, "Possible", 0)
            }
        }
    }
    moralityCount()
    requestAnimationFrame(draw);
}

document.addEventListener("keydown", next)

function next(event) {
    if (event.keyCode == 49 || event.keyCode == 50) {
        ev = event.keyCode
        loading = 2
        if (backdrop == 13 && event.keyCode == 50 && Story == 1) {
            setTimeout(load, 3000)
        } else {
            setTimeout(load, 1000)
        }
    }
}

function moralityCount() {
    if (Morality[0] != 0 && backdrop == 0) {
       if (Morality[1] != 0) {
           if (Morality[2] != 0) {
                if (Morality[3] != 0) {
                    if (Morality[4] != 0) {
                        Story = 6
                   } else {
                        Story = 5
                   }
               } else {
                    Story = 4
               }
           } else {
                Story = 3
           }
       } else {
            Story = 2
       }
    }
{
    if (backdrop == 10 && Story == 1) {
        Morality[0] = 2;
    } else if (backdrop == 16 && Story == 1) {
        Morality[0] = 3;
    } else if (backdrop == 36 && Story == 1) {
        Morality[0] = 1;
    }
}

{
    if (backdrop == 27 && Story == 2 && Morality[0] == 2) {
        Morality[1] = 2;
    } else if (backdrop == 31 && Story == 2 && Morality[0] == 2) {
        Morality[1] = 1;
    } else if (backdrop == 37 && Story == 2 && Morality[0] == 2) {
        Morality[1] = 3;
    } else if (backdrop == 27 && Story == 2 && Morality[0] == 3) {
        Morality[1] = 2;
    } else if (backdrop == 31 && Story == 2 && Morality[0] == 3) {
        Morality[1] = 1;
    } else if (backdrop == 37 && Story == 2 && Morality[0] == 3) {
        Morality[1] = 3;
    } else if (backdrop == 27 && Story == 2 && Morality[0] == 1) {
        Morality[1] = 2;
    } else if (backdrop == 39 && Story == 2 && Morality[0] == 1) {
        Morality[1] = 1;
    } else if (backdrop == 37 && Story == 2 && Morality[0] == 1) {
        Morality[1] = 3;
    }
}

{
    if (backdrop == 19 && Story == 3) {
        Morality[2] = 1;
    } else if (backdrop == 21 && Story == 3) {
        Morality[2] = 1;
    } else if (backdrop == 28 && Story == 3) {
        Morality[2] = 2;
    } else if (backdrop == 26 && Story == 3) {
        Morality[2] = 3;
    }
}

{
    if (backdrop == 27 && Story == 4) {
        Morality[3] = 1;
    } else if (backdrop == 28 && Story == 4) {
        Morality[3] = 2;
    } else if (backdrop == 26 && Story == 4) {
        Morality[3] = 3;
    }
}

{
    if (backdrop == 12 && Story == 5) {
        Morality[4] = 1;
    } else if (backdrop == 18 && Story == 5) {
        Morality[4] = 2;
    } else if (backdrop == 20 && Story == 5) {
        Morality[4] = 3;
    }
}

{
    if (backdrop == 14 && Story == 6) {
        Morality[5] = 1;
    } else if (backdrop == 18 && Story == 6) {
        Morality[5] = 2;
    } else if (backdrop == 19 && Story == 6) {
        Morality[5] = 3;
    }
}

}

function story(title, back, option1, to1, option2, to2) {
    if (backdrop == back) {
        if (loading == 0) {
            textList(title, option1, option2)
        }
        if (loading == 2) {
            if (ev == 49) {
                backdrop = to1
                loading = 1
            } else if (ev == 50) {
                backdrop = to2
                loading = 1
            }
        }
    }
    
}

function load() {
    loading = 0
}

function title() {
    if (Morality[0] == 0) {
        stroke("white");
    } else if (Morality[0] == 1) {
        stroke("green")
    } else if (Morality[0] == 2) {
        stroke("red")
    } else if (Morality[0] == 3) {
        stroke("black")
    }
    text("M", (cnv.width / 2) - 150, 200, "stroke", "100px Georgia");
    if (Morality[1] == 0) {
        stroke("white");
    } else if (Morality[1] == 1) {
        stroke("green")
    } else if (Morality[1] == 2) {
        stroke("red")
    } else if (Morality[0] == 3) {
        stroke("black")
    }
    text("o", (cnv.width / 2) - 60, 200, "stroke", "100px Georgia");
    if (Morality[2] == 0) {
        stroke("white");
    } else if (Morality[2] == 1) {
        stroke("green")
    } else if (Morality[2] == 2) {
        stroke("red")
    } else if (Morality[0] == 3) {
        stroke("black")
    }
    text("r", (cnv.width / 2) - 5, 200, "stroke", "100px Georgia");
    if (Morality[3] == 0) {
        stroke("white");
    } else if (Morality[3] == 1) {
        stroke("green");
    } else if (Morality[3] == 2) {
        stroke("red")
    } else if (Morality[0] == 3) {
        stroke("black")
    }
    text("a", (cnv.width / 2) + 35, 200, "stroke", "100px Georgia");
    if (Morality[4] == 0) {
        stroke("white");
    } else if (Morality[4] == 1) {
        stroke("green")
    } else if (Morality[4] == 2) {
        stroke("red")
    } else if (Morality[0] == 3) {
        stroke("black")
    }
    text("l", (cnv.width / 2) + 90, 200, "stroke", "100px Georgia");
    if (Morality[5] == 0) {
        stroke("white");
    } else if (Morality[5] == 1) {
        stroke("green")
    } else if (Morality[5] == 2) {
        stroke("red")
    } else if (Morality[0] == 3) {
        stroke("black")
    }
    text("i", (cnv.width / 2) + 120, 200, "stroke", "100px Georgia");
    if (Morality[6] == 0) {
        stroke("white");
    } else if (Morality[6] == 1) {
        stroke("green")
    } else if (Morality[6] == 2) {
        stroke("red")
    } else if (Morality[0] == 3) {
        stroke("black")
    }
    text("t", (cnv.width / 2) + 150, 200, "stroke", "100px Georgia");
    if (Morality[7] == 0) {
        stroke("white");
    } else if (Morality[7] == 1) {
        stroke("green")
    } else if (Morality[7] == 2) {
        stroke("red")
    } else if (Morality[0] == 3) {
        stroke("black")
    }
    text("y", (cnv.width / 2) + 195, 200, "stroke", "100px Georgia");
}

function textList(title, option1, option2) {
    stroke("white");
    text(title, (cnv.width / 2) - 150, 200, "stroke", "100px Georgia");
    if (backdrop == 28 && Story == 1) {
        text("B E A T: " + option1, (cnv.width / 2) - 200, 400, "stroke", "50px Arial");
        text("B E A T: " + option2, (cnv.width / 2) - 200, 500, "stroke", "50px Arial");
    } else {
        text("1: " + option1, (cnv.width / 2) - 200, 400, "stroke", "50px Arial");
        text("2: " + option2, (cnv.width / 2) - 200, 500, "stroke", "50px Arial");
    }
}