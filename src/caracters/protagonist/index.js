import './index.css';
import React, { useEffect, useState } from "react";

export const Protagonist = () => {
  const [spriteState, setSpriteState] = useState(0);
  const [spritePosition, setSpritePosition] = useState(0);
  const [spriteClass, setSpriteClass] = useState('sprite_state_0_0');
  const [eventHandled, setEventHandled] = useState(false);

  const changeState = () => {
    let state = spriteState + 1;
    if (state >= 4) {
      state = 0;
    }
    setSpriteState(state);
    console.log(state);
    return state;
  }

  const changeSprite = (event) => {
    console.log(event.key);
    if (!eventHandled) {
        const typeEvent = event.key;
        let position = 0;
        switch(typeEvent){
            case 'ArrowDown': position = 0;
            break;
            case 'ArrowLeft': position = 1;
            break;
            case 'ArrowRight': position = 2;
            break;
            case 'ArrowUp': position = 3;
            break;
        }

        setSpritePosition(position)

        setSpriteClass(prevClassState => {
        const state = changeState();

        if(position == 0){
            switch (state) {
                case 0: return 'sprite_state_0_0';
                case 1: return 'sprite_state_1_0';
                case 2: return 'sprite_state_2_0';
                case 3: return 'sprite_state_3_0';
                default: return 'sprite_state_0_0';
            }
        }

        if(position == 1){
            switch (state) {
                case 0: return 'sprite_state_0_1';
                case 1: return 'sprite_state_1_1';
                case 2: return 'sprite_state_2_1';
                case 3: return 'sprite_state_3_1';
                default: return 'sprite_state_0_1';
            }
        }

        if(position == 2){
            switch (state) {
                case 0: return 'sprite_state_0_2';
                case 1: return 'sprite_state_1_2';
                case 2: return 'sprite_state_2_2';
                case 3: return 'sprite_state_3_2';
                default: return 'sprite_state_0_2';
            }
        }

        if(position == 3){
            switch (state) {
                case 0: return 'sprite_state_0_3';
                case 1: return 'sprite_state_1_3';
                case 2: return 'sprite_state_2_3';
                case 3: return 'sprite_state_3_3';
                default: return 'sprite_state_0_3';
            }
        }
        });
        setEventHandled(true);

        setTimeout(() => {
            setEventHandled(false);
        }, 100);
    }
  };

  useEffect(() => {
    // Adiciona um ouvinte de evento quando o componente é montado
    document.addEventListener('keydown', changeSprite);

    // Remove o ouvinte de evento quando o componente é desmontado
    return () => {
      document.removeEventListener('keydown', changeSprite);
    };
  }, [spriteClass, eventHandled]);

  return (
    <>
      <div className={'sprite_character sprite_character_dimentions ' + spriteClass}></div>
    </>
  )
}