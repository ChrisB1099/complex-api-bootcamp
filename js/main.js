// enter a word and get the defintion from dictionary fecth 
// take a 

// fetch(`URL_HERE`)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });




document.querySelector('button').addEventListener('click', getDefinition)

function getDefinition(){

    const word = document.querySelector('input').value
     fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);

        document.querySelector('h2').innerText = data[0].meanings[0].definitions[0].definition
        const definition = data[0].meanings[0].definitions[0].definition
        
        document.querySelector('h1').innerText = word
      
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=Jv8PiLArEPerxk8Y2TYrC84d58ufqFqT&q=${data[0].word}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`)
    .then(res => res.json())
    .then(dataTwo => {
        // console.log(data);
        document.querySelector('.vid').src = dataTwo.data[0].embed_url 
        console.log(dataTwo)
        
    })
    .catch(error => {
        console.error('Error:', error);
    });
        })

        
        .catch(error => {
            console.error('Error:', error);
        });
}

// dictionary description needs to be passed in



// dgkzFC3stLNUazp5xJ863ra5Z3ZkLOFD

// fetch(  `https://api.giphy.com/v1/gifs/search?api_key=dgkzFC3stLNUazp5xJ863ra5Z3ZkLOFD`)
//     .then(res => res.json())
//     .then(data => {                         // data is pulled here, so anything you want to grab has to be after this line
//         console.log(data)      //data is the parameter for the nested function, so if you want use data we have to use it inside of the function that has the data parameter 
       
      
//     })
//     .catch(err =>{                      
//         console.log(`error ${err}`) 
//      })
     

//      `https://api.giphy.com/v1/gifs/search?api_key=`