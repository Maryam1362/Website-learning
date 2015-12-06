var items=[
    {
    name:"hammer",
	cost:9.99,
	id:101,
	picture:"hammer.jpg"
	},
	{
	  name:"screwdriver",
	  cost:4.99,
	  id:102,
	  picture:"screwdriver.jpg"
	}
	];

function ListItems(){
	for(var i=0;i<items.length;i++){
		console.log(items[i].name+"is $"+items[i].cost);
	}
}
ListItems();