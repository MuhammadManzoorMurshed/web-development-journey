// console.log("Connected!");

const createElements = (arr) => {
    // console.log(arr);
    const htmlElements = arr.map(el => `<span class="btn">${el}</span>`);

    return htmlElements.join(" ");
};

function pronounceWord(word) {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = "en-EN"; // English
    window.speechSynthesis.speak(utterance);
  }

const manageSpnner = (status) => {
    if(status === true) {
        document.getElementById("spinner").classList.remove("hidden");
        document.getElementById("word-container").classList.add("hidden");
    } else {
        document.getElementById("word-container").classList.remove("hidden");
        document.getElementById("spinner").classList.add("hidden");
    }
}

const loadLessons = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all") // Returns a promise
        .then(response => response.json()) // Returns a promise of JSON data
        // .then(json => console.log(json));
        .then(json => displayLessons(json.data));
}

const removeActive = () => {
    const lessonButtons = document.querySelectorAll(".lesson-btn");
    // console.log(lessonButtons);
    lessonButtons.forEach(btn => btn.classList.remove("active"));
}

const loadLevelWord = id => {
    // console.log(id);
    manageSpnner(true)
    const url = `https://openapi.programming-hero.com/api/level/${id}`;

    // console.log(url);

    fetch(url)
        .then(response => response.json())
        .then(jsonData => {
            removeActive(); // Remove all active classes

            const clickedBtn = document.getElementById(`lesson-btn-${id}`)

            clickedBtn.classList.add("active");

            displayLevelWord(jsonData.data)
        });
}

const loadWordDetail = async (id) => {
    const url = `https://openapi.programming-hero.com/api/word/${id}`;
    // console.log(url);
    const res = await fetch(url);
    const details = await res.json();

    displayWordDetails(details.data);
}

const displayWordDetails = word => {
    console.log(word);

    const detailsBox = document.getElementById("details-container");
    detailsBox.innerHTML = `
    <div>
        <h2 class="font-semibold text-[38px] leading-[40px]">${word.word} (<i class="fa-solid fa-microphone-lines"></i>: ${word.pronunciation})</h2>
    </div>

    <div>
        <h4>Meaning</h4>
        <p>${word.meaning}</p>
    </div>

    <div>
        <h4>Example</h4>
        <p>${word.sentence}</p>
    </div>

    <div>
        <h4 class="font=bangla">সমার্থক শব্দ গুলো</h4>
        <div class="">
            ${createElements(word.synonyms)}
        </div>
    </div>
    <button class="btn btn-primary rounded-xl font-medium text-[24px] leading-[40px]">
        Complete Learning
    </button>
    `;

    document.getElementById("my_modal").showModal();
}

const displayLevelWord = words => {
    // console.log(words);
    const wordContainer = document.getElementById("word-container");
    wordContainer.innerHTML = "";

    if(words.length == 0)
    {
        wordContainer.innerHTML = `
        <div class="py-16 text-center col-span-full space-y-3 fong-bangla">
        <img class="mx-auto" src="./english-janala-resources/assets/alert-error.png">
        <p class="font=normal text-[14px] leading-[24px] text-[#79716B]">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
        <h2 class="font=medium text-[34px] leading-[40px] text-[#292524]">নেক্সট Lesson-এ যান।</h2>
        </div>
        `
        
        manageSpnner(false);
        return;
    }

    words.forEach(word => {
        // console.log(word);
        const card = document.createElement("div");

        card.innerHTML = `
        <div class="bg-white rounded-xl shadow-sm text-center p-14 h-full flex flex-col">
        <h3 class="font-bold text-[32px] leading-[24px] mb-6">${word.word ? word.word : "শব্দ পাওয়া যায়নি"}</h3>
        <p class="font-medium text-[20px] leading-[24px] mb-6">Meaning /Pronounciation</p>
        <h3 class="font-semibold text-[32px] text-[#555] mb-14 font-bangla">"${word.meaning ? word.meaning : "শব্দের অর্থ পাওয়া যায়নি"} / ${word.pronunciation ? word.pronunciation : "শব্দের উচ্চারণ পাওয়া যায়নি"}"</h3>

        <div class="flex justify-between mt-auto">
            <button onclick="loadWordDetail(${word.id})" class="btn bg-[rgba(26,145,255,0.1)] hover:bg-[rgba(26,145,255,0.5)]"><i class="fa-solid fa-circle-info"></i></button>
            <button onclick="pronounceWord('${word.word}')" class="btn bg-[rgba(26,145,255,0.1)] hover:bg-[rgba(26,145,255,0.5)]"><i class="fa-solid fa-volume-high"></i></button>
        </div>
    </div>
        `;
        wordContainer.append(card);
    });

    manageSpnner(false);
}

const displayLessons = (lessons) => {
    // console.log(lessons);
    // 1. Get the container & Empty
    const levelContainer = document.getElementById("level-container");
    levelContainer.innerHTML = "";
    // 2. Get into every lessons
    for (let lesson of lessons) {
        // a. Create  an Element
        // console.log(lesson);
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `
            <button id="lesson-btn-${lesson.level_no}" onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary lesson-btn">
                <i class="fa-solid fa-book-open"></i>
                Lesson - ${lesson.level_no}
            </button>
        `;

        levelContainer.append(btnDiv);
    }
}

loadLessons();

document.getElementById("btn-search").addEventListener("click", () => {
    removeActive();

    const input = document.getElementById("input-search");
    const searchValue = input.value.trim().toLowerCase();

    console.log(searchValue);
    fetch("https://openapi.programming-hero.com/api/words/all")
    .then(response => response.json())
    .then(data => {
        const allWords = data.data;
        // console.log(allWords);
        const filterWords = allWords.filter(word => word.word.toLowerCase().includes(searchValue));

        // console.log(filterWords);
        displayLevelWord(filterWords);

    });
})