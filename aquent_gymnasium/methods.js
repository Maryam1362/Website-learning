var messenger={
	greeting:"Hello",
	name:"Mary",
	sayHello:function() {
		console.log(this.greeting+","+this.name+"!");
	}
};
messenger.sayHello();