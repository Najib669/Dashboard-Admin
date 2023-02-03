import "./widjet.scss"
import ArrowIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import UserIcon from '@mui/icons-material/PersonOutlineOutlined';
import DeliveryIcon from '@mui/icons-material/LocalShippingOutlined';
import DonationIcon from '@mui/icons-material/VolunteerActivismOutlined';
import MonetizationIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
const Widjet = ({type}) => {
    let data;

    //temporary
    const amount=100;
    const diff = 20;
       switch(type){
        case "user":
            data={
                title:"USERS",
                isMoney:false,
                link:"see all users",
                icon:<UserIcon className="icon"
                style={{
                    color:"crimson",
                    backgroundColor:"rgba(255, 0, 0, 0.2"
                }}/>                 
            };
            break;
            case "order":
                data={
                    title:"ORDERS",
                    isMoney:false,
                    link:"see all orders",
                    icon:<DeliveryIcon className="icon"
                    style={{
                        color:"goldenrod",
                        backgroundColor:"rgba(218, 165, 32, 0.2"
                    }}/>              
                };
                break;
                case "donation":
                    data={
                        title:"DONATIONS",
                        isMoney:true,
                        link:"see all donationd",
                        icon:<DonationIcon className="icon"
                        style={{
                            color:"cred",
                            backgroundColor:"rgba(255, 0, 0, 0.2"
                        }}/>                
                    };
                    break;
                case "earning":
                    data={
                        title:"EARNINGS",
                        isMoney:true,
                        link:"view net earnings",
                        icon:< MonetizationIcon className="icon"
                        style={{
                            color:"green",
                            backgroundColor:"rgba(0, 128, 0, 0.2"
                        }}/>                
                    };
                    break;
                    case "balance":
                        data={
                            title:"BALANCE",
                            isMoney:true,
                            link:"see details",
                            icon:<AccountBalanceIcon className="icon"
                            style={{
                                color:"purple",
                                backgroundColor:"rgba(128, 0, 128, 0.2"
                            }}/>                 
                        };
                        break;
        default:
             break;
       }
  return (
    <div className="widjet">
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">
                {data.isMoney &&  "$" }{amount}
                </span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
                <ArrowIcon/>
                 {diff}%
            </div>
            {data.icon}

        </div>
    </div>
  )
}

export default Widjet