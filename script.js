const buttonSearch = document.querySelector(".btn-outline-light");
const input = document.querySelector(".form-control");

const shareData = async (array) => {
    let content = document.querySelector(".content");
    let backgroundColor = false;

    content.innerHTML = "";

    let detailsRow = document.createElement("tr");
    detailsRow.classList.add("bg-primary", "text-center");
    detailsRow.style.color = "white";

    let tab1 = document.createElement("td");
    tab1.style.border = "1px solid lightgray";
    tab1.innerText = `id:`;
    detailsRow.appendChild(tab1);

    let tab2 = document.createElement("td");
    tab2.style.border = "1px solid lightgray";
    tab2.innerText = `Name:`;
    detailsRow.appendChild(tab2);

    let tab3 = document.createElement("td");
    tab3.style.border = "1px solid lightgray";
    tab3.innerText = `Username`;
    detailsRow.appendChild(tab3);

    let tab4 = document.createElement("td");
    tab4.style.border = "1px solid lightgray";
    tab4.innerText = `e-mail:`;
    detailsRow.appendChild(tab4);

    let tab5 = document.createElement("td");
    tab5.style.border = "1px solid lightgray";
    tab5.innerText = `City:`;
    detailsRow.appendChild(tab5);

    let tab6 = document.createElement("td");
    tab6.style.border = "1px solid lightgray";
    tab6.innerText = `Address:`;
    detailsRow.appendChild(tab6);

    let tab7 = document.createElement("td");
    tab1.style.border = "1px solid lightgray";
    tab7.innerText = `Zip Code:`;
    detailsRow.appendChild(tab7);
    content.appendChild(detailsRow);

    array.forEach((element) => {

        let id = element.id;
        let name = element.name;
        let userName = element.username;
        let email = element.email;
        let city = element.address.city;
        let street = element.address.street;
        let zipCode = element.address.zipcode;

        let detailsRow = document.createElement("tr");
        detailsRow.style.border = "1px solid rgb(210, 210, 210)";
        if (backgroundColor) {
            detailsRow.style.backgroundColor = "lightblue";
            backgroundColor = false;
        } else {
            detailsRow.style.backgroundColor = "rgb(225, 238, 242)";
            backgroundColor = true;
        }

        let tab8 = document.createElement("td");
        tab8.style.border = "1px solid lightgray";
        tab8.innerText = `${id}`;
        detailsRow.appendChild(tab8);

        let tab9 = document.createElement("td");
        tab9.innerText = `${name}`;
        tab9.classList.add("name");
        detailsRow.appendChild(tab9);

        let tab10 = document.createElement("td");
        tab10.innerText = `${userName}`;
        tab10.classList.add("username");
        detailsRow.appendChild(tab10);

        let tab11 = document.createElement("td");
        tab11.innerText = `${email}`;
        tab11.classList.add("email");
        detailsRow.appendChild(tab11);

        let tab12 = document.createElement("td");
        tab12.innerText = `${city}`;
        detailsRow.appendChild(tab12);

        let tab13 = document.createElement("td");
        tab13.innerText = `${street}`;
        detailsRow.appendChild(tab13);

        let tab14 = document.createElement("td");
        tab14.innerText = `${zipCode}`;
        detailsRow.appendChild(tab14);
        content.appendChild(detailsRow);

    });
}

const takeData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const json = await response.json();
        shareData(json);
    } catch (err) {
        console.log(err);
    }
}

const searchBy = async () => {
    let seachType = document.querySelector(".seachType").value;
    let searchValue = document.querySelector(".form-control").value.toLowerCase();
    let array;
    // console.log(searchValue);
    // console.log(seachType);
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        array = await response.json();
    } catch (err) {
        console.log(err);
    }
    console.log(array);
    
    switch (seachType) {
        case seachType = "name":
            console.log("case: name")
            let arrayName = array.filter((element) => {
                let name = element.name.toLowerCase();
                console.log(name);
                console.log(searchValue);
                if (name.includes(searchValue)) {
                    return element;
                };
            });
            shareData(arrayName);
            break;

        case seachType = "username":
            console.log("case: username");
            let arrayUser = array.filter((element) => {
                let username = element.username.toLowerCase();
                if (username.includes(searchValue)) {
                    return element;
                };
            });
            shareData(arrayUser);
            break;

        case seachType = "e-mail":
            console.log("case: e-mail");
            let arrayMail = array.filter((element) => {
                let email = element.email.toLowerCase();
                if (email.includes(searchValue)) {
                    return element;
                };
            });
            shareData(arrayMail);
            break;
        default :
        break;
    }
}

takeData();

buttonSearch.addEventListener("click", searchBy);
input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        searchBy();
    }
});