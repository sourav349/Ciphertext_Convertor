document.querySelector('.submitBTN2').addEventListener('click', (f) => {
    f.preventDefault();
    let a = document.querySelector('#originalATB').value;
    let n = a.length;
    let i, j, s="";
    for(i=0;i<n;i++)
    {
        j = a.charCodeAt(i);
        if (j>96&&j<123)
        {
            s+=String.fromCharCode(219-j);
        }
        else if (j>47&&j<58){
            s+=String.fromCharCode(105-j);
        }
        else if (j>64&&j<91)
        {
            s+=String.fromCharCode(155-j);
        }
        else
        {
            s+=String.fromCharCode(j);
        }
    }
    document.querySelector('#encodedATB').innerHTML = s;
})