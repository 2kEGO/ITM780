const img = document.getElementById('avatar-img');
let isZoomed = false;
let dropDown = document.getElementsByClassName("exp_info_dropdown");
const nameInsert = document.getElementById('name_insert');
const insertSection = document.getElementById('name-insert-section');
let guestName = document.getElementById('guest_name');
const submitButtonHover = document.getElementById('hover-submit-button');

// TOGGLE ZOOM AVATAR
function toggleZoom() {
    if (isZoomed) {
        img.style.transform = 'scale(1)';
        
    } else {
        img.style.transform ='scale(1.5)';
    }
    img.style.transition = 'transform 0.5s ease';
    isZoomed = !isZoomed;
}

// EXPERIENCE SHOW TOGGLE
function expandExperience(){
    document.getElementById('dropDown').classList.toggle("show");
};

function expandExperience2(){    
    document.getElementById('dropDown2').classList.toggle("show");
};

// SUBMIT NAME welcome page
function submitName () {
    const name = nameInsert.value;
    if (name !== ""){
        guestName.innerText = `Hi ${name}, Welcome to my page!`;
        insertSection.style.display = 'none';
    }else{
        document.getElementById('userWarning').classList.toggle("show");
        console.log('clicked')
    }
    
}


// Change button background

function toggleColorChange() {
    submitButtonHover.style.backgroundColor = 'Red';
}

function toggleColorChange2() {
    submitButtonHover.style.backgroundColor = 'Yellow'
}