$('#submit_button').on('click', (event) => {
  event.preventDefault();
  
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let address = document.getElementById("address").value;
  let address_2 = document.getElementById("address2").value;
  let country = document.getElementById("country").value;
  let state = document.getElementById("state").value;
  let zip = document.getElementById("zip").value;
  
  var doc = new jsPDF('landscape');
	doc.text(20, 20, firstName)
  doc.text(20, 30, lastName)  
  doc.text(20, 40, email)  
  doc.text(20, 50, address)  
  doc.text(20, 60, address_2)  
  doc.text(20, 70, country)  
  doc.text(20, 80, state)  
  doc.text(20, 90, zip)  
	// Save the PDF
	doc.save('Test.pdf');
});

