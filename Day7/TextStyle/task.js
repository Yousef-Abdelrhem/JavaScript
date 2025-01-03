// Apply different styles over a paragraph according to checked radio button. Implement the
// required functions in an external .js file to let TextStyle.html works properly


 
var p = document.getElementById("PAR");

function ChangeFont(val) {
    p.style.fontFamily = val;
}

function ChangeAlign(val){
    p.style.textAlign = val;

}

function ChangeHeight(val){
    p.style.lineHeight = val;

}

function ChangeLSpace(val)
{
    p.style.letterSpacing = val;

}

function ChangeIndent(val)
{
    p.style.textIndent = val;

}
function ChangeTransform(val)
{
    p.style.textTransform = val;

}
function ChangeDecorate(val)
{
    p.style.textDecoration = val;

}
function ChangeBorder(val)
{
    p.style.border = val;

}
function ChangeBorderColor(val)
{
    p.style.borderColor = val;

}
/// event lestiner parent e.target. /// catch beside p