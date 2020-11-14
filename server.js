function doAfter() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("2");
        }, 1000);
    });
}

async function inMezzo() {
    const result = await doAfter();
    console.log("1");
    return result;
}

async function main() {
    setInterval(() => console.log("."), 333);

    do {
        let c = await inMezzo();
        console.log(c);
    } while (true);
}

main();
