  jQuery(function() {
      // Create new Appt with First Name on BTN CLick
      $('#addApptBtn').on('click', () => {
          const firstNameValue = $('#firstName').val()
          const lastNameValue = $('#lastName').val()
          const emailNameValue = $('#email').val()
          let apptItem = $('<li class=" list-group-item"><button class="btn btn-outline-danger">X</button></li>')
          if($('#firstName').val().length !== 0) {
              $(apptItem).prepend(`<span>${firstNameValue}</span> <span>${lastNameValue}</span> <p><span>${emailNameValue}</span></p>`);
              $('#apptContainer').prepend(apptItem);
            } else {
                $('#userInputForm').prepend('<p class="text-danger">All fields are required</p>')
            }
      })
      // Add to Appt Array
      // map over appt array and append to appt div
      // !value in all fields ? BTN-disabled
  })