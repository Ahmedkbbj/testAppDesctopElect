const {remote} = require('electron')
document.getElementById('close').addEventListener('click',close_win)
document.getElementById('minimize').addEventListener('click',minimize_win)



function close_win()
{
    
    
var win = remote.getCurrentWindow()
win.close()
BrowserWindow1.close();
mainWindow.BrowserWindow1.close();
}

function minimize_win()
{
var win = remote.getCurrentWindow()
win.minimize()
}

function my_login()
{
    // alert('hello')
    var login= document.getElementById('login').value;
    var pass= document.getElementById('password').value;
    pass.value=login;
    alert(login + ' '+ pass);
    if(login=='ahmed'  && pass=='1234')
    {
        // document.getElementById("submit").addEventListener('click',close_win);
        alert("Bien");
        var win = remote.getCurrentWindow()
        win.close()

    }
    else
    {
        alert("incorrect");
    }
    
    // if(login.value==)
}