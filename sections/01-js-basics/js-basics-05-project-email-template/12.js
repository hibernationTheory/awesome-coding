function createCoverLetter(position, company, contact = "Sir/Madam") {
  let details = "";

  if (position === "Software Engineer") {
    details = "\nI love software engineering. It is the best.\n";
  } else if (position === "Lawyer") {
    details =
      "\nI have always wanted to be a lawyer. It is my passion.\n";
  }

  const template = `Dear ${contact},
          
I am writing to apply for the ${position} position advertised in the ${company}.
  ${details}
Thank you for your time and consideration. I look forward to speaking with you about this employment opportunity.
  
Best,
John Doe`;

  console.log(template);
  return template;
}

let position = "Software Engineer";
let company = "NASA";
let contact = "Jane Doe";

createCoverLetter(position, company, contact);
