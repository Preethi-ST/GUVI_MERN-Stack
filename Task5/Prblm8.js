console.log("**********DISPLAYING OUTPUT FOR Problem8**********");
var securityQuestions = [
    {
    question: "What was your first pet’s name?",
    expectedAnswer: "FlufferNutter"
    },
    {
    question: "What was the model year of your first car?",
    expectedAnswer: "1985"
    },
    {
    question: "What city were you born in?",
    expectedAnswer: "NYC"
    }
]
var ques = "What was your first pet’s name?";
var ans  =  "FlufferNutter";
function chksecurityQuestions(securityQuestions, ques, ans)
{
    let status=null;
    /* let obj ={};  
    obj["question"]=ques;
    obj["expectedAnswer"] = ans;
    for(i=0;i<securityQuestions.length;i++)  --- Working
    {
        if(JSON.stringify(securityQuestions[i])===JSON.stringify(obj))
        {
          status = "Passed";
          break;
        }
    } */
    for(i=0;i<securityQuestions.length;i++)
    {
        if(securityQuestions[i].question === ques && securityQuestions[i].expectedAnswer === ans)
        {
            status = "Passed";
            break;
        }
    }
    if(status === "Passed") return true;
    else return false;
}
console.log(`Comparing object and a pair of strings and should return if the quest is present and if its valid answer...`);
var status = chksecurityQuestions(securityQuestions, ques, ans);
console.log(status);