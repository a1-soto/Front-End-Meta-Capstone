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