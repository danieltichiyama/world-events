//Make history, or better yet...make the World Events page interactive with events or event listeners for each exercise below.

// 1. The Greatest Thing Since Sliced Bread 
// Find the onclick event in the h3 element and create a function that will italicize the contents and change the font color to cornflowerblue in the div id of 'bread'.

function italics (){
	bread.style.cssText='font-style:italic;color:cornflowerblue;';
}

// 2. The Birth of the Internet
// Find the onmouseover event in the h3 element and create a function that will replace the current contents in the div id of 'webby' to the following:

var webContents = 'The Internet got its start in the United States more than 50 years ago as a government weapon in the Cold War. In the 1980s, research at CERN in Switzerland by British computer scientist Tim Berners-Lee resulted in the World Wide Web, linking hypertext documents into an information system, accessible from any node on the network.';

function changeContent (){
	webby.innerHTML = webContents;
}

// 3. The Boxer Rebellion
// Find the onclick event in div id of 'fightDaPower' and create a function that will convert the Chinese text in the same div element into English (the English content is provided below).

var revolution = 'Boxer Uprising or Yihetuan Movement was an anti-imperialist uprising which took place in China towards the end of the Qing dynasty between 1899 and 1901. It was initiated by the Militia United in Righteousness, known in English as the "Boxers," and was motivated by proto-nationalist sentiments and opposition to foreign imperialism and associated Christian missionary activity.';

function translation (){
	fightDaPower.innerHTML = revolution;
}

// 4. The Great Depression
// Add an event listener to the h3 element id of 'hardTimes' and create a function to display the contents in the div element of 'depress'.

hardTimes.addEventListener ('click',displayContent);

function displayContent (){
	depress.style.display = 'initial';
}

// 5. Apollo 11
// Add an event listener to the h3 element id of 'blastOff' and create a function to show and hide the contents in the div element of 'moonWalk' after clicking on Apollo 11.

blastOff.addEventListener ('click', showHide);

function showHide (){
	if (moonWalk.style.display==='none'){
		moonWalk.style.display = 'initial';
	}else{	moonWalk.style.display='none';
	}
}

// 6. The American Civil War
// Add an event listener to the div element id of 'freedom' and create a function to remove all instances of 'corn' in the content.

freedom.addEventListener ('click',removeCorn);

function removeCorn (){
	var str = document.getElementById('freedom').innerHTML;
	var newStr = str.replace (/corn/g,'');
	freedom.innerHTML = newStr;
}

// 7. The Renaissance
// Add an event listener to the div element id of 'rebirth' and create a function to remove all the lowercase and uppercase z's in the content. 

rebirth.addEventListener ('click',removeZs);

function removeZs (){
	var str = rebirth.innerHTML;
	var newStr = str.replace(/z/gi,"");
	rebirth.innerHTML = newStr;
}

// 8. the Gutenberg Printing Press
// Add an event listener to the h3 element id of 'showBooks' and create a function to display a random book title from the classics array in the div element of 'mustRead'.

var classics = ["Charlotte's Web", "War and Peace", "The Secret", "How to Win Friends and Influence People", "Good to Great", "The Lean Startup", "The Odyssey", "Essentialism"];

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

showBooks.addEventListener ('click',displayBook);

function displayBook(){
	mustRead.innerHTML = classics[ getRndInteger(0,classics.length)];
}

// 9. World War II
// Add an event listener to the image element and create a function that will toggle between images when hovering (mouseover) on the image.

// use the following image reference:
// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjMMBlsYV-Ta5N_GKAoxRDBEa9BRZqdzQRvpiHELEPb6IPVZ73

var images = document.getElementsByTagName ('img');

images[9].addEventListener ('mouseover',changeImg);

function changeImg(){
	images[9].src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjMMBlsYV-Ta5N_GKAoxRDBEa9BRZqdzQRvpiHELEPb6IPVZ73";
}

// 10. The Industrial Revolution
// Add an event listener to the h3 element and create a function that will reverse the contents in the div element id of 'gameChanger'

headerThree = document.getElementsByTagName ('h3');

headerThree[9].addEventListener ('click',reverseText);

function reverseText (){
// 	console.log('test reverseText');
	var arr = gameChanger.innerHTML.split(" ");
	
// 	console.log(arr);
	var newArr = arr.reverse();
	gameChanger.innerHTML = newArr.join(" ");
}

// Final Boss
// Add event listeners for the thumbs up and thumbs down images that will count the number of times the thumb has been clicked on. 

var thumbsUp = document.getElementsByTagName ('i');

for (a=0; a<thumbsUp.length; a++){
// 	console.log('how many a tags are there: '+a);
	thumbsUp[a].addEventListener ('click',addOne);
}
	
function addOne (){
// 	console.log('addOne');
	var num = parseInt(this.querySelector('div').innerHTML);
		this.querySelector('div').innerHTML =num + 1;
}
