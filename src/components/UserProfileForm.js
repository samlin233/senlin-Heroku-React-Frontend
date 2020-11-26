import React from "react"

class UserProfileForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <div>
                <form>
                    <label>
                        Name: 
                        <input type="text" name="name" />
                    </label>
                    <hr></hr>
                    <label>
                        Age: 
                        <input type="text" age="" />
                    </label>
                    <hr></hr>
                    <label>
                        Gender: 
                        <input type="text" gender="" />
                    </label>
                    <hr></hr>
                    <label>
                        Bio: 
                        <input type="text" bio="bio" />
                    </label>     
                    <hr></hr> 
                </form>
                <label>
                    Posts:
                </label>
            </div>
        )
    }
}

export default UserProfileForm