<script>
 export let faqEntry;

 let answerElement;
 let showMoreButton;

 function toggleAnswer() {
  answerElement.classList.toggle("whitespace-normal");
  answerElement.classList.toggle("max-h-6");
  answerElement.classList.toggle("max-h-screen");
  answerElement.classList.toggle("whitespace-nowrap");
  answerElement.classList.toggle("overflow-hidden");
  answerElement.classList.toggle("text-ellipsis");

  if (showMoreButton.innerHTML == "Show more") {
   showMoreButton.innerHTML = "Show less";
  } else {
   showMoreButton.innerHTML = "Show more";
  }
 }
</script>
<div class="mb-8">
 <p class="text-sm">
  <strong class="text-sm">Q:</strong> {faqEntry.question}
 </p>
 <p bind:this={answerElement} class="transition-all ease-linear duration-500 max-h-6 whitespace-nowrap overflow-hidden text-ellipsis text-sm leading-loose">
  <strong class="text-sm">A:</strong> {faqEntry.answer}
 </p>
 <button bind:this={showMoreButton} class="uppercase mt-2 border rounded p-1 text-custom-orange text-sm" onclick={toggleAnswer}>
  Show more
 </button>
</div>