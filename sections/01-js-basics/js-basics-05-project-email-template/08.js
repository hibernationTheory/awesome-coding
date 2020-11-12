function createCoverLetter(position, company) {
  const template = `Dear Sir/Madam,
  
I am writing to apply for the ${position} position advertised in the ${company}.

Thank you for your time and consideration. I look forward to speaking with you about this employment opportunity.

Best,
John Doe`;

  console.log(template);
  return template;
}

let position = "Software Engineer";
let company = "NASA";

createCoverLetter(position, company);
