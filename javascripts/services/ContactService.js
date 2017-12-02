'use strict';

app.service("ContactService", function($http, $q, $rootScope, FIREBASE_CONFIG) {
    const getContacts = (userUid) => {
        console.log("userUid", userUid);
        let contacts = [];
        return $q((resolve, reject) => {
            $http.get(`${FIREBASE_CONFIG.databaseURL}/contacts.json?orderBy="uid"&equalTo="${userUid}"`).then((results) => {
                let fbContacts = results.data;                 
                    Object.keys(fbContacts).forEach((key) => {
                        fbContacts[key].id = key;
                        contacts.push(fbContacts[key]);
                    });
                resolve(contacts);
            }).catch((err) => {
                console.log('error in fbContacts', err);
            });
        });
    };

    const getFavoriteContacts = (userUid) => {
        let contacts = [];
        return $q((resolve, reject) => {
            $http.get(`${FIREBASE_CONFIG.databaseURL}/contacts.json?orderBy="uid"&equalTo="${userUid}"`).then((results) => {
                let fbContacts = results.data;
                Object.keys(fbContacts).forEach((key) => {
                    fbContacts[key].id = key;
                    if(fbContacts[key].favorite) {
                        contacts.push(fbContacts[key]);
                    }
                });
                resolve(contacts);
            }).catch((err) => {
                console.log('error in fbContacts', err);
            });
        });
    };

    const getSingleContact = (contactId) => {
        return $http.get(`${FIREBASE_CONFIG.databaseURL}/contacts/${contactId}.json`);
    };

    const postNewContact = (newContact) => {
        console.log("newContact", newContact);
        return $http.post(`${FIREBASE_CONFIG.databaseURL}/contacts.json`, JSON.stringify(newContact));
    };

    const deleteContact = (contactId) => {
        return $http.delete(`${FIREBASE_CONFIG.databaseURL}/contacts/${contactId}.json`);
    };

    const updateContact = (contact, contactId) => {
          return $http.put(`${FIREBASE_CONFIG.databaseURL}/contacts/${contactId}.json`, JSON.stringify(contact));
    };

    const createContactObj = (contact) => {
        return {
            "first_name": contact.first_name,
			"last_name": contact.last_name,
			"phone_number": contact.phone_number,
            "email": contact.email,
            "company": contact.company,
			"twitter": contact.twitter,
			"facebook_page": contact.facebook_page,
            "uid": contact.uid,
            "favorite": contact.favorite
        };
    };
    return {postNewContact, getContacts, deleteContact, updateContact, createContactObj, getFavoriteContacts};
});