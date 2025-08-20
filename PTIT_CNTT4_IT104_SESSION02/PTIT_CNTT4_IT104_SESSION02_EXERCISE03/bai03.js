function typeConsole(type = "log") {
    const mess = `Day la type: ${type}`
    if (typeof console[type] === "function") {
        console[type](mess)
    } else {
        console.log(`Không hỗ trợ console.${type}, sử dụng console.log mặc định.`);
        console.log(mess);
    }
}

typeConsole("log");            
typeConsole("warn");      
typeConsole("error");     