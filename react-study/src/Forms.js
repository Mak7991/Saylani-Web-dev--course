import React, { Component } from 'react';

class Forms extends Component{

    constructor(props){

        super(props);
        this.state={
            username:'',
            allUser:[] ,
            radioGroup:{
                MEANStack: false,
                MERNStack: true,
                Graphicdesigner: false,
                },

            checkboxGroup:{
                ReactNative:true,
                AngularJs: false,
                ExpressJs: false,
                MongoDB: false,

            }
        }
        this.inputHandler = this.inputHandler.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
        this.radioHandler = this.radioHandler.bind(this);
        this.checkboxHandler = this.checkboxHandler.bind(this);
    }

    inputHandler(event){
        // console.log(event.target.value, 'event',event )
        
        this.setState({
            username: event.target.value 
        })
    }
    clickHandler(){
        let currentuser=this.state.allUser;
        currentuser.push(this.state.username);
        this.setState({
                    allUser: currentuser,
                    username :'',
                    
        })
        console.log(this.state.allUser);
    }
    radioHandler(event){
            console.log(event.target.value)
            let radioGroup = this.state.radioGroup;
            for(var key in radioGroup){
                radioGroup[key]= false
            }
            radioGroup[event.target.value] = event.target.checked;
            
            this.setState({
                radioGroup:radioGroup,
            })
    }
    checkboxHandler(event){
        console.log(event.target.value)
        let checkbox = this.state.checkboxGroup;
        checkbox[event.target.value] = event.target.checked;
        this.setState({
            checkboxGroup: checkbox,
        })
    }

    render(){
        return(
            <div>
                <h1> Forms Topic</h1>

            <input type="text" name="username" value={this.state.username} onChange={this.inputHandler} />
            <br/> 
            Jobcategory:
            <br/>
            <br/>
            <label>
                    Graphic designer <input type="radio" name="jobcategory" value="Graphicdesigner" checked={this.state.radioGroup["Graphicdesigner"]} onChange={this.radioHandler} />
            </label>
            <br/>
            <label>
                    MEAN Stack <input type="radio" name="jobcategory" value="MEANStack" checked={this.state.radioGroup["MEANStack"]} onChange={this.radioHandler}/>
            </label>
                <br/>
            <label>
                    MERN Stack <input type="radio" name="jobcategory" value="MERNStack" checked={this.state.radioGroup["MERNStack"]} onChange={this.radioHandler}/>
            </label>
            <br/>
            <br/>
                Skills:
                <br/>
                <br/>
                <label>
                    React Native <input type="checkbox" name="skills" value="ReactNative" checked={this.state.checkboxGroup["ReactNative"]} onChange={this.checkboxHandler} />
                </label>
                <br/>
                <label>
                    Angular Js <input type="checkbox" name="skills" value="AngularJs" checked={this.state.checkboxGroup["AngularJs"]} onChange={this.checkboxHandler} />
                </label>
                <br/>
                <label>
                    Express Js <input type="checkbox" name="skills" value="ExpressJs" checked={this.state.checkboxGroup["ExpressJs"]} onChange={this.checkboxHandler} />
                </label>
                <br/>
                <label>
                    Mongo DB <input type="checkbox" name="skills" value="MongoDB" checked={this.state.checkboxGroup["MongoDB"]} onChange={this.checkboxHandler} />
                </label>
                <br/>

            <button onClick={this.clickHandler}>Save button</button>
          
            
            </div>
        )
    }
    
}

export default Forms;