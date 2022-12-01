# Copyright (c) 2022, Amafhh Infotech and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class Container(Document):
    # pass
    
    def before_submit(self):
     
        booking_number = frappe.get_doc('Booking Details',self.booking_number)
        book_no = str(booking_number.name)
        if book_no:
            booking_entry_child = booking_number.append('containers',{})
            booking_entry_child.container_number = self.name
            booking_entry_child.container_size = self.container_size
            booking_entry_child.seal_number = self.seal_number
            booking_entry_child.date_in = self.get_in
            booking_entry_child.location = "India"
            booking_entry_child.count = "1"
            booking_number.save()
            frappe.msgprint("Add Containers In Booking Child Table")
        else:
            frappe.msgprint("Booking Number Not Match Or Null")