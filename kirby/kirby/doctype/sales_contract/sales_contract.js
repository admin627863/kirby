// Copyright (c) 2022, Amafhh Infotech and contributors
// For license information, please see license.txt

// frappe.ui.form.on('Sales Contract', {
// 	// refresh: function(frm) {

// 	// }
// });


frappe.ui.form.on("Sales Contract", {
    supplier: function(frm) {
      frappe.db.get_list('Dynamic Link',{ 
        fields:['parent'], 
        filters:{ 
            'link_doctype':"Company",
            'link_name': cur_frm.doc.supplier
        } 
        }).then(function(doc){ 
            // console.log(doc); 
            cur_frm.set_value("supplier_primary_contact",doc[0].parent); 
        });
       
    } 
});


frappe.ui.form.on("Sales Contract", {
    supplier_primary_contact: function(frm) {
    if(cur_frm.doc.supplier_primary_contact){
      frappe.db.get_list('Address',{ 
        fields:['phone','email_id','address_line1','city','state','country'], 
        filters:{ 
            'name': cur_frm.doc.supplier_primary_contact
        } 
        }).then(function(doc){ 
           
            // console.log(doc[0].address_line1+','+doc[0].city+','+doc[0].state+','+doc[0].country); 
            cur_frm.set_value("supplier_mobile_no",doc[0].phone); 
            cur_frm.set_value("supplier_email_id",doc[0].email_id);
            cur_frm.set_value("supplier_primary_address",doc[0].address_line1+','+doc[0].city+','+doc[0].state+','+doc[0].country);
            
        });
        }
    } 
});


// frappe.ui.form.on("Sales Contract", "supplier", function(frm) {
//     if(cur_frm.doc.supplier){
//             frappe.call({
//                 method: "frappe.client.get",
//                 args: {
//                     doctype: "Dynamic Link",
//                     filters: {"link_doctype": "Company",}
//                 },
//                 callback: function(r) {
//                     console.log(r);
//                     // if (r.message) {
//                     //     frm.set_value('supplier_mobile_no',r.message.phone_no);
//                     // }
//                 }
//             });
//     }
// });