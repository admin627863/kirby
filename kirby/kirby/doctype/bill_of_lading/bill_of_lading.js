// Copyright (c) 2022, Amafhh Infotech and contributors
// For license information, please see license.txt

frappe.ui.form.on('Bill of Lading', {
    // refresh: function(frm) {
    //     msgprint("Demo");
    // },
    booking_number: function(frm) {
        frm.set_query("container", function() {
            return {
                filters: {
                    'booking_number': cur_frm.doc.booking_number,
                    'bill_of_lading': 0
                }
            }
        });
    }
});