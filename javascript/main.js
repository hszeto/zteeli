const toggleClasses = (show) => {
  const div = $('.toggle-div');

  if (show) {
    $(div[0]).hide("fast");
    $(div[1]).show("slow");
  } else {
    $(div[1]).hide("fast");
    $(div[0]).show("slow");
  }
}

$(function() {
  let show = false;

  setInterval(() => {
    show = !show;

    // Remove hidden class
    if ( $('.toggle-div')[1].classList.value.includes('hidden') ){
      $('.toggle-div')[1].classList.remove("hidden");
    }

    toggleClasses(show);
  }, 3000);
})