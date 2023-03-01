
var clearDisplay=0;
var selectedOperator=null;
var prevselectedOperator=null;
var runingTotal=0;
var currDisplayValue='';
var hasNumbeenPressed=0;

function UpdateDisplay(update){
hasNumbeenPressed=1;
if (clearDisplay==0)
{
    $('#display').val($('#display').val()+update);
}
else if(clearDisplay==1)
{
    clearDisplay=0;
    $('#display').val('')
    $('#display').val($('#display').val()+update);
}

    $('#display').val($('#display').val()+update);
}

function OperatorButton(operator){
if (hasNumbeenPressed==1)
{
    hasNumbeenPressed=0;
    currDisplayValue=parseInt($('#display').val());
    prevselectedOperator=selectedOperator;
    selectedOperator=operator;
    if (runingTotal==0)
    {
        runingTotal=currDisplayValue; 
    }
    else
    
if (prevselectedOperator=='+')
{
    runingTotal=runingTotal+parseInt($('#display').val());
}
else if (prevselectedOperator=='-')
{
    runingTotal=runingTotal-parseInt($('#display').val());
}
else if (prevselectedOperator=='*')
{
    runingTotal=runingTotal*parseInt($('#display').val());
} 
else if (prevselectedOperator=='/')
{
    runingTotal=runingTotal/parseInt($('#display').val());
}
    $('#dispaly').val(runingTotal);
    clearDisplay=1;
}
else if (hasNumbeenPressed==0)
{
    selectedOperator=operator;
}

}

$('.numberbutton').on('click', function(){
var numberpressed = $(this).val();
UpdateDisplay(numberpressed);
});

$('.operatorbutton').on('click', function(){
var operatorpressed=$(this).html();
operatorButton(operatorpressed);
});

$('#clearbutton').on('click', function(){
    hasNumbeenPressed=0;
    selectedoperator=null;
    runingTotal=0;
    clearDisplay=0;
$('#display').val('');
});

/* function for the equals button*/
$('#equalsbutton').on('click', function(){
if (selectedoperator !=null)
{
    if (selectedoperator=="+")

 {
    runingTotal=runingTotal + parseInt($('#display').val());
 }
 else if (selectedoperator=='-')
 {
    runingTotal=runingTotal-parseInt($('#display').val());
 }
else if (selectedoperator=='*')
{
    runingTotal=runingTotal*parseInt($('#display').val());
}
else if (selectedoperator=="/")

{
   runingTotal=runingTotal / parseInt($('#display').val());
}
$('#display').val(runingTotal);
selectedoperator=null;
clearDisplay=1
}
});