let log = console.logbind(console)

function Chef(name,salary) {
	let obj = {
		name: name;
		salary: salary,
	}

	obj.cook = function(dish) {
		let time = dish.time
		for (let i = 0;i< time;i++) {
			log('在做${dish.name}')
		}
		return dish
	}
	return obj
}

let SingletonChef = (function() {
	let instance
	return function(name,salary){
		if(!instance) {
			instance = new Chef(name,salary)
		}
		return instance
	}
})()

    function Server(name,salary) {
    	let obj = {
    		name: name;
    		salary: salary,
    	}

    	obj.order = function(customer,cook,menu) {
    		log("吃啥")
    		let dish = customer.order(menu)
    		log("好嘞")
    		dish = cook.cook(dish)
    		this.serving(dish,customer)
    	}

    	obj.serving = function(dish,customer) {
    		log('${dish.name}来了')
    		customer.eat(dish)
    	}
    	return obj
    }

    let SingletonServer = (function() {
    	let instance
    	return function(name,salary) {
    		if(!instance){
    			instance = new Server(name,salary)
    		}
    		return instance
    	}
    })()

    function Customer() {
    	let obj = {}

    	obj.order = function(menu) {
    		let dish = menu.order()
    		log('吃${dish.name}')
    		return dish
    	}

    	obj.eat = function(dish) {
    		log('${dish.name}好吃')
    	}
    	return obj
    }

    function Dish(name,price,time) {
    	this.price = price
    	this.name = name
    	this.time = time
    }

    function Menu() {
    	this.dishes = [
           new Dish("dish1",10,3),
           new Dish("dish2",70,5),
           new Dish("dish3",60,4),
           new Dish("dish4",30,1),
           new Dish("dish5",20,2),
    	]

    	this.order = function() {
    		let num = Math.floor((Math.random() * 10) % 5)
    		return this.dishes[num]
    	}
    }

    window.onload = function() {
    	this.document.addEventListener("click",e => {
    		if (e.target.id === "start") {
    			let queue = [
                    new Customer(),
                    new Customer(),
                    new Customer(),
                    new Customer(),
                    new Customer(),
                    new Customer(),
    			]

    			let cook = new SingletonChef()
    			let server = new SingletonServer()
    			let menu = new Menu()

    			for (let i = 0;i < queue.length;i++) {
    				server.order(queue[i],cook,menu)
    			}
    		}
    	})
    }
