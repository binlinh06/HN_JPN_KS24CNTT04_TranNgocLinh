const response = {
    data:{
        id:1,
        title:"Destructuring in JavaScript",
        author:{
            name:"DEV",
            email:"DEV@gmail.com",
        },
    },
};

function extracData({data}){
    const {title,author} = data;
    const {name:authorName,email:authorEmail} = author;

    console.log("Title:", title);
    console.log("Author:",author)
    console.log("Author Name:", authorName);
    console.log("Author Email:", authorEmail);
}

extracData(response)