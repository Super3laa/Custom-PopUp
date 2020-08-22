# Custom PopUp
Wanna Easy PopUp Form Responsive for Creating and Updating your database,
Voila you're in the right place.
##
![Mob](https://imgur.com/sLDfkj2.png)
##
##
![Web](https://media.giphy.com/media/f8tbIN8CHVhDC3H6tf/giphy.gif)
##
# How it works ?
### Installation
install the package
```sh
$ npm i @alaaessam/custom-popup
```
import the package to your desiered page
```javascript
import PopUp from '@alaaessam/custom-popup';
```
In Order to make the component work we're gonna do a simple react hook State Mangement to display the form or not see the code below if you want to add a user to your users database
```javascript
import PopUp from '@alaaessam/custom-popup';
export default function Users(){
    {< /* We will toggle newUser to Show/Hide the form*/>}
    const[newUser,toggleNewUser]=useState(false);
     return(
        <React.Fragment>
        {< /*action goes down here by default we want the form to be closed*/>}
            {
                newUser?<PopUp
                /*Here we will add the inputs,
                buttons and primaryStyle */
                />:null
            }
            {< /*a Button for adding a New User
            and toggling the Form state*/>}
            <button 
            onClick={()=>{toggleNewUser(!newUser);}
            >Add User</button>
            //Some other Components in your code
        </React.Fragment>
    );
}
```
now if you try the code above you will get a blank pop up so that means it's working..
let's dive in how to populate the form, it's pretty simple.

>From the above example we need inputs for the following:
>username ,password ,email and permission all should be required you cant submit the form without filling them 
>two button for submit and cancel

For the inputs we need an array of objects like this
```javascript
const newUserInputs= [{
        title:"username",
        type: "text",
        required:true,
        props:{
            placeholder: "username",
        }
    },{
        title:"password",
        type: "password",
        required:true,
        props:{
            placeholder: "Password",
        }
    },{
        title:"email",
        type: "email",
        required:true,
        props:{
            placeholder: "E-mail address",
        }
    },]
```
and selectors for permissions
```javascript
  const newUserSelectors=[{
        title:"permissions",
        options:[{value:'admin',label:"Admin"},{value:'secretery',label:"Secretery"}],
        props:{

        }
    }]
```
and two buttons with each button pass the required function
```javascript
 const newUserButtons=[
        {
            name:"Submit",
            backgroundColor:"#ff4e50",
            action:(data)=>{handleNewUser(data)}
        }, 
        {
            name:"Cancel",
            backgroundColor:"#4a4a4a",
            action:()=>{toggleNewUser(!newUser)},
            exitButton:true
        }
    ]
```
the component should look like this and we are good to go
```javascript
<PopUp 
    content={userInput}
    selectors={SelectorsUser}
    buttons={userButtons}
    primaryColor="#ff4e50"
/>
```
and for auto populate
make sure dataValues are a JSON Object with same name of your input and selector 
```javascript
<PopUp 
    content={userInput}
    selectors={SelectorsUser}
    buttons={userButtons}
    dataValues={editUserDataValues}
    populateDataValues={true}
    primaryColor="#ff4e50"
/>
```
When Submitting the Form the function that's passed to the submit button will get params as a JSON Object holding all info about the form.

Waiting for you FeedBack for more fearures
![Web](https://media.giphy.com/media/pzvUEkOeAViy7VS7B6/giphy.gif)