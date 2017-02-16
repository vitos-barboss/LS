const sourceArr = [
    {"name":"root", "parentId":null, "id":100},
    {"name":"1stlevelChild1", "parentId":100, "id":201},
    {"name":"1stlevelChild2", "parentId":100, "id":202},
    {"name":"2ndlevelChild1", "parentId":201, "id":301},
    {"name":"2ndlevelChild2", "parentId":201, "id":301}
];

function transformToHierarchy(arr) {

    const innerArr = arr.slice().sort((a, b) => a.parentId - b.parentId);
    const resultArr = [];

    let i = innerArr.length - 1;

    while (innerArr[i].parentId) {

        for (let j = 0; j < innerArr.length; j++) {

            if (!innerArr[j].childs) {
                innerArr[j].childs = [];
            }

            if (innerArr[i].parentId === innerArr[j].id) {

                innerArr[j].childs.unshift(innerArr[i]);

            }
        }

        i--;

        if(innerArr[i-1] && innerArr[i-1].parentId === null) {
            resultArr.push(innerArr[i-1]);
        }


    }

    return resultArr;

}

console.log(transformToHierarchy(sourceArr));




