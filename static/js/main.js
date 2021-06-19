function submit_entry()
{
    var height=document.getElementById('height').value;

    var weight=document.getElementById('weight').value;
    var hm=height/100

    var bmi=(weight/(hm*hm))
    var status=""
    if (bmi <= 18.5)
    {
        status="Underweight";
        document.getElementById('demo').style.color="yellow";
    }
    else if(bmi >= 18.6 && bmi < 24.9)
    {
        status="Normal weight";
        document.getElementById('demo').style.color="green";
    }
    else if(bmi >= 25 && bmi < 30)
    {
        status="Overweight";
        document.getElementById('demo').style.color="orange";
    }
    else
    {
        status="Obese";
        document.getElementById('demo').style.color="red";
    }
    document.getElementById('demo').innerHTML=status
}