//Querying all titles container from the DOM
let titlesContainer = document.querySelector('.Stage_titles_id');
titlesContainer.style.transform = 'scale(0)';

//Querying "MY" from the DOM
let my_m = document.querySelector('.Stage_titles_M_id');
let my_m_alt = document.querySelector('.Stage_titles_alt_M_id');
let my_y = document.querySelector('.Stage_titles_y_id');
let my_y_alt = document.querySelector('.Stage_titles_alt_y_id');

//Querying "SPOT" from the DOM
let spot_s = document.querySelector('.Stage_titles_alt_s_id');
let spot_s_alt = document.querySelector('.Stage_titles_s_id');

let spot_p = document.querySelector('.Stage_titles_alt_p_id');
let spot_p_alt = document.querySelector('.Stage_titles_p_id');

let spot_o = document.querySelector('.Stage_titles_alt_o_id');
let spot_o_alt = document.querySelector('.Stage_titles_o_id');

let spot_t = document.querySelector('.Stage_titles_alt_t_id');
let spot_t_alt = document.querySelector('.Stage_titles_t_id');

//Querying "YOUR" from the DOM
let your = document.querySelector('.Stage_titles_alt_your_id');
let your_alt = document.querySelector('.Stage_titles_your_id');

//Querying "FRIEND" from the DOM
let friend = document.querySelector('.Stage_titles_friend_id');
let friend_alt = document.querySelector('.Stage_titles_alt_friend_id');

//Querying "OUR" from the DOM
let our_o = document.querySelector('.Stage_titles_O_32_id');
let our_u = document.querySelector('.Stage_titles_u_22_id');
let our_r = document.querySelector('.Stage_titles_r_32_id');

//Querying "CONNECTION" from the DOM
let connection_c_0 = document.querySelector('.Stage_titles_alt_C_id');
let connection_c_0_alt = document.querySelector('.Stage_titles_C_id');

let connection_o_0 = document.querySelector('.Stage_titles_alt_o_3Copy_id');
let connection_o_0_alt = document.querySelector('.Stage_titles_o_42_id');

let connection_n_0 = document.querySelector('.Stage_titles_alt_nCopy_id');
let connection_n_0_alt = document.querySelector('.Stage_titles_n_22_id');

let connection_n_1 = document.querySelector('.Stage_titles_alt_n_id');
let connection_n_1_alt = document.querySelector('.Stage_titles_n_22Copy_id');

let connection_e = document.querySelector('.Stage_titles_alt_e_id');
let connection_e_alt = document.querySelector('.Stage_titles_e_22_id');

let connection_c_1 = document.querySelector('.Stage_titles_alt_c_2_id');
let connection_c_1_alt = document.querySelector('.Stage_titles_c_2_id');

let connection_t = document.querySelector('.Stage_titles_alt_t_2_id');
let connection_t_alt = document.querySelector('.Stage_titles_t_22_id');

let connection_i = document.querySelector('.Stage_titles_alt_i_id');
let connection_i_alt = document.querySelector('.Stage_titles_i_22_id');

let connection_o_1 = document.querySelector('.Stage_titles_alt_o_3_id');
let connection_o_1_alt = document.querySelector('.Stage_titles_o_5_id');

let connection_n_2 = document.querySelector('.Stage_titles_alt_nCopy2_id');
let connection_n_2_alt = document.querySelector('.Stage_titles_n_3_id');

//Function for changing letters
function changeLetter(currentLetter, replacingLetter, posX_1, posY_1, posX_2, posY_2, duration) {
    replacingLetter.style.display = 'block';
    currentLetter.style.display = 'block';

    anime({
        targets: currentLetter,
        backgroundPosition: `${posX_1}px ${posY_1}px`,
        easing: 'easeOutExpo',
        duration: duration,
    });

    anime({
        targets: replacingLetter,
        backgroundPosition: `${posX_2}px ${posY_2}px`,
        easing: 'easeOutExpo',
        duration: duration,
    });
}

//Function for changing background position
function changeBackgroundPosition(letter, positionX, positionY) {
    letter.style.display = 'none';
    anime({
        targets: letter,
        backgroundPosition: `${positionX}px ${positionY}px`,
    });
}

// Resseting all leters to black before the titles scales up
changeLetter(my_m_alt, my_m, 80, 0, 0, 0, 0);
changeLetter(spot_p_alt, spot_p, 75, 0, 0, 0, 0);
changeLetter(spot_o_alt, spot_o, 80, 0, 0, 0, 0);
changeLetter(connection_c_0_alt, connection_c_0, 0, 70, 0, 0, 0);
changeLetter(connection_o_0_alt, connection_o_0, 0, -53, 0, 0, 0);
changeLetter(connection_n_0_alt, connection_n_0, -40, 0, 0, 0, 0);
changeLetter(connection_n_1_alt, connection_n_1, -40, 0, 0, 0, 0);
changeLetter(connection_e_alt, connection_e, 40, 0, 0, 0, 0);
changeLetter(connection_c_1_alt, connection_c_1, 0, -55, 0, 0, 0);
changeLetter(connection_t_alt, connection_t, -30, 0, 0, 0, 0);
changeLetter(connection_i_alt, connection_i, 25, 0, 0, 0, 0);
changeLetter(connection_o_1_alt, connection_o_1, 0, -53, 0, 0, 0);
changeLetter(connection_n_2_alt, connection_n_2, 0, 52, 0, 0, 0);

// Resseting background position of all alternative letter
changeBackgroundPosition(my_m_alt, 80, 0, 0, 0);
changeBackgroundPosition(my_y_alt, 80, 0, 0, 0);

changeBackgroundPosition(spot_s_alt, 80, 0, 0, 0);
changeBackgroundPosition(spot_p_alt, 80, 0, 0, 0);
changeBackgroundPosition(spot_o_alt, 80, 0, 0, 0);
changeBackgroundPosition(spot_t_alt, 80, 0, 0, 0);

changeBackgroundPosition(your_alt, 280, 0, 0, 0);
changeBackgroundPosition(friend_alt, 280, 0, 0, 0);

changeBackgroundPosition(connection_c_0_alt, 80, 0, 0, 0);
changeBackgroundPosition(connection_o_0_alt, 80, 0, 0, 0);
changeBackgroundPosition(connection_n_0_alt, 80, 0, 0, 0);
changeBackgroundPosition(connection_n_1_alt, 80, 0, 0, 0);
changeBackgroundPosition(connection_e_alt, 80, 0, 0, 0);
changeBackgroundPosition(connection_c_1_alt, 80, 0, 0, 0);
changeBackgroundPosition(connection_t_alt, 80, 0, 0, 0);
changeBackgroundPosition(connection_i_alt, 80, 0, 0, 0);
changeBackgroundPosition(connection_o_1_alt, 80, 0, 0, 0);
changeBackgroundPosition(connection_n_2_alt, 80, 0, 0, 0);

// starting animation
// Sequence 1: Scaling up all titles to 1 from 0
anime({
    targets: titlesContainer,
    scale: {
        value: 1,
        duration: 2000,
        easing: 'easeInOutExpo'
    },
    delay: anime.stagger(100, { start: 700 }),
});

function callThem() {

    //Sequence 2: Changing "MY SPOT" from black letters to alternative letters
    setTimeout(() => {
        changeLetter(my_m, my_m_alt, -80, 0, 0, 0, 2000);
        changeLetter(my_y, my_y_alt, -80, 0, 0, 0, 2000);

        changeLetter(spot_s, spot_s_alt, -80, 0, 0, 0, 2000);
        changeLetter(spot_p, spot_p_alt, -80, 0, 0, 0, 2000);
        changeLetter(spot_o, spot_o_alt, -80, 0, 0, 0, 2000);
        changeLetter(spot_t, spot_t_alt, -80, 0, 0, 0, 2000);
    }, 3000);

    //Sequence 3: Changing "YOUR FRIEND" from black letters to alternative letters
    setTimeout(() => {
        changeLetter(your, your_alt, -280, 0, 0, 0, 2000);
        changeLetter(friend, friend_alt, -280, 0, 0, 0, 2000);
    }, 4500);

    //Sequence 4: Changing "CONNECTION" from black letters to alternative letters
    setTimeout(() => {
        changeLetter(connection_c_0, connection_c_0_alt, -80, 0, 0, 0, 2000);
        changeLetter(connection_o_0, connection_o_0_alt, -80, 0, 0, 0, 2000);
        changeLetter(connection_n_0, connection_n_0_alt, -80, 0, 0, 0, 2000);
        changeLetter(connection_n_1, connection_n_1_alt, -80, 0, 0, 0, 2000);
        changeLetter(connection_e, connection_e_alt, -80, 0, 0, 0, 2000);
        changeLetter(connection_c_1, connection_c_1_alt, -80, 0, 0, 0, 2000);
        changeLetter(connection_t, connection_t_alt, -80, 0, 0, 0, 2000);
        changeLetter(connection_i, connection_i_alt, -80, 0, 0, 0, 2000);
        changeLetter(connection_o_1, connection_o_1_alt, -80, 0, 0, 0, 2000);
        changeLetter(connection_n_2, connection_n_2_alt, -80, 0, 0, 0, 2000);
    }, 6000);

    //Sequence 5: Returning them back to black letters
    setTimeout(() => {
        changeLetter(my_m, my_m_alt, 0, 0, 80, 0, 2000);
        changeLetter(my_y, my_y_alt, 0, 0, 80, 0, 2000);

        changeLetter(spot_s, spot_s_alt, 0, 0, 80, 0, 2000);
        changeLetter(spot_p, spot_p_alt, 0, 0, 80, 0, 2000);
        changeLetter(spot_o, spot_o_alt, 0, 0, 80, 0, 2000);
        changeLetter(spot_t, spot_t_alt, 0, 0, 80, 0, 2000);

        changeLetter(your, your_alt, 0, 0, 280, 0, 2000);
        changeLetter(friend, friend_alt, 0, 0, 280, 0, 2000);

        changeLetter(connection_c_0, connection_c_0_alt, 0, 0, 80, 0, 2000);
        changeLetter(connection_o_0, connection_o_0_alt, 0, 0, 80, 0, 2000);
        changeLetter(connection_n_0, connection_n_0_alt, 0, 0, 80, 0, 2000);
        changeLetter(connection_n_1, connection_n_1_alt, 0, 0, 80, 0, 2000);
        changeLetter(connection_e, connection_e_alt, 0, 0, 80, 0, 2000);
        changeLetter(connection_c_1, connection_c_1_alt, 0, 0, 80, 0, 2000);
        changeLetter(connection_t, connection_t_alt, 0, 0, 80, 0, 2000);
        changeLetter(connection_i, connection_i_alt, 0, 0, 80, 0, 2000);
        changeLetter(connection_o_1, connection_o_1_alt, 0, 0, 80, 0, 2000);
        changeLetter(connection_n_2, connection_n_2_alt, 0, 0, 80, 0, 2000);
    }, 7500);
}

// callThem();

// Loop all animations
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

async function run_in_loop() {
    callThem();
    await sleep(6500);
    run_in_loop();
}

run_in_loop();

//Loop
