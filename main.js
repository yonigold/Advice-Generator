const advice = document.querySelector(".advice");
const adviceNum = document.querySelector(".advice-num");
const btn = document.querySelector(".btn");

const dataFetch = async () => {
  
  try {

  
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();

    advice.innerHTML = `"${data.slip.advice}"`;
    // get advice number
    const num = data.slip.id;
    adviceNum.innerHTML = ` ADVICE NUMBER # ${num}`;
  }
  catch (error) {
    console.log(error);
    advice.innerHTML = "Something went wrong";
  }
   
};

dataFetch();
btn.addEventListener("click", dataFetch);
