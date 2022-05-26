  jQuery(function() {
      // Create new Appt with First Name on BTN CLick
      $('#addApptBtn').on('click', () => {
          const firstNameValue = $('#firstName').val()
          let apptItem = $('<li></li>')
          $(apptItem).prepend(firstNameValue);
          $('#apptContainer').prepend(apptItem);
      })
        // Check if inout has a value
      // Add to Appt Array
      // map over appt array and append to appt div
  })