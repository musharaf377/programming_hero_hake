
const milestoneData = JSON.parse(data).data;

//milestone Data Load
function loadMilestone() {
  const milestones = document.querySelector('.milestones');

  milestones.innerHTML = `${ milestoneData.map( function (milestone) {

    return `<div class="milestone border-b" id="${milestone._id}" >
          <div class="flex">
            <div class="checkbox"><input type="checkbox" onclick="markMilestone(this, ${milestone._id} )" /></div>
            <div onclick="openMilestone(this, ${milestone._id})">
              <p>
                ${milestone.name}
                <span><i class="fas fa-chevron-down"></i></span>
              </p>
            </div>
          </div>
          <div class="hidden_panel">

            ${milestone.modules.map(function(module){

              return `
                <div class="module border-b">
                  <p>${module.name}</p>
                </div>
              `;

            }).join("")}

            
          </div>
        </div>`;

  }).join("")}`;
  
}


function openMilestone (milestoneElement,id) {

  const currentPanal = milestoneElement.parentNode.nextElementSibling;
  const showPanal = document.querySelector('.show');
  const active = document.querySelector('.active');

  if(!milestoneElement.classList.contains('active') && active){
    active.classList.remove('active');
  }
  milestoneElement.classList.toggle('active');


  if(!currentPanal.classList.contains("show") && showPanal){
    showPanal.classList.remove('show');
  }
  currentPanal.classList.toggle('show');


  showMilestone(id);

}

function showMilestone (id){
  const milestoneImage = document.querySelector('.milestoneImage');
  const milestoneTitle = document.querySelector('.title');
  const milestoneDetails = document.querySelector('.details');

  milestoneImage.style.opacity = "0";
  milestoneImage.src = milestoneData[id].image;
  milestoneTitle.innerHTML = milestoneData[id].name;
  milestoneDetails.innerHTML = milestoneData[id].description;
}

const milestoneImage = document.querySelector('.milestoneImage');
milestoneImage.onload = function () {
  milestoneImage.style.opacity = "1";
}


function markMilestone(checkbox, id){
  const milestonesList = document.querySelector('.milestones');
  const doneList = document.querySelector('.doneList');
  const item = document.getElementById(id);
  console.log(item);

  if(checkbox.checked){
    milestonesList.removeChild(item);
    doneList.appendChild(item);
  }else{
    doneList.removeChild(item);
    milestonesList.appendchild(item);
  }


}





loadMilestone();