// Com try catch
try {
  console.log(name);
  const name = "Gabriel Luciano";
} catch (err) {
  console.log(err);
} finally {
  console.log("Keep going");
}

// Usando erro customizado e throw

class CustomError extends Error {
  constructor({ message, data }) {
    super(message);
    this.data = data;
  }
}

try {
  throw new CustomError({
    message: "Custom message on custom error",
    data: { type: "Server error" },
  });
} catch (err) {
  if (err.data.type === "Server error") {
    console.log(err);
    console.log(err.data);
  }
}
