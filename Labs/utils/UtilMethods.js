function getMinElement(array) {
    let minElement = array[0];
    let minIndex = 0;

    for (let index = 0; index < array.length; index++) {
        if (minElement >= array[index]) {
            minElement = array[index];
            minIndex = index;
        }
    }
    return { minElement, minIndex };

}
// export hàm ra bên ngoài
// Common JS Module
module.exports={
getMinElement
};
