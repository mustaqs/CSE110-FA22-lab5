// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis;
  const textInput = document.getElementById('text-to-speak');
  const voiceSelect = document.querySelector('select');
  const speakButton = document.querySelector('button');
  const icon = document.querySelector('img[alt="Smiling face"]');

  let voices = [];

  function populateVoiceList(){
    voices = synth.getVoices();
  
    // Loop through each of the voices.
    for(let i = 0; i < voices.length; i++)
    {
      // Create a new option element.
      const option = document.createElement('option');
      
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
            
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
  
      // Add the option to the voice selector.
      voiceSelect.appendChild(option);
    }
  }

  populateVoiceList();

  window.speechSynthesis.onvoiceschanged = function(e) {
    populateVoiceList();
  };

  function speak(text)
  {
    const input = new SpeechSynthesisUtterance(textInput.value);
    const option = voiceSelect.selectedOptions[0].getAttribute('data-name');
    input.text = text;

    for(let i = 0; i < voices.length; i++)
    {
      if(voices[i].name == option)
        input.voice = voices[i];
    }

    synth.speak(input);
    input.addEventListener('end', (event) =>
    {
      icon.src = 'assets/images/smiling.png';
    })
  }

  speakButton.addEventListener('click', (event) =>
  {
    icon.src = 'assets/images/smiling-open.png';
    speak(textInput.value);
  }
  )
}
