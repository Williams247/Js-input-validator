module.exports = (values) => {
  for (let i = 0; i < values.length; i++) {
    // Check for empty fields
    if (!values[i].field) {
      return `${values[i].value ? `${values[i].value} value requires a field name` : 'A field name is required for your entries'}, i.e username, email, phone number e.t.c`;
    }

    // Check for empty values
    if (!values[i].value) {
      return `${values[i].field ? `${values[i].field} field is required`: 'A field or fields is required'}`;
    }

    // Check for value type text
    if (values[i].type == "text" && typeof values[i].type == String) {
      return `${values[i].field} only requires text based characters`;
    }

    // Check for value type number
    if (values[i].type == "number" && typeof values[i].type == Number) {
      return `${values[i].field} only requires number based characters`;
    }

    // Check for value type email
    if (values[i].type === "email") {
      const emailRegX =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!emailRegX.test(values[i].value)) {
        return `${values[i].field} field ${values[i].value} is not valid, try a valid ${values[i].field} field`;
      }
    }

    // Check min values
    if (values[i].value.length < values[i].min) {
      return `${values[i].field} should not be less than ${values[i].min}, try another value greater than or equal to ${values[i].min}`;
    }

    // Check max values
    if (values[i].value.length > values[i].max) {
      return `${values[i].field} should not be greater than ${values[i].max}, try another value less or equal to ${values[i].max}`;
    }
  }
};
