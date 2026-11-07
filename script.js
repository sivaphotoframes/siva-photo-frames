// IMPORTANT: replace this with the shop's WhatsApp number in international format, digits only.
const WHATSAPP_NUMBER = "918939015264";
document.getElementById("year").textContent = new Date().getFullYear();
document.querySelectorAll(".choose").forEach(btn => btn.addEventListener("click", () => {
  document.getElementById("product").value = btn.dataset.product;
  document.getElementById("order").scrollIntoView({behavior:"smooth"});
}));
document.getElementById("orderForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const f = new FormData(e.currentTarget);
  const msg = [
    "SIVA PHOTO FRAMES - New Order Enquiry",
    "Payment method: UPI after final quote confirmation",
    `Name: ${f.get("name")}`,
    `Mobile: ${f.get("phone")}`,
    `Product: ${f.get("product")}`,
    `Size: ${f.get("size")}`,
    `Quantity: ${f.get("quantity")}`,
    `Delivery district / PIN: ${f.get("location")}`,
    `Notes: ${f.get("notes") || "None"}`,
    "I will attach my photo in this WhatsApp chat."
  ].join("\\n");
  const status = document.getElementById("formStatus");
  if (WHATSAPP_NUMBER.includes("X")) {
    status.textContent = "Setup needed: replace 91XXXXXXXXXX in script.js with your WhatsApp number, then this order button will work.";
    return;
  }
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
  status.textContent = "WhatsApp order enquiry opened. Attach your photo in the chat before sending.";
});