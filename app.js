    jQuery(function() {
      // Create new Appt with First Name on BTN CLick
     
      // Add to Appt Array
      // map over appt array and append to appt div
      // !value in all fields ? BTN-disabled
      createAppt()
  })
  let apptArray = [];

function makeApptItem(firstName, lastName, email) {
    return {
        firstName,
        lastName,
        email,
    }
}

  const createAppt = () => {
    $('#addApptBtn').on('click', () => {
        const firstNameValue = $('#firstName').val()
        const lastNameValue = $('#lastName').val()
        const emailValue = $('#email').val()
        let apptItem = makeApptItem(firstNameValue, lastNameValue, emailValue)
        // let apptItem = `
        // <li class=" list-group-item">
        //     <span>${firstNameValue}</span>
        //     <span>${lastNameValue}</span> 
        //     <p><span>${emailValue}</span></p>
        //     <button class="btn btn-outline-danger">X</button>
        // </li>
        // `
        if($('#firstName').val().length !== 0) {
            $('#apptContainer').prepend(`
            <li class=" list-group-item">
                 <span>${apptItem.firstName}</span>
                 <span>${apptItem.lastName}</span> 
                 <p><span>${apptItem.email}</span></p>
                 <button class="btn btn-outline-danger">X</button>
            </li>  
            `);
            console.log(apptItem);
        } else {
            $('#userInputForm').prepend('<p class="text-danger">All fields are required</p>')
        }
        // apptArray = [{ ...apptItem}]
        apptArray.push(apptItem)
        console.log(apptArray);
    })
}