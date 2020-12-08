<<<<<<< HEAD
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

=======
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

>>>>>>> abc1d3f70499a9894323fa7da5769d5748bcdaee
export default UserProfileForm