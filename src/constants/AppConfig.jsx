export const APPCONFIG = Object.freeze({
  rolesList: [
    { label: "Franchise Owner", value: "franchise_owner" },
    { label: "Franchise Admin", value: "franchise_admin" },
    { label: "Manager", value: "manager" },
    { label: "Operator", value: "operator" },
    { label: "Technician", value: "technician" },
    { label: "Contract Employee", value: "contract_employee" },
    { label: "Customer Support Executive", value: "customer_support_executive"},
  ],
  statusOptions: [
    { label: "Active", value: true },
    { label: "Inactive", value: false },
  ],
  statusOptionsForRole: [
    { label: "Active", value: "Active" },
    { label: "Inactive", value: "Inactive" },
    { label: "Suspended", value: "Suspended" },
  ],
  roleOptions: [
    { label: "Admin ", value: "admin" },
    { label: "Manager", value: "manager" },
    { label: "Employee", value: "employee" },
    { label: "Technician", value: "technician" },
  ],
  vehicleType: [
    { label: "Home", value: "Home" },
    { label: "Office", value: "Office" },
  ],
  EnquiryStatusOptions: [
    { status: "New" },
    { status: "Under Review" },
    { status: "Completed" },
    { status: "Rejected" },
  ],
  countryCode: [{ label: "countryCode", value: "+1" }],
  orderStatusOptions: [
    { label: "Payment Pending", value: "PAYMENT_PENDING" },
    { label: "Payment Processing", value: "PAYMENT_PROCESSING" },
    { label: "Payment Failed", value: "PAYMENT_FAILED" },
    { label: "Ordered", value: "ORDERED" },
    { label: "Shipped", value: "SHIPPED" },
    { label: "Delivered", value: "DELIVERED" },
    { label: "Cancelled", value: "CANCELLED" },
    { label: "Refunded", value: "REFUNDED" },
  ],
  blogtatusOptions: [
    { label: "Approved", value: "APPROVED" },
    { label: "Rejected", value: "REJECTED" },
  ],
  orderTypeOptions: [
    { label: "Delivery", value: "DELIVERY" },
    { label: "Installation", value: "INSTALLATION" },
    { label: "Delivery Installation", value: "DELIVERY_INSTALLATION" },
  ],
  orderManagementStatus : [
    { label: "Cancelled", value: "CANCELLED" },
    { label: "Refunded", value: "REFUNDED" },
  ]
});
