const wrapper = document.querySelector('.wrapper');
const brightnessBlock = document.querySelector('.vaulueBrightness');
const toneBlock = document.querySelector('.valueTone');
const buttonsContainer = document.querySelector('.buttons-container');
const light = {brightness: 61, tone: 50};

const getLight = ()=> {
    return light;
}

const setLight = (newBrightness, newTone) => {
    
    if (newBrightness > 100 || newBrightness < 0) return;
    if (newTone > 100 || newTone < 0) return;

    light.brightness = newBrightness;
    light.tone = newTone;

    wrapper.style.background = `hsl(${newTone}, 100%, ${newBrightness}%)`;

    brightnessBlock.innerHTML = newBrightness;
    toneBlock.innerHTML = newTone + '%';
}

const  changeValueLight = (valueLight , valueBtn) => {
    const changedLight = getLight();
    let tone = changedLight.tone;
    let brightness = changedLight.brightness;

        // if (valueLight === 'brightness' &&  valueBtn === 'increase') {
        //     brightness = brightness + 1;
        // }
        // if  (valueLight === 'brightness' &&  valueBtn === 'decrease') {
        //     brightness -= 1;
        // }
        // if (valueLight === 'tone' &&  valueBtn === 'increase') {
        //     tone += 1;
        // }
        // if (valueLight === 'tone' &&  valueBtn === 'decrease') {
        //     tone += 1;
        // }

        switch (true) {
            case valueLight === 'brightness' &&  valueBtn === 'increase':
                brightness += 1;
                break;
        
            case valueLight === 'brightness' &&  valueBtn === 'decrease':
                brightness -= 1;
                break;

            case valueLight === 'tone' &&  valueBtn === 'increase':
                tone += 1;
                break;

            case valueLight === 'tone' &&  valueBtn === 'decrease':
                tone -= 1;
                break;
        }

    setLight(brightness, tone);
}


buttonsContainer.addEventListener('click', (event) => {
    const target = event.target;

    if (target != buttonsContainer) {
        const valueLight = target.dataset.namevalue;
        const valueBtn = target.dataset.namebtn;

        changeValueLight(valueLight, valueBtn);
    }
})
