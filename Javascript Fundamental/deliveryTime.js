function getDeliveryTime(packageType) {
    switch (packageType.toLowerCase()) {
        case "standard":
            return "Estimated delivery time: 3-5 days";
        case "express":
            return "Estimated delivery time: 1-2 days";
        case "overnight":
            return "Estimated delivery time: Next day delivery";
        default:
            return "Invalid package type!";
    }
}

console.log(getDeliveryTime("standard"));
console.log(getDeliveryTime("express")); 
console.log(getDeliveryTime("overnight"));
console.log(getDeliveryTime("premium")); 
