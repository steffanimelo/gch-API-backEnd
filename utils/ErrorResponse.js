class ErrorResponse extends Error {
  constructor(message, statusCode = 500, name = "Character API error") {
    super(message);
    this.name = name;
    this.statusCode = statusCode;
  }
}

export default ErrorResponse;
