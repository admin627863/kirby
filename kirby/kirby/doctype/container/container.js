// Copyright (c) 2022, Amafhh Infotech and contributors
// For license information, please see license.txt

// frappe.ui.form.on('Container', {
// 	// refresh: function(frm) {

// 	// }
// });

frappe.ui.form.on('Container Item',{
    pallet: function(frm, cdt, cdn){
    var d = locals[cdt][cdn];
    var total = 0;
    var total1 = 0;
    var total11 = 0;
    cur_frm.doc.items.forEach(function (d) { 
        total += d.pallet_tare; 
        total1 += d.total_weight; 
        total11 += d.net_product_weight; 
        
        });
        cur_frm.set_value('total_pallet_tare', total);
        cur_frm.set_value('total_weight', total1);
        cur_frm.set_value('total_net_weight', total11);
        
        refresh_field('total_pallet_tare');
        refresh_field('total_weight');
        refresh_field('total_net_weight');
    }
});

frappe.ui.form.on('Container Item', {
	items_remove: function(frm, cdt, cdn){
    var d = locals[cdt][cdn];
    var total = 0;
    var total2 = 0;
    var total22 = 0;
    cur_frm.doc.items.forEach(function (d) { 
        total += d.pallet_tare; 
        total2 += d.total_weight; 
        total22 += d.net_product_weight; 
        
        });
        cur_frm.set_value('total_pallet_tare', total);
        cur_frm.set_value('total_weight', total2);
        cur_frm.set_value('total_net_weight', total22);
        
        refresh_field('total_pallet_tare');
        refresh_field('total_weight');
        refresh_field('total_net_weight');
    }
});