function displayUserInfo(user) {
    const name = user.name || "unknown";
    const age = user.age || "unknown";
    const city = user.location?.city || "unknown";
    const country = user.location?.country || "unknown";
    const title = user.job?.title || "unknown";
    const company = user.job?.company || "unknown";
    const email = user.contact?.email || "unknown";
    const phone = user.contact?.phone || "unknown";

    return `${name} is ${age} years old,lives in ${city},${country}, works as ${title} at ${company}, and be contacted via ${email} or ${phone} `
}

console.log(displayUserInfo({ name: "Anna", age: 30, location: { city: "Da Nang", country: "Vietnam" } }));
console.log(displayUserInfo({ name: "John", age: 25, location: { city: "Hanoi", country: "Vietnam" }, contact: { email: "john@example.com", phone: "0123456789" }, job: { title: "Developer", company: "Tech Corp" } }));

