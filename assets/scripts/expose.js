// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const selectOption = document.getElementById("horn-select");
  const image = document.querySelector('img[alt="No image selected"]');  
  const audio = document.querySelector('audio');
  const selectButton = document.querySelector('button');
  const selectVolume = document.getElementById("volume");
  const icon = document.querySelector('img[alt="Volume level 2"]');  
  
  selectOption.addEventListener('change', e =>
  {
    var option = e.target.value;
    if (option == 'air-horn')
    {
      image.src = 'assets/images/air-horn.svg';
      audio.src ='assets/audio/air-horn.mp3';
    }
    else if(option == 'car-horn')
    {
      image.src = 'assets/images/car-horn.svg';
      audio.src ='assets/audio/car-horn.mp3';
    }
    else if(option == 'party-horn')
    {
      image.src = 'assets/images/party-horn.svg';
      audio.src ='assets/audio/party-horn.mp3';
    }
  })
  
  selectVolume.addEventListener('input', (event) => 
  {
    var option = event.target.value;

    if (option == 0)
    {
      icon.src = 'assets/icons/volume-level-0.svg';
    }
    else if (option >= 1 && option < 33)
    {
      icon.src = 'assets/icons/volume-level-1.svg';
    }
    else if (option >= 33 && option < 67)
    {
      icon.src = 'assets/icons/volume-level-2.svg';
    }
    else if (option >=67)
    {
      icon.src = 'assets/icons/volume-level-3.svg';
    }
  })

  selectButton.addEventListener('click', (event) =>
  {
    audio.play();
    audio.volume = selectVolume.value / 100;
    
    if(selectOption.value == 'party-horn')
    {
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti({
        emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🦄'],
     });
    }
  })
}


