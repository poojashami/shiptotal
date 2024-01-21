// number numeric
$(document).ready(function () {
  $(".validate-numeric").on("input", function () {
    const inputValue = $(this).val();
    const validChars = /^-?\d*\.?\d*$/;
    if (!validChars.test(inputValue)) {
      $(this).val(inputValue.replace(/[^0-9\-.]/g, ""));
    }
  });
});

//  Mobile Number Validation
$(document).ready(function () {
  $("#mobileNo, #altNumber, #relativeMobileNo").on("input", function () {
    var input = $(this);
    var value = input.val();

    // Allow only digits, limit to 10 characters, and strip non-digits
    input.val(value.replace(/[^0-9]/g, "").substring(0, 10));

    // Validate length
    if (value.length !== 10) {
      input.addClass("invalid");
    } else {
      input.removeClass("invalid");
    }
  });
});

// Adhar card validation
$(document).ready(function () {
  $("#adharNo, #uanNo").on("input", function () {
    var input = $(this);
    var value = input.val();

    // Allow only digits, limit to 10 characters, and strip non-digits
    input.val(value.replace(/[^0-9]/g, "").substring(0, 12));

    // Validate length
    if (value.length !== 12) {
      input.addClass("invalid");
    } else {
      input.removeClass("invalid");
    }
  });
});
// $(document).ready(function () {
//   $("#adharNo, #uanNo").on("blur", function () {
//     var adharNo = $(this).val();
//     var regex = /^[2-9][0-9]{11}$/;

//     if (regex.test(adharNo)) {
//       $(this).removeClass("is-invalid").addClass("is-valid");
//     } else {
//       $(this).removeClass("is-valid").addClass("is-invalid");
//     }
//   });
// });

// header
$(function () {
  $("#header").load("header.html");
  // $("#footer").load("footer.html");
});

// open plus Minus icon
function addRow(element) {
  // Get the parent row
  var parentRow = element.closest(".row");
  // Clone the entire row
  var newRow = parentRow.cloneNode(true);
  // Clear input values in the cloned row
  var inputs = newRow.querySelectorAll("input");
  inputs.forEach(function (input) {
    input.value = "";
  });
  // Append the new row after the current row
  parentRow.parentNode.insertBefore(newRow, parentRow.nextSibling);
  // Show the "minus" icon in the current row
  element.classList.add("hidden");
  element.nextElementSibling.classList.remove("hidden");
}

function removeRow(element) {
  // Get the parent row
  var parentRow = element.closest(".row");

  // Remove the current row
  parentRow.parentNode.removeChild(parentRow);
}
