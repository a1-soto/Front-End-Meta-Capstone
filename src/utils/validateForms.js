export function validateForm(formData) {
  const errors = {};

  if (!formData.name.trim()) {
    errors.name = "Name is required";
  }

  if (!formData.email.trim()) {
    errors.email = "Email is required";
  } else if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
  ) {
    errors.email = "Invalid email address";
  }

  if (!formData.phone.trim()) {
    errors.phone = "Phone number is required";
  }

  if (!formData.date) {
    errors.date = "Date is required";
  } else {

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const chosenDate = new Date(`${formData.date}T00:00:00`);

    if (chosenDate < today) {
      errors.date = "Please choose a date from today onward";
    }
  }

  if (!formData.time) {
    errors.time = "Time is required";
  }

  if (formData.guests < 1 || formData.guests > 10) {
    errors.guests = "Guests must be between 1 and 10";
  }

  if (formData.requests.length > 300) {
    errors.requests = "Maximum 300 characters";
  }

  return errors;
}