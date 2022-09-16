const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const mobile=document.getElementById('mobile');
const gender=document.querySelector('input[type="radio"]');
const country=document.getElementById('select');
var vals = "";
const language=document.querySelector('input[type="checkbox"]');
let namecheck=false;
let emailid=false;
let mobileno=false;
let countrycheck=false;
let languagecheck=false;
let gendercheck=false;
form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
    tableData();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const mobilenumber=mobile.value.trim();
    const countryCheck=country.value.trim();
    const checker=/^\d{10}$/;
    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        namecheck=true;
        setSuccess(username);
    }
    if(mobilenumber === '') {
        setError(mobile, 'mobile number is required');
    } 
    else if(!mobilenumber.match(checker))
    {
        setError(mobile,"Provide valid mobile number")
    }else {
        setSuccess(mobile);
        mobileno=true;
    }
    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
        emailid=true;
    }
    if(countryCheck === '') {
        setError(country, 'Select a country');
    } else {
        setSuccess(country);
        countrycheck=true;
    }
    if(document.querySelector('input[type="radio"]:checked') == null) {
        document.getElementById('gendererror').innerText='Gender is required';
      
    } else {
        document.getElementById('gendererror').innerText='';
        gendercheck=true;
    }
    if(document.querySelector('input[type="checkbox"]:checked') == null) {
        document.getElementById('languageerror').innerText='Language is required';
      
    } else {
        document.getElementById('languageerror').innerText='';
        var checkboxes = document.getElementsByName('language');
        for (var i=0, n=checkboxes.length;i<n;i++) 
        {
            if (checkboxes[i].checked) 
            {
                vals += ","+checkboxes[i].value;
            }
        }
        console.log(vals,"result")
        if (vals) vals = vals.substring(1);
        languagecheck=true;
    }
    
    
};
const tableData=()=>{
if(namecheck && emailid && mobileno && gendercheck && languagecheck && countrycheck)
{
    document.getElementById('tablediv').style.background="white";
    document.getElementById('tablediv').style.width="max-content";
    document.getElementById('tablediv').style.margin="auto";
    document.getElementById('tablediv').style.padding="10px";
    document.getElementById('table').style.border="1px solid";
    document.getElementById('table').style.borderCollapse="collapse";
    document.getElementById('nameHead').style.border="1px solid";
    document.getElementById('nameHead').style.borderCollapse="collapse";
    document.getElementById('emailHead').style.border="1px solid";
    document.getElementById('emailHead').style.borderCollapse="collapse";
    document.getElementById('mobilehead').style.border="1px solid";
    document.getElementById('mobilehead').style.borderCollapse="collapse";
    document.getElementById('languagehead').style.border="1px solid";
    document.getElementById('languagehead').style.borderCollapse="collapse";
    document.getElementById('genderhead').style.border="1px solid";
    document.getElementById('genderhead').style.borderCollapse="collapse";
    document.getElementById('CountryHead').style.border="1px solid";
    document.getElementById('CountryHead').style.borderCollapse="collapse";

    document.getElementById('nameId').style.border="1px solid";
    document.getElementById('nameId').style.borderCollapse= "collapse";
    document.getElementById('emailId').style.border="1px solid";
    document.getElementById('emailId').style.borderCollapse= "collapse";
    document.getElementById('mobileId').style.border="1px solid";
    document.getElementById('mobileId').style.borderCollapse= "collapse";
    document.getElementById('countryId').style.border="1px solid";
    document.getElementById('countryId').style.borderCollapse= "collapse";
    document.getElementById('languageId').style.border="1px solid";
    document.getElementById('languageId').style.borderCollapse= "collapse";
    document.getElementById('genderId').style.border="1px solid";
    document.getElementById('genderId').style.borderCollapse= "collapse";

    document.getElementById('nameHead').innerHTML="Name";
    document.getElementById('emailHead').innerHTML="Email Id";
    document.getElementById('mobilehead').innerHTML="Mobile Number";
    document.getElementById('languagehead').innerHTML="Languages Known";
    document.getElementById('genderhead').innerHTML="Gender";
    document.getElementById('CountryHead').innerHTML="Country";    
    document.getElementById('nameId').innerHTML=username.value.trim();
    document.getElementById('emailId').innerHTML= document.getElementById('email').value;
    document.getElementById('mobileId').innerHTML=document.getElementById('mobile').value;
    document.getElementById('countryId').innerHTML=document.getElementById('select').value;
    document.getElementById('languageId').innerHTML=vals;
    document.getElementById('genderId').innerHTML=document.querySelector('input[type="radio"]:checked').value;
}

}
