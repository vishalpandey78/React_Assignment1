const States = {
    pos: -1,
    items: [
        {
            name: "Coding",
            image: "https://th.bing.com/th/id/OIP.rH-3LkoiT8wwRmBk-ruljQAAAA?pid=ImgDet&rs=1"
        },
        {
            name: "Coding is fun",
            image: "https://th.bing.com/th/id/OIP.rH-3LkoiT8wwRmBk-ruljQAAAA?pid=ImgDet&rs=1"
        }
    ]
}

const Reducer = (state = States, action) => {
    switch (action && action.type) {
        case "ADD":
            return {
                ...state,
                items: [
                    ...state.items, action.payload
                ]
            }
        case "EDIT":
            return {
                ...state,
                items: state.items.map((e, idx) => {
                    if (idx === state.pos) return {name: action.payload.name, image: action.payload.image}
                    return e
                })
            }
        case "DEL":
            return {
                ...state,
                items: state.items.filter((e, idx) => idx !== action.payload)
            }
        case "POS": 
            return {
                items: state.items,
                pos : action.payload
            }
        default:
            return States
    }
}

export default Reducer