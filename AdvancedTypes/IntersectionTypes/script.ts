interface BusinessPartner {
  name: string;
  credit: number;
}

interface Contact {
  email: string;
  phone: string;
}

type Customer = BusinessPartner & Contact;

function processCustomer(customer: Customer): void {
    console.log("Processing customer:", customer.name);
    console.log("Customer credit:", customer.credit);
    console.log("Contact email:", customer.email);
    console.log("Contact phone:", customer.phone);
}

const customer: Customer = {
    name: "John Doe",
    credit: 1000,
    email: "john@example.com",
    phone: "123-456-7890"
};

processCustomer(customer);