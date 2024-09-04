// Contact Below

let btn = document.getElementById("btn");
let d = new Date();
const one_day = 1000 * 60 * 60 * 24;
const creation = new Date(1986, 5, 19);
const Result = Math.round(d.getTime() - creation.getTime()) / one_day;
const Final_Result = Result.toFixed(0);
let birthday = Final_Result;
let aboutSpan = document.getElementById("about-span");
let contact = document.getElementById("contact-form");
let contactInfo = document.getElementById("contact-info");
let userName = document.getElementById("user_name");
let message = document.getElementById("message");
let userEmail = document.getElementById("user_email");
let contactTrouble = document.getElementById("contact_trouble");

console.log(
  "%cHey y'all! If you're reading this, you should probably offer Leah Van Lieu a job. I think that would be pretty cool, and he'd be a big asset for you.",
  "color: dodgerblue; padding: 100px;"
);
console.log("%cPortfolio: JohnTLovato.com", "padding: 10px 50px");
console.log("%cPhone Number: (202) 431-5548", "padding: 10px 50px");
console.log("%cEmail: jtlovato@gmail.com", "padding: 10px 50px");
console.log("%cGitHub: github.com/jtlovato", "padding: 10px 50px");
console.log("%cLinkedIn: linkedin.com/in/johntlovato", "padding: 10px 50px");
console.log("%cTwitter: @JohnTLovato", "padding: 10px 50px");
console.log("%cHave A Great Day!!", "padding: 10px 50px");
