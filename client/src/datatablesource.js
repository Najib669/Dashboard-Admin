export const userColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'user', headerName: 'User', width: 230,
    renderCell: (params) =>{
        return(
            <div className="celllWithImg">
               <img className="cellImg" src={params.row.img}  alt="avatar"/>
               {params.row.userName}
            </div>
        )
    }

    },
    { field: 'email', headerName: 'Email', width: 230 },
]

export const productColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'product', headerName: 'Product', width: 230,
    renderCell: (params) =>{
        return(
            <div className="celllWithImg">
               <img className="cellImg" src={params.row.img}  alt="avatar"/>
               {params.row.productName}
            </div>
        )
    }

    },
    { field: 'price', headerName: 'Price', width: 100 },
    { field: 'stock', headerName: 'Stock', width: 100 },
]


export const eventColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'event', headerName: 'Event', width: 230,
    renderCell: (params) =>{
        return(
            <div className="celllWithImg">
               <img className="cellImg" src={params.row.img}  alt="avatar"/>
               {params.row.eventName}
            </div>
        )
    }

    },
    { field: 'startDate', headerName: 'Start Date', width: 100 },
    { field: 'endDate', headerName: 'End Date', width: 100 },
    { field: 'location', headerName: 'Location', width: 100 },
]

export const newsColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'news', headerName: 'News', width: 230,
    renderCell: (params) =>{
        return(
            <div className="celllWithImg">
               <img className="cellImg" src={params.row.img}  alt="avatar"/>
               {params.row.newsName}
            </div>
        )
    }

    },
    { field: 'date', headerName: 'Date', width: 100 },
    { field: 'author', headerName: 'Author', width: 100 },
]

export const mailColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Sender', width: 230 },
    { field: 'email', headerName: 'Email', width: 230 },
    { field: 'subject', headerName: 'Subject', width: 230 },
    { field: 'message', headerName: 'Message', width: 230 },
]

export const donationColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'donor', headerName: 'Donor', width: 230 },
    { field: 'email', headerName: 'Email', width: 230 },
    { field: 'amount', headerName: 'Amount', width: 230 },
   
]
export const orderColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'user', headerName: 'User', width: 230,
    renderCell: (params) =>{
        return(
            <div className="celllWithImg">
               <img className="cellImg" src={params.row.img}  alt="avatar"/>
               {params.row.userName}
            </div>
        )
    }

    },
    { field: 'quanity', headerName: 'Quantity', width: 230 },
    { field: 'total', headerName: 'Total', width: 230 }

]
