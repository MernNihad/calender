
function ifWhenOnClick() {
    // get the access of the table
    const table = document.getElementById('_table_');
    // ---------------------------------
    let date = [3, 4, 5, 6, 8, 31]

    let month = 'August';

    let year = 2023
    // --------------------------------

    // get month name
    let getMonthName = document.querySelectorAll('.dycalendar-span-month-year');
    const parts = getMonthName[0].innerHTML.split(' ');


    // get tbody from table
    //  table.childNodes[0]
    // --------------------------

    // get arry of [tr] tags
    //  table.childNodes[0].childNodes
    // --------------------------

    // but not get correct array , to convert array then apply map function , to get values each [li] 
    if (parts[0] === month && parseInt(parts[1]) === year) {


        let childNodesArray = Array.from(table.childNodes[0].childNodes);
        // output -    childNodesArray = [tr,tr,tr...]
        //  table.childNodes[0].childNodes
        // --------------------------




        // tbody -> tr childNodesArray

        childNodesArray.map((items, index) => {

            // li ---

            if (index > 0) {

                let childNodesArray_TR = Array.from(items.childNodes);
                childNodesArray_TR.map((items) => {

                    // console.log(items.innerHTML,'dd');
                    // date.map((items)=>{
                    // console.log('itemss',items.innerHTML);

                    let date_number_ = parseInt(items.innerHTML)
                    if (date_number_ >= 1) {
                        date.map((db_date_data) => {
                            if (db_date_data === date_number_) {
                                // color: #c1b9b9;
                                items.style.color = '#c1b9b9';
                                items.classList.add("slot_booked")
                            }

                        })
                    }
                    // if(items === items.innerHTML){
                    // console.log('match');
                    // table.childNodes[0].childNodes[2].childNodes[5].style.backgroundColor = "red";
                    // }
                    return false
                    // })
                    let d = items.innerHTML.includes(date)
                    // console.log(d);
                })
            }

            // console.log(items.childNodes,'fff');

        })

        // table.childNodes[0].childNodes[2].childNodes[5].style.backgroundColor = "red";

    }
}

window.addEventListener("load", () => {
    ifWhenOnClick();
})