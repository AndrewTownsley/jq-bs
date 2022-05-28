    jQuery(function() {
      // Create new Appt with First Name on BTN CLick
     
      // Add to Appt Array
      // map over appt array and append to appt div
      // !value in all fields ? BTN-disabled
      createAppt()
      getApptDetails()  
      $('#apptContainer').prepend(apptArray.map((item) => {
          return `       <li class=" list-group-item">
          <span>${item.firstName}</span>
          <span>${item.lastName}</span> 
          <p><span>${item.email}</span></p>
          <div class="d-flex justify-content-between">
            <button onclick="deleteAppt(${item.id})" class="btn btn-danger">X</button>
            <a onclick="apptSelected('${item.id}')" class="btn btn-primary" href="#">view Appointment</a>
          </div>
          </li>
          `
        }))

    })


    // Check if apptArray is in localStorage, if not, create new array
    // if it is, get the array from localStorage and push to apptArray
    let apptArray = JSON.parse(localStorage.getItem('apptArrayStorage')) || [];
    console.log("apptArray",apptArray);


function makeApptItem(firstName, lastName, email, id) {
    return {
        firstName,
        lastName,
        email,
        id
    }
}

  const createAppt = () => {
    $('#addApptBtn').on('click', () => {
        const firstNameValue = $('#firstName').val()
        const lastNameValue = $('#lastName').val()
        const emailValue = $('#email').val()
        let id = apptArray ? apptArray.length + 1 : 1;
        let apptItem = makeApptItem(firstNameValue, lastNameValue, emailValue, id)
        if($('#firstName').val().length !== 0) {
            $('#apptContainer').prepend(`
            <li class=" list-group-item">
                 <span>${apptItem.firstName}</span>
                 <span>${apptItem.lastName}</span> 
                 <p><span>${apptItem.email}</span></p>
                    <button id="deleteApptBtn" class="btn btn-danger">X</button>
                 <a onclick="apptSelected('${apptItem.id}')" class="btn btn-primary" href="#">view Appointment</a>
            </li>  
            `);
        } else {
            $('#userInputForm').prepend('<p class="text-danger">All fields are required</p>')
        }
        // apptArray = [{ ...apptItem}]
        // let detail = `
        // <p>hello hello you have reached the appt detail page</p>
        // `
        // $('#apptDetail').html(detail)
        apptArray.push(apptItem)
        localStorage.setItem('apptArrayStorage', JSON.stringify(apptArray))
        console.log("array afgter localstrge",apptArray);
    })
}

const apptSelected = (id) => {
    sessionStorage.setItem('apptId', id);
    window.location = 'apptDetail.html';
    return false;
}
    
    const getApptDetails = () => {
        let apptId = Number(sessionStorage.getItem('apptId'))
        let storedApptArray = JSON.parse(localStorage.getItem('apptArrayStorage'))
        // console.log("new appt array",storedApptArray);
        console.log("apptId",apptId);
        return storedApptArray.map((item) => {
            item.id === apptId ? 
            $('#apptDetail').html(
                `
                <div >
                <span>${item.firstName}</span>
                <span>${item.lastName}</span> 
                <p><span>${item.email}</span></p>
                </div>
                `)
                :
                null
            })
            
        }
        
const deleteAppt = (id) => {
    console.log("delete btn clicked");
    appyArray = apptArray.filter((item) => {
        return item.id !== id
    })
    localStorage.setItem('apptArrayStorage', JSON.stringify(appyArray))
    window.location.reload()
}

