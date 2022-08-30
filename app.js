const getEvent = event => {
    const keyWord = event.target.innerText;
    const addFont = "f=" + keyWord.slice(2, 3);
    mainFunction(addFont)


}

const mainFunction = allData => {
    try {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?${allData}`)
            .then(res => res.json())
            .then(data => displayFunction(data.meals))
        const getElement = document.getElementById('mail-display')
        getElement.innerHTML = ``;
        const displayFunction = (dataProsasing) => {
            dataProsasing.forEach(singalMail => {
                // console.log(singalMail)
                const { idMeal, strMealThumb, strMeal } = singalMail;
                const div = document.createElement('div')
                div.classList.add('div-tast')
                div.innerHTML = `
                <img onclick='tasting(${idMeal})' style="height:250px; width:250px;" src="${strMealThumb}" alt="" />
                <p>${strMeal.slice(0,10)}</p>
                `
                getElement.appendChild(div)
            })


        }
    }
    catch (error) {
        console.log(error)
    }
}
// mainFunction()
const tasting = (details) => {
    const getDetailsDiv = document.getElementById('customAlert')
    getDetailsDiv.style.display="block"
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${details}`)
        .then(res => res.json())
        .then(data => datilDataProcacing(data.meals[0]))
    const datilDataProcacing = mealseDetails => {
        console.log(mealseDetails)
        const {strMeal, strCategory, strArea, strTags, strInstructions, strYoutube, strMealThumb} = mealseDetails
        const div = document.createElement('div')
        div.classList.add('box')
        div.innerHTML =`
       
                        <div id="cardbox" class="content">
                            <div id="top-detai">
                                <div style="height:300px; width:60%;">
                                    <img id='img-Hover' style="height:300px; width:100%; border:2px solid #FFCB69"
                                        src="${strMealThumb}" alt="">
                                </div>
                                <div
                                    style="height:300px; width:40%; padding: 10px; color: #FFCB69; display: flex; align-items: center;">
                                    <div>
                                        <h3>Name: ${strMeal}</h3>
                                        <h4>Category: ${strCategory}</h4>
                                        <h4>Areya dise: ${strArea}</h4>
                                        <h4>Test: ${strTags}</h4>
                                        <button class='buttonYou'><a href="${strYoutube}"></a>You Tube</button>
                                    </div>
                                </div>
                            </div>
                            <div style="height:100px; width:100%; margin-top: 10px; padding:10px; color: #FFCB69;">
                                <h1 style="display:inline;">Instruction:  </h1>
                                <p style="display:inline;">${strInstructions.slice(0,500)}</p>

                            </div>
                        </div>
                        <div> <button type="button" id="confirmbtn" onclick="headenAlert()">ok</button></div>
                   
        `
        getDetailsDiv.innerHTML=``;
        getDetailsDiv.appendChild(div)
    }
}

const headenAlert = () =>{
    const getDetailsDiv = document.getElementById('customAlert')
   getDetailsDiv.style.display="none"
}