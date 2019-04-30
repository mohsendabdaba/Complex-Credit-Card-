import React from 'react'

class Card1 extends React.Component {
 constructor(){
 super()
 this.state = {
  number :'',
  valid :'',
  name: ''
}
}
  handleChange1 = (event) => {
    console.log(this.state.number.length)
   if(event.target.value.length <= 16 && !isNaN(event.target.value) ){
    this.setState({
    number : event.target.value.trim()   
   });
}
else if (event.target.value  ===''){
  this.setState({
  number : event.target.value.trim()
  });
  }
}
methode = (x)=> {
  let l= x.toString()
  let y = []
     for (let i = 0; i <x.length; i += 4) {
    y.push(l.slice(i, i + 4))
  }
  return y.join(' ')
}
handleChange2= (event) => {
if ( event.target.value.length<=4 && !isNaN(event.target.value) ) {
   this.setState({
valid: event.target.value.trim()
});
}
else if (event.target.value  ===''){
  this.setState({
  valid: event.target.value.trim()
  });
  }
}
validthru =()=>{
let x = this.state.valid.toString()
if (x.length<=4  ) {
if (x.slice(0,2)<=12 && x.slice(0,2)>0){
if (x.slice(2,4)<19) {
return  x.slice(0,2)+'/'}
 else return x.slice(0,2) +'/'+x.slice(2,4)}
}
}
handleChange3 = (event) => {
if (event.target.value.length<20 && event.target.value.match(/^[a-zA-Z]+$/gi) ){
this.setState({
name : event.target.value.toUpperCase().trim()
});
}
else if (event.target.value  ===''){
this.setState({
name : event.target.value.toUpperCase().trim()
});
}
}

render() {
 return (
<div>
{<Card methode = {this.methode} validthru={this.validthru}  handleChange1= {this.handleChange1} handleChange2= {this.handleChange2} handleChange3= {this.handleChange3}  num={this.state.number} val={this.state.valid} NAME={this.state.name} />} 
</div>
);
}
}
export default Card1 ;


class Card extends React.Component{
render (){
return (   
<div className="dispaly-input" >
  <div className="card1">    
    <h1>CREDIT CARD</h1>
    <img className="image2"src="https://i.imgur.com/jaxefe4.png" alt=""></img> 
    <p className="number">{this.props.methode(this.props.num).padEnd(16,'*')}</p>
    <div className="total">
        <div class="low-card">
            <div className="thru">
                <div class="describe">
                     <h6>MONTH/YEAR</h6>
                     <h3>{this.props.validthru(this.props.val)}</h3>         
                </div>
            </div>
            <div class="name"> 
                    <span>{this.props.NAME.match(regex)}</span>             
            </div>
        </div>
        <img className="image3"src="https://q7h8y4i2.stackpathcdn.com/wp-content/uploads/2013/12/visa-mastercard-logo.jpg" alt=""></img>
    </div> 
  </div>
  <div className="card2">
   <input name = 'number' value = {this.props.num}type="text"  onChange={event => this.props.handleChange1(event)} class="input1 form-control " placeholder="Card Number " aria-label="Username" aria-describedby="basic-addon1"></input>   
   <input name ="valid" value = {this.props.val} type="text"  onChange={event => this.props.handleChange2(event)} class="input2 form-control " placeholder="VALID THRU " aria-label="Username" aria-describedby="basic-addon1"></input> 
   <input name="name" value = {this.props.NAME} type="text"  onChange={event => this.props.handleChange3(event)} class="input3 form-control " placeholder="Card Name " aria-label="Username" aria-describedby="basic-addon1"></input>     
  </div>
</div>       
);
} 
  }
  var regex=/[a-z ]+$/gi;

export {Card}


  
     





 

