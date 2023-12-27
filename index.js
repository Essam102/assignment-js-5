var bookName= document.getElementById('BookMarkName');
var UrlWebSite = document.getElementById('BookMarkWeb');
var bookMarkList=[];

if(localStorage.getItem('bookMark') !=null )
{
    bookMarkList = JSON.parse(localStorage.getItem('bookMark'));
    displayBook();    
}


function addBookMark()
{
    
    if(validateBook() == true && validateBookUrl()==true)
    {
        var bookMark={
            name:bookName.value,
            web:UrlWebSite.value,
        }
        bookMarkList.push(bookMark);
        // clearBook()
     localStorage.setItem('bookMark' , JSON.stringify( bookMarkList))
     displayBook();

     //  console.log('bookMark')
    }
    else{
        alert("Please write correct Name")  ;
    }

 
 // console.log(bookMarkList);
}

function clearBook()
{
    bookName.value ='' ;
    UrlWebSite.value ='';
}



function displayBook()
{
    var box=``;
    for( var i =0 ;i<bookMarkList.length ;i++)
    {
        box +=`
        <tr>
           <th>${[i]}</th>
            <td>${bookMarkList[i].name}</td>
            <td><a href='${bookMarkList[i].URL}'><button class ='btn btn-outline-primary'>Visit</button></a></td>
            <td><button class=' btn btn-outline-danger' onclick='deleteBook(${i})' > delete </button></td>
        </tr>
        `
    }
    // console.log(box);
    document.getElementById('tableBook').innerHTML= box;
}


function deleteBook(bookDelete)
{
   bookMarkList.splice(bookDelete , 1) 
   localStorage.setItem('bookMark' , JSON.stringify( bookMarkList))
   displayBook()
}

function validateBook()
{
 
    var regex = /^[A-Z][a-z]{3,8}$/;
    if(regex.test(bookName.value) == true)
    {
        return true;
    }
    else
    {
        return false;
    }
    
}
function validateBookUrl()
{
 
    var regex = /^www\.[a-z]{3,15}\.com$/;
    if(regex.test(UrlWebSite.value) == true)
    {
        return true;
    }
    else
    {
        return false;
    }
    
}
