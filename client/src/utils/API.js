import axios from "axios";

export default {

    //============ ALL USER API CALLS ==============
  // Gets all users
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets the user with the given id
  getUserByID: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Updates the user information for the given user id
  updateUserByID: function(id) {
    return axios.put("/api/users/" + id);
  },
  // Deletes the user with the given id
  deleteUserByID: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  },


     //============ ALL TICKET API CALLS ==============

  // Gets all tickets
  getTickets: function(companyID) {
    return axios.get("/api/tickets/",{search: {companyID: companyID}});
  },
  // Gets the ticket with the given id
  getTicketByID: function(id) {
    return axios.get("/api/tickets/" + id);
  },
  // Updates the user information for the given user id
  updateTicketByID: function(id) {
    return axios.put("/api/tickets/" + id);
  },
  // Deletes the ticket with the given id
  deleteTicketByID: function(id) {
    return axios.delete("/api/tickets/" + id);
  },
  // Saves a ticket to the database
  createTicket: function(ticketData) {
    return axios.post("/api/tickets/", ticketData);
  },

   //============ ALL COMPANY API CALLS ==============

  // Gets all companies
  getCompanies: function() {
    return axios.get("/api/companies/");
  },
  // Gets the company with the given id
  getCompanyByID: function(id) {
    return axios.get("/api/companies/" + id);
  },
  // Updates the company information for the given company id
  updateCompanyByID: function(id, companyData) {
    return axios.put("/api/companies/" + id, companyData);
  },
  // Deletes the company with the given id
  deleteCompanyByID: function(id) {
    return axios.delete("/api/companies/" + id);
  },
  // Saves a company to the database
  createCompany: function(companyData) {
    return axios.post(`/api/companies`, companyData);
  },
};
