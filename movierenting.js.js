(function(){

let movieArray = [
	{id:1, title: 'Thor',author:'Author', year: 2003},
    {id:2, title: 'jdjdje',author:'Author', year: 2010},
    {id:3, title: 'jdjdje',author:'Author', year: 2003},
    {id:4, title: 'jdjdje',author:'Author', year: 1867},
    {id:5, title: 'jfffdje',author:'Author', year: 1963},
    {id:6, title: 'rjdje',author:'Author', year: 2003},
    {id:7, title: 'jdjdje',author:'Author', year: 1985},
    {id:8, title: 'jdjdje',author:'Author', year: 2007},
    {id:9, title: 'edsdjdje',author:'Author', year: 1903},
    {id:10, title: 'jdjdje',author:'Author', year: 2603}
];//movie liist

// let tasks = {
//  id:"",
//  title:"",
//  done: false,
// }

let searchButton = document.getElementById("search-button");//search button
let searchInput = document.getElementById("search-input");//search
let rentedMovies = document.getElementById("rented-movies");//rented movieds
let notFound = document.createElement('div')
//let notFound = document.getElementById('notFound')
// let completedTasks = document.getElementById("completed-tasks");
// let clearAll = document.getElementById("clear-all");

render();

// clearAll.addEventListener("click",function(){
// 	pendingTasks.innerHTML = "";
// 	completedTasks.innerHTML = "";
// 	taskArray = [];
// 	render();
// });


searchButton.addEventListener("click",()=>{//search button
	// const new_task = Object.assign({},tasks);
	// const value = newToDo.value;
	// const id = generateID(value);
    
    // for(let task of taskArray){
    // 	if(task.id === id){
    // 		alert("task already exists");
    // 		return
    // 	}
    // };

	// new_task.title = value;
	// new_task.id = id;

	// taskArray.push(new_task);

	render();

	// newToDo.value = "";
	
});

// function generateID(string){
//   let hash = 0, char;
//   for(let i = 0; i < string.length; i++){
//   	char = string.charCodeAt(i);
//   	hash = ((hash << 5) - hash) + char;
//     hash |= 0;
//   }

//   return Math.abs(hash);
// }

function render(){
  rentedMovies.innerHTML = "";


    let filtered = movieArray.filter(function(movie){ 
				return movie.title.toLowerCase().startsWith(
					searchInput.value.toLowerCase());
				}
				);

	if (filtered.length === 0) {
		notFound.innerText = 'Movie not found';
		rentedMovies.appendChild(notFound)
	}

	
	filtered.forEach(function(movie){
		rentedMovies.appendChild(createMovieNode(movie))
	})

	searchInput.value = "";
 
}


function createMovieNode(movie){

	let movieNode = document.createElement("tr");
	let serialNumber = document.createElement("td");
	let movieTitle = document.createElement("td");
	let movieAuthor = document.createElement("td");
	let movieYear = document.createElement("td");
	let action = document.createElement("td");
	let _rent = document.createElement("button");

	_rent.id = movie.id;
	_rent.innerText = "Rent";
	 _rent.addEventListener("click",Rent);
	// movieNode.id = movie.id;
	serialNumber.innerText = movie.id;
	movieTitle.innerText = movie.title;
	movieAuthor.innerText = movie.author;
	movieYear.innerText = movie.year;
	action.appendChild(_rent);

	// done.setAttribute("task-id",task.id);
	// if(!is_done){
	// done.innerText = "done"
    // done.addEventListener("click",Done);
	// }
	// else {
	// done.innerText = "undone";
	// done.addEventListener("click",Undone);
	// }

    // edit.setAttribute("task-id",task.id);
    // edit.innerText = "edit"
    // edit.addEventListener("click",Edit);
    
    // _delete.setAttribute("task-id",task.id);
    // _delete.innerText = "delete";
    // _delete.addEventListener("click",Delete);


	movieNode.appendChild(serialNumber);
    movieNode.appendChild(movieTitle);
    movieNode.appendChild(movieAuthor);
	movieNode.appendChild(movieYear);
	movieNode.appendChild(action);
    return movieNode;
}

// function Done(e){
// 	for(let task of taskArray){
// 		if(task.id === Number(e.target.getAttribute("task-id"))){
// 			task.done = true;
// 			render();
// 			break;
// 		}
// 	}
// }

// function Undone(e){
// 	for(let task of taskArray){
//         if(task.id === Number(e.target.getAttribute("task-id"))){
//         	task.done = false;
//         	render()
//         	break;
//         }
// 	}
// }

// function Edit(e){
// 	let new_title = prompt("Change task title");

// 	for(let task of taskArray){
// 		if(task.title === new_title){
// 			alert("a task with this name already exists!");
// 			return;
// 		}
// 	}

// 	for(let task of taskArray){
// 		if(task.id === Number(e.target.getAttribute("task-id"))){	
// 			task.title = new_title;
// 			task.id = generateID(new_title);
// 			break;
// 		}
// 	}

// 	render();
// }

function Rent(e){
	for(let index in movieArray){
		if(movieArray[index].id === Number(e.target.getAttribute("id"))){
			movieArray.splice(index,1);
			alert("Movie rented successfully!!");
			break;
		}
	}

	render();
}


})()